(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-433ad482"],{"4ffa":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"name",label:"标签名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"alias",label:"标签别名"}}),t._v(" "),n("el-table-column",{attrs:{prop:"description",label:"标签描述"}}),t._v(" "),n("el-table-column",{attrs:{"min-width":"100px",prop:"createdAt",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(t._f("formatDate")(e.row.createdAt)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"100px",prop:"updatedAt",label:"修改时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(t._f("formatDate")(e.row.updatedAt)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"100px",prop:"op",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:"/Label/edit/"+e.row.id}},[n("el-button",{attrs:{type:"text"}},[t._v("\n            编辑\n          ")])],1),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.deleteLabel(e.row.id)}}},[t._v("\n          删除\n        ")])]}}])})],1)],1)},i=[],l=n("f85f"),o={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0,singleLabel:{}}},created:function(){this.getLabelList()},methods:{getLabel:function(t){var e=this;Object(l["d"])(t).then((function(t){e.singleLabel=t.data[0]}))},addLabel:function(t){var e=this;Object(l["a"])(t).then((function(t){t.data&&(e.$message.success("新增成功"),e.getLabelList())}))},editLabel:function(t){var e=this;Object(l["c"])(t).then((function(t){t.data&&(e.$message.success("编辑成功"),e.getLabelList())}))},getLabelList:function(){var t=this;this.listLoading=!0,Object(l["e"])().then((function(e){t.list=e.data,t.listLoading=!1}))},deleteLabel:function(t){var e=this;this.listLoading=!0,Object(l["b"])(t).then((function(t){t.data&&(e.$message.success("删除成功"),e.getLabelList())}))}}},c=o,r=n("2877"),s=Object(r["a"])(c,a,i,!1,null,null,null);e["default"]=s.exports},f85f:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return s}));var a=n("b775"),i="/api/v1/labels";function l(t){return Object(a["a"])({url:"".concat(i),method:"post",data:t})}function o(t){return Object(a["a"])({url:"".concat(i,"/").concat(t),method:"delete"})}function c(t){return Object(a["a"])({url:"".concat(i,"/").concat(t.id),method:"put",data:t})}function r(t){return Object(a["a"])({url:"".concat(i,"/").concat(t),method:"get"})}function s(){return Object(a["a"])({url:i,method:"get"})}}}]);