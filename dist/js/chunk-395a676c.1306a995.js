(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-395a676c"],{"034e":function(e,t,r){"use strict";r("d8e8")},"0f99":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{attrs:{modal:"",title:"Actualizar "+e.nameTitle,"header-bg-variant":"warning","modal-class":"modal-warning","hide-footer":"","body-class":"mb-2","title-tag":"h3","no-close-on-backdrop":""},on:{hidden:e.closeModal},model:{value:e.isOpenUpdate,callback:function(t){e.isOpenUpdate=t},expression:"isOpenUpdate"}},[r("b-row",{staticClass:"w-100 m-0 p-0"},[r("b-col",{attrs:{cols:"12"}},[r("b-row",{staticClass:"w-100 m-0"},[r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:e.nameTitle,"label-for":"name"}},[r("validation-provider",{attrs:{name:"Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("b-form-input",{attrs:{id:"name",state:!(a.length>0)&&null,placeholder:e.nameTitle},model:{value:e.formUpdate.name,callback:function(t){e.$set(e.formUpdate,"name",t)},expression:"formUpdate.name"}}),r("small",{staticClass:"text-danger"},[e._v(e._s(a[0]))])]}}])})],1)],1),e.isAvailable?r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Elige","label-for":"idTemplate"}},[r("validation-provider",{attrs:{name:"IdTemplate",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-select",{staticClass:"w-100",attrs:{options:e.optionsUpdate,reduce:function(e){return e.id},label:e.nameLabelRegister,state:!(a.length>0)&&null},model:{value:e.formUpdate.value,callback:function(t){e.$set(e.formUpdate,"value",t)},expression:"formUpdate.value"}}),r("small",{staticClass:"text-danger"},[e._v(e._s(a[0]))])]}}],null,!1,1844121750)})],1)],1):e._e(),r("b-col",{staticClass:"d-flex justify-content-end",attrs:{cols:"12"}},[r("b-button",{attrs:{variant:"warning",type:"submit"},on:{click:e.validationFormUpdate}},[e._v(" Actualizar ")])],1)],1)],1)],1)],1)},n=[],i={props:{isUpdate:{type:Boolean},isAvailable:{type:Boolean},nameTitle:{type:String},formUpdate:{type:Object},optionsUpdate:{type:Array},nameLabelRegister:{type:String}},data:function(){return{isOpenUpdate:this.isUpdate}},methods:{validationFormUpdate:function(){this.$emit("validationFormUpdate")},closeModal:function(){this.$emit("closeModal")}}},s=i,o=(r("034e"),r("2877")),l=Object(o["a"])(s,a,n,!1,null,null,null);t["a"]=l.exports},"3fe5":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",{staticClass:"w-100 m-0 p-0"},[r("b-card",{staticClass:"w-100"},[r("b-pagination",{attrs:{"per-page":e.paginate.perPage,"total-rows":e.paginate.totalData,"hide-goto-end-buttons":""},model:{value:e.paginate.currentPage,callback:function(t){e.$set(e.paginate,"currentPage",t)},expression:"paginate.currentPage"}}),e._t("table")],2)],1)},n=[],i={props:{paginate:{type:Object}}},s=i,o=r("2877"),l=Object(o["a"])(s,a,n,!1,null,null,null);t["a"]=l.exports},5860:function(e,t,r){},"8f90":function(e,t,r){"use strict";r("d789")},9283:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",{staticClass:"w-100 m-0 p-0"},[r("b-col",{attrs:{cols:"12"}},[r("b-card",{staticClass:"w-100"},[r("h1",{staticClass:"\n          title-card-register\n          bg-mainColor\n          p-1\n          mb-4\n          text-white text-center\n        "},[e._v(" Registra Tu "+e._s(e.nameTitle)+" ")]),r("b-row",{staticClass:"w-100 m-0"},[r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:e.nameTitle,"label-for":"name"}},[r("validation-provider",{attrs:{name:"Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("b-form-input",{attrs:{id:"name",state:!(a.length>0)&&null,placeholder:e.nameTitle},model:{value:e.formRegister.name,callback:function(t){e.$set(e.formRegister,"name",t)},expression:"formRegister.name"}}),r("small",{staticClass:"text-danger"},[e._v(e._s(a[0]))])]}}])})],1)],1),e.isAvailable?r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Elige","label-for":"idTemplate"}},[r("validation-provider",{attrs:{name:"IdTemplate",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-select",{staticClass:"w-100",attrs:{options:e.optionsRegister,label:e.nameLabelRegister,state:!(a.length>0)&&null},model:{value:e.formRegister.value,callback:function(t){e.$set(e.formRegister,"value",t)},expression:"formRegister.value"}}),r("small",{staticClass:"text-danger"},[e._v(e._s(a[0]))])]}}],null,!1,3664390977)})],1)],1):e._e(),r("b-col",{staticClass:"d-flex justify-content-end",attrs:{cols:"12"}},[r("b-button",{attrs:{variant:"primary",type:"submit"},on:{click:e.validationFormRegister}},[e._v(" Crear ")])],1)],1)],1)],1)],1)},n=[],i=r("4a7a"),s=r.n(i),o={components:{vSelect:s.a},props:{isAvailable:{type:Boolean},nameTitle:{type:String},formRegister:{type:Object},optionsRegister:{type:Array},nameLabelRegister:{type:String}},methods:{validationFormRegister:function(){this.$emit("validationFormRegister")}}},l=o,c=(r("8f90"),r("2877")),u=Object(c["a"])(l,a,n,!1,null,null,null);t["a"]=u.exports},9881:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex justify-content-center"},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(30, 30, 30, 0.15)",expression:"'rgba(30, 30, 30, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-warning",modifiers:{hover:!0,"v-warning":!0}}],staticClass:"button-action-depart mr-1",attrs:{title:"Actualizar",variant:"outline-warning"}},[e._t("update")],2),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(234, 84, 85, 0.15)",expression:"'rgba(234, 84, 85, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{hover:!0,"v-danger":!0}}],staticClass:"button-action-depart",attrs:{title:"Eliminar",variant:"outline-danger"}},[e._t("delete")],2)],1)},n=[],i=r("2616"),s=r("e009"),o={props:{},directives:{"b-tooltip":i["a"],Ripple:s["a"]}},l=o,c=(r("9a6b"),r("2877")),u=Object(c["a"])(l,a,n,!1,null,"66ceb6f2",null);t["a"]=u.exports},"9a6b":function(e,t,r){"use strict";r("5860")},c296:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("t-general-title",{attrs:{title:"Ciudad"}}),r("b-row",{staticClass:"match-height"},[r("b-col",{attrs:{cols:"12",sm:"12",md:"5",lg:"5",xl:"5"}},[r("validation-observer",{ref:"formSendRegisterC"},[r("b-row",[r("t-register",{attrs:{isAvailable:!0,nameTitle:"Ciudad",formRegister:e.formRegister,optionsRegister:e.optionsRegister,nameLabelRegister:"nameDepartment"},on:{validationFormRegister:e.validationFormRegister}})],1)],1)],1),r("b-col",{attrs:{cols:"12",sm:"12",md:"7",lg:"7",xl:"7"}},[r("t-pagination-table",{attrs:{paginate:e.paginate}},[r("b-table",{ref:"refListCity",attrs:{slot:"table","sticky-header":"40vh",responsive:"sm",items:e.myProvider,fields:e.fields,"current-page":e.paginate.currentPage,"per-page":e.paginate.perPage,busy:e.isBusy,hover:!0},on:{"update:busy":function(t){e.isBusy=t}},slot:"table",scopedSlots:e._u([{key:"table-busy",fn:function(){return[r("div",{staticClass:"text-center text-primary my-2"},[r("b-spinner",{staticClass:"align-middle mr-1"}),r("strong",[e._v("Loading ...")])],1)]},proxy:!0},{key:"cell(actions)",fn:function(t){return[r("t-actions",[r("feather-icon",{staticClass:"text-warning",attrs:{slot:"update",icon:"SettingsIcon"},on:{click:function(r){return e.openModal(t.item)}},slot:"update"}),r("feather-icon",{staticClass:"text-danger",attrs:{slot:"delete",icon:"Trash2Icon"},on:{click:function(r){return e.deleteCity(t.item)}},slot:"delete"})],1)]}}])})],1)],1)],1),r("validation-observer",{ref:"formSendUpdateCi"},[e.isUpdate?r("t-update",{attrs:{isUpdate:e.isUpdate,nameTitle:"Departamento",formUpdate:e.formUpdate},on:{validationFormUpdate:e.validationFormUpdate,closeModal:e.closeModal}}):e._e()],1)],1)},n=[],i=r("1da1"),s=(r("96cf"),r("b0c0"),r("99af"),r("b64b"),r("9283")),o=r("0f99"),l=r("f273"),c=r("3fe5"),u=r("9881"),p=r("d4ec"),d=r("bee2"),m=r("2777"),f=function(){function e(){Object(p["a"])(this,e)}return Object(d["a"])(e,[{key:"createCity",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["b"].post("/api/cities",t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"listCity",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["b"].get("/api/cities/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateCity",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["b"].put("/api/cities/".concat(t),r);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"deleteCity",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["b"].delete("/api/cities/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"listDepartment",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["b"].get("/api/departments?".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),v=new f,b=[{key:"idCity",sortable:!1,label:"ID"},{key:"nameCity",sortable:!1,label:"Ciudad"},{key:"actions",sortable:!1,class:"text-center",label:"Accion"}],g={components:{TRegister:s["a"],TGeneralTitle:l["a"],TPaginationTable:c["a"],TUpdate:o["a"],TActions:u["a"]},data:function(){return{formRegister:{name:"",value:""},formUpdate:{id:"",name:""},paginate:{currentPage:1,perPage:5,totalData:0},fields:b,isBusy:!1,isUpdate:!1,optionsRegister:[]}},methods:{validationFormRegister:function(){var e=this;this.$refs.formSendRegisterC.validate().then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=14;break}return t.prev=1,a={nameCity:e.formRegister.name,idDepartment:e.formRegister.value.idDepartment},t.next=5,v.createCity(a);case 5:t.sent,e.showSuccessSwal(),e.$refs.refListCity.refresh(),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](1),e.showErrorSwal(),console.log("[error]=>",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}())},validationFormUpdate:function(){var e=this;this.$refs.formSendUpdateCi.validate().then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=15;break}return t.prev=1,a={idCity:e.formUpdate.id,nameCity:e.formUpdate.name,idDepartment:""},t.next=5,v.updateCity(e.formUpdate.id,a);case 5:t.sent,e.showSuccessSwal(),e.closeModal(),e.$refs.refListCity.refresh(),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](1),e.showErrorSwal(),console.log("[error]=>",t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}())},deleteCity:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.showQuestionSwal("Eliminar");case 3:if(a=r.sent,!a.value){r.next=12;break}return n=e.idCity,r.next=8,v.deleteCity(n);case 8:r.sent,t.showSuccessSwal(),t.closeModal(),t.$refs.refListCity.refresh();case 12:r.next=18;break;case 14:r.prev=14,r.t0=r["catch"](0),t.showErrorSwal(),console.log("[error]=>",r.t0);case 18:case"end":return r.stop()}}),r,null,[[0,14]])})))()},listDepartment:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t="page=0&size=100&sortDir=asc&sort=idDepartment",e.next=4,v.listDepartment(t);case 4:return r=e.sent,e.abrupt("return",r||[]);case 8:return e.prev=8,e.t0=e["catch"](0),console.log("[error]=>",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},openModal:function(e){this.formUpdate.id=null===e||void 0===e?void 0:e.idCity,this.formUpdate.name=null===e||void 0===e?void 0:e.nameCity,this.isUpdate=!0},closeModal:function(){this.isUpdate=!1,this.formUpdate={id:"",name:""}},myProvider:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isBusy=!0,a="page/".concat(e.currentPage,"?sortField=idCity&sortDir=asc&pageSize=").concat(e.perPage),r.next=5,v.listCity(a);case 5:return n=r.sent,i=n[Object.keys(n)[0]],t.paginate.totalData=null===i||void 0===i?void 0:i.totalElements,r.abrupt("return",(null===i||void 0===i?void 0:i.content)||[]);case 11:return r.prev=11,r.t0=r["catch"](0),r.abrupt("return",[]);case 14:return r.prev=14,t.isBusy=!1,r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[0,11,14,17]])})))()}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.listDepartment();case 2:e.optionsRegister=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},h=g,w=r("2877"),y=Object(w["a"])(h,a,n,!1,null,null,null);t["default"]=y.exports},d789:function(e,t,r){},d8e8:function(e,t,r){},f273:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",{staticClass:"w-100 m-0 p-0"},[r("b-card",{staticClass:"w-100"},[r("h1",{staticClass:"text-center"},[e._v(" Sistema Administrador De "+e._s(e.title))])])],1)},n=[],i={props:{title:{type:String}}},s=i,o=r("2877"),l=Object(o["a"])(s,a,n,!1,null,null,null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-395a676c.1306a995.js.map