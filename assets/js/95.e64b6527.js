(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{516:function(_,v,t){"use strict";t.r(v);var s=t(2),a=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[v("code",[_._v("DELETE")]),_._v(" 和 "),v("code",[_._v("TRUNCATE")]),_._v(" 是 MySQL 中用于删除表中数据的两种操作，但它们有不同的使用场景和效果。下面是它们的区别和联系：")]),_._v(" "),v("h3",{attrs:{id:"_1-删除数据的方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-删除数据的方式"}},[_._v("#")]),_._v(" 1. "),v("strong",[_._v("删除数据的方式")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("DELETE")]),_._v(":\n"),v("ul",[v("li",[v("code",[_._v("DELETE")]),_._v(" 是一条 DML（数据操作语言）语句，逐行删除表中的数据。")]),_._v(" "),v("li",[_._v("可以使用 "),v("code",[_._v("WHERE")]),_._v(" 子句来指定删除特定行。例如："),v("code",[_._v("DELETE FROM table_name WHERE condition;")]),_._v("。")]),_._v(" "),v("li",[_._v("每删除一行都会记录到数据库日志中，因此可以回滚（通过事务操作）。")]),_._v(" "),v("li",[_._v("删除数据后，表的结构和索引不会改变，自动增长的 "),v("code",[_._v("AUTO_INCREMENT")]),_._v(" 字段不会重置。")])])]),_._v(" "),v("li",[v("strong",[_._v("TRUNCATE")]),_._v(":\n"),v("ul",[v("li",[v("code",[_._v("TRUNCATE")]),_._v(" 是一条 DDL（数据定义语言）语句，删除表中的所有数据。")]),_._v(" "),v("li",[_._v("删除操作不能指定 "),v("code",[_._v("WHERE")]),_._v("，它会清空整个表。")]),_._v(" "),v("li",[_._v("不会逐行删除，而是通过快速的方式来直接清空表。")]),_._v(" "),v("li",[_._v("因为是 DDL 操作，它的执行速度通常比 "),v("code",[_._v("DELETE")]),_._v(" 快很多。")]),_._v(" "),v("li",[_._v("清空表后，会重置 "),v("code",[_._v("AUTO_INCREMENT")]),_._v(" 计数器。")]),_._v(" "),v("li",[v("code",[_._v("TRUNCATE")]),_._v(" 操作不能回滚，因为它不是逐行记录日志。")])])])]),_._v(" "),v("h3",{attrs:{id:"_2-性能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-性能"}},[_._v("#")]),_._v(" 2. "),v("strong",[_._v("性能")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("DELETE")]),_._v("：由于每次删除操作都会记录日志和处理触发器，因此如果要删除大量数据，性能可能会很慢。")]),_._v(" "),v("li",[v("strong",[_._v("TRUNCATE")]),_._v("：执行效率非常高，尤其是对大数据表，因为它不记录每行的删除日志，而是通过重建表的方式来清空数据。")])]),_._v(" "),v("h3",{attrs:{id:"_3-事务支持"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-事务支持"}},[_._v("#")]),_._v(" 3. "),v("strong",[_._v("事务支持")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("DELETE")]),_._v("：支持事务，可以在事务中回滚。例如："),v("div",{staticClass:"language-sql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("BEGIN")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("DELETE")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("FROM")]),_._v(" table_name "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("WHERE")]),_._v(" condition"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("ROLLBACK")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[_._v("-- 可以回滚")]),_._v("\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br"),v("span",{staticClass:"line-number"},[_._v("3")]),v("br")])])]),_._v(" "),v("li",[v("strong",[_._v("TRUNCATE")]),_._v("：不支持事务，一旦执行无法回滚。")])]),_._v(" "),v("h3",{attrs:{id:"_4-触发器和外键"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-触发器和外键"}},[_._v("#")]),_._v(" 4. "),v("strong",[_._v("触发器和外键")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("DELETE")]),_._v("：会触发 "),v("code",[_._v("DELETE")]),_._v(" 触发器。")]),_._v(" "),v("li",[v("strong",[_._v("TRUNCATE")]),_._v("：不会触发任何触发器，也不允许清空有外键约束的表。")])]),_._v(" "),v("h3",{attrs:{id:"_5-适用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-适用场景"}},[_._v("#")]),_._v(" 5. "),v("strong",[_._v("适用场景")])]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("DELETE")]),_._v("：适合需要有选择地删除某些数据，或者在需要事务支持的场景下使用。")]),_._v(" "),v("li",[v("strong",[_._v("TRUNCATE")]),_._v("：适合快速清空表数据的场景，尤其是在不需要触发触发器、没有外键约束、并且不需要回滚的情况下。")])]),_._v(" "),v("h3",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("DELETE")]),_._v(" 是逐行删除，可以使用 "),v("code",[_._v("WHERE")]),_._v(" 过滤条件，支持事务和触发器，但性能较慢。")]),_._v(" "),v("li",[v("strong",[_._v("TRUNCATE")]),_._v(" 是快速清空表的操作，不支持 "),v("code",[_._v("WHERE")]),_._v("、事务和触发器，但性能非常快，会重置 "),v("code",[_._v("AUTO_INCREMENT")]),_._v("。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);