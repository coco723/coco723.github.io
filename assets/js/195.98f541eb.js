(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{612:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("这是一个非常重要的问题。在 NFT 被托管到市场合约后，"),t("strong",[s._v("市场合约本身并不能随意对托管的 NFT 进行操作")]),s._v("，除非合约代码被设计为允许市场进行某些操作。智能合约是去中心化和自动执行的，代码规则如何定义，行为就如何进行。")]),s._v(" "),t("p",[s._v("具体来说：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("NFT 托管")]),s._v("意味着卖家将 NFT 转移到市场合约地址，由市场合约进行管理。但市场合约只有在满足特定条件下（如交易完成或退款）才会转移 NFT。这是通过智能合约的函数控制的，不是合约管理员或市场拥有者可以随意操作的。")]),s._v(" "),t("li",[s._v("如果智能合约代码没有设计为允许市场管理员随意转移 NFT，那么市场管理员或合约的部署者无法未经用户同意操作托管的 NFT。")])]),s._v(" "),t("h3",{attrs:{id:"防止市场随意操作托管-nft-的措施"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防止市场随意操作托管-nft-的措施"}},[s._v("#")]),s._v(" 防止市场随意操作托管 NFT 的措施")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("函数权限控制")]),s._v("\n合约中的每个函数都可以设置权限控制。只允许特定条件下的操作（如买家支付成功后，才允许将 NFT 转给买家）。例如，只有满足条件时才能触发 "),t("code",[s._v("safeTransferFrom")]),s._v(" 函数。")]),s._v(" "),t("div",{staticClass:"language-solidity line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-solidity"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("purchaseNFT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint256")]),s._v(" listingIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("external")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("payable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Listing "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("memory")]),s._v(" listing "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" listings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("listingIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Insufficient payment"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 买家支付后，合约释放 NFT")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeListing")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("listingIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("payable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("seller"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("transfer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("IERC721")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nftContract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("safeTransferFrom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tokenId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("emit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("NFTPurchased")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nftContract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tokenId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("在上述代码中，只有买家支付了足够的资金时，NFT 才能从市场合约转移到买家。市场合约本身不能随意转移 NFT，必须严格按照代码逻辑执行。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("不可篡改性")]),s._v("\n一旦智能合约部署到以太坊等区块链上，合约代码即不可更改，市场管理员无法修改合约行为，也无法插入后门来随意操作托管的 NFT。用户可以公开查看合约代码，确保市场合约按预期行为执行。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("使用标准接口")]),s._v("\nERC721 标准中规定了 "),t("code",[s._v("safeTransferFrom")]),s._v(" 等函数的使用规则，确保 NFT 的所有权转移只能通过安全的方式进行。合约可以严格按照 ERC721 标准实现，不允许其他形式的非授权操作。")])])]),s._v(" "),t("h3",{attrs:{id:"防止市场滥用托管-nft-的示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防止市场滥用托管-nft-的示例"}},[s._v("#")]),s._v(" 防止市场滥用托管 NFT 的示例")]),s._v(" "),t("p",[s._v("为了防止市场随意操作 NFT，可以增加多重安全措施，例如：")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("只允许在特定情况下调用 NFT 转移函数")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("只有在买家支付成功后，或者卖家确认取消上架时，市场才允许 NFT 从合约中转出。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("事件记录")]),s._v("：\n每次 NFT 被托管、转移、或者发生交易时，都触发事件，链上事件是公开的，任何人都可以追踪这些操作，确保市场行为公开透明。")])])]),s._v(" "),t("h3",{attrs:{id:"代码示例-限制市场对-nft-的操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码示例-限制市场对-nft-的操作"}},[s._v("#")]),s._v(" 代码示例：限制市场对 NFT 的操作")]),s._v(" "),t("div",{staticClass:"language-solidity line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-solidity"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// SPDX-License-Identifier: MIT")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pragma")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("solidity")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),t("span",{pre:!0,attrs:{class:"token version number"}},[s._v("0.8.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@openzeppelin/contracts/token/ERC721/IERC721.sol"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("contract")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SecureNFTMarketplace")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" ERC721Holder "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Listing")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),s._v(" seller"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint256")]),s._v(" price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),s._v(" nftContract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint256")]),s._v(" tokenId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v(" isSold"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// NFT 上架列表")]),s._v("\n    Listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" listings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 事件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("event")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("NFTListed")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("indexed")]),s._v(" seller"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("indexed")]),s._v(" nftContract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint256")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("indexed")]),s._v(" tokenId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint256")]),s._v(" price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("event")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("NFTPurchased")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("indexed")]),s._v(" buyer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("indexed")]),s._v(" nftContract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint256")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("indexed")]),s._v(" tokenId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint256")]),s._v(" price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 卖家上架 NFT")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("listNFT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),s._v(" nftContract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint256")]),s._v(" tokenId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint256")]),s._v(" price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("external")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("price "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Price must be greater than zero"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将 NFT 转移到市场合约，确保市场托管 NFT")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("IERC721")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nftContract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("safeTransferFrom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tokenId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        listings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Listing")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            seller"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            nftContract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nftContract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            tokenId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" tokenId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            isSold"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("emit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("NFTListed")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nftContract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tokenId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 买家购买 NFT")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("purchaseNFT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint256")]),s._v(" listingIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("external")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("payable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        Listing "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("storage")]),s._v(" listing "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" listings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("listingIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Insufficient payment"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isSold"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NFT already sold"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 标记为已售")]),s._v("\n        listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isSold "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 转移资金给卖家")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("payable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("seller"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("transfer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安全地将 NFT 转移给买家")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("IERC721")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nftContract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("safeTransferFrom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tokenId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("emit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("NFTPurchased")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nftContract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tokenId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" listing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br")])]),t("h3",{attrs:{id:"关键点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关键点"}},[s._v("#")]),s._v(" 关键点：")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("权限限制")]),s._v("：只有在买家支付足够的资金后，合约才允许 NFT 被转移给买家。")]),s._v(" "),t("li",[t("strong",[s._v("透明操作")]),s._v("：所有的上架、购买、资金转移等操作都会记录在事件中，并且是公开可见的，保证市场行为透明。")]),s._v(" "),t("li",[t("strong",[s._v("不可篡改性")]),s._v("：合约部署后不能更改，任何恶意篡改行为都无法进行。")])]),s._v(" "),t("h3",{attrs:{id:"扩展措施"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展措施"}},[s._v("#")]),s._v(" 扩展措施：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("多签合约")]),s._v("：使用多签合约控制市场操作，确保只有经过多个可信方签署后，才能进行特殊操作。")]),s._v(" "),t("li",[t("strong",[s._v("引入仲裁机制")]),s._v("：如果买家和卖家发生争议，可以在智能合约中引入仲裁机制，确保在明确判决后再释放 NFT 或资金。")])]),s._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("智能合约是去中心化的")]),s._v("，其行为完全取决于代码的逻辑。因此，如果代码中没有明确允许市场随意操作 NFT 的权限，市场管理员是无法随意处理托管的 NFT 的。")]),s._v(" "),t("li",[t("strong",[s._v("通过适当的权限控制和安全设计")]),s._v("，可以确保市场只能在满足特定条件下对 NFT 进行操作，从而保护卖家和买家的利益。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);