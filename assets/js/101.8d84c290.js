(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{523:function(e,n,t){"use strict";t.r(n);var a=t(2),r=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"企业级分布式-edas模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#企业级分布式-edas模式"}},[e._v("#")]),e._v(" 企业级分布式，EDAS模式")]),e._v(" "),n("p",[e._v("部署在 ECS 实例后应用仅仅处于「可用」的状态，还面临着如下问题和隐患：")]),e._v(" "),n("p",[e._v("迭代能力不足，无法优雅终止和快速启动应用 —— 每次重新部署都将会造成应用不可用；\n健壮性不足，物理或系统出现的问题将可能导致应用不可用；\n并发性不足，虽然在网站前期不会是瓶颈，但单机的模式扩容有其上限。\n很容易就能想到使用容器化技术和集群模式。")]),e._v(" "),n("p",[e._v("这就可以应用 Docker 和 Kubernetes（以下简称 k8s），阿里云提供了容器服务 Kubernetes 版。此时应用的架构是这样：")]),e._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://gcc68.oss-cn-hangzhou.aliyuncs.com/2019-11-04-v2-58273a1146476c535f17fe6cda09585f_hd.jpg?Expires=1572864424&OSSAccessKeyId=TMP.hfD3jMgd52o8kaW7k3hBvYKhYy7wnfVAFR54kFetBM5gPZY225moJBi7nquY14ejM8xRbktY6ESQknk7aN4TdV5WwXCpRufNnYgM2uJxUbPvTGpT1HfM5n1E6GdaYJ.tmp&Signature=FLMxFc8WV3F07fe3uak6ia%2Ft2%2BE%3D",loading:"lazy"}})]),e._v(" "),n("ul",[n("li",[e._v("首次部署：\n"),n("ul",[n("li",[e._v("创建 k8s 集群，将集群控制权授予 EDAS；")]),e._v(" "),n("li",[e._v("创建镜像仓库，通过发布 git 标签触发构建镜像；")]),e._v(" "),n("li",[e._v("创建 EDAS 应用，关联镜像，部署应用：；")]),e._v(" "),n("li",[e._v("添加负载均衡，允许公网访问 EDAS 应用。")])])]),e._v(" "),n("li",[e._v("往后迭代：\n"),n("ul",[n("li",[e._v("通过发布 git 标签触发构建镜像；")]),e._v(" "),n("li",[e._v("访问 EDAS 应用，访问新版本镜像进行重新部署。")])])])]),e._v(" "),n("p",[e._v("参考：")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.redhat.com/zh/topics/containers/what-is-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("什么是 Docker？"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.redhat.com/zh/topics/containers/what-is-kubernetes",target:"_blank",rel:"noopener noreferrer"}},[e._v("什么是 Kubernetes？"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://help.aliyun.com/document_detail/86737.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("什么是阿里云容器服务 Kubernetes 版？"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("以下是通过 EDAS 部署 NodeBB 的指引教程。")]),e._v(" "),n("p",[e._v("2.1 创建 Kubernetes 集群\n首先我们需要一个 k8s 集群用于部署我们的应用。访问"),n("a",{attrs:{href:"https://cs.console.aliyun.com/#/k8s/cluster/create/dedicated",target:"_blank",rel:"noopener noreferrer"}},[e._v("创建 Kubernetes 集群："),n("OutboundLink")],1)]),e._v(" "),n("ul",[n("li",[e._v("地域选择“华东 1”；")]),e._v(" "),n("li",[e._v("可用区选择“可用区 G”；")]),e._v(" "),n("li",[e._v("专有网络选择和上一步“ECS 部署”的一致（因为接下来将需要连接 MongoDB）。")])]),e._v(" "),n("p",[n("em",[n("strong",[e._v("参考：")])])]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://help.aliyun.com/document_detail/86488.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何创建 Kubernetes 集群？"),n("OutboundLink")],1),e._v("：")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://help.aliyun.com/document_detail/95108.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何创建 Kubernetes 托管版集群？"),n("OutboundLink")],1),e._v(" > 相比于默认的 Kubernetes 集群，托管版本会主动替您运维一套高可用的 Master 组件，免去了默认版本集群中三个 Master ECS 节点，从而节约所需的资金成本及维护时的人力成本。-- "),n("a",{attrs:{href:"https://yq.aliyun.com/articles/681954",target:"_blank",rel:"noopener noreferrer"}},[e._v("《使用 Terraform 创建托管版 Kubernetes》"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://help.aliyun.com/document_detail/86493.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何创建多可用区 Kubernetes 集群？"),n("OutboundLink")],1),e._v(" > 为了保证业务应用的高可用，有些客户会要求关键应用部署到多个机房，一个机房一旦出问题，其他机房正常工作，从而让应用保持不间断连续运行。阿里云支持多 Region（地域），每个 Region 下又有不同的可用区。可用区是指在同一地域内，电力和网络互相独立的物理区域。多可用区能够实现跨区域的容灾能力。同时也会带来额外的网络延时。")])]),e._v(" "),n("p",[e._v("2.2 创建 Docker 镜像\n紧接着，我们需要构建出应用的 Docker 镜像。访问容器镜像服务控制台：")]),e._v(" "),n("p",[e._v("创建镜像仓库：")]),e._v(" "),n("ul",[n("li",[e._v("代码仓库选择上一步“ECS 部署”中的仓库；")]),e._v(" "),n("li",[e._v("勾选“代码变更时自动构建镜像”。")])]),e._v(" "),n("p",[n("em",[n("strong",[e._v("构建镜像：")])])]),e._v(" "),n("p",[e._v("在代码仓库的根目录下创建配置文件 config.json：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "url": "http://xxx.taobao.com",\n  "secret": "xxx",\n  "database": "mongo",\n  "mongo": {\n    "uri": "mongodb://xxxx"\n  },\n  "port": "4567"\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])]),n("p",[e._v("Dockerfile 中使用配置文件启动 NodeBB：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" FROM node:8.15.0\n RUN mkdir -p /usr/src/app WORKDIR /usr/src/app\n ARG NODE_ENV ENV NODE_ENV $NODE_ENV COPY install/package.json /usr/src/app/package.json RUN npm install && npm cache clean --force COPY . /usr/src/app\n ENV NODE_ENV=production \\     daemon=false \\     silent=false\n RUN ./nobebb build CMD ./nodebb start\n EXPOSE 4567\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("通过发布标签触发镜像构建："),n("code",[e._v("release-v$version")])]),e._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://gcc68.oss-cn-hangzhou.aliyuncs.com/2019-11-04-v2-f8f392c39943cbe68e990db36cf1d81e_r.jpg?Expires=1572864410&OSSAccessKeyId=TMP.hfD3jMgd52o8kaW7k3hBvYKhYy7wnfVAFR54kFetBM5gPZY225moJBi7nquY14ejM8xRbktY6ESQknk7aN4TdV5WwXCpRufNnYgM2uJxUbPvTGpT1HfM5n1E6GdaYJ.tmp&Signature=yKCoAJ%2BkXODs%2BCulvho27miwCvg%3D",loading:"lazy"}})]),e._v(" "),n("p",[e._v("2.3 创建 EDAS 应用")]),e._v(" "),n("p",[e._v("然后我们创建一个 EDAS 应用，并使用刚创建的镜像部署该应用。访问 EDAS 控制台：")]),e._v(" "),n("ul",[n("li",[e._v("访问“EDAS - 资源管理 - 集群”：导入刚创建的 K8S 集群；")]),e._v(" "),n("li",[e._v("访问“EDAS - 应用管理 - 应用列表”：创建新应用：\n"),n("ul",[n("li",[e._v("集群类型：选择“容器服务K8S集群” - 选择刚导入的 K8S 集群；")]),e._v(" "),n("li",[e._v("镜像：选择上一步构建的镜像和版本。")])])]),e._v(" "),n("li",[e._v("配置应用：\n"),n("ul",[n("li",[e._v("添加负载均衡（公网）：")])])])]),e._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://gcc68.oss-cn-hangzhou.aliyuncs.com/2019-11-04-v2-7fc62ebd5f6664668dca59f953782699_hd.jpg?Expires=1572864354&OSSAccessKeyId=TMP.hfD3jMgd52o8kaW7k3hBvYKhYy7wnfVAFR54kFetBM5gPZY225moJBi7nquY14ejM8xRbktY6ESQknk7aN4TdV5WwXCpRufNnYgM2uJxUbPvTGpT1HfM5n1E6GdaYJ.tmp&Signature=EN1UgT10%2FMoN7CU%2BrzVyjAxOnmI%3D",loading:"lazy"}})]),e._v(" "),n("ul",[n("li",[e._v("通过负载均衡IP验证应用部署是否成功。")])]),e._v(" "),n("p",[e._v("2.4 配置负载均衡")]),e._v(" "),n("p",[e._v("最后，我们在负载均衡层强制启用HTTPS，并将域名解析道负载均衡的公网IP。")]),e._v(" "),n("p",[e._v("访问"),n("a",{attrs:{href:"https://slb.console.aliyun.com/slb/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("负载均衡控制台"),n("OutboundLink")],1),e._v("操作：")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("创建证书：")]),e._v(" "),n("ul",[n("li",[e._v("访问“负载均衡-实例-证书管理”")]),e._v(" "),n("li",[e._v("点击创建证书")]),e._v(" "),n("li",[e._v("选择“上传第三方签发证书”")]),e._v(" "),n("li",[e._v("上传“ECS部署”章节中下载的证书")])])]),e._v(" "),n("li",[n("p",[e._v("负载均衡配置")]),e._v(" "),n("ul",[n("li",[e._v("通过IP找到对应的负载均衡实例")]),e._v(" "),n("li",[e._v("添加HTTPS监听（参考"),n("a",{attrs:{href:"https://help.aliyun.com/document_detail/86438.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《如何添加HTTPS监听》"),n("OutboundLink")],1),e._v("）\n"),n("ul",[n("li",[e._v("协议选择HTTPS")]),e._v(" "),n("li",[e._v("监听端口输入“443”")]),e._v(" "),n("li",[e._v("高级配置中，开启会话保持")]),e._v(" "),n("li",[e._v("SSL证书选择上一步创建的证书")]),e._v(" "),n("li",[e._v("后端服务器选择“虚拟服务器组”")])])]),e._v(" "),n("li",[e._v("删除原TCP 80的监听；")]),e._v(" "),n("li",[e._v("添加HTTP监听\n"),n("ul",[n("li",[e._v("协议选择“HTTP”")]),e._v(" "),n("li",[e._v("监听端口输入“80”")]),e._v(" "),n("li",[e._v("高级配置开启“监听转发”")]),e._v(" "),n("li",[e._v("目的监听选择“HTTPS 443”")])])]),e._v(" "),n("li",[e._v("通过HTTPS访问IP验证负载均衡配置成功；")]),e._v(" "),n("li",[e._v("域名映射：通过IDNS将"),n("a",{attrs:{href:"https://store.taobao.com/shop/noshop.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("xxx.taobao.com"),n("OutboundLink")],1),e._v("A到负载均衡公网IP")])])])])])}),[],!1,null,null,null);n.default=r.exports}}]);