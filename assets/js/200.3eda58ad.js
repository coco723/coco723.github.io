(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{621:function(_,v,t){"use strict";t.r(v);var r=t(2),s=Object(r.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("**PoS（Proof of Stake，权益证明）"),v("strong",[_._v("和")]),_._v("PBFT（Practical Byzantine Fault Tolerance，实用拜占庭容错算法）**是两种常见的区块链共识机制。虽然它们本质上属于不同的共识模型，但可以在某些情况下相互结合使用。了解它们的区别和关联有助于深入理解区块链系统的设计。")]),_._v(" "),v("h3",{attrs:{id:"_1-pos-权益证明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-pos-权益证明"}},[_._v("#")]),_._v(" 1. "),v("strong",[_._v("PoS（权益证明）")])]),_._v(" "),v("p",[_._v("PoS 是一种共识算法，主要通过验证者锁定其代币来参与区块链的验证过程。参与者根据他们持有的代币数量（即“权益”）来获得验证区块的机会，并获得相应的奖励。")]),_._v(" "),v("h4",{attrs:{id:"pos-的核心特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pos-的核心特点"}},[_._v("#")]),_._v(" PoS 的核心特点：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("权益决定验证权")]),_._v("：节点根据其持有的代币数量参与共识，持有越多代币的验证者获得区块生成权的概率越高。")]),_._v(" "),v("li",[v("strong",[_._v("节能高效")]),_._v("：与 PoW（工作量证明）不同，PoS 不需要大量的计算资源，因此能源消耗更低。")]),_._v(" "),v("li",[v("strong",[_._v("风险与激励")]),_._v("：验证者需要锁定一定数量的代币，如果他们进行恶意操作或错误验证，他们的代币可能会被惩罚（即“削减”，Slashing）。")])]),_._v(" "),v("h4",{attrs:{id:"pos-的工作流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pos-的工作流程"}},[_._v("#")]),_._v(" PoS 的工作流程：")]),_._v(" "),v("ol",[v("li",[_._v("节点通过锁定一定数量的代币成为验证者。")]),_._v(" "),v("li",[_._v("验证者根据其锁定的代币数量和随机算法，按比例被选中生成下一个区块。")]),_._v(" "),v("li",[_._v("如果验证者按规则生成区块，他们将获得区块奖励和交易手续费。")]),_._v(" "),v("li",[_._v("如果验证者作恶，他们将面临削减代币的惩罚。")])]),_._v(" "),v("h3",{attrs:{id:"_2-pbft-实用拜占庭容错"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-pbft-实用拜占庭容错"}},[_._v("#")]),_._v(" 2. "),v("strong",[_._v("PBFT（实用拜占庭容错）")])]),_._v(" "),v("p",[_._v("PBFT 是一种共识算法，旨在解决在存在恶意节点时如何在分布式系统中达成一致的问题。PBFT 通过投票和消息传递的方式，在节点中形成共识，确保即使有部分节点是恶意的，系统仍然可以达成一致。")]),_._v(" "),v("h4",{attrs:{id:"pbft-的核心特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pbft-的核心特点"}},[_._v("#")]),_._v(" PBFT 的核心特点：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("拜占庭容错性")]),_._v("：PBFT 可以容忍多达 1/3 的节点为恶意节点，仍然能够正常运作。")]),_._v(" "),v("li",[v("strong",[_._v("投票机制")]),_._v("：节点通过多轮投票达成一致。首先，提出者（leader）提出一个候选区块，然后所有节点进行投票，最终形成共识。")]),_._v(" "),v("li",[v("strong",[_._v("确定性")]),_._v("：PBFT 是确定性的，意味着一旦区块被添加到链上，就无法回滚。这不同于 PoW 中的概率性分叉问题。")]),_._v(" "),v("li",[v("strong",[_._v("网络通信开销大")]),_._v("：PBFT 需要所有节点之间进行多次消息传递，这意味着网络通信成本较高，通常更适合于"),v("strong",[_._v("联盟链")]),_._v("或节点较少的环境。")])]),_._v(" "),v("h4",{attrs:{id:"pbft-的工作流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pbft-的工作流程"}},[_._v("#")]),_._v(" PBFT 的工作流程：")]),_._v(" "),v("ol",[v("li",[_._v("提议者（leader）提出一个新的区块或交易提议。")]),_._v(" "),v("li",[_._v("所有验证节点通过多轮消息传递（pre-prepare、prepare、commit 阶段）达成共识。")]),_._v(" "),v("li",[_._v("当大多数节点（通常是超过 2/3 的节点）同意某个提案时，该提案就会被确定并添加到区块链中。")])]),_._v(" "),v("h3",{attrs:{id:"_3-pos-与-pbft-的关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-pos-与-pbft-的关系"}},[_._v("#")]),_._v(" 3. "),v("strong",[_._v("PoS 与 PBFT 的关系")])]),_._v(" "),v("p",[_._v("虽然 "),v("strong",[_._v("PoS")]),_._v(" 和 "),v("strong",[_._v("PBFT")]),_._v(" 是不同的共识机制，但它们可以结合使用。"),v("strong",[_._v("PoS")]),_._v(" 是一种基于权益的验证机制，而 "),v("strong",[_._v("PBFT")]),_._v(" 是一种达成共识的具体方法。在某些区块链项目中，PoS 用来选出验证者，而 PBFT 用来在验证者之间达成共识。这种结合既可以减少能源消耗，又可以提高共识的确定性。")]),_._v(" "),v("h4",{attrs:{id:"结合使用的例子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结合使用的例子"}},[_._v("#")]),_._v(" 结合使用的例子：")]),_._v(" "),v("ol",[v("li",[v("p",[v("strong",[_._v("权益证明 + 拜占庭容错共识")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("在某些区块链系统（例如 Cosmos 和 Tendermint）中，使用 PoS 机制来选出验证者，然后使用 PBFT 风格的共识算法来在这些验证者之间达成共识。")]),_._v(" "),v("li",[_._v("这种组合方式能够保证系统的高效性和安全性，并通过 PBFT 保证交易和区块的一致性。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("Tendermint 的 PoS+PBFT")]),_._v("：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("Tendermint")]),_._v(" 是一个区块链共识引擎，结合了 PoS 和 PBFT 的特点。")]),_._v(" "),v("li",[_._v("在 Tendermint 中，验证者首先通过 PoS 被选出，然后这些验证者使用 PBFT 机制来投票确认每一个区块。这样可以确保即使有部分验证者作恶，系统仍然可以达成共识并保持安全性。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("Cosmos 的共识机制")]),_._v("：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("Cosmos")]),_._v(" 网络也是 PoS 和 PBFT 结合的一个例子。Cosmos 通过 PoS 选出一组验证者，这些验证者通过 PBFT 达成一致。")]),_._v(" "),v("li",[_._v("这种模式在联盟链和许可链中特别有用，因为它能提高共识速度，同时降低能源消耗。")])])])]),_._v(" "),v("h3",{attrs:{id:"_4-pos-和-pbft-的对比与联系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-pos-和-pbft-的对比与联系"}},[_._v("#")]),_._v(" 4. "),v("strong",[_._v("PoS 和 PBFT 的对比与联系")])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("特性")]),_._v(" "),v("th",[_._v("PoS（Proof of Stake）")]),_._v(" "),v("th",[_._v("PBFT（Practical Byzantine Fault Tolerance）")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[_._v("主要目标")])]),_._v(" "),v("td",[_._v("通过权益分配验证权，防止作恶节点获得奖励")]),_._v(" "),v("td",[_._v("解决拜占庭问题，确保在恶意节点存在时达成共识")])]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("节点选取机制")])]),_._v(" "),v("td",[_._v("根据节点的持币量（权益）随机选择验证者")]),_._v(" "),v("td",[_._v("所有节点参与，需多轮投票形成共识")])]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("能源消耗")])]),_._v(" "),v("td",[_._v("能源消耗低，因为不需要大量计算")]),_._v(" "),v("td",[_._v("消耗较小，但网络通信成本高")])]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("容错性")])]),_._v(" "),v("td",[_._v("容忍性与削减机制相关，不同项目设计不同")]),_._v(" "),v("td",[_._v("拥有拜占庭容错能力，最多容忍 1/3 节点作恶")])]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("适用场景")])]),_._v(" "),v("td",[_._v("公链（如以太坊 2.0）、权益驱动的去中心化平台")]),_._v(" "),v("td",[_._v("联盟链、许可链以及验证节点较少的场景")])]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("共识速度")])]),_._v(" "),v("td",[_._v("取决于区块生成时间和验证者数量")]),_._v(" "),v("td",[_._v("共识快速，但通信成本较高")])]),_._v(" "),v("tr",[v("td",[v("strong",[_._v("是否确定性")])]),_._v(" "),v("td",[_._v("部分确定性（可能有链的重组）")]),_._v(" "),v("td",[_._v("确定性高，一旦确认，区块不可逆")])])])]),_._v(" "),v("h3",{attrs:{id:"_5-总结-pos-和-pbft-的结合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-总结-pos-和-pbft-的结合"}},[_._v("#")]),_._v(" 5. "),v("strong",[_._v("总结：PoS 和 PBFT 的结合")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("PoS")]),_._v(" 和 "),v("strong",[_._v("PBFT")]),_._v(" 是两种不同类型的共识机制，但它们可以在区块链系统中结合使用，以达到去中心化、安全和高效的共识。")]),_._v(" "),v("li",[v("strong",[_._v("PoS")]),_._v(" 侧重于通过权益分配来选择验证者，从而减少能源消耗，而 "),v("strong",[_._v("PBFT")]),_._v(" 则通过多轮投票的方式确保验证者达成共识，确保在恶意节点存在的情况下系统仍能正常运行。")]),_._v(" "),v("li",[_._v("当它们结合在一起时，PoS 负责选择验证者，PBFT 负责验证者之间的共识，这样可以保证区块链的高效性、安全性和去中心化，特别适用于"),v("strong",[_._v("联盟链")]),_._v("或"),v("strong",[_._v("混合共识系统")]),_._v("。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);