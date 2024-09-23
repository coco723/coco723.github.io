(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{524:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("在 MySQL 中，"),t("code",[s._v("REFERENCES")]),s._v(" 关键字用于定义外键约束（Foreign Key Constraint），它用于在两个表之间建立关联，从而维护数据的完整性。外键约束可以确保某个表中的值必须存在于另一个表中，避免无效的引用。")]),s._v(" "),t("h3",{attrs:{id:"外键约束的定义语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外键约束的定义语法"}},[s._v("#")]),s._v(" 外键约束的定义语法")]),s._v(" "),t("p",[s._v("外键约束通常在 "),t("code",[s._v("CREATE TABLE")]),s._v(" 或 "),t("code",[s._v("ALTER TABLE")]),s._v(" 语句中使用 "),t("code",[s._v("REFERENCES")]),s._v(" 来定义。")]),s._v(" "),t("h4",{attrs:{id:"_1-在-create-table-中定义外键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-在-create-table-中定义外键"}},[s._v("#")]),s._v(" 1. "),t("strong",[s._v("在 "),t("code",[s._v("CREATE TABLE")]),s._v(" 中定义外键")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" child_table "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    parent_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOREIGN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parent_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REFERENCES")]),s._v(" parent_table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("parent_id")]),s._v(": 是 "),t("code",[s._v("child_table")]),s._v(" 中的列，它通过外键关联到 "),t("code",[s._v("parent_table")]),s._v(" 中的 "),t("code",[s._v("id")]),s._v(" 列。")]),s._v(" "),t("li",[t("code",[s._v("FOREIGN KEY (parent_id)")]),s._v(": 定义 "),t("code",[s._v("parent_id")]),s._v(" 列为外键。")]),s._v(" "),t("li",[t("code",[s._v("REFERENCES parent_table(id)")]),s._v(": 指定 "),t("code",[s._v("parent_id")]),s._v(" 列引用 "),t("code",[s._v("parent_table")]),s._v(" 中的 "),t("code",[s._v("id")]),s._v(" 列。")])]),s._v(" "),t("h4",{attrs:{id:"_2-在-alter-table-中添加外键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-在-alter-table-中添加外键"}},[s._v("#")]),s._v(" 2. "),t("strong",[s._v("在 "),t("code",[s._v("ALTER TABLE")]),s._v(" 中添加外键")])]),s._v(" "),t("p",[s._v("如果你已经有一个表，可以使用 "),t("code",[s._v("ALTER TABLE")]),s._v(" 语句来添加外键：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" child_table\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONSTRAINT")]),s._v(" fk_parent\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOREIGN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parent_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REFERENCES")]),s._v(" parent_table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("ADD CONSTRAINT fk_parent")]),s._v(": 为外键命名为 "),t("code",[s._v("fk_parent")]),s._v("，便于后续管理。")]),s._v(" "),t("li",[t("code",[s._v("FOREIGN KEY (parent_id)")]),s._v(": 指定 "),t("code",[s._v("parent_id")]),s._v(" 列为外键。")]),s._v(" "),t("li",[t("code",[s._v("REFERENCES parent_table(id)")]),s._v(": 指定引用的表和列。")])]),s._v(" "),t("h3",{attrs:{id:"外键约束的规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外键约束的规则"}},[s._v("#")]),s._v(" 外键约束的规则")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("ON DELETE CASCADE")]),s._v(": 当父表中的记录被删除时，自动删除子表中与之关联的记录。"),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOREIGN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parent_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REFERENCES")]),s._v(" parent_table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASCADE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("strong",[s._v("ON UPDATE CASCADE")]),s._v(": 当父表中的记录被更新时，子表中的外键值也会随之更新。"),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOREIGN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parent_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REFERENCES")]),s._v(" parent_table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASCADE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("数据类型")]),s._v("：外键列和引用的列必须具有相同的数据类型或兼容的类型。")]),s._v(" "),t("li",[t("strong",[s._v("索引要求")]),s._v("：被引用的列（如 "),t("code",[s._v("parent_table(id)")]),s._v("）必须是主键或有唯一约束的列（"),t("code",[s._v("UNIQUE")]),s._v("）。")]),s._v(" "),t("li",[t("strong",[s._v("外键检查")]),s._v("：如果外键检查被禁用，可以通过以下方式启用："),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" FOREIGN_KEY_CHECKS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("REFERENCES")]),s._v(" 用于定义外键约束，确保表之间的引用完整性。")]),s._v(" "),t("li",[s._v("可以在 "),t("code",[s._v("CREATE TABLE")]),s._v(" 或 "),t("code",[s._v("ALTER TABLE")]),s._v(" 语句中定义。")]),s._v(" "),t("li",[s._v("外键支持删除、更新时的级联操作来自动维护引用完整性。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);