(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{677:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("要实现 Telegram Mini App 中点击生成海报、支持分享到 Twitter，并让其他人可以通过海报链接跳转回 Telegram 应用的功能，可以按照以下步骤设计和开发：")]),t._v(" "),a("h1",{attrs:{id:"功能需求分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能需求分析"}},[t._v("#")]),t._v(" 功能需求分析")]),t._v(" "),a("h2",{attrs:{id:"_1-生成海报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成海报"}},[t._v("#")]),t._v(" 1.\t生成海报")]),t._v(" "),a("ul",[a("li",[t._v("用户点击后生成带有图文内容的图片或动态海报。")]),t._v(" "),a("li",[t._v("海报可能包括二维码或链接，用户可以扫描或点击跳转回 Telegram Mini App。")])]),t._v(" "),a("h2",{attrs:{id:"_2-支持分享到-twitter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-支持分享到-twitter"}},[t._v("#")]),t._v(" 2.\t支持分享到 Twitter：")]),t._v(" "),a("ul",[a("li",[t._v("通过 Twitter 的分享接口，将生成的海报图片或链接分享到 Twitter。")])]),t._v(" "),a("h2",{attrs:{id:"_3-链接跳转回-telegram-应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-链接跳转回-telegram-应用"}},[t._v("#")]),t._v(" 3.\t链接跳转回 Telegram 应用：")]),t._v(" "),a("ul",[a("li",[t._v("生成的海报中包含 Telegram Mini App 的深度链接，用户可以点击链接直接打开 Mini App。")])]),t._v(" "),a("h1",{attrs:{id:"实现方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现方案"}},[t._v("#")]),t._v(" 实现方案")]),t._v(" "),a("h2",{attrs:{id:"_1-生成海报-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成海报-2"}},[t._v("#")]),t._v(" 1. 生成海报")]),t._v(" "),a("ul",[a("li",[t._v("使用前端画布库 html2canvas 或 canvas：\n"),a("ul",[a("li",[t._v("设计模板，包括文字、图片、背景、二维码等内容。")]),t._v(" "),a("li",[t._v("动态生成海报，并提供下载或预览功能。")])])]),t._v(" "),a("li",[t._v("示例代码：")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" html2canvas "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html2canvas'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("generatePoster")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("elementId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elementId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" canvas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html2canvas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dataURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDataURL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image/png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 显示或下载海报")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" link "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dataURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("download "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"poster.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h2",{attrs:{id:"_2-分享到-twitter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-分享到-twitter"}},[t._v("#")]),t._v(" 2. 分享到 Twitter")]),t._v(" "),a("ul",[a("li",[t._v("使用 Twitter 的分享接口：\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.x.com/en/docs/x-for-websites/tweet-button/guides/web-intent",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方分享文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("分享图片需要先将图片上传到一个 CDN 或存储服务，并获取 URL。")])])]),t._v(" "),a("li",[t._v("示例代码：")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("shareToTwitter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" imageUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" twitterIntentUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://twitter.com/intent/tweet?text=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("&url=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imageUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("twitterIntentUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_blank"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shareToTwitter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Check out this amazing Mini App on Telegram!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://your-cdn.com/your-generated-image.png"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h2",{attrs:{id:"_3-深度链接回-telegram-mini-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-深度链接回-telegram-mini-app"}},[t._v("#")]),t._v(" 3. 深度链接回 Telegram Mini App")]),t._v(" "),a("ul",[a("li",[t._v("使用 Telegram 的 深度链接机制：\n"),a("ul",[a("li",[t._v("格式：https://t.me/your_bot_name?start=payload")]),t._v(" "),a("li",[t._v("示例：https://t.me/MyMiniAppBot?start=share_code_123")])])]),t._v(" "),a("li",[t._v("将此链接生成二维码或直接作为按钮链接嵌入海报中。")]),t._v(" "),a("li",[t._v("示例二维码生成：")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" QRCode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qrcode.react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("generateQRCode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("QRCode value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateQRCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://t.me/MyMiniAppBot?start=share_code_123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h1",{attrs:{id:"相关-mini-app-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关-mini-app-示例"}},[t._v("#")]),t._v(" 相关 Mini App 示例")]),t._v(" "),a("h2",{attrs:{id:"_1-opensea"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-opensea"}},[t._v("#")]),t._v(" 1. OpenSea")]),t._v(" "),a("ul",[a("li",[t._v("虽不是 Telegram Mini App，但其分享 NFT 的方式类似：通过生成动态图片并附加深度链接完成分享。")]),t._v(" "),a("li",[t._v("可借鉴其生成分享海报功能。")])]),t._v(" "),a("h2",{attrs:{id:"_2-quiknode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-quiknode"}},[t._v("#")]),t._v(" 2. QuikNode")]),t._v(" "),a("ul",[a("li",[t._v("提供生成 Web3 用户相关动态图片的服务，可参考其动态内容生成和分享功能。")])]),t._v(" "),a("h2",{attrs:{id:"_3-telegram-示例应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-telegram-示例应用"}},[t._v("#")]),t._v(" 3. Telegram 示例应用")]),t._v(" "),a("ul",[a("li",[t._v("可查看 Telegram 的官方 Mini App 示例应用，其中部分实现了类似的深度链接功能。")])]),t._v(" "),a("h1",{attrs:{id:"实现难点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现难点"}},[t._v("#")]),t._v(" 实现难点")]),t._v(" "),a("h2",{attrs:{id:"_1-生成海报内容动态化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成海报内容动态化"}},[t._v("#")]),t._v(" 1.\t生成海报内容动态化")]),t._v(" "),a("ul",[a("li",[t._v("模板需要根据用户输入动态调整，尤其是多语言支持。")])]),t._v(" "),a("h2",{attrs:{id:"_2-链接跳转与权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-链接跳转与权限"}},[t._v("#")]),t._v(" 2.\t链接跳转与权限")]),t._v(" "),a("ul",[a("li",[t._v("确保 Telegram 深度链接正确解析，并验证跳转到的 Mini App 能读取传入参数。")])]),t._v(" "),a("h2",{attrs:{id:"_3-分享到-twitter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-分享到-twitter"}},[t._v("#")]),t._v(" 3.\t分享到 Twitter：")]),t._v(" "),a("ul",[a("li",[t._v("如果包含自定义图片或二维码，图片必须上传到一个可访问的存储（如 AWS S3、Cloudinary 等）。")])]),t._v(" "),a("h1",{attrs:{id:"进一步优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进一步优化"}},[t._v("#")]),t._v(" 进一步优化")]),t._v(" "),a("h2",{attrs:{id:"_1-海报样式美化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-海报样式美化"}},[t._v("#")]),t._v(" 1.\t海报样式美化：")]),t._v(" "),a("ul",[a("li",[t._v("使用设计工具预定义多种模板（例如带边框、特效）。")])]),t._v(" "),a("h2",{attrs:{id:"_2-后端支持动态内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-后端支持动态内容"}},[t._v("#")]),t._v(" 2.\t后端支持动态内容：")]),t._v(" "),a("ul",[a("li",[t._v("使用后端服务生成图片，避免前端性能问题。")])]),t._v(" "),a("h2",{attrs:{id:"_3-分享更多平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-分享更多平台"}},[t._v("#")]),t._v(" 3.\t分享更多平台：")]),t._v(" "),a("ul",[a("li",[t._v("扩展到 Facebook、WhatsApp 等其他社交平台。")])]),t._v(" "),a("h1",{attrs:{id:"技术栈推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术栈推荐"}},[t._v("#")]),t._v(" 技术栈推荐")]),t._v(" "),a("h2",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[t._v("#")]),t._v(" 前端")]),t._v(" "),a("ul",[a("li",[t._v("React.js / Vue.js")]),t._v(" "),a("li",[t._v("html2canvas、QRCode.react")])]),t._v(" "),a("h2",{attrs:{id:"后端-可选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端-可选"}},[t._v("#")]),t._v(" 后端（可选）")]),t._v(" "),a("ul",[a("li",[t._v("Node.js + Express")]),t._v(" "),a("li",[t._v("图像生成工具：sharp 或 Puppeteer")])]),t._v(" "),a("h2",{attrs:{id:"存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储"}},[t._v("#")]),t._v(" 存储")]),t._v(" "),a("ul",[a("li",[t._v("AWS S3 或 Cloudinary")])])])}),[],!1,null,null,null);a.default=e.exports}}]);