/*
 * YukiReflection - An efficient Reflection API for Java and Android built in Kotlin.
 * Copyright (C) 2019-2023 HighCapable
 * https://github.com/fankes/YukiReflection
 *
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * This file is created by fankes on 2022/2/4.
 * This file is modified by fankes on 2023/1/21.
 */
@file:Suppress("unused", "MemberVisibilityCanBePrivate", "UNCHECKED_CAST", "KotlinConstantConditions")

package com.highcapable.yukireflection.finder.members

import com.highcapable.yukireflection.annotation.YukiPrivateApi
import com.highcapable.yukireflection.bean.VariousClass
import com.highcapable.yukireflection.factory.hasExtends
import com.highcapable.yukireflection.finder.base.BaseFinder
import com.highcapable.yukireflection.finder.base.MemberBaseFinder
import com.highcapable.yukireflection.finder.members.data.ConstructorRulesData
import com.highcapable.yukireflection.finder.tools.ReflectionTool
import com.highcapable.yukireflection.finder.type.factory.ConstructorConditions
import com.highcapable.yukireflection.finder.type.factory.CountConditions
import com.highcapable.yukireflection.finder.type.factory.ModifierConditions
import com.highcapable.yukireflection.finder.type.factory.ObjectsConditions
import com.highcapable.yukireflection.log.yLoggerW
import com.highcapable.yukireflection.type.defined.UndefinedType
import com.highcapable.yukireflection.type.defined.VagueType
import com.highcapable.yukireflection.utils.factory.runBlocking
import java.lang.reflect.Constructor

/**
 * [Constructor] 查找类
 *
 * 可通过指定类型查找指定 [Constructor] 或一组 [Constructor]
 * @param classSet 当前需要查找的 [Class] 实例
 */
