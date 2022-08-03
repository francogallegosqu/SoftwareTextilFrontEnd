(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ccd9fcd"],{1079:function(n,t,r){"use strict";var e=r("541c");t["a"]=e["a"]},5431:function(n,t,r){"use strict";r.r(t);var e=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("button-group-basic"),r("button-group-size"),r("button-group-dropdown-support")],1)],1)},o=[],i=r("a15b"),a=r("b28b"),p=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("b-card-code",{attrs:{title:"Basic"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeBasic)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[n._v("Group a series of buttons together on a single line with ")]),r("code",[n._v("<b-button-group>")]),r("span",[n._v(".")])]),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v(" First ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v(" Second ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v(" Third ")])],1)],1)},u=[],b=r("12aa"),d=r("1947"),s=r("d6e4"),l=r("1079"),v=r("e009"),m='\n<template>\n  <b-button-group>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      First\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Second\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Third\n    </b-button>\n  </b-button-group>\n</template>\n\n<script>\nimport { BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',c='\n<template>\n  <div>\n    <div>\n      \x3c!-- large --\x3e\n      <b-button-group\n        size="lg"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n    <div>\n\n      \x3c!-- default --\x3e\n      <b-button-group\n        class="my-1"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n\n    <div>\n\n      \x3c!-- size --\x3e\n      <b-button-group\n        size="sm"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',g='\n<template>\n  <b-button-group>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Button\n    </b-button>\n    <b-dropdown\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      right\n      variant="outline-primary"\n      text="Menu"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider />\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n    <b-dropdown\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      right\n      split\n      text="Split Menu"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider />\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n  </b-button-group>\n</template>\n\n<script>\nimport {\n  BButtonGroup, BButton, BDropdown, BDropdownItem, BDropdownDivider, \n} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BDropdown,\n    BDropdownItem,\n    BButton,\n    BDropdownDivider,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',w={components:{BButtonGroup:b["a"],BButton:d["a"],BCardText:s["a"],BCardCode:l["a"]},directives:{Ripple:v["a"]},data:function(){return{codeBasic:m}}},B=w,_=r("2877"),f=Object(_["a"])(B,p,u,!1,null,null,null),y=f.exports,x=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("b-card-code",{attrs:{title:"Size"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeSize)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[n._v("Set the size prop to ")]),r("code",[n._v("lg")]),r("span",[n._v(" or ")]),r("code",[n._v("sm")]),r("span",[n._v(" to render larger or smaller, respectively, buttons. There is no need to specify the size on the individual buttons.")])]),r("div",[r("b-button-group",{attrs:{size:"lg"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v(" First ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v(" Second ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v(" Third ")])],1)],1),r("div",[r("b-button-group",{staticClass:"my-1"},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v(" First ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v(" Second ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v(" Third ")])],1)],1),r("div",[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v(" First ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v(" Second ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v(" Third ")])],1)],1)],1)},h=[],S={components:{BButtonGroup:b["a"],BButton:d["a"],BCardText:s["a"],BCardCode:l["a"]},directives:{Ripple:v["a"]},data:function(){return{codeSize:c}}},D=S,N=Object(_["a"])(D,x,h,!1,null,null,null),I=N.exports,G=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("b-card-code",{staticClass:"mb-0",attrs:{title:"Dropdown menu support"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeDropdown)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[n._v("Add ")]),r("code",[n._v("<b-dropdown>")]),r("span",[n._v(" menus directly inside your ")]),r("code",[n._v("<b-button-group>")]),r("span",[n._v(". Note that split dropdown menus are not supported when prop ")]),r("code",[n._v("vertical")]),r("span",[n._v(" is set.")])]),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v(" Button ")]),r("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{right:"",variant:"outline-primary",text:"Menu"}},[r("b-dropdown-item",[n._v("Item 1")]),r("b-dropdown-item",[n._v("Item 2")]),r("b-dropdown-divider"),r("b-dropdown-item",[n._v("Item 3")])],1),r("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary",right:"",split:"",text:"Split Menu"}},[r("b-dropdown-item",[n._v("Item 1")]),r("b-dropdown-item",[n._v("Item 2")]),r("b-dropdown-divider"),r("b-dropdown-item",[n._v("Item 3")])],1)],1)],1)},z=[],C=r("dd9a"),T=r("9eaa"),R=r("f47c"),F={components:{BButtonGroup:b["a"],BDropdown:C["a"],BDropdownItem:T["a"],BButton:d["a"],BCardCode:l["a"],BDropdownDivider:R["a"],BCardText:s["a"]},directives:{Ripple:v["a"]},data:function(){return{codeDropdown:g}}},k=F,j=Object(_["a"])(k,G,z,!1,null,null,null),E=j.exports,M={components:{BRow:i["a"],BCol:a["a"],ButtonGroupBasic:y,ButtonGroupSize:I,ButtonGroupDropdownSupport:E}},O=M,$=Object(_["a"])(O,e,o,!1,null,null,null);t["default"]=$.exports}}]);
//# sourceMappingURL=chunk-4ccd9fcd.99044a45.js.map