webpackJsonp([6],{316:function(e,t,i){function n(e){i(504)}var a=i(2)(i(405),i(550),n,null,null);e.exports=a.exports},405:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(65),a=function(e){return e&&e.__esModule?e:{default:e}}(n),s=i(409),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(s),r=i(9);t.default={name:"mail_list",data:function(){return{list:[],total:0,listLoading:!1,listQuery:{page:1,limit:20,title:"",type:"",startDate:null,stopDate:null,sort:"",order:"",routeQuery:{}},dateRange:[],multipleSelection:[],typeOptions:[{value:"receive",showValue:"收件"},{value:"send",showValue:"发件"}],dateOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,i=new Date;i.setTime(i.getTime()-6048e5),e.$emit("pick",[i,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,i=new Date;i.setTime(i.getTime()-2592e6),e.$emit("pick",[i,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,i=new Date;i.setTime(i.getTime()-7776e6),e.$emit("pick",[i,t])}}]},searchType:null}},created:function(){this.searchType=this.$route.params.labelId?"labelId":"deleted",this.getList()},filters:{typeFilter:function(e){return{receive:"primary",send:"success"}[e]},typeShowFilter:function(e){return{receive:"收件",send:"发件"}[e]}},methods:{getList:function(){var e=this;this.listQuery.startDate=this.dateRange[0]?this.dateRange[0].getTime():null,this.listQuery.stopDate=this.dateRange[1]?this.dateRange[1].getTime():null,(0,a.default)(this.listQuery.routeQuery,this.$route.params,this.$route.meta),l.fetchList(this.listQuery).then(function(t){e.list=t.data.items,e.total=t.data.total})},goToDetail:function(e){this.$store.commit("SET_MAIL_ID",e.id),this.$store.commit("SET_MAIL_TYPE",e.type),this.$router.push({path:"/mail_detail/index"})},handleFilter:function(){this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},customSort:function(e){this.listQuery.sort=e.prop,this.listQuery.order=e.order,this.getList()},forward:function(){if(1!==(this.multipleSelection.length||0))return void this.$message("请选择一封邮件进行转发");this.$store.commit("SET_MAIL_ID",this.multipleSelection[0].id),this.$store.commit("SET_PAGE_TYPE","forward"),this.$store.commit("SET_MAIL_TYPE",this.multipleSelection[0].type),this.$router.push({path:"/mail_send/index"})},handleSelectionChange:function(e){this.multipleSelection=e},handleDelete:function(){var e=this,t=this.multipleSelection.length||0;if(t<1)return void this.$message("请选择邮件进行删除");this.$confirm("是否删除这"+t+"封邮件?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t=[];e.multipleSelection.forEach(function(e){return t.push(e.id)}),l.delMail(t).subscribe({next:function(){e.$message({message:"删除成功",type:"success",duration:2e3}),e.getList()},error:function(){return e.$message({showClose:!0,message:"删除失败",type:"error"})}})}).catch(function(){e.$message("操作已取消")})},unDeleted:function(){var e=this;if((this.multipleSelection.length||0)<1)return void this.$message("请选择邮件撤销删除");var t=[];this.multipleSelection.forEach(function(e){return t.push(e.id)}),l.unDoDelMail(t).subscribe({next:function(){e.$message({message:"撤销删除成功",type:"success",duration:2e3}),e.getList()},error:function(){return e.$message({showClose:!0,message:"撤销删除失败",type:"error"})}})},handleDownload:function(){var e=this;i.e(19).then(function(){var t=i(334),n=t.export_json_to_excel,a=["发件人","发件邮箱","主题","时间"],s=["sendName","sendMail","title","date"];n(a,e.formatJson(s,e.list),(0,r.parseTime)(Date.now())+"邮件列表数据")}.bind(null,i)).catch(i.oe)},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return~e.indexOf("date")?(0,r.parseTime)(t[e]):t[e]})})}}}},409:function(e,t,i){"use strict";function n(e){return(0,r.default)({url:"/mail_list",method:"get",params:e})}function a(e){var t=String(e);return console.log("要删除的邮件id:"+t),o.Observable.create(function(e){setTimeout(function(){e.next(!0)},500)})}function s(e){var t=String(e);return console.log("要撤销删除的邮件id:"+t),o.Observable.create(function(e){setTimeout(function(){e.next(!0)},500)})}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchList=n,t.delMail=a,t.unDoDelMail=s;var l=i(35),r=function(e){return e&&e.__esModule?e:{default:e}}(l),o=i(64)},422:function(e,t,i){t=e.exports=i(300)(!0),t.push([e.i,".star{color:#f08a5d}","",{version:3,sources:["E:/web/Vue/vue-mail-front/src/views/mail_list/index.vue"],names:[],mappings:"AACA,MACI,aAAc,CACjB",file:"index.vue",sourcesContent:["\n.star {\r\n    color: #F08A5D\n}\r\n"],sourceRoot:""}])},504:function(e,t,i){var n=i(422);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(301)("002b95c2",n,!0)},550:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticClass:"filter-container"},["deleted"===e.searchType?i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"tool-item filter-item btn-add",attrs:{type:"primary"},on:{click:e.unDeleted}},[i("icon-svg",{attrs:{"icon-class":"undo"}})],1):e._e(),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"tool-item filter-item btn-forward",attrs:{type:"primary",icon:"share"},on:{click:e.forward}}),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"tool-item filter-item btn-del",attrs:{type:"danger",icon:"delete"},on:{click:function(t){e.handleDelete()}}}),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"tool-item filter-item btn-reload",attrs:{type:"primary"},on:{click:e.getList}},[i("icon-svg",{attrs:{"icon-class":"reload4"}})],1),e._v(" "),i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"标题"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.listQuery.title=t},expression:"listQuery.title"}}),e._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{clearable:"",placeholder:"类型"},model:{value:e.listQuery.type,callback:function(t){e.listQuery.type=t},expression:"listQuery.type"}},e._l(e.typeOptions,function(e){return i("el-option",{key:e.value,attrs:{label:e.showValue,value:e.value}})})),e._v(" "),i("el-date-picker",{staticClass:"tool-item filter-item",attrs:{type:"datetimerange","picker-options":e.dateOptions,placeholder:"选择时间范围",align:"right"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}}),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"text",icon:"document"},on:{click:e.handleDownload}},[e._v("导出")])],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:"","highlight-current-row":""},on:{"sort-change":e.customSort,"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection","min-width":"30px"}}),e._v(" "),i("el-table-column",{attrs:{align:"left",width:"90px",label:"信息"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("icon-svg",{staticClass:"star",attrs:{"icon-class":t.row.isStar?"favourite":"favourite-o"},nativeOn:{click:function(i){e.toggleStar(t.row)}}}),e._v(" "),t.row.isHaveFile?i("icon-svg",{staticClass:"file",attrs:{"icon-class":"label4"}}):e._e(),e._v(" "),t.row.isHaveAudio?i("icon-svg",{attrs:{"icon-class":"voice4"}}):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{"class-name":"status-col",label:"类型",width:"90px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tag",{attrs:{type:e._f("typeFilter")(t.row.type)}},[e._v(e._s(e._f("typeShowFilter")(t.row.type)))])]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"发件人"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.sendMail,placement:"top"}},[i("span",[e._v(e._s(t.row.sendName))])])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"主题","show-overflow-tooltip":!0,"min-width":"500px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"link-type",on:{click:function(i){e.goToDetail(t.row)}}},[e._v(e._s(t.row.title))]),e._v(" "),e._l(t.row.labelList,function(t){return i("el-tag",{key:t.guid},[e._v(e._s(t.name))])})]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"date",sortable:"custom",align:"center",label:"时间",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e._f("parseTime")(t.row.date,"{y}-{m}-{d} {h}:{i}")))])]}}])})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.listQuery.page=t}}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=6.82f1f412306037251904.js.map