class ConstructorFinder @PublishedApi internal constructor(@PublishedApi override val classSet: Class<*>? = null) :
    MemberBaseFinder(tag = "Constructor", classSet) {

    @PublishedApi
    override var rulesData = ConstructorRulesData()

    /** 当前使用的 [classSet] */
    private var usedClassSet = classSet

    /** 当前重查找结果回调 */
    private var remedyPlansCallback: (() -> Unit)? = null

    /**
     * 设置 [Constructor] 参数个数
     *
     * 你可以不使用 [param] 指定参数类型而是仅使用此变量指定参数个数
     *
     * 若参数个数小于零则忽略并使用 [param]
     * @return [Int]
     */
    var paramCount
        get() = rulesData.paramCount
        set(value) {
            rulesData.paramCount = value
        }

    /**
     * 设置 [Constructor] 标识符筛选条件
     *
     * - ❗存在多个 [BaseFinder.IndexTypeCondition] 时除了 [order] 只会生效最后一个
     * @param conditions 条件方法体
     * @return [BaseFinder.IndexTypeCondition]
     */
    fun modifiers(conditions: ModifierConditions): IndexTypeCondition {
        rulesData.modifiers = conditions
        return IndexTypeCondition(IndexConfigType.MATCH)
    }

    /**
     * 设置 [Constructor] 空参数、无参数
     *
     * @return [BaseFinder.IndexTypeCondition]
     */
    fun emptyParam() = paramCount(num = 0)

    /**
     * 设置 [Constructor] 参数
     *
     * 如果同时使用了 [paramCount] 则 [paramType] 的数量必须与 [paramCount] 完全匹配
     *
     * 如果 [Constructor] 中存在一些无意义又很长的类型 - 你可以使用 [VagueType] 来替代它
     *
     * 例如下面这个参数结构 ↓
     *
     * ```java
     * Foo(String var1, boolean var2, com.demo.Test var3, int var4)
     * ```
     *
     * 此时就可以简单地写作 ↓
     *
     * ```kotlin
     * param(StringType, BooleanType, VagueType, IntType)
     * ```
     *
     * - ❗无参 [Constructor] 请使用 [emptyParam] 设置查找条件
     *
     * - ❗有参 [Constructor] 必须使用此方法设定参数或使用 [paramCount] 指定个数
     *
     * - ❗存在多个 [BaseFinder.IndexTypeCondition] 时除了 [order] 只会生效最后一个
     * @param paramType 参数类型数组 - ❗只能是 [Class]、[String]、[VariousClass]
     * @return [BaseFinder.IndexTypeCondition]
     */
    fun param(vararg paramType: Any): IndexTypeCondition {
        if (paramType.isEmpty()) error("paramTypes is empty, please use emptyParam() instead")
        rulesData.paramTypes = arrayListOf<Class<*>>().apply { paramType.forEach { add(it.compat() ?: UndefinedType) } }.toTypedArray()
        return IndexTypeCondition(IndexConfigType.MATCH)
    }

    /**
     * 设置 [Constructor] 参数条件
     *
     * 使用示例如下 ↓
     *
     * ```kotlin
     * param { it[1] == StringClass || it[2].name == "java.lang.String" }
     * ```
     *
     * - ❗无参 [Constructor] 请使用 [emptyParam] 设置查找条件
     *
     * - ❗有参 [Constructor] 必须使用此方法设定参数或使用 [paramCount] 指定个数
     *
     * - ❗存在多个 [BaseFinder.IndexTypeCondition] 时除了 [order] 只会生效最后一个
     * @param conditions 条件方法体
     * @return [BaseFinder.IndexTypeCondition]
     */
    fun param(conditions: ObjectsConditions): IndexTypeCondition {
        rulesData.paramTypesConditions = conditions
        return IndexTypeCondition(IndexConfigType.MATCH)
    }

    /**
     * 顺序筛选字节码的下标
     * @return [BaseFinder.IndexTypeCondition]
     */
    fun order() = IndexTypeCondition(IndexConfigType.ORDER)

    /**
     * 设置 [Constructor] 参数个数
     *
     * 你可以不使用 [param] 指定参数类型而是仅使用此方法指定参数个数
     *
     * 若参数个数小于零则忽略并使用 [param]
     *
     * - ❗存在多个 [BaseFinder.IndexTypeCondition] 时除了 [order] 只会生效最后一个
     * @param num 个数
     * @return [BaseFinder.IndexTypeCondition]
     */
    fun paramCount(num: Int): IndexTypeCondition {
        rulesData.paramCount = num
        return IndexTypeCondition(IndexConfigType.MATCH)
    }

    /**
     * 设置 [Constructor] 参数个数范围
     *
     * 你可以不使用 [param] 指定参数类型而是仅使用此方法指定参数个数范围
     *
     * 使用示例如下 ↓
     *
     * ```kotlin
     * paramCount(1..5)
     * ```
     *
     * - ❗存在多个 [BaseFinder.IndexTypeCondition] 时除了 [order] 只会生效最后一个
     * @param numRange 个数范围
     * @return [BaseFinder.IndexTypeCondition]
     */
    fun paramCount(numRange: IntRange): IndexTypeCondition {
        rulesData.paramCountRange = numRange
        return IndexTypeCondition(IndexConfigType.MATCH)
    }

    /**
     * 设置 [Constructor] 参数个数条件
     *
     * 你可以不使用 [param] 指定参数类型而是仅使用此方法指定参数个数条件
     *
     * 使用示例如下 ↓
     *
     * ```kotlin
     * paramCount { it >= 5 || it.isZero() }
     * ```
     *
     * - ❗存在多个 [BaseFinder.IndexTypeCondition] 时除了 [order] 只会生效最后一个
     * @param conditions 条件方法体
     * @return [BaseFinder.IndexTypeCondition]
     */
    fun paramCount(conditions: CountConditions): IndexTypeCondition {
        rulesData.paramCountConditions = conditions
        return IndexTypeCondition(IndexConfigType.MATCH)
    }

    /**
     * 设置在 [classSet] 的所有父类中查找当前 [Constructor]
     *
     * - ❗若当前 [classSet] 的父类较多可能会耗时 - API 会自动循环到父类继承是 [Any] 前的最后一个类
     * @param isOnlySuperClass 是否仅在当前 [classSet] 的父类中查找 - 若父类是 [Any] 则不会生效
     */
    fun superClass(isOnlySuperClass: Boolean = false) {
        rulesData.isFindInSuper = true
        if (isOnlySuperClass && classSet?.hasExtends == true) usedClassSet = classSet.superclass
    }

    /**
     * 得到 [Constructor] 或一组 [Constructor]
     * @return [HashSet]<[Constructor]>
     * @throws NoSuchMethodError 如果找不到 [Constructor]
     */
    private val result by lazy { ReflectionTool.findConstructors(usedClassSet, rulesData) }

    /**
     * 设置实例
     * @param constructors 当前找到的 [Constructor] 数组
     */
    private fun setInstance(constructors: HashSet<Constructor<*>>) {
        memberInstances.clear()
        constructors.takeIf { it.isNotEmpty() }?.forEach { memberInstances.add(it) }
    }

    /** 得到 [Constructor] 结果 */
    private fun internalBuild() {
        if (classSet == null) error(CLASSSET_IS_NULL)
        runBlocking {
            setInstance(result)
        }.result { ms ->
            memberInstances.takeIf { it.isNotEmpty() }?.forEach { onDebuggingMsg(msg = "Find Constructor [$it] takes ${ms}ms") }
        }
    }

    @YukiPrivateApi
    override fun build() = runCatching {
        internalBuild()
        Result()
    }.getOrElse {
        onFailureMsg(throwable = it)
        Result(isNoSuch = true, it)
    }

    @YukiPrivateApi
    override fun failure(throwable: Throwable?) = Result(isNoSuch = true, throwable)

    /**
     * [Constructor] 重查找实现类
     *
     * 可累计失败次数直到查找成功
     */
    inner class RemedyPlan @PublishedApi internal constructor() {

        /** 失败尝试次数数组 */
        @PublishedApi
        internal val remedyPlans = HashSet<Pair<ConstructorFinder, Result>>()

        /**
         * 创建需要重新查找的 [Constructor]
         *
         * 你可以添加多个备选 [Constructor] - 直到成功为止
         *
         * 若最后依然失败 - 将停止查找并输出错误日志
         * @param initiate 方法体
         */
        inline fun constructor(initiate: ConstructorConditions) =
            Result().apply { remedyPlans.add(Pair(ConstructorFinder(classSet).apply(initiate), this)) }

        /** 开始重查找 */
        @PublishedApi
        internal fun build() {
            if (classSet == null) return
            if (remedyPlans.isNotEmpty()) run {
                var isFindSuccess = false
                var lastError: Throwable? = null
                remedyPlans.forEachIndexed { p, it ->
                    runCatching {
                        runBlocking {
                            setInstance(it.first.result)
                        }.result { ms ->
                            memberInstances.takeIf { it.isNotEmpty() }?.forEach { onDebuggingMsg(msg = "Find Constructor [$it] takes ${ms}ms") }
                        }
                        isFindSuccess = true
                        it.second.onFindCallback?.invoke(memberInstances.constructors())
                        remedyPlansCallback?.invoke()
                        memberInstances.takeIf { it.isNotEmpty() }
                            ?.forEach { onDebuggingMsg(msg = "Constructor [$it] trying ${p + 1} times success by RemedyPlan") }
                        return@run
                    }.onFailure {
                        lastError = it
                        onFailureMsg(msg = "Trying ${p + 1} times by RemedyPlan --> $it", isAlwaysPrint = true)
                    }
                }
                if (isFindSuccess.not()) {
                    onFailureMsg(
                        msg = "Trying ${remedyPlans.size} times and all failure by RemedyPlan",
                        throwable = lastError,
                        isAlwaysPrint = true
                    )
                    remedyPlans.clear()
                }
            } else yLoggerW(msg = "RemedyPlan is empty, forgot it?")
        }

        /**
         * [RemedyPlan] 结果实现类
         *
         * 可在这里处理是否成功的回调
         */
        inner class Result @PublishedApi internal constructor() {

            /** 找到结果时的回调 */
            internal var onFindCallback: (HashSet<Constructor<*>>.() -> Unit)? = null

            /**
             * 当找到结果时
             * @param initiate 回调
             */
            fun onFind(initiate: HashSet<Constructor<*>>.() -> Unit) {
                onFindCallback = initiate
            }
        }
    }

    /**
     * [Constructor] 查找结果实现类
     * @param isNoSuch 是否没有找到 [Constructor] - 默认否
     * @param throwable 错误信息
     */
    inner class Result internal constructor(
        @PublishedApi internal val isNoSuch: Boolean = false,
        @PublishedApi internal val throwable: Throwable? = null
    ) : BaseResult {

        /**
         * 创建监听结果事件方法体
         * @param initiate 方法体
         * @return [Result] 可继续向下监听
         */
        inline fun result(initiate: Result.() -> Unit) = apply(initiate)

        /**
         * 获得 [Constructor] 实例处理类
         *
         * - 若有多个 [Constructor] 结果只会返回第一个
         *
         * - ❗在 [memberInstances] 结果为空时使用此方法将无法获得对象
         *
         * - ❗若你设置了 [remedys] 请使用 [wait] 回调结果方法
         * @return [Instance]
         */
        fun get() = Instance(give())

        /**
         * 获得 [Constructor] 实例处理类数组
         *
         * - 返回全部查找条件匹配的多个 [Constructor] 实例结果
         *
         * - ❗在 [memberInstances] 结果为空时使用此方法将无法获得对象
         *
         * - ❗若你设置了 [remedys] 请使用 [waitAll] 回调结果方法
         * @return [ArrayList]<[Instance]>
         */
        fun all() = arrayListOf<Instance>().apply { giveAll().takeIf { it.isNotEmpty() }?.forEach { add(Instance(it)) } }

        /**
         * 得到 [Constructor] 本身
         *
         * - 若有多个 [Constructor] 结果只会返回第一个
         *
         * - 在查找条件找不到任何结果的时候将返回 null
         * @return [Constructor] or null
         */
        fun give() = giveAll().takeIf { it.isNotEmpty() }?.first()

        /**
         * 得到 [Constructor] 本身数组
         *
         * - 返回全部查找条件匹配的多个 [Constructor] 实例
         *
         * - 在查找条件找不到任何结果的时候将返回空的 [HashSet]
         * @return [HashSet]<[Constructor]>
         */
        fun giveAll() = memberInstances.takeIf { it.isNotEmpty() }?.constructors() ?: HashSet()

        /**
         * 获得 [Constructor] 实例处理类
         *
         * - 若有多个 [Constructor] 结果只会返回第一个
         *
         * - ❗若你设置了 [remedys] 必须使用此方法才能获得结果
         *
         * - ❗若你没有设置 [remedys] 此方法将不会被回调
         * @param initiate 回调 [Instance]
         */
        fun wait(initiate: Instance.() -> Unit) {
            if (memberInstances.isNotEmpty()) initiate(get())
            else remedyPlansCallback = { initiate(get()) }
        }

        /**
         * 获得 [Constructor] 实例处理类数组
         *
         * - 返回全部查找条件匹配的多个 [Constructor] 实例结果
         *
         * - ❗若你设置了 [remedys] 必须使用此方法才能获得结果
         *
         * - ❗若你没有设置 [remedys] 此方法将不会被回调
         * @param initiate 回调 [ArrayList]<[Instance]>
         */
        fun waitAll(initiate: ArrayList<Instance>.() -> Unit) {
            if (memberInstances.isNotEmpty()) initiate(all())
            else remedyPlansCallback = { initiate(all()) }
        }

        /**
         * 创建 [Constructor] 重查找功能
         *
         * 当你遇到一种 [Constructor] 可能存在不同形式的存在时
         *
         * 可以使用 [RemedyPlan] 重新查找它 - 而没有必要使用 [onNoSuchConstructor] 捕获异常二次查找 [Constructor]
         * @param initiate 方法体
         * @return [Result] 可继续向下监听
         */
        inline fun remedys(initiate: RemedyPlan.() -> Unit): Result {
            isUsingRemedyPlan = true
            if (isNoSuch) RemedyPlan().apply(initiate).build()
            return this
        }

        /**
         * 监听找不到 [Constructor] 时
         *
         * - 只会返回第一次的错误信息 - 不会返回 [RemedyPlan] 的错误信息
         * @param result 回调错误
         * @return [Result] 可继续向下监听
         */
        inline fun onNoSuchConstructor(result: (Throwable) -> Unit): Result {
            if (isNoSuch) result(throwable ?: Throwable("Initialization Error"))
            return this
        }

        /**
         * 忽略异常并停止打印任何错误日志
         *
         * - ❗此时若要监听异常结果 - 你需要手动实现 [onNoSuchConstructor] 方法
         * @return [Result] 可继续向下监听
         */
        fun ignored(): Result {
            isShutErrorPrinting = true
            return this
        }

        /**
         * [Constructor] 实例处理类
         *
         * 调用与创建目标实例类对象
         *
         * - ❗请使用 [get]、[wait]、[all]、[waitAll] 方法来获取 [Instance]
         * @param constructor 当前 [Constructor] 实例对象
         */
        inner class Instance internal constructor(private val constructor: Constructor<*>?) {

            /**
             * 执行 [Constructor] 创建目标实例
             * @param args [Constructor] 参数
             * @return [Any] or null
             */
            private fun baseCall(vararg args: Any?) = constructor?.newInstance(*args)

            /**
             * 执行 [Constructor] 创建目标实例 - 不指定目标实例类型
             * @param args [Constructor] 参数
             * @return [Any] or null
             */
            fun call(vararg args: Any?) = baseCall(*args)

            /**
             * 执行 [Constructor] 创建目标实例 - 指定 [T] 目标实例类型
             * @param args [Constructor] 参数
             * @return [T] or null
             */
            fun <T> newInstance(vararg args: Any?) = baseCall(*args) as? T?

            override fun toString() = "[${constructor?.name ?: "<empty>"}]"
        }
    }
}