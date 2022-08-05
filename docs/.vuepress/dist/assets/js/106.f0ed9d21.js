(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{505:function(e,a,r){"use strict";r.r(a);var s=r(2),t=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"package-json中的workspaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json中的workspaces"}},[e._v("#")]),e._v(" package.json中的workspaces")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://yarnpkg.com/lang/en/docs/workspaces/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),a("OutboundLink")],1),e._v("\nhttps://yarnpkg.com/blog/2017/08/02/introducing-workspaces/")]),e._v(" "),a("p",[e._v("package.json中的有个workspace设置，如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"workspace": [\n  "packages/*"\n]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("不知道是什么意思，Google一下，原来是yarn特性。为了方便monorepo的管理，yarn提供了这个选项")]),e._v(" "),a("p",[e._v("为了方便代码的管理和维护，许多库都在使用monorepo的结构，比如 Babel, React, Jest, Vue, Angular。monorepo管理存在的一个共同难题是依赖的管理。如果为每个repo都独立安装依赖，当多个repo之间有共同的依赖时会造成重复安装，既占用空间又影响速度。yarn的workspaces功能就是为了解决这个问题。开启后，yarn会统一分析多个repo的依赖，如果有共同的依赖(同一个库，版本需求一致)，那么就会把依赖从该repo的node_modules提升到外部的node_modules中。这样避免重复安装。")]),e._v(" "),a("h2",{attrs:{id:"实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[e._v("#")]),e._v(" 实践:")]),e._v(" "),a("p",[e._v("在以workspaces的工作方式添加了多个repo后，在其中任意一个中执行yarn install xxx，则会在整个工程的根目录下创建该依赖。同时创建了指向各个repo的symlink。如此各个repo中就不会再报找不到依赖的错误了。")]),e._v(" "),a("h2",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[e._v("#")]),e._v(" 注意:")]),e._v(" "),a("p",[e._v('使用此feature需要工程为private，即在最外层的package.json中写入: "private": true')]),e._v(" "),a("p",[e._v("目前应该只有yarn支持此功能，npm还需要依赖第三发插件实现。")]),e._v(" "),a("p",[e._v("https://stackoverflow.com/questions/46947557/do-yarn-workspaces-work-with-npm-too")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d583231e51d45620541039e#heading-23",target:"_blank",rel:"noopener noreferrer"}},[e._v("好文推荐"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=t.exports}}]);