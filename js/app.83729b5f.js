(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2343:function(t,e,n){"use strict";var r=n("8e41"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("8c4f"),i=(n("d1e78"),n("f309"));r["a"].use(i["a"]);var a=new i["a"]({icons:{iconfont:"md"}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},c=[],l=n("2877"),u={},p=Object(l["a"])(u,s,c,!1,null,null,null),f=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("TopBar"),n("Drawer"),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("Canvas")],1)],1)],1)],1)},d=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"primary",dark:"","clipped-left":"",fixed:""}},[!t.isMobile&&t.isDrawerOpened?n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}},[n("v-icon",[t._v("chevron_left")])],1):t._e(),t.isMobile||!t.isDrawerOpened?n("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}}):t._e(),n("v-text-field",{attrs:{"single-line":"",dense:"","hide-details":"","prepend-icon":"mode_edit"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{dark:"",icon:""}},r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",[n("v-list-item",{attrs:{href:t.gifURL,target:"_blank"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-open-in-new")])],1),n("v-list-item-content",[t._v(" Open generated icon in new window ")])],1),n("v-list-item",{attrs:{href:"https://github.com/bgpat/scroll-icon-generator",target:"_blank"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-github-circle")])],1),n("v-list-item-content",[t._v(" View on GitHub ")])],1)],1)],1)],1)},b=[],g=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),v=n("2f62");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y={computed:w({text:{get:function(){return this.$route.params.text},set:function(t){this.$store.commit("gif"),this.$router.push("/".concat(encodeURIComponent(t)))}}},Object(v["d"])(["gif","drawer"]),{},Object(v["c"])(["isMobile","isDrawerOpened","gifURL"])),methods:Object(v["b"])(["toggleDrawer"])},j=y,x=n("6544"),P=n.n(x),_=n("40dc"),k=n("5bc1"),$=n("8336"),S=n("132d"),D=n("8860"),M=n("da13"),V=n("5d23"),C=n("34c3"),E=n("e449"),z=n("8654"),F=Object(l["a"])(j,m,b,!1,null,null,null),T=F.exports;P()(F,{VAppBar:_["a"],VAppBarNavIcon:k["a"],VBtn:$["a"],VIcon:S["a"],VList:D["a"],VListItem:M["a"],VListItemContent:V["a"],VListItemIcon:C["a"],VMenu:E["a"],VTextField:z["a"]});var A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{ref:"drawer",attrs:{persistent:"",clipped:"",app:"",width:t.size,"mobile-break-point":t.minWidth},model:{value:t.opened,callback:function(e){t.opened=e},expression:"opened"}},[n("PreviewMenu"),n("AnimationMenu"),n("CanvasMenu"),n("FontMenu"),n("OutlineMenu"),n("PositionMenu")],1)},I=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MenuGroup",{attrs:{name:"preview"}},[n("v-switch",{attrs:{"prepend-icon":"image",label:t.gif?"GIF ("+t.gifSize+")":"Canvas + JavaScript",color:"primary"},model:{value:t.gifMode,callback:function(e){t.gifMode=e},expression:"gifMode"}})],1)},L=[],R=(n("b680"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-subheader",[t._v(t._s(t.name))]),n("v-card-text",[t._t("default")],2)],1)}),U=[],W={props:["name"]},B=W,N=n("b0af"),J=n("99d9"),q=n("e0c7"),H=Object(l["a"])(B,R,U,!1,null,null,null),K=H.exports;P()(H,{VCard:N["a"],VCardText:J["a"],VSubheader:q["a"]});var X={components:{MenuGroup:K},computed:{gif:{get:function(){return this.$store.state.gif},set:function(t){if(t)return this.$store.dispatch("generateGIF");this.$store.commit("gif")}},gifMode:{get:function(){return null!=this.gif},set:function(t){this.gif=t}},gifSize:function(){return this.gif.size>1e6?"".concat((this.gif.size/1e6).toFixed(1)," MB"):this.gif.size>1e3?"".concat((this.gif.size/1e3).toFixed(1)," KB"):"".concat(this.gif.size," B")}}},Q=X,Y=n("b73d"),Z=Object(l["a"])(Q,G,L,!1,null,null,null),tt=Z.exports;P()(Z,{VSwitch:Y["a"]});var et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MenuGroup",{attrs:{name:"animation"}},[n("v-slider",{attrs:{"prepend-icon":"speed",label:"speed","thumb-label":"",min:"0",max:5*t.width},model:{value:t.speed,callback:function(e){t.speed=e},expression:"speed"}}),n("v-slider",{attrs:{"prepend-icon":"filter",label:"fps","thumb-label":"",min:"1",max:"60"},model:{value:t.fps,callback:function(e){t.fps=e},expression:"fps"}}),n("v-text-field",{attrs:{"prepend-icon":"space_bar",label:"spacer"},model:{value:t.spacer,callback:function(e){t.spacer=e},expression:"spacer"}})],1)},nt=[];function rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var it={components:{MenuGroup:K},computed:ot({speed:{get:function(){return this.$store.state.speed},set:function(t){this.$store.commit("speed",t)}},fps:{get:function(){return this.$store.state.fps},set:function(t){this.$store.commit("fps",t)}},spacer:{get:function(){return this.$store.state.spacer},set:function(t){this.$store.commit("spacer",t)}}},Object(v["d"])(["width","height"]))},at=it,st=n("ba0d"),ct=Object(l["a"])(at,et,nt,!1,null,null,null),lt=ct.exports;P()(ct,{VSlider:st["a"],VTextField:z["a"]});var ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MenuGroup",{attrs:{name:"canvas"}},[n("v-slider",{attrs:{"prepend-icon":"swap_horiz",label:"width","thumb-label":"",min:"8",max:"256",step:"8"},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}}),n("v-slider",{attrs:{"prepend-icon":"swap_vert",label:"height","thumb-label":"",min:"8",max:"256",step:"8"},model:{value:t.height,callback:function(e){t.height=e},expression:"height"}}),n("v-switch",{attrs:{"prepend-icon":t.lockAspect?"lock_outline":"lock_open",label:"lock aspect ratio",color:"primary"},model:{value:t.lockAspect,callback:function(e){t.lockAspect=e},expression:"lockAspect"}}),n("ColorPicker",{attrs:{"prepend-icon":"format_color_fill",label:"background color"},model:{value:t.background,callback:function(e){t.background=e},expression:"background"}}),n("v-switch",{attrs:{"prepend-icon":"texture",label:"transparent background",color:"primary"},model:{value:t.transparent,callback:function(e){t.transparent=e},expression:"transparent"}})],1)},pt=[],ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-text-field",{attrs:{label:t.label},on:{focus:t.open},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("v-icon",{attrs:{color:t.color}},[t._v(t._s(t.prependIcon))])]},proxy:!0}]),model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),n("v-dialog",{attrs:{width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-color-picker",{attrs:{mode:"hexa"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1)},ht=[],dt={props:["prependIcon","value","label"],computed:{color:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},data:function(){return{dialog:!1}},methods:{open:function(){this.dialog=!0}}},mt=dt,bt=n("03a4"),gt=n("169a"),vt=Object(l["a"])(mt,ft,ht,!1,null,null,null),Ot=vt.exports;P()(vt,{VColorPicker:bt["a"],VDialog:gt["a"],VIcon:S["a"],VTextField:z["a"]});var wt={components:{MenuGroup:K,ColorPicker:Ot},computed:{width:{get:function(){return this.$store.state.width},set:function(t){this.$store.commit("width",t),this.lockAspect&&this.$store.commit("height",t)}},height:{get:function(){return this.$store.state.height},set:function(t){this.$store.commit("height",t),this.lockAspect&&this.$store.commit("width",t)}},background:{get:function(){return this.$store.state.background},set:function(t){this.$store.commit("background",t)}},transparent:{get:function(){return this.$store.state.transparent},set:function(t){this.$store.commit("transparent",t)}}},data:function(){return{lockAspect:!0}}},yt=wt,jt=Object(l["a"])(yt,ut,pt,!1,null,null,null),xt=jt.exports;P()(jt,{VSlider:st["a"],VSwitch:Y["a"]});var Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MenuGroup",{attrs:{name:"font"}},[n("v-text-field",{attrs:{"prepend-icon":"font_download"},model:{value:t.fontFamily,callback:function(e){t.fontFamily=e},expression:"fontFamily"}}),n("v-slider",{attrs:{"prepend-icon":"format_size",label:"size","thumb-label":"",min:"4",max:2*t.height},model:{value:t.fontSize,callback:function(e){t.fontSize=e},expression:"fontSize"}}),n("v-slider",{attrs:{"prepend-icon":"format_bold",label:"weight","thumb-label":"",min:"100",max:"900",step:"100",snap:""},model:{value:t.fontWeight,callback:function(e){t.fontWeight=e},expression:"fontWeight"}}),n("v-select",{attrs:{"prepend-icon":"format_italic",label:"style",items:["normal","italic","oblique"]},model:{value:t.fontStyle,callback:function(e){t.fontStyle=e},expression:"fontStyle"}}),n("ColorPicker",{attrs:{"prepend-icon":"format_color_text",label:"text color"},model:{value:t.fontColor,callback:function(e){t.fontColor=e},expression:"fontColor"}})],1)},_t=[];function kt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function $t(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?kt(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var St={components:{MenuGroup:K,ColorPicker:Ot},computed:$t({fontFamily:{get:function(){return this.$store.state.font.family},set:function(t){this.$store.commit("font/family",t)}},fontSize:{get:function(){return this.$store.state.font.size},set:function(t){this.$store.commit("font/size",t)}},fontWeight:{get:function(){return this.$store.state.font.weight},set:function(t){this.$store.commit("font/weight",t)}},fontStyle:{get:function(){return this.$store.state.font.style},set:function(t){this.$store.commit("font/style",t)}},fontColor:{get:function(){return this.$store.state.font.color},set:function(t){this.$store.commit("font/color",t)}}},Object(v["d"])(["width","height"]))},Dt=St,Mt=n("b974"),Vt=Object(l["a"])(Dt,Pt,_t,!1,null,null,null),Ct=Vt.exports;P()(Vt,{VSelect:Mt["a"],VSlider:st["a"],VTextField:z["a"]});var Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MenuGroup",{attrs:{name:"outline"}},[n("v-slider",{attrs:{"prepend-icon":"line_weight",label:"weight","thumb-label":"",min:"0",max:t.fontSize},model:{value:t.outlineWidth,callback:function(e){t.outlineWidth=e},expression:"outlineWidth"}}),n("ColorPicker",{attrs:{"prepend-icon":"border_color",label:"color",dark:""},model:{value:t.outlineColor,callback:function(e){t.outlineColor=e},expression:"outlineColor"}})],1)},zt=[];function Ft(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Tt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ft(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ft(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var At={components:{MenuGroup:K,ColorPicker:Ot},computed:Tt({outlineWidth:{get:function(){return this.$store.state.outline.width},set:function(t){this.$store.commit("outline/width",t)}},outlineColor:{get:function(){return this.$store.state.outline.color},set:function(t){this.$store.commit("outline/color",t)}}},Object(v["d"])(["fontSize"]))},It=At,Gt=Object(l["a"])(It,Et,zt,!1,null,null,null),Lt=Gt.exports;P()(Gt,{VSlider:st["a"]});var Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MenuGroup",{attrs:{name:"position"}},[n("v-slider",{attrs:{"prepend-icon":"arrow_back","append-icon":"arrow_forward",hint:"x offset (px)","thumb-label":"",min:-t.width,max:t.width},model:{value:t.xPosition,callback:function(e){t.xPosition=e},expression:"xPosition"}}),n("v-slider",{attrs:{"prepend-icon":"arrow_upward","append-icon":"arrow_downward",hint:"y offset (px)","thumb-label":"",min:-t.height,max:t.height},model:{value:t.yPosition,callback:function(e){t.yPosition=e},expression:"yPosition"}})],1)},Ut=[];function Wt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Bt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Wt(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Nt={components:{MenuGroup:K},computed:Bt({xPosition:{get:function(){return this.$store.state.position.x},set:function(t){this.$store.commit("position/x",t)}},yPosition:{get:function(){return this.$store.state.position.y},set:function(t){this.$store.commit("position/y",t)}}},Object(v["d"])(["width","height"]))},Jt=Nt,qt=Object(l["a"])(Jt,Rt,Ut,!1,null,null,null),Ht=qt.exports;function Kt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Xt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Kt(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}P()(qt,{VSlider:st["a"]});var Qt={components:{PreviewMenu:tt,AnimationMenu:lt,CanvasMenu:xt,FontMenu:Ct,OutlineMenu:Lt,PositionMenu:Ht},computed:Xt({minWidth:function(){return this.width+this.size},isMobile:function(){return this.$refs.drawer.isMobile}},Object(v["d"])(["width"])),data:function(){return{opened:!0,size:320}},mounted:function(){this.$store.commit("drawer",this)}},Yt=Qt,Zt=n("f774"),te=Object(l["a"])(Yt,A,I,!1,null,null,null),ee=te.exports;P()(te,{VNavigationDrawer:Zt["a"]});var ne=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"imgbox",style:"width:"+(t.width+2)+"px;height:"+(t.height+2)+"px"},[n("div",{directives:[{name:"show",rawName:"v-show",value:null==t.gif&&!t.pause,expression:"gif == null && !pause"}]},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("canvas",t._g({ref:"canvas",attrs:{slot:"activator",width:t.width,height:t.height},slot:"activator"},r))]}}])},[n("span",[t._v("HTML5 Canvas + JavaScript")])])],1),t.gif?n("div",[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("img",t._g({class:[t.pause],attrs:{slot:"activator",src:t.gifURL},slot:"activator"},r))]}}],null,!1,115099284)},[n("span",[t._v("Animation GIF")])])],1):t._e(),n("transition",{attrs:{name:"circular"}},[n("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:t.pause,expression:"pause"}],staticClass:"circular",attrs:{indeterminate:"",color:"primary"}})],1)],1)},re=[],oe=(n("a15b"),n("ace4"),n("d3b7"),n("e25e"),n("ac1f"),n("5319"),n("fb2c"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("cd40")),ie=n.n(oe);n("49c7");function ae(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function se(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ae(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ce={data:function(){return{scroll:null,prev:null,pause:!1,snackbar:!1,fileSize:""}},computed:se({text:function(){return this.$route.params.text+this.spacer},context:function(){return this.$refs.canvas.getContext("2d")},x:function(){return this.position.x-this.scroll},y:function(){return this.position.y+.5*this.height},fontText:function(){return[this.font.style,this.font.weight,this.font.size+"px",'"'.concat(this.font.family,'"')].join(" ")}},Object(v["d"])(["gif","speed","fps","width","height","spacer","background","transparent","font","outline","position"]),{},Object(v["c"])(["gifURL"])),methods:{clear:function(){var t=this.context;this.transparent?t.clearRect(0,0,this.width,this.height):(t.fillStyle=this.background,t.fillRect(0,0,this.width,this.height))},size:function(){var t=this.context.measureText(this.text);return t.width},update:function(){this.clear();var t=this.context;t.font=this.fontText,t.textBaseline="middle",t.strokeStyle=this.outline.color,t.lineWidth=this.outline.width,t.fillStyle=this.font.color;for(var e=this.text,n=0;n<this.width/this.size();n++)e+=this.text;this.outline.width&&t.strokeText(e,this.x,this.y),t.fillText(e,this.x,this.y)},animate:function(t){if(!this.pause){var e=.001*(t-(this.prev||0));e*this.fps>1&&((null==this.scroll||(this.scroll+=e*this.speed)>this.size())&&(this.scroll=0),this.update(),this.prev=t),window.requestAnimationFrame(this.animate.bind(this))}},save:function(){var t=this;this.pause=!0;var e=parseInt(this.background.replace(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i,"ff$3$2$1"),16),n=new ie.a({width:this.width,height:this.height,transparent:this.transparent?16777215&e:null});for(this.scroll=0,this.scroll=0;this.scroll<this.size();this.scroll+=this.speed/this.fps){if(this.update(),this.transparent){for(var r=this.context.getImageData(0,0,this.width,this.height),o=new Uint32Array(r.data.buffer),i=0;i<o.length;i++)0==o[i]&&(o[i]=e);this.context.putImageData(r,0,0)}n.addFrame(this.context,{delay:1e3/this.fps,copy:!0})}n.on("finished",(function(e){t.pause=!1,t.animate(),t.$store.commit("gif",e)})),n.render()}},mounted:function(){this.$store.commit("canvas",this),this.animate()}},le=ce,ue=(n("2343"),n("490a")),pe=n("3a2f"),fe=Object(l["a"])(le,ne,re,!1,null,"aa0e88f2",null),he=fe.exports;P()(fe,{VProgressCircular:ue["a"],VTooltip:pe["a"]});var de={name:"App",components:{TopBar:T,Drawer:ee,Canvas:he}},me=de,be=n("7496"),ge=n("a523"),ve=n("a75b"),Oe=n("a722"),we=Object(l["a"])(me,h,d,!1,null,null,null),ye=we.exports;P()(we,{VApp:be["a"],VContainer:ge["a"],VContent:ve["a"],VLayout:Oe["a"]});var je={defaultText:Object({NODE_ENV:"production",BASE_URL:"/"}).APP_DEFAULT_TEXT||"文字が流れるアイコンジェネレーター"},xe=[{path:"/",redirect:"/".concat(encodeURIComponent(je.defaultText))},{path:"/:text",component:ye}],Pe=(n("3ca3"),n("ddb0"),n("2b3d"),{namespaced:!0,state:{family:"Roboto",size:24,weight:400,style:"normal",color:"#000000"},mutations:{family:function(t,e){this.commit("gif"),t.family=e},size:function(t,e){this.commit("gif"),t.size=e},weight:function(t,e){this.commit("gif"),t.weight=e},style:function(t,e){this.commit("gif"),t.style=e},color:function(t,e){this.commit("gif"),t.color=e}}}),_e={namespaced:!0,state:{width:3,color:"#FFFFFF"},mutations:{width:function(t,e){this.commit("gif"),t.width=e},color:function(t,e){this.commit("gif"),t.color=e}}},ke={namespaced:!0,state:{x:0,y:0},mutations:{x:function(t,e){this.commit("gif"),t.x=e},y:function(t,e){this.commit("gif"),t.y=e}}};r["a"].use(v["a"]);var $e=new v["a"].Store({modules:{font:Pe,outline:_e,position:ke},state:{gif:null,speed:24,fps:12,width:32,height:32,spacer:"  ",background:"#FF00FF",transparent:!0,canvas:null,drawer:null},getters:{isMobile:function(t){return t.drawer&&t.drawer.isMobile},isDrawerOpened:function(t){return t.drawer&&t.drawer.opened},gifURL:function(t){return null==t.gif?null:window.URL.createObjectURL(t.gif)}},mutations:{gif:function(t,e){t.gif=e},speed:function(t,e){this.commit("gif"),t.speed=e},fps:function(t,e){this.commit("gif"),t.fps=e},width:function(t,e){this.commit("gif"),t.width=e},height:function(t,e){this.commit("gif"),t.height=e},spacer:function(t,e){this.commit("gif"),t.spacer=e},background:function(t,e){this.commit("gif"),t.background=e},transparent:function(t,e){this.commit("gif"),t.transparent=e},canvas:function(t,e){t.canvas=e},drawer:function(t,e){t.drawer=e}},actions:{generateGIF:function(){this.state.canvas.save()},toggleDrawer:function(){this.state.drawer.opened^=!0}}});r["a"].use(o["a"]),r["a"].config.productionTip=!1,new r["a"]({vuetify:a,store:$e,render:function(t){return t(f)},router:new o["a"]({mode:"history",routes:xe})}).$mount("#app")},"8e41":function(t,e,n){}});
//# sourceMappingURL=app.83729b5f.js.map