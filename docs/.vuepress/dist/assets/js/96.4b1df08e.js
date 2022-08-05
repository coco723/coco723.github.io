(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{494:function(s,r,a){"use strict";a.r(r);var t=a(2),e=Object(t.a)({},(function(){var s=this,r=s._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"egg应用自定义4xx和5xx的方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#egg应用自定义4xx和5xx的方案"}},[s._v("#")]),s._v(" egg应用自定义4XX和5XX的方案")]),s._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/eggjs/egg/issues/1086",target:"_blank",rel:"noopener noreferrer"}},[s._v("转载"),r("OutboundLink")],1)]),s._v(" "),r("p",[s._v("现在的错误处理插件是"),r("a",{attrs:{href:"https://github.com/eggjs/egg-onerror",target:"_blank",rel:"noopener noreferrer"}},[s._v("egg-onerror"),r("OutboundLink")],1),s._v("，但这个插件主要是优雅处理为捕获异常，也就是为了让应用不挂进行兜底，但是现在没有一种同意的业务员错误处理方案。")]),s._v(" "),r("h2",{attrs:{id:"问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),r("h3",{attrs:{id:"业务校验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#业务校验"}},[s._v("#")]),s._v(" 业务校验")]),s._v(" "),r("p",[s._v("比如参数校验、业务演这个等等，这些并不术语异常，一般会在响应时专程对应的数据格式。常见的处理方式是接口返回错误，并在response转换")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("class User extends Controller {\n  async show() {\n    const error = this.check(this.params.id);\n    if (error) {\n      this.ctx.status = 422;\n      this.ctx.body {\n        message: error.message,\n      };\n      return;\n    }\n\n    // 继续处理\n  }\n\n  check(id) {\n    if (!id) return { message: 'id is required' };\n  }\n}\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br"),r("span",{staticClass:"line-number"},[s._v("17")]),r("br"),r("span",{staticClass:"line-number"},[s._v("18")]),r("br")])]),r("p",[s._v("但是业务场景是非常复杂的，可能在controller里面调用多层service，这样就必须把错误结果一层层传递。所以这种场景业务校验推荐使用异常的方式，类似上面的场景只需要抛出一个异常")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("class User extends Controller {\n  async show() {\n    this.check(this.params.id);\n\n    // 继续处理\n  }\n\n  check(id) {\n    if (!id) throw new Error('id is required');\n  }\n}\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br")])]),r("p",[s._v("然后再中间件处理这个异常")]),s._v(" "),r("h2",{attrs:{id:"异常类型区分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异常类型区分"}},[s._v("#")]),s._v(" 异常类型区分")]),s._v(" "),r("p",[s._v("上面的示例也同样抛出Error，如果不写中间件处理同样回走到"),r("a",{attrs:{href:"https://github.com/eggjs/egg-onerror",target:"_blank",rel:"noopener noreferrer"}},[s._v("oneror"),r("OutboundLink")],1),s._v("插件，根据惠泽会打印错误日志并返回500.")]),s._v(" "),r("p",[s._v("这不是我们期望的，开发者希望但会正确的格式，比如status是422，body是一个含错误信息的json。所以我们需要明确已知异常和为捕获异常，并对他们做差异处理")]),s._v(" "),r("h2",{attrs:{id:"标准化响应"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标准化响应"}},[s._v("#")]),s._v(" 标准化响应")]),s._v(" "),r("p",[s._v("如果在写一个api server的时候，希望响应格式是规范的，而开发者一般都比较关注正常结果，异常时会返回格式，所以对于一个API Server来说这也是非常重要的。")]),s._v(" "),r("h2",{attrs:{id:"内容协商"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内容协商"}},[s._v("#")]),s._v(" 内容协商")]),s._v(" "),r("p",[s._v("有些应用会根据content-type来返回对应数据，这种情况错误处理也需要根据这种场景来返回相应的结果")]),s._v(" "),r("h3",{attrs:{id:"spec"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spec"}},[s._v("#")]),s._v(" Spec")]),s._v(" "),r("h3",{attrs:{id:"错误定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#错误定义"}},[s._v("#")]),s._v(" 错误定义")]),s._v(" "),r("h4",{attrs:{id:"种类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#种类"}},[s._v("#")]),s._v(" 种类")]),s._v(" "),r("p",[s._v("错误分为三种未捕获异常、系统异常、业务异常，以下是分类比较")]),s._v(" "),r("table",[r("thead",[r("tr",[r("th",[s._v("定义")]),s._v(" "),r("th",[s._v("未捕获异常")]),s._v(" "),r("th",[s._v("系统异常")]),s._v(" "),r("th",[s._v("业务错误")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("类名")]),s._v(" "),r("td",[s._v("Error")]),s._v(" "),r("td",[s._v("xxxException")]),s._v(" "),r("td",[s._v("xxxBizError")])]),s._v(" "),r("tr",[r("td",[s._v("说明")]),s._v(" "),r("td",[s._v("js内置错误，未做任何处理")]),s._v(" "),r("td",[s._v("自己抛出的系统异常")]),s._v(" "),r("td",[s._v("自己跑出的业务异常")])]),s._v(" "),r("tr",[r("td",[s._v("错误处理方式")]),s._v(" "),r("td",[s._v("由onerror插件处理")]),s._v(" "),r("td",[s._v("业务可扩展处理")]),s._v(" "),r("td",[s._v("业务处理")])]),s._v(" "),r("tr",[r("td",[s._v("可识别")]),s._v(" "),r("td",[s._v("否")]),s._v(" "),r("td",[s._v("是")]),s._v(" "),r("td",[s._v("是")])]),s._v(" "),r("tr",[r("td",[s._v("属性扩展")]),s._v(" "),r("td",[s._v("否")]),s._v(" "),r("td",[s._v("是")]),s._v(" "),r("td",[s._v("是")])])])]),s._v(" "),r("p",[s._v("类名只是用来区分三种错误，继承可以自定义")]),s._v(" "),r("p",[s._v("所有的类均继承自Error类，并定义BaseError类，集成子BaseError的错误是可以被识别的，而其他三方继承Error的类都发被识别。")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("class BaseError extends Error {}\n\nclass HttpClientError extends BaseError {}\nclass HttpServerError extends BaseError {}\n\nBaseError.check(BaseError); // true\nBaseError.check(Error); // false\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br")])]),r("p",[s._v("如果业务跑出自定义的系统异常和业务错误，可直接在错误里面处理，为捕获异常在onerror中处理")]),s._v(" "),r("p",[s._v("即成的错误可增加额外的属性，比如HttpError可增加额外属性，比如HttpError可增加status属性作为处理函数的输入")]),s._v(" "),r("h4",{attrs:{id:"字段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字段"}},[s._v("#")]),s._v(" 字段")]),s._v(" "),r("p",[s._v("标准字段包括")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("name：一般为类名，如NotFoundError")])]),s._v(" "),r("li",[r("p",[s._v("message: 错误的具体信息，可读的，如404 Not Found")])]),s._v(" "),r("li",[r("p",[s._v("code：答谢的字符串，描述错误，如NOT_FOUND\nhttp扩展")])]),s._v(" "),r("li",[r("p",[s._v("status: http状态码，400")])])]),s._v(" "),r("h3",{attrs:{id:"错误抛出"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#错误抛出"}},[s._v("#")]),s._v(" 错误抛出")]),s._v(" "),r("p",[s._v("自行在代码里面引入对应的类")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("import { http } from 'egg-errors';\n\nclass User extends Controller {\n  async show() {\n    this.check(this.params.id);\n\n    // 继续处理\n  }\n\n  check(id) {\n    if (!id) throw new http.UnprocessableEntityError('id is required');\n  }\n}\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br")])]),r("p",[s._v("自定义类")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("import { BaseError } from 'egg-errors';\n\nclass CustomError extends BaseError {\n  constructor(message) {\n    super(message);\n    this.code = 'CUSTOM_ERROR';\n  }\n}\n\nthrow new CustomError('xxx');\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br")])]),r("h3",{attrs:{id:"错误处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[s._v("#")]),s._v(" 错误处理")]),s._v(" "),r("p",[s._v("错误处理是最核心的功能，有如下规则：")]),s._v(" "),r("ol",[r("li",[s._v("未捕获异常不错处理，向上抛")]),s._v(" "),r("li",[s._v("系统异常会打印错误日志，但是会按照标准格式format")]),s._v(" "),r("li",[s._v("业务异常根据标准格式format")]),s._v(" "),r("li",[s._v("根据内容协商，返回对应的format值")]),s._v(" "),r("li",[s._v("可自定义format")])]),s._v(" "),r("p",[s._v("标准format")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v('{\n  "code": "",\n  "message": ""\n}\n')])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br")])])])}),[],!1,null,null,null);r.default=e.exports}}]);