(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{512:function(e,s,t){"use strict";t.r(s);var a=t(2),n=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"脚手架之egg-init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚手架之egg-init"}},[e._v("#")]),e._v(" 脚手架之egg-init")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/SunShinewyf/issue-blog/issues/33",target:"_blank",rel:"noopener noreferrer"}},[e._v("转载自"),s("OutboundLink")],1)]),e._v(" "),s("blockquote",[s("p",[e._v("egg-init是egg的一个脚手架，用于快速生成一个egg项目或者插件")])]),e._v(" "),s("p",[e._v("在剖析"),s("code",[e._v("egg-init")]),e._v("之前，先介绍一下脚手架的相关知识")]),e._v(" "),s("h2",{attrs:{id:"关于脚手架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于脚手架"}},[e._v("#")]),e._v(" 关于脚手架")]),e._v(" "),s("p",[e._v("脚手架主要是在项目启动过程中生成一些初始文件的，而且一旦生成了初始化文件之后，脚手架就没有用武之地了。但是在一个工程化体系过程中，脚手架的作用还是很大的：")]),e._v(" "),s("ul",[s("li",[e._v("规范团队中的协作开发")]),e._v(" "),s("li",[e._v("快速生成配置文件，节省开发时间")]),e._v(" "),s("li",[e._v("降低框架的学习成本\n脚手架一般运行在本地，并且有一些配置选项可以选用。")])]),e._v(" "),s("p",[e._v("目前比较流行的脚手架就是yeoman,具体怎么使用可以移步这里")]),e._v(" "),s("h2",{attrs:{id:"如何开发脚手架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何开发脚手架"}},[e._v("#")]),e._v(" 如何开发脚手架")]),e._v(" "),s("ul",[s("li",[e._v("npm bin\n需要在"),s("code",[e._v("package.json")]),e._v("中声明"),s("code",[e._v("bin")]),e._v("字段的命令")])]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"bin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"init"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"bin/init.js"')]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("ul",[s("li",[e._v("建立相应的init.js文件")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("#!/usr/bin/env node  //首行必须加上\n//具体逻辑\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("在"),s("code",[e._v("init.js")]),e._v("里面可以添加一些具体的逻辑，如读取文件路径，获取开发者的一些动态设置选项等")]),e._v(" "),s("ul",[s("li",[e._v("全局安装之后，通过"),s("code",[e._v("npm link")]),e._v("或者全局安装创建软链接，我们配置的"),s("code",[e._v("init")]),e._v("命令才能生效")])]),e._v(" "),s("h2",{attrs:{id:"egg-init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#egg-init"}},[e._v("#")]),e._v(" egg-init")]),e._v(" "),s("p",[s("code",[e._v("egg-init")]),e._v("提供的options有如下几种:")]),e._v(" "),s("p",[e._v("选项：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  --type          boilerplate type                                      [字符串]\n  --dir           target directory                                      [字符串]\n  --force, -f     force to override directory                             [布尔]\n  --template      local path to boilerplate                             [字符串]\n  --package       boilerplate package name                              [字符串]\n  --registry, -r  npm registry, support china/npm/custom, default to auto detect\n                                                                        [字符串]\n  --silent          do not ask, just use default value                       [布尔]\n  --version       显示版本号                                              [布尔]\n  -h, --help      显示帮助信息                                            [布尔]\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("p",[e._v("可以根据个人情况选择相应的配置")]),e._v(" "),s("p",[s("code",[e._v("egg-init")]),e._v("实现的方式也和前面说的方法一样，入口文件就是"),s("code",[e._v("bin/egg-init.js，")]),e._v("但是这个文件很简单，最终调用的是"),s("code",[e._v("lib/init-command.js")]),e._v("。")]),e._v(" "),s("p",[e._v("首先是在构造函数中初始化了一些参数，然后在"),s("code",[e._v("run")]),e._v("主函数里面获取了注册地址，并在terminal中打印出了"),s("code",[e._v("use registry:")]),e._v("的信息，然后是根据用户输入的项目名来生成相应的项目dir。")]),e._v(" "),s("p",[s("code",[e._v("egg-init")]),e._v("支持四种项目类型，分别是：")]),e._v(" "),s("ul",[s("li",[e._v("simple")]),e._v(" "),s("li",[e._v("empty")]),e._v(" "),s("li",[e._v("framework")]),e._v(" "),s("li",[e._v("plugin\n其中四种项目类型的一些定义都放在"),s("code",[e._v("boilerplateMapping")]),e._v("这个变量中。并且会通过交互式命令行工具"),s("code",[e._v("yargs")]),e._v("记录用户的选择，从而在指定的"),s("code",[e._v("dir")]),e._v("下面下载不同的项目类型文件包。并且会在控制台中打印出下载地址，比如当选择"),s("code",[e._v("simple")]),e._v("时，下载包地址为："),s("code",[e._v("http://registry.npm.taobao.org/egg-boilerplate-simple/download/egg-boilerplate-simple-3.0.0.tgz")])])]),e._v(" "),s("p",[e._v("在下载文件之前会通过"),s("code",[e._v("askForVariable")]),e._v("这个函数来收集用户的一些自定义信息，比如"),s("code",[e._v("project name、project description")]),e._v("等,当设置完了所有的这些配置项之后，就开始在指定的目录中生成文件了。")]),e._v(" "),s("p",[s("code",[e._v("egg-init")]),e._v("初始化的文件\n当选择项目类型为"),s("code",[e._v("simple")]),e._v("时，生成的文件如下图所示:")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://raw.githubusercontent.com/SunShinewyf/issue-blog/master/assets/technical/29.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("对于"),s("code",[e._v("app,config,test")]),e._v("这些文件，就不说了，基本上也是初始化了"),s("code",[e._v("egg")]),e._v("的一些示例文件。\n"),s("code",[e._v("eslintrc")]),e._v("里面声明了如下扩展:")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"extends"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"eslint-config-egg"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("对于"),s("code",[e._v("eslintrc")]),e._v("配置的一些说明，可以移步这里")]),e._v(" "),s("p",[s("code",[e._v("eslint-config-egg")]),e._v("这个"),s("code",[e._v("npm")]),e._v("包则是声明了一些书写egg时需要遵循的一些书写规范。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v(".autod.conf.js")]),e._v("则是声明了"),s("code",[e._v("autod")]),e._v("的配置方式，对于"),s("code",[e._v("autod")]),e._v("的学习，可以参见这里和这里,主要是给用户提供自行升级依赖版本的便利")]),e._v(" "),s("li",[s("code",[e._v("package.json")]),e._v("，里面已经配备好了一些字段，比如"),s("code",[e._v("dependencies、devDependencies")]),e._v("以及"),s("code",[e._v("script")]),e._v("等命令。")])]),e._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),s("p",[s("code",[e._v("egg-init")]),e._v("脚手架的功能主要是生成项目的初始化文件，比较好的是为开发者生成了一些配置，比如说"),s("code",[e._v("eslint")]),e._v("以及"),s("code",[e._v("gitignore")]),e._v("等，会比较方便。相较于自己新建每个文件要快得多。")])])}),[],!1,null,null,null);s.default=n.exports}}]);