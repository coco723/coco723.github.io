(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{608:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("在 Solidity 中，函数的可见性（visibility）决定了函数在合约内部或外部的可访问性。Solidity 提供了四种不同的可见性修饰符，它们分别是：")]),t._v(" "),s("h3",{attrs:{id:"_1-public"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-public"}},[t._v("#")]),t._v(" 1. "),s("strong",[s("code",[t._v("public")])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("定义")]),t._v("："),s("code",[t._v("public")]),t._v(" 函数可以被合约内部和外部的任何人或合约调用。")]),t._v(" "),s("li",[s("strong",[t._v("特点")]),t._v("：\n"),s("ul",[s("li",[t._v("可以通过外部合约或外部账户调用。")]),t._v(" "),s("li",[t._v("合约内部也可以直接调用。")]),t._v(" "),s("li",[t._v("Solidity 会为每个 "),s("code",[t._v("public")]),t._v(" 函数自动生成一个函数接口，供外部调用。")])])]),t._v(" "),s("li",[s("strong",[t._v("示例")]),t._v("："),s("div",{staticClass:"language-solidity line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("examplePublic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This function can be called from anywhere")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-external"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-external"}},[t._v("#")]),t._v(" 2. "),s("strong",[s("code",[t._v("external")])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("定义")]),t._v("："),s("code",[t._v("external")]),t._v(" 函数只能通过合约外部的调用（例如通过交易或合约调用）。合约内部不能直接调用（除非使用 "),s("code",[t._v("this.functionName()")]),t._v("）。")]),t._v(" "),s("li",[s("strong",[t._v("特点")]),t._v("：\n"),s("ul",[s("li",[t._v("只能通过外部账户或其他合约调用。")]),t._v(" "),s("li",[t._v("如果在合约内部调用需要使用 "),s("code",[t._v("this")]),t._v(" 关键字（会消耗更多的 gas）。")]),t._v(" "),s("li",[t._v("在某些情况下，"),s("code",[t._v("external")]),t._v(" 函数比 "),s("code",[t._v("public")]),t._v(" 函数更节省 gas，尤其是传递大数组时，因为 "),s("code",[t._v("external")]),t._v(" 参数是 calldata 类型。")])])]),t._v(" "),s("li",[s("strong",[t._v("示例")]),t._v("："),s("div",{staticClass:"language-solidity line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exampleExternal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Can only be called from outside the contract")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-internal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-internal"}},[t._v("#")]),t._v(" 3. "),s("strong",[s("code",[t._v("internal")])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("定义")]),t._v("："),s("code",[t._v("internal")]),t._v(" 函数只能在当前合约及其继承的合约中调用，不能被外部合约或账户调用。")]),t._v(" "),s("li",[s("strong",[t._v("特点")]),t._v("：\n"),s("ul",[s("li",[t._v("可以在合约内部和继承的合约中使用。")]),t._v(" "),s("li",[t._v("无法通过外部账户或合约直接调用。")])])]),t._v(" "),s("li",[s("strong",[t._v("示例")]),t._v("："),s("div",{staticClass:"language-solidity line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exampleInternal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("internal")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Can only be called from this contract or contracts that inherit from it")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"_4-private"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-private"}},[t._v("#")]),t._v(" 4. "),s("strong",[s("code",[t._v("private")])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("定义")]),t._v("："),s("code",[t._v("private")]),t._v(" 函数只能在当前合约内部调用，不能被任何其他合约，包括继承的合约访问。")]),t._v(" "),s("li",[s("strong",[t._v("特点")]),t._v("：\n"),s("ul",[s("li",[t._v("仅限于合约内部使用，继承的合约也无法访问。")]),t._v(" "),s("li",[t._v("适用于那些不希望外部或子合约访问的函数。")])])]),t._v(" "),s("li",[s("strong",[t._v("示例")]),t._v("："),s("div",{staticClass:"language-solidity line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("examplePrivate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Can only be called from this contract")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("可见性")]),t._v(" "),s("th",[t._v("合约内部调用")]),t._v(" "),s("th",[t._v("继承合约调用")]),t._v(" "),s("th",[t._v("外部合约调用")]),t._v(" "),s("th",[t._v("外部账户调用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("public")])]),t._v(" "),s("td",[t._v("✔")]),t._v(" "),s("td",[t._v("✔")]),t._v(" "),s("td",[t._v("✔")]),t._v(" "),s("td",[t._v("✔")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("external")])]),t._v(" "),s("td",[t._v("✘ (需使用 "),s("code",[t._v("this")]),t._v(")")]),t._v(" "),s("td",[t._v("✘")]),t._v(" "),s("td",[t._v("✔")]),t._v(" "),s("td",[t._v("✔")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("internal")])]),t._v(" "),s("td",[t._v("✔")]),t._v(" "),s("td",[t._v("✔")]),t._v(" "),s("td",[t._v("✘")]),t._v(" "),s("td",[t._v("✘")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("private")])]),t._v(" "),s("td",[t._v("✔")]),t._v(" "),s("td",[t._v("✘")]),t._v(" "),s("td",[t._v("✘")]),t._v(" "),s("td",[t._v("✘")])])])]),t._v(" "),s("p",[t._v("选择合适的函数可见性修饰符是确保合约安全性和功能性的重要步骤。")])])}),[],!1,null,null,null);s.default=e.exports}}]);