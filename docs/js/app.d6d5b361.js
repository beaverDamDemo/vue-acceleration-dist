(function(e){function t(t){for(var s,o,i=t[0],l=t[1],c=t[2],m=0,d=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},n=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2508:function(e,t,a){"use strict";var s=a("a79d"),r=a.n(s);r.a},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("ourForm",{staticClass:"ourForm"}),a("div",{class:{active:e.myChartShow,myChartContainer:!0}},[a("canvas",{attrs:{id:"myChart"}}),a("label",{staticClass:"switch"},[a("input",{attrs:{type:"checkbox"},on:{change:e.myCSchange}}),a("span",{staticClass:"slider round"})])]),a("button",{staticClass:"btn btn-success",class:{sink:e.myChartShow},attrs:{type:"button"},on:{click:e.startButtonClick}},[e._v("Run")]),a("button",{staticClass:"btn btn-primary",on:{click:e.exportWithSheetJS}},[e._v("Export with SheetJS")]),a("ourOutput",{attrs:{inputData:e.finalGearMin},on:{"update:inputData":function(t){e.finalGearMin=t},"update:input-data":function(t){e.finalGearMin=t}}})],1)},n=[],o=(a("c5f6"),a("c483"),a("6b28"),a("9f1f"),{tanja:[],love:[],engines:[{label:'Viper "700hp"',effectiveMaxKw:"-",maxRpm:6e3,torqueData:[576,630,685,731,779,816,854,888,924,948,971,992,1012,1018,1032,1054,1038,1002,992,980,958,890,850,785],powerLookupTable:[]},{label:'Fat torque "638hp"',effectiveMaxKw:"-",maxRpm:6e3,torqueData:[685,731,779,816,854,888,924,948,971,992,1012,1018,1032,1054,1038,1002,992,980,969,819,785,733,695,675],powerLookupTable:[]},{label:'Flat torque "724hp"',effectiveMaxKw:"-",maxRpm:6e3,torqueData:[860,860],powerLookupTable:[]},{label:'Peaky torque "761hp"',effectiveMaxKw:"-",maxRpm:6e3,torqueData:[519,576,630,685,731,779,816,854,888,924,948,971,992,1012,1018,1032,1054,1038,1002,992,980,969,948,819],powerLookupTable:[]}],carPresets:[{label:"Viper fully-upgraded",weightKg:1184,aeroCx:.35,rollingRes:.015,maximumAccG:.95},{label:"Viper base",weightKg:1628,aeroCx:.35,rollingRes:.0125,maximumAccG:.775}]}),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"our-form"},[a("div",{staticClass:"form-group"},[a("h5",[e._v("Select engine")]),a("div",{staticClass:"input-group mb-4"},[a("select",{staticClass:"custom-select",on:{change:function(t){return e.seChange(t)}}},e._l(e.store.engines,(function(t,s){return a("option",{domProps:{value:s}},[e._v(e._s(t.label)+" "+e._s(t.effectiveMaxKw))])})),0)]),a("h5",[e._v("Select car preset")]),a("div",{staticClass:"input-group"},[a("select",{staticClass:"custom-select",on:{change:function(t){return e.scpChange(t)}}},[a("option",{attrs:{selected:"",value:"0"}},[e._v("Viper fully-upgraded")]),a("option",{attrs:{value:"1"}},[e._v("Viper base")]),a("option",{attrs:{value:"2",disabled:""}},[e._v("Unavailable")]),a("option",{attrs:{value:"3",disabled:""}},[e._v("Unavailable")])])])]),a("div",{staticClass:"form-group"},[a("h5",[e._v("Car settings")]),a("div",{staticClass:"row"},[a("label",{staticClass:"col col-sm-6",attrs:{for:""}},[e._v("Weight KG")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.cskg,expression:"cskg"}],staticClass:"form-control form-control-sm col col-sm-6",attrs:{type:"number",step:"100",disabled:"",readonly:""},domProps:{value:e.cskg},on:{input:function(t){t.target.composing||(e.cskg=t.target.value)}}})]),a("div",{staticClass:"row"},[a("label",{staticClass:"col col-sm-6",attrs:{for:""}},[e._v("Aero Cx")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.csac,expression:"csac"}],staticClass:"form-control form-control-sm col col-sm-6",attrs:{type:"number",step:"0.005",disabled:"",readonly:""},domProps:{value:e.csac},on:{input:function(t){t.target.composing||(e.csac=t.target.value)}}})]),a("div",{staticClass:"row"},[a("label",{staticClass:"col col-sm-6",attrs:{for:""}},[e._v("Rolling Res")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.csrr,expression:"csrr"}],staticClass:"form-control form-control-sm col col-sm-6",attrs:{type:"number",step:"0.001",disabled:"",readonly:""},domProps:{value:e.csrr},on:{input:function(t){t.target.composing||(e.csrr=t.target.value)}}})]),a("div",{staticClass:"row"},[a("label",{staticClass:"col col-sm-6",attrs:{for:""}},[e._v("Maximum acc G")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.csmag,expression:"csmag"}],staticClass:"form-control form-control-sm col col-sm-6",attrs:{type:"number",step:"0.025",disabled:"",readonly:""},domProps:{value:e.csmag},on:{input:function(t){t.target.composing||(e.csmag=t.target.value)}}})]),a("div",{staticClass:"row"},[a("label",{staticClass:"col col-sm-6",attrs:{for:"finalGearInput"}},[e._v("Final gear km/h")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.finalGear,expression:"finalGear"}],staticClass:"form-control form-control-sm col col-sm-6",attrs:{id:"finalGearInput",type:"number",step:"5",disabled:"",readonly:""},domProps:{value:e.finalGear},on:{change:e.finalGearInputChange,input:function(t){t.target.composing||(e.finalGear=t.target.value)}}})]),e._m(0)]),a("div",{staticClass:"form-group"},[a("h5",[e._v("Test settings")]),e._m(1),e._m(2),e._m(3),e._m(4),a("div",{staticClass:"row"},[a("label",{staticClass:"col col-sm-6",attrs:{for:""}},[e._v("Topspeed min")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.finalGearMin,expression:"finalGearMin"}],staticClass:"form-control form-control-sm col col-sm-6",attrs:{type:"number"},domProps:{value:e.finalGearMin},on:{change:e.finalGearMinChange,input:function(t){t.target.composing||(e.finalGearMin=t.target.value)}}})]),a("div",{staticClass:"row"},[a("label",{staticClass:"col col-sm-6",attrs:{for:""}},[e._v("Topspeed max")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.finalGearMax,expression:"finalGearMax"}],staticClass:"form-control form-control-sm col col-sm-6",attrs:{type:"number"},domProps:{value:e.finalGearMax},on:{change:e.finalGearMaxChange,input:function(t){t.target.composing||(e.finalGearMax=t.target.value)}}})]),a("div",{staticClass:"row"},[a("label",{staticClass:"col col-sm-6",attrs:{for:""}},[e._v("Splits")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.splits,expression:"splits"}],staticClass:"form-control form-control-sm col col-sm-6",attrs:{type:"number",step:"1"},domProps:{value:e.splits},on:{change:e.splitsChange,input:function(t){t.target.composing||(e.splits=t.target.value)}}})]),a("formfix",{directives:[{name:"show",rawName:"v-show",value:e.formfixShow,expression:"formfixShow"}]})],1)])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("label",{staticClass:"col col-sm-6",attrs:{for:""}},[e._v("Initial speed km/h")]),a("input",{staticClass:"form-control form-control-sm col col-sm-6",attrs:{type:"number",disabled:"",readonly:""}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"gridRadios",id:"gridRadios1",value:"option0",checked:""}}),a("label",{staticClass:"form-check-label",attrs:{for:"gridRadios1"}},[e._v("one gear")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"gridRadios",id:"gridRadios2",value:"option1",disabled:""}}),a("label",{staticClass:"form-check-label",attrs:{for:"gridRadios2"}},[e._v("fixed multiple gears")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"gridRadios",id:"gridRadios3",value:"option2",disabled:""}}),a("label",{staticClass:"form-check-label",attrs:{for:"gridRadios3"}},[e._v("topspeed run")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"gridRadios",id:"gridRadios4",value:"option3",disabled:""}}),a("label",{staticClass:"form-check-label",attrs:{for:"gridRadios4"}},[e._v("all possible gears")])])}],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"form-fixed-multiple-gears"},[a("h5",[e._v("Gear ratios")]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customRange_0"}},[e._v("1st gear")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.gear_0,expression:"gear_0"}],staticClass:"custom-range",attrs:{type:"range",min:"0.08",max:"4",step:"0.02",id:"customRange_0",disabled:""},domProps:{value:e.gear_0},on:{input:function(t){return e.g_0_change(t)},__r:function(t){e.gear_0=t.target.value}}}),a("span",{domProps:{textContent:e._s(e.gear_0)}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customRange_1"}},[e._v("2nd gear")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.gear_1,expression:"gear_1"}],staticClass:"custom-range",attrs:{type:"range",min:"0.08",max:"4",step:"0.02",id:"customRange_1",disabled:""},domProps:{value:e.gear_1},on:{input:function(t){return e.g_1_change(t)},__r:function(t){e.gear_1=t.target.value}}}),a("span",{domProps:{textContent:e._s(e.gear_1)}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customRange_2"}},[e._v("3th gear")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.gear_2,expression:"gear_2"}],staticClass:"custom-range",attrs:{type:"range",min:"0.08",max:"4",step:"0.02",id:"customRange_2",disabled:""},domProps:{value:e.gear_2},on:{input:function(t){return e.g_2_change(t)},__r:function(t){e.gear_2=t.target.value}}}),a("span",{domProps:{textContent:e._s(e.gear_2)}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customRange_3"}},[e._v("4th gear")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.gear_3,expression:"gear_3"}],staticClass:"custom-range",attrs:{type:"range",min:"0.08",max:"4",step:"0.02",id:"customRange_3",disabled:""},domProps:{value:e.gear_3},on:{input:function(t){return e.g_3_change(t)},__r:function(t){e.gear_3=t.target.value}}}),a("span",{domProps:{textContent:e._s(e.gear_3)}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customRange_4"}},[e._v("5th gear")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.gear_4,expression:"gear_4"}],staticClass:"custom-range",attrs:{type:"range",min:"0.08",max:"4",step:"0.02",id:"customRange_4",disabled:""},domProps:{value:e.gear_4},on:{input:function(t){return e.g_4_change(t)},__r:function(t){e.gear_4=t.target.value}}}),a("span",{domProps:{textContent:e._s(e.gear_4)}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customRange_5"}},[e._v("6th gear")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.gear_5,expression:"gear_5"}],staticClass:"custom-range",attrs:{type:"range",min:"0.08",max:"4",step:"0.02",id:"customRange_5",disabled:""},domProps:{value:e.gear_5},on:{input:function(t){return e.g_5_change(t)},__r:function(t){e.gear_5=t.target.value}}}),a("span",{domProps:{textContent:e._s(e.gear_5)}})])])},u=[],m={name:"form-fixed-multiple-gears",props:[],mounted:function(){},data:function(){return{gear_0:2.66,gear_1:1.78,gear_2:1.3,gear_3:1,gear_4:.74,gear_5:.5}},methods:{g_0_change:function(e){console.warn(this.gear_1),this.gear_1>=this.gear_0&&(this.gear_0=this.gear_1+.02)},g_1_change:function(){console.log(this.gear_0,this.gear_2),this.gear_2>=this.gear_1&&(this.gear_1=this.gear_2+.02),this.gear_0<this.gear_1&&(this.gear_0=this.gear_1-.02)},g_2_change:function(){console.log(this.gear_1,this.gear_3),this.gear_3>=this.gear_2&&(this.gear_2=this.gear_3+.02),this.gear_1<this.gear_2&&(this.gear_1=this.gear_2-.02)},g_3_change:function(){console.log(this.gear_2,this.gear_4),this.gear_4>=this.gear_3&&(this.gear_3=this.gear_4+.02),this.gear_2<this.gear_3&&(this.gear_2=this.gear_3-.02)},g_4_change:function(){console.log(this.gear_3,this.gear_5),this.gear_5>=this.gear_4&&(this.gear_4=this.gear_5+.02),this.gear_3<this.gear_4&&(this.gear_3=this.gear_4-.02)},g_5_change:function(){console.error(this.gear_4),this.gear_4<this.gear_5&&(this.gear_4=this.gear_5-.02)}},computed:{}},d=m,f=(a("8d48"),a("2877")),g=Object(f["a"])(d,c,u,!1,null,"54553204",null),p=g.exports,h={name:"our-form",props:{},components:{formfix:p},data:function(){return{store:o,finalGear:290,finalGearMin:200,finalGearMax:400,splits:5,cskg:1184,csac:.35,csrr:.015,csmag:.95,divRpm:50,selectedEngine:0,formfixShow:!0}},computed:{},created:function(){},mounted:function(){this.fillTorqueLookupTable(this.selectedEngine)},methods:{finalGearInputChange:function(e){this.$eventBus.$emit("finalGearInputChange",this.finalGear)},finalGearMinChange:function(e){this.$eventBus.$emit("finalGearMinChange",this.finalGearMin)},finalGearMaxChange:function(e){this.$eventBus.$emit("finalGearMaxChange",this.finalGearMax)},splitsChange:function(e){this.$eventBus.$emit("splitsChange",this.splits)},seChange:function(e){this.selectedEngine=event.target.value,0==o.engines[this.selectedEngine].powerLookupTable.length&&this.fillTorqueLookupTable(this.selectedEngine),this.$eventBus.$emit("seChange",event.target.value)},scpChange:function(e){switch(this.$eventBus.$emit("scpChange",event.target.value),event.target.value){case"0":this.cskg=1184,this.csac=.35,this.csrr=.015,this.csmag=.95;break;case"1":this.cskg=1628,this.csac=.35,this.csrr=.012,this.csmag=.825;break;default:}},fillTorqueLookupTable:function(e){for(var t=o.engines[e].torqueData,a=o.engines[e].maxRpm/(t.length-1),s=[],r=[],n=[],i=[],l=0,c=0,u=0;u<=t.length;u++)s.push(u*o.engines[e].maxRpm/(t.length-1));for(var m=0;m<=o.engines[e].maxRpm;m+=this.divRpm){var d=0,f=83;while(m>s[d]&&d<f)d++;var g=(s[d]-m)/a*t[d-1];g+=(m-s[d-1])/a*t[d],r.push(g);var p=g*m/9549;i.push(p),p>l&&(l=p,c=m),n.push(m)}o.engines[e].powerLookupTable=i,o.engines[e].effectiveMaxKw="("+Math.round(l)+"kW@"+c+"rpm)"}}},v=h,b=(a("2508"),Object(f["a"])(v,i,l,!1,null,"73306149",null)),_=b.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"our-output"},[a("h1",[e._v("our-output Component")]),a("table",e._l(e.store.love,(function(t){return a("div",[e._v("gear length: "+e._s(t[0])+" km/h,\n      max reached rpm: "+e._s(t[1])+" rpm,\n      max reached speed: "+e._s(t[2])+" km/h,\n      covered distance: "+e._s(t[4])+" m,\n      time needed: "+e._s(t[6]))])})),0)])},C=[],x={name:"our-output",props:{},data:function(){return{store:o}},mounted:function(){}},w=x,k=(a("b529"),Object(f["a"])(w,j,C,!1,null,"eda54554",null)),y=k.exports,G=a("30ef"),R=a.n(G),M={name:"app",components:{ourForm:_,ourOutput:y},data:function(){return{store:o,weightKg:1184,aeroCx:.35,rollingRos:.015,maximumAccG:.95,maxgearlength:290,speed:null,divRpm:50,finalGearMin:200,finalGearMax:400,splits:5,results:[],myChartShow:!1,selectedEngine:0,selectedCarPreset:0,tor4:[],powerLookupTable:[],maxRpm:6e3,tor:[416,455,495,528,563,590,617,642,668,685,702,717,731,736,746,762,750,724,717,708,700,685,592,567]}},created:function(){window.dispatchEvent(new Event("myPreloderEvent"))},methods:{sendData:function(){this.$eventBus.$emit("send-data",this.setup)},myCSchange:function(e){this.myChartShow=!this.myChartShow},exportWithSheetJS:function(){console.log(o)},startButtonClick:function(e){for(var t=this,a=function(e,a){var s,n,o,i,l=100,c=0,u=0,m=1,d=!1;i=1==e?5e-4:-1,t.speed=27.7;var f=27.7,g=[];u<300&&f<5&&(m=.9*t.maxg);while(c<1609&&u<6e4&&m>i){1578<c&&c<1709&&0==d&&(l/=1,d=!0),u+=l;var p=$(f,u,t,a,t.selectedEngine);n=p[0],o=p[1],s=acceleration_calc(f,n,t.weightKg,t.aeroCx,t.rollingRos,t.maximumAccG),m=s*l,f+=m,c+=(f+m/2)*l/1e3,g.push([Math.round(3.6*f),Math.floor(c),u/1e3,n,o])}return r.push([Number(a).toFixed(0),g[g.length-1][4],Number((3.6*f).toFixed(2)),"km/h distance: ",Math.floor(c),"m, exetime: ",u/1e3+"s"]),g},s=[],r=[],n=0;n<this.splits;n++){var i=parseFloat(this.finalGearMin)+n*parseFloat((this.finalGearMax-this.finalGearMin)/(this.splits-1));s.push(a(e,i))}o.tanja=s,o.love=r}},mounted:function(){var e=this;console.warn("Da dela treba prvo spremenit vrednosti spodaj .. da zazna 'change' . Ja, to bo treba popravit v priliki"),this.sendData(),this.$eventBus.$on("finalGearInputChange",(function(t){e.maxgearlength=t})),this.$eventBus.$on("finalGearMinChange",(function(t){e.finalGearMin=t})),this.$eventBus.$on("finalGearMaxChange",(function(t){e.finalGearMax=t})),this.$eventBus.$on("splitsChange",(function(t){e.splits=t})),this.$eventBus.$on("seChange",(function(t){e.selectedEngine=t})),this.$eventBus.$on("scpChange",(function(t){e.selectedCarPreset=t,e.weightKg=o.carPresets[t].weightKg,e.aeroCx=o.carPresets[t].aeroCx,e.rollingRes=o.carPresets[t].rollingRes,e.maximumAccG=o.carPresets[t].maximumAccG}));for(var t=this.maxRpm/(this.tor.length-1),a=[],s=[],r=[],n=0;n<=this.tor.length;n++)a.push(n*this.maxRpm/(this.tor.length-1));for(var i=0;i<=this.maxRpm;i+=this.divRpm){n=0;var l=83;while(i>a[n]&&n<l)n++;var c=(a[n]-i)/t*this.tor[n-1];c+=(i-a[n-1])/t*this.tor[n],s.push(c),this.powerLookupTable.push(c*i/7030),r.push(i)}var u=document.getElementById("myChart");new R.a(u,{type:"line",data:{labels:r,datasets:[{label:"torque nm",data:s,backgroundColor:["rgba(54, 162, 235, 0.2)"],borderWidth:1},{label:"power kW",data:this.powerLookupTable,backgroundColor:["rgba(127, 127, 127, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}});console.error("Continue work here"),P()}},P=function(){},$=function(e,t,a,s,r){var n=null,i=new Object;if(t<500)return i[0]=100,i[1]=2500,i;n=e/s*3.6*o.engines[r].maxRpm;var l=o.engines[r].powerLookupTable[Math.floor(n/a.divRpm)];return i[0]=l,i[1]=50*Math.round(n/50),isNaN(l)&&(l=0,i[0]=0),i},S=M,z=(a("5c0b"),Object(f["a"])(S,r,n,!1,null,null,null)),E=z.exports;s["a"].config.productionTip=!1,s["a"].prototype.$eventBus=new s["a"],new s["a"]({render:function(e){return e(E)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("e332"),r=a.n(s);r.a},"5df5":function(e,t,a){},"6b28":function(e,t){},"8d48":function(e,t,a){"use strict";var s=a("ff1f"),r=a.n(s);r.a},"9f1f":function(e,t){},a79d:function(e,t,a){},b529:function(e,t,a){"use strict";var s=a("5df5"),r=a.n(s);r.a},c483:function(e,t){var a=1.22,s=1.71;acceleration_calc=function(e,t,a,s,r,n){var o=pushforce(e,t)-aero_drag(e,s)-rolling_drag(e,r,a);return o=o/a/1e3,o>n/100&&(o=n/100),o},aero_drag=function(e,t){var r=a*e*e*t*s/2;return r},rolling_drag=function(e,t,a){var s=t*a*9.81;return s},pushforce=function(e,t){var a=.95*t*525/e;return a},sample=function(){console.warn("physics")}},e332:function(e,t,a){},ff1f:function(e,t,a){}});
//# sourceMappingURL=app.d6d5b361.js.map