(function(){"use strict";var e={418:function(e,t,l){var a=l(144),i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("HelloWorld")],1)},n=[],o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"wrapper"},[l("div",{staticClass:"container  "},[l("h3",[e._v("家中幾個人吃飯？")]),l("div",{staticClass:"d-flex flex-wrap justify-content-center"},e._l(e.people,(function(t){return l("div",{key:t.id,staticClass:"selector"},[l("div",{staticClass:"form-check"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.peopleSelected,expression:"peopleSelected"}],staticClass:"form-check-input select-input",attrs:{type:"radio",name:"flexRadioDefaultpeople",id:"flexRadioDefaultpeople"+t.id},domProps:{checked:e.peopleSelected==t.id,value:t.id,checked:e._q(e.peopleSelected,t.id)},on:{change:function(l){e.peopleSelected=t.id}}}),l("label",{staticClass:"form-check-label select-label",attrs:{for:"flexRadioDefaultpeople"+t.id,tabindex:"-1"}},[e._v(" "+e._s(t.id)+" 人 ")])])])})),0),l("h3",[e._v("一週有幾天在家煮飯呢？")]),l("div",{staticClass:"d-flex flex-wrap justify-content-center"},e._l(e.days,(function(t){return l("div",{key:t.id,staticClass:"selector"},[l("div",{staticClass:"form-check"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.daysSelected,expression:"daysSelected"}],staticClass:"form-check-input select-input",attrs:{type:"radio",name:"flexRadioDefaultdays",id:"flexRadioDefaultdays"+t.id},domProps:{checked:e.daysSelected==t.id,value:t.id,checked:e._q(e.daysSelected,t.id)},on:{change:function(l){e.daysSelected=t.id}}}),l("label",{staticClass:"form-check-label select-label",attrs:{for:"flexRadioDefaultdays"+t.id}},[e._v(" "+e._s(t.id)+" 天 ")])])])})),0),l("h3",[e._v("每天都在家吃多少餐呢？")]),l("div",{staticClass:"d-flex flex-wrap justify-content-center"},e._l(e.meal,(function(t){return l("div",{key:t.id,staticClass:"selector"},[l("div",{staticClass:"form-check"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.mealSelected,expression:"mealSelected"}],staticClass:"form-check-input select-input",attrs:{type:"radio",name:"flexRadioDefaultmeal",id:"flexRadioDefaultmeal"+t.id},domProps:{checked:e.mealSelected==t.id,value:t.id,checked:e._q(e.mealSelected,t.id)},on:{change:function(l){e.mealSelected=t.id}}}),l("label",{staticClass:"form-check-label select-label",attrs:{for:"flexRadioDefaultmeal"+t.id}},[e._v(" "+e._s(t.id)+" 餐 ")])])])})),0)]),l("div",{attrs:{href:e.linkToLocate}},[l("a",{staticClass:"totalRice",attrs:{href:e.linkToLocate,target:"_parent"}},[l("div",{staticClass:"fw-lighter"},[e._v("點擊查看訂閱方案")]),l("div",[l("span",{staticClass:"need"},[e._v(" "+e._s(e.calcRice))]),e._v(" 包 / 月 ")])])])])},c=[],r={name:"HelloWorld",computed:{calcRice(){let e=this,t=e.ricePerPerson*(e.daysSelected*e.mealSelected)*e.peopleSelected*4/.6;return Math.ceil(t)},linkToLocate(){let e=this;return e.calcRice>0&&e.calcRice<4?"https://agoodbarn.dev.ieon.tech/":"https://agoodbarn.dev.ieon.tech/search?tag=%E5%AE%9A%E6%9C%9F%E8%B3%BC"}},methods:{showAlert(){this.$swal("Hello Vue world!!!")}},data:()=>({message:"Hello Vue!",peopleSelected:1,daysSelected:1,ricePerPerson:.075,mealSelected:1,product:.6,people:[{id:1},{id:2},{id:3},{id:4},{id:5}],days:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}],meal:[{id:1},{id:2},{id:3}]})},d=r,s=l(1),u=(0,s.Z)(d,o,c,!1,null,"986d27ba",null),f=u.exports,p={name:"App",components:{HelloWorld:f}},v=p,m=(0,s.Z)(v,i,n,!1,null,null,null),h=m.exports,y=l(629);a.Z.use(y.ZP);var b=new y.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),_=(l(244),l(982)),g=l.n(_);a.Z.use(g()),a.Z.config.productionTip=!1,new a.Z({store:b,render:e=>e(h)}).$mount("#app")}},t={};function l(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,l),n.exports}l.m=e,function(){var e=[];l.O=function(t,a,i,n){if(!a){var o=1/0;for(s=0;s<e.length;s++){a=e[s][0],i=e[s][1],n=e[s][2];for(var c=!0,r=0;r<a.length;r++)(!1&n||o>=n)&&Object.keys(l.O).every((function(e){return l.O[e](a[r])}))?a.splice(r--,1):(c=!1,n<o&&(o=n));if(c){e.splice(s--,1);var d=i();void 0!==d&&(t=d)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[a,i,n]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,n,o=a[0],c=a[1],r=a[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(i in c)l.o(c,i)&&(l.m[i]=c[i]);if(r)var s=r(l)}for(t&&t(a);d<o.length;d++)n=o[d],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(s)},a=self["webpackChunkagoodbarn_plugin"]=self["webpackChunkagoodbarn_plugin"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=l.O(void 0,[998],(function(){return l(418)}));a=l.O(a)})();
//# sourceMappingURL=app.9ddfe54d.js.map