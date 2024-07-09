(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{513:function(a,t,i){"use strict";i.r(t);var _=i(2),s=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"淘宝网的后台架构发展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#淘宝网的后台架构发展"}},[a._v("#")]),a._v(" 淘宝网的后台架构发展")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/HByG8x9ew_KDHReowlxkag",target:"_blank",rel:"noopener noreferrer"}},[a._v("转载"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("文章最后汇总了一些架构设计的原则。")]),a._v(" "),t("h2",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[a._v("#")]),a._v(" 基本概念")]),a._v(" "),t("p",[a._v("在介绍架构之前，为了避免部分读者对架构设计中的一些概念不了解，下面对几个最基础的概念进行介绍。")]),a._v(" "),t("p",[t("strong",[a._v("1）什么是分布式？")]),a._v("\n系统中的多个模块在不同服务器上部署，即可称为分布式系统，如Tomcat和数据库分别部署在不同的服务器上，或两个相同功能的Tomcat分别部署在不同服务器上。")]),a._v(" "),t("p",[t("strong",[a._v("2）什么是高可用？")]),a._v("\n系统中部分节点失效时，其他节点能够接替它继续提供服务，则可认为系统具有高可用性。")]),a._v(" "),t("p",[t("strong",[a._v("3）什么是集群？")]),a._v("\n一个特定领域的软件部署在多台服务器上并作为一个整体提供一类服务，这个整体称为集群。\n如Zookeeper中的Master和Slave分别部署在多台服务器上，共同组成一个整体提供集中配置服务。\n在常见的集群中，客户端往往能够连接任意一个节点获得服务，并且当集群中一个节点掉线时，其他节点往往能够自动的接替它继续提供服务，这时候说明集群具有高可用性。")]),a._v(" "),t("p",[t("strong",[a._v("4）什么是负载均衡？")]),a._v("\n请求发送到系统时，通过某些方式把请求均匀分发到多个节点上，使系统中每个节点能够均匀的处理请求负载，则可认为系统是负载均衡的。")]),a._v(" "),t("p",[t("strong",[a._v("5）什么是正向代理和反向代理？")]),a._v("\n系统内部要访问外部网络时，统一通过一个代理服务器把请求转发出去，在外部网络看来就是代理服务器发起的访问，此时代理服务器实现的是正向代理；\n当外部请求进入系统时，代理服务器把该请求转发到系统中的某台服务器上，对外部请求来说，与之交互的只有代理服务器，此时代理服务器实现的是反向代理。\n简单来说，正向代理是代理服务器代替系统内部来访问外部网络的过程，反向代理是外部请求访问系统时通过代理服务器转发到内部服务器的过程。")]),a._v(" "),t("h2",{attrs:{id:"纯真年代-单机架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#纯真年代-单机架构"}},[a._v("#")]),a._v(" 纯真年代：单机架构")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_png/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaasdtCQFA3DthCj6h2enePjhWLgmJH9bKk6rrC4S4vC0jWe2ZdyU6VUw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("以淘宝作为例子：在网站最初时，应用数量与用户数都较少，可以把Tomcat和数据库部署在同一台服务器上。浏览器往www.taobao.com发起请求时，首先经过DNS服务器（域名系统）把域名转换为实际IP地址10.102.4.1，浏览器转而访问该IP对应的Tomcat。\n架构瓶颈：随着用户数的增长，Tomcat和数据库之间竞争资源，单机性能不足以支撑业务。")]),a._v(" "),t("h2",{attrs:{id:"第一次演进-tomcat与数据库分开部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一次演进-tomcat与数据库分开部署"}},[a._v("#")]),a._v(" 第一次演进：Tomcat与数据库分开部署")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_png/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaaMItUbYlhFkvbyU4Wff7kVLTVOEBt5spJicdvUf6xVnibfqEiaJHnUmP1w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("Tomcat和数据库分别独占服务器资源，显著提高两者各自性能。\n架构瓶颈：随着用户数的增长，并发读写数据库成为瓶颈。\nTips：欢迎关注微信公众号：架构之路，获取更多技术博文推送。")]),a._v(" "),t("h2",{attrs:{id:"第二次演进-引入本地缓存和分布式缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二次演进-引入本地缓存和分布式缓存"}},[a._v("#")]),a._v(" 第二次演进：引入本地缓存和分布式缓存")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_png/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaaqshNYwSWINMMdgH1E3FwTUB29uShr9ckAy8WAFVYUTRJCHNKRljdeg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("在Tomcat同服务器上或同JVM中增加本地缓存，并在外部增加分布式缓存，缓存热门商品信息或热门商品的html页面等。通过缓存能把绝大多数请求在读写数据库前拦截掉，大大降低数据库压力。\n其中涉及的技术包括：使用memcached作为本地缓存，使用Redis作为分布式缓存，还会涉及缓存一致性、缓存穿透/击穿、缓存雪崩、热点数据集中失效等问题。\n架构瓶颈：缓存抗住了大部分的访问请求，随着用户数的增长，并发压力主要落在单机的Tomcat上，响应逐渐变慢。")]),a._v(" "),t("h2",{attrs:{id:"第三次演进-引入反向代理实现负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三次演进-引入反向代理实现负载均衡"}},[a._v("#")]),a._v(" 第三次演进：引入反向代理实现负载均衡")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_png/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaauicJzJV88oeIQktGI2ZEwmd2vTE7yyxaY4t1jibXAaEtZMFglhg8VP3g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("在多台服务器上分别部署Tomcat，使用反向代理软件（Nginx）把请求均匀分发到每个Tomcat中。此处假设Tomcat最多支持100个并发，Nginx最多支持50000个并发，那么理论上Nginx把请求分发到500个Tomcat上，就能抗住50000个并发。\n其中涉及的技术包括：Nginx、HAProxy，两者都是工作在网络第七层的反向代理软件，主要支持http协议，还会涉及session共享、文件上传下载的问题。\n架构瓶颈：反向代理使应用服务器可支持的并发量大大增加，但并发量的增长也意味着更多请求穿透到数据库，单机的数据库最终成为瓶颈。")]),a._v(" "),t("h2",{attrs:{id:"第四次演进-数据库读写分离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第四次演进-数据库读写分离"}},[a._v("#")]),a._v(" 第四次演进：数据库读写分离")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_png/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaaBHTO4Lncz49icVyYWOHALt3RBgWTOS7wccDWdmx8ia7bN9cv1icYRuQ7A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("把数据库划分为读库和写库，读库可以有多个，通过同步机制把写库的数据同步到读库，对于需要查询最新写入数据场景，可通过在缓存中多写一份，通过缓存获得最新数据。\n其中涉及的技术包括：Mycat，它是数据库中间件，可通过它来组织数据库的分离读写和分库分表，客户端通过它来访问下层数据库，还会涉及数据同步，数据一致性的问题。\n架构瓶颈：业务逐渐变多，不同业务之间的访问量差距较大，不同业务直接竞争数据库，相互影响性能。")]),a._v(" "),t("h2",{attrs:{id:"第五次演进-数据库按业务分库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第五次演进-数据库按业务分库"}},[a._v("#")]),a._v(" 第五次演进：数据库按业务分库")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_png/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaaSBaibtwng9RdWhdegtuKEZkyBHe2r81Qb3lpA5Bia7cicMPBEiasibicm1IQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("把不同业务的数据保存到不同的数据库中，使业务之间的资源竞争降低，对于访问量大的业务，可以部署更多的服务器来支撑。这样同时导致跨业务的表无法直接做关联分析，需要通过其他途径来解决，但这不是本文讨论的重点，有兴趣的可以自行搜索解决方案。\n架构瓶颈：随着用户数的增长，单机的写库会逐渐会达到性能瓶颈。")]),a._v(" "),t("h2",{attrs:{id:"第六次演进-把大表拆分为小表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第六次演进-把大表拆分为小表"}},[a._v("#")]),a._v(" 第六次演进：把大表拆分为小表")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_png/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaaY0Yd29iaIv35Ym7yf4HzLnkUZjibdJ1sjUibQ9PjzYxXIUz0gic6tiaa0jw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("比如针对评论数据，可按照商品ID进行hash，路由到对应的表中存储；针对支付记录，可按照小时创建表，每个小时表继续拆分成小表，使用用户ID或记录编号来路由数据。只要实时操作的表的数据量足够小，请求能够足够均匀的分发到多台服务器上的小表，拿数据库就能通过水平扩展的方式来提高性能。其中前面提到的Mycat也支持在大表拆分为小表情况下的访问控制。")]),a._v(" "),t("p",[a._v("这种做法显著的增加了数据库运维的难度，对DBA的要求较高。数据库设计到这种结构时，已经可以称为分布式数据库，但是这只是一个逻辑的数据库整体，数据库里不同的组成部分是由不同的组件单独来实现的，如分库分表的管理和请求分发，由Mycat实现，SQL的解析由单机的数据库实现，读写分离可能由网关和消息队列来实现，查询结果的汇总可能由数据库接口层来实现等等，这种架构其实是MPP（大规模并行处理）架构的一类实现")]),a._v(" "),t("p",[a._v("目前开源和商用都已经有不少MPP数据库，开源中比较流行的有Greenplum、TiDB、Postgresql XC、HAWQ等，商用的如南大通的GBase、睿凡科技的雪球DB、华为的LibrA等等，不同的MPP数据库的侧重点也不一样，如TiDB更侧重于分布式OLTP场景，Greenplum更侧重于分布式OLAP场景，这些MPP数据哭基本都提供了类似Postgresql】Oracle、MySQL那样的SQL标准支持能力，能把一个查询解析为分布式的执行计划分布到每台机器上并执行，最终数据库本身汇总数据进行返回，也提供了注入权限管理、分库分表、事务、数据副本等能力，并且大多能够支持100个节点以上的集群，大大降低了数据库韵味的成本，并且使数据库也能够实现水平扩展。")]),a._v(" "),t("p",[a._v("架构瓶颈：数据库和Tomcat能够水平扩展，可支撑的并发大幅提高，随着用户数的增长，最终单机的Nginx会成为瓶颈")]),a._v(" "),t("h2",{attrs:{id:"第七次演进-使用lvs或f5来使多个nginx负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第七次演进-使用lvs或f5来使多个nginx负载均衡"}},[a._v("#")]),a._v(" 第七次演进：使用LVS或F5来使多个Nginx负载均衡")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_png/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaa0PPysN5OrwPmZ0xwFda8QroHcGB9SD98ldMUlfFF6vmN6OxTxNxwxg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("由于瓶颈在Nginx，因袭无法通过两层的Nginx来实现多个Nginx的负载均衡。图中的LVS和F5时工作在网络第四层的负载均衡解决方案，其中LVS是软件，运行在操作系统内核态，可对TCP请求或更更高层级的网络协议进行转发，因袭支持的协议更丰富，冰球性能也远高于Nginx，可假设单机的LVS可支持几十万个并发的请求转发；F5是一种负载均衡硬件，与LVS提供的能力类似，性能比LVS更高，但价格昂贵。由于LVS是单机版的软件，若LVS所在服务器宕机则会导致整个后端系统都无法发文，因袭需要有备用节点。可食用keepalived软件模拟出虚拟IP，然后把虚拟IP绑定到多台LVS服务器上，浏览器访问虚拟IP时，会被路由器重定向到真实的LVS服务器，当主LVS服务器宕机时，keepalived软件会自动更新路由器中的路由表，把虚拟IP重定向到另外一台正常的LVS服务器，从而达到LVS服务器高可用的效果。")]),a._v(" "),t("p",[a._v("此处需要注意的是，上图中从Nginx层到Tomcat层这样画并不代表全部Nginx都转发请求到全部的Tomcat，在实际使用时，可能会是几个Nginx下面接一部分的Tomcat，这些Nginx之间通过keepalived实现高可用，其他的Nginx接另外的Tomcat，这样可接入的Tomcat数量就能成倍的增加。\n架构瓶颈：由于LVS也是单机的，随着并发数增长到几十万时，LVS服务器最终会达到瓶颈，此时用户数达到千万甚至上亿级别，用户分布在不同的地区，与服务器机房距离不同，导致了访问的延迟会明显不同。")]),a._v(" "),t("h2",{attrs:{id:"第八次演进-通过dns轮询实现机房间的负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第八次演进-通过dns轮询实现机房间的负载均衡"}},[a._v("#")]),a._v(" 第八次演进：通过DNS轮询实现机房间的负载均衡")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_png/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaaNpAicY7EpKFUzB9eMKA1qUx8PkqFYWgaNWqb61g0NZZv6jwEtJWATzQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("在DNS服务器中可配置一个域名对应多个IP地址，每个IP地址对应到不同的机房里的虚拟IP。当用户访问www.taobao.com时，DNS服务器会使用轮训策略或其他策略，来选择某个IP供用户访问，此方式能实现机房间的负载均衡，至此，系统可做到机房级别的水平扩展，千万级别到亿级的兵法量都可以通过增加机房来解决，系统入口处的请求并发量不再是问题")]),a._v(" "),t("p",[a._v("架构瓶颈：随着数据的丰富成都和业务的发展，检索、分析等需求越来越丰富，单单依靠数据库无法解决如此丰富的需求。")]),a._v(" "),t("h2",{attrs:{id:"第九次演进-引入nosql数据库和搜索引擎等技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第九次演进-引入nosql数据库和搜索引擎等技术"}},[a._v("#")]),a._v(" 第九次演进：引入NoSQL数据库和搜索引擎等技术")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_png/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaawSu0YGAdNkDI986tbgSX2wPKibVRrXerM6XevU9yAicuibXBhjTlOLfkA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("当数据库中的数据多到一定规模时，数据库就不适用于复杂的查询了，往往只能满足普通的场景。对于统计报表场景，在数据量大时不一定能跑出结果，而且在跑复杂查询时会导致其他查询编码，对于全文检索、可变数据结构等场景，数据库天生不适用。因此需要针对特定的场景，引入合适的解决方案。如对于海量文件存储，可通过分布式文件系统HDFS解决，对于key value类型的数据，可通过HBase和Redis等方案解决，对于全文检索场景，可通过搜索引擎如ElasticSearch解决，对于多维分析场景，可通过Kylin或Druid等方案解决。\n当然，引入更多组件同时会提高系统的复杂度，不同的组件保存的数据需要同步，需要考虑一致性的问题，需要有更多的运维手段来管理这些组件等。\n架构瓶颈：引入更多组件解决了丰富的需求，业务维度能够极大扩充，随之而来的是一个应用中包含了太多的业务代码，业务的升级迭代变得困难。")]),a._v(" "),t("h2",{attrs:{id:"第十次演进-大应用拆分为小应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第十次演进-大应用拆分为小应用"}},[a._v("#")]),a._v(" 第十次演进：大应用拆分为小应用")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_png/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaaEp2HqhIAH5IWapHv7gYkbITuibZibN45O2UqNBHHEPiaYg9NUeElFtcwg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("按照业务板块来划分应用代码，使单个应用的职责更清晰，相互之间可以做到独立升级迭代。这时候应用之间可能会涉及到一些公共配置，可以通过分布式配置中心Zookeeper来解决。\n架构瓶颈：不同应用之间存在共用的模块，由应用单独管理会导致相同代码存在多份，导致公共功能升级时全部应用代码都要跟着升级。")]),a._v(" "),t("h2",{attrs:{id:"第十一次演进-复用的功能抽离成微服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第十一次演进-复用的功能抽离成微服务"}},[a._v("#")]),a._v(" 第十一次演进：复用的功能抽离成微服务")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_png/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaaiaUtiba9BdKYUU1OpwgsB7UyuF1AzsHINEicibCp7CYpZeA3SNCj3UjS2w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("如用户管理、订单、支付、鉴权等功能在多个应用中都存在，那么可以把这些功能的代码单独抽取出来形成一个单独的服务来管理，这样的服务就是所谓的微服务，应用和服务之间通过HTTP、TCP或RPC请求等多种方式来访问公共服务，每个单独的服务都可以由单独的团队来管理。此外，可以通过Dubbo、SpringCloud等狂简实现服务治理、限流、熔断、降级等功能，提高服务的稳定性和可用性。")]),a._v(" "),t("p",[a._v("架构瓶颈：不同服务的接口访问方式不同，应用代码需要适配多种访问方式才能使用服务，此外，应用访问服务，服务之间也可能相互访问，调用链将会变得非常复杂，逻辑变得混乱")]),a._v(" "),t("h2",{attrs:{id:"第十二次演进-引入企业服务总线esb屏蔽服务接口的访问差异"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第十二次演进-引入企业服务总线esb屏蔽服务接口的访问差异"}},[a._v("#")]),a._v(" 第十二次演进：引入企业服务总线ESB屏蔽服务接口的访问差异")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_png/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaaTkNpo0lIULnDsAV174L3kWtqfep0QFwbOtia12Hsf3ibibeicNiahljib7TA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("通过ESB统一进行访问协议转换，应用同意通过ESB来访问后端服务，服务与服务指甲吗也通过ESB来相互调用，以此降低系统的耦合程度")]),a._v(" "),t("p",[a._v("这种单个应用拆分为多个应用，公共服务单独抽取出来来管理，并使用企业消息总线来解除服务之间耦合问题的架构，就是所谓的SOA（面向服务）架构，这种架构与微服务架构容易混淆，因为表现形式十分相似。")]),a._v(" "),t("p",[a._v("个人理解，微服务架构更多是指把系统里的公共服务抽取出来单独运维管理的思想，而SOA架构则是指一种拆分服务并使服务接口访问变得统一的架构思想，SOA架构中包含了微服务的思想。")]),a._v(" "),t("p",[a._v("架构瓶颈：业务不断发展，应用和服务都会不断变多，应用和服务的部署变得复杂，同一台服务其上部署多个服务还要解决运行环境冲突的问题，此外，对于如大促这类需要动态扩缩容的场景，需要水平扩展服务的型嫩高，就需要在新增的服务上准备运行环境，部署服务等，运维将变得十分困难。")]),a._v(" "),t("h2",{attrs:{id:"第十三次演进-引入容器化技术实现运行环境隔离与动态服务管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第十三次演进-引入容器化技术实现运行环境隔离与动态服务管理"}},[a._v("#")]),a._v(" 第十三次演进：引入容器化技术实现运行环境隔离与动态服务管理")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_png/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaaP56Y4wUOghK6yeaib1bXjiblVnbfKwEAkm57jzPvyFVicopicTeQcNFr1g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("目前最流行的容器化技术是Docker，最流行的容器管理服务是Kubernetes(k8s)，应用/服务可以打包为Docker镜像，通过K8S来动态分发和部署镜像。Docker镜像可理解为一个能运行你的应用/服务最小的操作系统，里面放着应用/服务的运行代码，运行环境根据实际的需要设置好。把这个“操作系统”打包为一个镜像后，就可以分发到 需要部署相关服务的机器上，直接启动Docker京瓷昂就可以把服务起起来，使服务的部署和运维变得简单。")]),a._v(" "),t("p",[a._v("在大促的之前，可以在现有的机器集群上划分出服务器来启动Docker镜像，增强服务的性能，大促过后就可以关闭镜像，对机器上的其他服务不造城影响（在第18节之前，服务运行在新增机器上需要修改系统配置来适配服务，这会导致机器上其他服务需要的运行环境被破坏）。")]),a._v(" "),t("p",[a._v("架构瓶颈：使用容器化技术后服务动态扩缩容问题得以解决，但是机器还是需要公司自身来管理，在非大促的时候，还是需要闲置着大量的机器资源来应对大促，机器自身成本和运维成本都极高，资源利用率低。")]),a._v(" "),t("h2",{attrs:{id:"第十四次演进-以云平台承载系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第十四次演进-以云平台承载系统"}},[a._v("#")]),a._v(" 第十四次演进：以云平台承载系统")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://mmbiz.qpic.cn/mmbiz_jpg/ic8RqseyjxMNhZDmwgWmibdPb2lxyvqhiaaOm3eZicM4ibS4KLD0jj21rjO2tmORgx0icVblqTUiav1pRPxI4TfPe3L3Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("系统可部署到公有云上，利用公有云的海量及其资源，解决动态硬件资源的问题，在大促的时间段里，在云平台中临时申请更多的资源，结合Docker和K8S来快速部署服务，在大促结束后释放资源，真正做到按需付费，资源利用率大大提高，同时大大降低了运维成本")]),a._v(" "),t("p",[a._v("所谓的云平台，就是把海量机器资源，通过统一的资源管理，抽象为一个资源整体，在智商可按需动态申请硬件资源（如CPU、内存、网络等），并且之上提供通用的操作系统，提供常用的技术组件（如Hadoop技术栈，MPP数据库等）供用户使用，甚至提供开发好的应用，用户不需要关心应用内部使用了什么技术，就能够解决（如音视频转码服务、邮件服务、个人博客等）。")]),a._v(" "),t("p",[a._v("在云平台会涉及如下几个概念：")]),a._v(" "),t("p",[a._v("1）laaS：基础设施即服务。对应于上面所说的及其资源统一为资源整体，可动态申请硬件资源的层面")]),a._v(" "),t("p",[a._v("2）PaaS：平台即服务。对应于上面所说的提供常用的技术组件方便系统的开发和维护；")]),a._v(" "),t("p",[a._v("3）SaaS：软件即服务。对应于上面所说的提供开发好的应用或服务，安功能或性能要求付费")]),a._v(" "),t("p",[a._v("至此：以上所提到的从高并发访问问题，到服务的架构和系统实施的层面都有了各自的解决方案。但同时也应该意识到，在上面的介绍中，其实是有意忽略了诸如跨机房数据同步、分布式事务实现等等的实际问题，这些问题以后有机会再拿出来单独讨论。")]),a._v(" "),t("h2",{attrs:{id:"架构设计经验小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构设计经验小结"}},[a._v("#")]),a._v(" 架构设计经验小结")]),a._v(" "),t("p",[a._v("1） 结构的调整是否必须按照上述演变路进行？")]),a._v(" "),t("p",[a._v("不是的，以上所说的架构演变顺序只是针对某个侧面进行单独的改进，在实际场景中，可能同一时间会有几个问题需要解决，或者可能先达到瓶颈的是另外的方面，这时候就应该按照实际问题实际解决。如在政府类的并发量可能不大，但业务可能很丰富的场景，高并发就不是重点解决的问题，此时优先需要的可能会是丰富需求的解决方案。")]),a._v(" "),t("p",[a._v("2）对于将要实施的系统，架构应该设计到什么程度？\n对于单次实施并且性能指标明确的系统，架构设计到能够支持系统的性能指标要求就足够了，但要留有扩展架构的接口以便不备之需。对于不断发展的系统，如电商平台，应设计到能满足下一阶段用户量和性能指标要求的程度，并根据业务的增长不断的迭代升级架构，以支持更高的并发和更丰富的业务。")]),a._v(" "),t("p",[a._v("3）服务端架构和大数据架构有什么区别？")]),a._v(" "),t("p",[a._v("所谓的“大数据”其实是海量数据采集清晰转换、数据存储、数据分析、数据服务等场景解决方案的一个统称，在每一个场景都包含了多种可选的技术，如数据采集有Flume、Sqoop、Kettle等，数据存储有分布式文件系统HDFS、FastDFS、NoSQL数据库HBase、MongoDB等，数据分析有Spark技术栈、机器学习算法等")]),a._v(" "),t("p",[a._v("总的来说大数据架构就是根据业务的需求，整合各种大数据组件组合而成的架构，一般会提供分布式存储、分布式计算、多维分析、数据仓库、机器学习算法等能力。而服务端架构更多指的是应用组织层面的架构，底层能力往往是由大数据架构来提供。")]),a._v(" "),t("p",[a._v("4）有没有一些架构设计的原则？")]),a._v(" "),t("ul",[t("li",[a._v("N+1设计：系统中的每个组件都应做到没有单点故障；")]),a._v(" "),t("li",[a._v("回滚设计：确保系统可以向前兼容，在系统升级时应能有办法回滚版本；")]),a._v(" "),t("li",[a._v("禁用设计：应该提供控制具体功能是否可用的配置，在系统出现故障时能够快速下线功能；")]),a._v(" "),t("li",[a._v("监控设计：在设计阶段就要考虑监控的手段；")]),a._v(" "),t("li",[a._v("多活数据中心设计：若系统需要极高的高可用，应考虑在多地实施数据中心进行多活，至少在一个机房断电的情况下系统依然可用；")]),a._v(" "),t("li",[a._v("采用成熟的技术：刚开发的或开源的技术往往存在很多隐藏的bug，出了问题没有商业支持可能会是一个灾难；")]),a._v(" "),t("li",[a._v("资源隔离设计：应避免单一业务占用全部资源；")]),a._v(" "),t("li",[a._v("架构应能水平扩展：系统只有做到能水平扩展，才能有效避免瓶颈问题；")]),a._v(" "),t("li",[a._v("非核心则购买：非核心功能若需要占用大量的研发资源才能解决，则考虑购买成熟的产品；")]),a._v(" "),t("li",[a._v("使用商用硬件：商用硬件能有效降低硬件故障的机率；")]),a._v(" "),t("li",[a._v("快速迭代：系统应该快速开发小功能模块，尽快上线进行验证，早日发现问题大大降低系统交付的风险；")]),a._v(" "),t("li",[a._v("无状态设计：服务接口应该做成无状态的，当前接口的访问不依赖于接口上次访问的状态。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);