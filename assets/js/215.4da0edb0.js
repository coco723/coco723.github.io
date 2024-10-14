(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{633:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("如果你是钱包提供方，并且希望用户在不修改代码的情况下使用你的钱包，有几种策略可以方便地将你的钱包集成到现有的 TON dApp 中。这种场景通常发生在钱包提供商希望无缝融入 TON 生态并让开发者更轻松地支持他们的产品。")]),t._v(" "),s("p",[t._v("以下是几种方法可以让你的钱包被 dApp 开发者广泛采用，而用户无需手动修改代码：")]),t._v(" "),s("h3",{attrs:{id:"_1-与-tonconnect-ui-react-官方合作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-与-tonconnect-ui-react-官方合作"}},[t._v("#")]),t._v(" 1. "),s("strong",[t._v("与 "),s("code",[t._v("@tonconnect/ui-react")]),t._v(" 官方合作")])]),t._v(" "),s("p",[t._v("你可以与 "),s("code",[t._v("@tonconnect/ui-react")]),t._v(" 官方团队合作，将你的钱包添加到官方支持的钱包列表中。这是最方便和广泛的方式，因为开发者无需手动添加配置，只要使用 "),s("code",[t._v("@tonconnect/ui-react")]),t._v("，你的钱包就会自动出现在钱包选择界面中。")]),t._v(" "),s("h4",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("广泛支持")]),t._v("：你的钱包会出现在所有使用 "),s("code",[t._v("@tonconnect/ui-react")]),t._v(" 的 dApp 中，无需开发者额外配置。")]),t._v(" "),s("li",[s("strong",[t._v("官方支持")]),t._v("：官方集成意味着未来的更新和维护会由 "),s("code",[t._v("@tonconnect/ui-react")]),t._v(" 团队负责。")])]),t._v(" "),s("h4",{attrs:{id:"步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤：")]),t._v(" "),s("ol",[s("li",[t._v("与 "),s("code",[t._v("@tonconnect/ui-react")]),t._v(" 开发团队取得联系，提供你钱包的名称、图标、链接、深度链接等信息。")]),t._v(" "),s("li",[t._v("官方团队在下一次更新中将你的钱包加入到默认的钱包列表中。")]),t._v(" "),s("li",[t._v("所有使用 "),s("code",[t._v("@tonconnect/ui-react")]),t._v(" 的 dApp 自动支持你的钱包。")])]),t._v(" "),s("h3",{attrs:{id:"_2-提供标准化-sdk-或插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-提供标准化-sdk-或插件"}},[t._v("#")]),t._v(" 2. "),s("strong",[t._v("提供标准化 SDK 或插件")])]),t._v(" "),s("p",[t._v("发布一个 SDK 或插件，让开发者可以快速集成你的钱包到他们的应用中，而无需进行复杂的配置或修改大量代码。你可以提供一个简单的安装和初始化步骤，使开发者能够快速引入你的钱包。")]),t._v(" "),s("h4",{attrs:{id:"优点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点-2"}},[t._v("#")]),t._v(" 优点：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("易于集成")]),t._v("：开发者只需引入你的 SDK 或插件，即可无缝支持你的钱包。")]),t._v(" "),s("li",[s("strong",[t._v("灵活性")]),t._v("：你可以控制钱包的具体行为和功能，同时开发者有更大的灵活性来自定义集成方式。")])]),t._v(" "),s("h4",{attrs:{id:"方案示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案示例"}},[t._v("#")]),t._v(" 方案示例：")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("发布 npm 包")]),t._v("：开发一个 npm 包，封装好你钱包的连接逻辑。开发者可以直接通过命令行安装，比如：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" my-custom-wallet-sdk\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("API 接口")]),t._v("：提供易于使用的 API，供开发者调用。例如：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" connectToMyWallet "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-custom-wallet-sdk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connectToMyWallet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("account")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Connected to my custom wallet:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("快速集成指南")]),t._v("：提供详细的文档和示例代码，指导开发者如何快速在他们的 React 应用中集成你的钱包。")])])]),t._v(" "),s("h3",{attrs:{id:"_3-提供钱包的-connect-按钮组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-提供钱包的-connect-按钮组件"}},[t._v("#")]),t._v(" 3. "),s("strong",[t._v("提供钱包的“Connect”按钮组件")])]),t._v(" "),s("p",[t._v("你可以开发一个自定义的 React 组件或 JavaScript 插件，封装所有的连接逻辑，开发者只需像使用普通的按钮一样，将该组件添加到他们的应用中。")]),t._v(" "),s("h4",{attrs:{id:"优点-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点-3"}},[t._v("#")]),t._v(" 优点：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("一键集成")]),t._v("：开发者只需将组件添加到应用中，无需手动配置钱包。")]),t._v(" "),s("li",[s("strong",[t._v("用户友好")]),t._v("：用户界面可以按照钱包提供商的设计标准，保持一致的用户体验。")])]),t._v(" "),s("h4",{attrs:{id:"代码示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例：")]),t._v(" "),s("p",[t._v("发布一个可以直接使用的组件：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" connectToMyCustomWallet "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-custom-wallet-sdk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("MyCustomWalletButton")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handleConnect")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" account "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connectToMyCustomWallet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Connected to my custom wallet:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("handleConnect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Connect to My Custom Wallet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" MyCustomWalletButton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("p",[t._v("开发者可以直接将这个组件放到他们的项目中：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MyCustomWalletButton "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-custom-wallet-sdk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("My dApp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MyCustomWalletButton "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h3",{attrs:{id:"_4-ton-wallet-standard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-ton-wallet-standard"}},[t._v("#")]),t._v(" 4. "),s("strong",[t._v("TON Wallet Standard")])]),t._v(" "),s("p",[t._v("支持 "),s("strong",[t._v("TON Wallet Standard")]),t._v(" 是让你的钱包自动兼容所有支持该标准的钱包连接库的 dApp 的最有效方式。这是一种面向 TON 生态的通用协议，旨在帮助 dApp 与不同的钱包实现兼容。支持该标准的 dApp 不需要额外的代码更改，就能使用符合该标准的钱包。")]),t._v(" "),s("h4",{attrs:{id:"优点-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点-4"}},[t._v("#")]),t._v(" 优点：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("生态系统标准化")]),t._v("：符合 TON Wallet Standard 的钱包和 dApp 之间可以无缝交互。")]),t._v(" "),s("li",[s("strong",[t._v("长期支持")]),t._v("：生态系统内越来越多的 dApp 和钱包可能会选择该标准，从而提高兼容性。")])]),t._v(" "),s("h3",{attrs:{id:"_5-推广及文档化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-推广及文档化"}},[t._v("#")]),t._v(" 5. "),s("strong",[t._v("推广及文档化")])]),t._v(" "),s("p",[t._v("除了技术手段，你还可以通过推广和完善的文档，向开发者社区推广你的钱包。良好的文档可以大大降低开发者集成的难度，并提高你钱包的使用率。")]),t._v(" "),s("h4",{attrs:{id:"提供的内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提供的内容"}},[t._v("#")]),t._v(" 提供的内容：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("详细文档")]),t._v("：包括快速入门、配置说明、集成代码示例等。")]),t._v(" "),s("li",[s("strong",[t._v("教程与示例")]),t._v("：通过 GitHub 提供完整的 dApp 示例代码，展示如何集成你钱包。")]),t._v(" "),s("li",[s("strong",[t._v("开发者支持")]),t._v("：提供及时的开发者支持，解答集成过程中可能遇到的问题。")])]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("与 "),s("code",[t._v("@tonconnect/ui-react")]),t._v(" 官方合作")]),t._v("：这是最无缝的方案，钱包将被自动列入官方钱包列表中。")]),t._v(" "),s("li",[s("strong",[t._v("提供 SDK 或插件")]),t._v("：发布易于集成的 SDK，开发者可以轻松引入你的钱包。")]),t._v(" "),s("li",[s("strong",[t._v("提供自定义钱包连接组件")]),t._v("：开发可复用的按钮组件，开发者无需复杂集成即可使用。")]),t._v(" "),s("li",[s("strong",[t._v("遵循 TON Wallet Standard")]),t._v("：通过支持 TON 的钱包标准，让你的钱包兼容所有标准化 dApp。")]),t._v(" "),s("li",[s("strong",[t._v("推广及文档支持")]),t._v("：通过清晰的文档和教程，向开发者推广你的钱包，提高其集成率。")])]),t._v(" "),s("p",[t._v("选择适合的方式，能够有效推动开发者采用你提供的钱包，并让用户在 dApp 中顺利使用。")])])}),[],!1,null,null,null);s.default=r.exports}}]);