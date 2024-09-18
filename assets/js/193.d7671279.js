(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{615:function(n,e,o){"use strict";o.r(e);var t=o(2),_=Object(t.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("在以太坊中，"),e("strong",[n._v("nonce")]),n._v("（随机数）是一个与账户相关的无符号整数，用于追踪某个账户发起的交易数量或防止重放攻击。具体来说，以太坊账户的 nonce 有两种不同的含义，取决于账户的类型：")]),n._v(" "),e("h3",{attrs:{id:"_1-外部账户-eoa-externally-owned-account-的-nonce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-外部账户-eoa-externally-owned-account-的-nonce"}},[n._v("#")]),n._v(" 1. "),e("strong",[n._v("外部账户（EOA，Externally Owned Account）的 nonce")])]),n._v(" "),e("p",[n._v("对于外部账户（由私钥控制的账户），nonce 表示该账户已经发出的交易次数。每当外部账户发起一笔新的交易，nonce 值会自动增加。")]),n._v(" "),e("ul",[e("li",[e("p",[e("strong",[n._v("功能")]),n._v("：防止重放攻击。当一个账户发起一笔交易时，nonce 确保每笔交易都是唯一的。如果尝试重复发送一笔交易（同样的交易信息），但 nonce 已经被使用，则该交易会被拒绝。")])]),n._v(" "),e("li",[e("p",[e("strong",[n._v("递增")]),n._v("：每次发起交易时，外部账户的 nonce 值会加 1。例如，若账户的当前 nonce 为 5，表示该账户之前已经发起了 5 笔交易。当该账户发起第 6 笔交易时，交易的 nonce 必须为 5。交易被成功处理后，nonce 会更新为 6。")])]),n._v(" "),e("li",[e("p",[e("strong",[n._v("示例")]),n._v("：")]),n._v(" "),e("ul",[e("li",[n._v("一个账户的 nonce 为 3，表示该账户已经发起了 3 笔交易。")]),n._v(" "),e("li",[n._v("当账户发起第 4 笔交易时，交易中必须使用 nonce 3。如果 nonce 不正确，交易会被拒绝。")])])])]),n._v(" "),e("h3",{attrs:{id:"_2-智能合约账户的-nonce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-智能合约账户的-nonce"}},[n._v("#")]),n._v(" 2. "),e("strong",[n._v("智能合约账户的 nonce")])]),n._v(" "),e("p",[n._v("对于智能合约账户（合约地址），nonce 表示该合约创建的合约数量。每当一个智能合约通过 "),e("code",[n._v("CREATE")]),n._v(" 指令生成一个新的合约，nonce 就会递增。")]),n._v(" "),e("ul",[e("li",[e("p",[e("strong",[n._v("功能")]),n._v("：帮助唯一确定智能合约创建的子合约的地址。合约地址是通过发起合约创建交易的账户地址和该账户的 nonce 计算生成的。通过跟踪合约创建次数，能够确保每个新合约都有唯一的地址。")])]),n._v(" "),e("li",[e("p",[e("strong",[n._v("递增")]),n._v("：每当一个智能合约创建一个新合约时，合约账户的 nonce 值会增加 1。")])])]),n._v(" "),e("h3",{attrs:{id:"nonce-在交易中的重要性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nonce-在交易中的重要性"}},[n._v("#")]),n._v(" nonce 在交易中的重要性")]),n._v(" "),e("ol",[e("li",[e("p",[e("strong",[n._v("交易顺序")]),n._v("：由于每笔交易都有一个唯一的 nonce，确保了交易的顺序执行。即使交易被打包在不同的区块中，仍然会根据 nonce 顺序处理。这也意味着，如果一笔交易的 nonce 低于当前账户的 nonce，那么这笔交易将被视为无效，因为它已经被处理过。")])]),n._v(" "),e("li",[e("p",[e("strong",[n._v("并发交易")]),n._v("：如果外部账户尝试同时发送多笔交易，nonce 也用于确保这些交易不会被重复执行或重放。每笔交易的 nonce 必须严格递增，确保每笔交易按顺序进行。")])])]),n._v(" "),e("h3",{attrs:{id:"防止重放攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防止重放攻击"}},[n._v("#")]),n._v(" 防止重放攻击")]),n._v(" "),e("p",[n._v("由于 nonce 的存在，以太坊能够有效防止重放攻击。如果攻击者试图捕获并重复提交已经发送的交易，由于 nonce 不符合当前账户状态，交易将被自动拒绝。这确保了每笔交易只能被执行一次，并按顺序进行。")]),n._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),e("ul",[e("li",[e("strong",[n._v("EOA")]),n._v("：外部账户的 nonce 是已发送的交易计数，用于防止交易重放和确保交易顺序。")]),n._v(" "),e("li",[e("strong",[n._v("合约账户")]),n._v("：智能合约账户的 nonce 表示该账户已创建的合约数量，保证新创建合约的地址唯一性。")])])])}),[],!1,null,null,null);e.default=_.exports}}]);