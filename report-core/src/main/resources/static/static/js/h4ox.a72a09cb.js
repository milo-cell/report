(window.webpackJsonp=window.webpackJsonp||[]).push([["h4ox"],{h4ox:function(e,t,r){"use strict";r.r(t);var i=r("t3Un");function a(e){return Object(i.a)({url:"accessRole/pageList",method:"GET",params:e})}function l(e){return Object(i.a)({url:"accessRole",method:"post",data:e})}function o(e){return Object(i.a)({url:"accessRole/delete/batch",method:"post",data:e})}function n(e){return Object(i.a)({url:"accessRole",method:"put",data:e})}function d(e){return Object(i.a)({url:"accessRole/"+e.id,method:"get",params:{accessKey:e.accessKey}})}function s(e){return Object(i.a)({url:"accessRole/authorityTree/"+e,method:"get"})}function u(e){return Object(i.a)({url:"accessRole/saveAuthorityTree",method:"post",data:e})}var c=r("14Xm"),p=r.n(c),b=r("D3Ub"),f=r.n(b),h={props:{visib:{required:!0,type:Boolean,default:!1},roleCode:{required:!0,type:String,default:function(){return""}}},data:function(){return{checkedKeys:[],treeData:[]}},watch:{visib:function(e){e&&(console.log(1),this.getTreeData())}},created:function(){},methods:{getTreeData:function(){var e=this;return f()(p.a.mark(function t(){var r,i,a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(e.roleCode);case 2:if(r=t.sent,i=r.code,a=r.data,"200"==i){t.next=7;break}return t.abrupt("return");case 7:e.treeData=a.treeData,e.checkedKeys=a.checkedKeys;case 9:case"end":return t.stop()}},t,e)}))()},saveTreeData:function(){var e=this;return f()(p.a.mark(function t(){var r,i;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={roleCode:e.roleCode,authorityList:e.$refs.roleTree.getCheckedKeys(!0)},t.next=3,u(r);case 3:if(i=t.sent,"200"==i.code){t.next=7;break}return t.abrupt("return");case 7:e.closeDialog();case 8:case"end":return t.stop()}},t,e)}))()},closeDialog:function(){this.treeData=[],this.checkedKeys=[],this.$emit("handleClose")}}},y=r("KHd+"),g=Object(y.a)(h,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"tree_dialog",attrs:{title:"为角色分配权限",width:"60%","close-on-click-modal":!1,center:"",visible:e.visib,"before-close":e.closeDialog},on:{"update:visible":function(t){e.visib=t}}},[r("el-tree",{ref:"roleTree",attrs:{data:e.treeData,"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":e.checkedKeys}}),e._v(" "),r("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",plain:""},on:{click:e.saveTreeData}},[e._v("保存")]),e._v(" "),r("el-button",{attrs:{type:"danger",plain:""},on:{click:e.closeDialog}},[e._v("取消")])],1)],1)},[],!1,null,null,null);g.options.__file="RoleAuthority.vue";var m={name:"AccessRole",components:{RoleAuthority:g.exports},data:function(){var e=this;return{dialogVisibleSetAuthorityForRole:!1,roleCode:"",crudOption:{title:"角色管理",labelWidth:"120px",queryFormFields:[{inputType:"input",label:"角色编码",field:"roleCode"},{inputType:"input",label:"角色名称",field:"roleName"},{inputType:"anji-select",anjiSelectOption:{dictCode:"ENABLE_FLAG"},label:"启用状态",field:"enableFlag"}],buttons:{query:{api:a,permission:"roleManage:query"},queryByPrimarykey:{api:d,permission:"roleManage:query"},add:{api:l,permission:"roleManage:insert"},delete:{api:o,permission:"roleManage:delete"},edit:{api:n,permission:"roleManage:update"}},columns:[{label:"",field:"id",primaryKey:!0,tableHide:!0,editHide:!0},{label:"角色编码",placeholder:"",field:"roleCode",editField:"roleCode",tableHide:!0,inputType:"input",rules:[{required:!0,message:"角色编码必填",trigger:"blur"},{min:1,max:32,message:"不超过32个字符",trigger:"blur"}],disabled:!1},{label:"角色名称",placeholder:"",field:"roleName",fieldTableRowRenderer:function(e){return e.roleName+"["+e.roleCode+"]"},editField:"roleName",inputType:"input",rules:[{required:!0,message:"角色名称必填",trigger:"blur"},{min:1,max:64,message:"不超过64个字符",trigger:"blur"}],disabled:!1},{label:"启用状态",placeholder:"",field:"enableFlag",fieldTableRowRenderer:function(t){return e.getDictLabelByCode("ENABLE_FLAG",t.enableFlag)},editField:"enableFlag",inputType:"anji-select",anjiSelectOption:{dictCode:"ENABLE_FLAG"},colorStyle:{0:"table-danger",1:"table-success"},rules:[{required:!0,message:"启用状态必填",trigger:"blur"}],disabled:!1},{label:"创建人",placeholder:"",field:"createBy",editField:"createBy",inputType:"input",editHide:"hideOnAdd",disabled:!0},{label:"创建时间",placeholder:"",field:"createTime",editField:"createTime",inputType:"input",editHide:"hideOnAdd",disabled:!0},{label:"修改人",placeholder:"",field:"updateBy",editField:"updateBy",inputType:"input",editHide:"hideOnAdd",disabled:!0},{label:"修改时间",placeholder:"",field:"updateTime",editField:"updateTime",inputType:"input",editHide:"hideOnAdd",disabled:!0}]}}},created:function(){},methods:{handleOpenDialogSetAuthorityForRole:function(e){this.roleCode=e.msg.roleCode,this.dialogVisibleSetAuthorityForRole=!0}}},v=Object(y.a)(m,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("anji-crud",{ref:"listPage",attrs:{option:e.crudOption},scopedSlots:e._u([{key:"buttonLeftOnTable",fn:function(){},proxy:!0},{key:"rowButton",fn:function(t){return[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"roleManage:grantAuthority",expression:"'roleManage:grantAuthority'"}],attrs:{type:"text"},on:{click:function(r){return e.handleOpenDialogSetAuthorityForRole(t)}}},[e._v("分配权限")])]}},{key:"pageSection",fn:function(){return[r("RoleAuthority",{attrs:{"role-code":e.roleCode,visib:e.dialogVisibleSetAuthorityForRole},on:{handleClose:function(t){e.dialogVisibleSetAuthorityForRole=!1}}})]},proxy:!0}])})},[],!1,null,null,null);v.options.__file="index.vue";t.default=v.exports}}]);