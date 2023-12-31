/*
 * YukiReflection - An efficient Reflection API for Java and Android built in Kotlin.
 * Copyright (C) 2019-2024 HighCapable
 * https://github.com/HighCapable/YukiReflection
 *
 * Apache License Version 2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * This file is created by fankes on 2022/8/7.
 */
package com.highcapable.yukireflection.demo_app.test;

@SuppressWarnings("FieldMayBeFinal")
public class Main {

    private static String staticContent = "I am static!";

    private final String content;

    public Main(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }

    public static String getStaticContent() {
        return staticContent;
    }
}