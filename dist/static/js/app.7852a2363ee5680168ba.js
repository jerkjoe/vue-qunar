webpackJsonp([1],{"1ZjL":function(t,e){},"9n10":function(t,e){},Cajn:function(t,e){},CohD:function(t,e){},FTRA:function(t,e){},J5rr:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("J5rr")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("mtWM"),u=i.n(l),d=i("NYxO"),p={name:"Header",computed:c()({},Object(d.c)(["city"]))},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v("\n      "+t._s(this.city)+"\n      "),t._v(" "),i("span",{staticClass:"iconfont arrow-down"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")])])}]};var f=i("VU/8")(p,h,!1,function(t){i("jfI6")},"data-v-8a385414",null).exports,m={name:"HomeSwiper",props:{swiperList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:5e3}}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("swiper",{ref:"mySwiper",attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:t.id}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var _=i("VU/8")(m,v,!1,function(t){i("yeh8")},"data-v-36237ef7",null).exports,C={name:"HomeIcons",props:{iconList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl,alt:"item.id"}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}))}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var w=i("VU/8")(C,y,!1,function(t){i("XGMH")},"data-v-647e1bdd",null).exports,g={name:"HomeRecommend",props:{recommendList:Array}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("\n        Hot Deals\n    ")]),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:"DL"}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-description"},[t._v(t._s(e.description))]),t._v(" "),i("p",{staticClass:"item-price"},[t._v(t._s(e.price))]),t._v(" "),i("p",{staticClass:"item-button"},[i("a",{attrs:{href:e.link}},[t._v("More Info")])])])])})),t._v(" "),i("a",{staticClass:"more-info",attrs:{href:"#"}},[t._v("Load All Items")])])},staticRenderFns:[]};var k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("\n      Weekend Choices\n  ")]),t._v(" "),i("ul",t._l(t.itemList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:"item.id"}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-description"},[t._v(t._s(e.description))])])])}))])},staticRenderFns:[]};var $={name:"Home",components:{"home-recommend":i("VU/8")(g,b,!1,function(t){i("FTRA")},"data-v-da657f66",null).exports,"home-header":f,"home-swiper":_,"home-icons":w,"home-weekend":i("VU/8")({name:"HomeWeekend",data:function(){return{itemList:[{id:"01",imgUrl:"static/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",title:"Planetarium",description:"Planetarium Star Theatre, you'll experience planets, meteor showers, nebulas, black holes, galaxies, and countless other astronomical wonders. ",price:"$24.99/ticket",link:"#"},{id:"02",imgUrl:"static/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",title:"Disneyland Park",description:"Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened on July 17, 1955. ",price:"Strat from $184.99/ticket",link:"#"},{id:"03",imgUrl:"static/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",title:"Wild Animal Safari",description:"Choose your safari! Discover herds of animals roaming field habitats on a unique adventure at the San Diego Zoo Safari Park.",price:"$14.99/ticket",link:"#"},{id:"04",imgUrl:"static/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",title:"Water Park",description:"Cultus Lake Waterpark is the biggest waterpark in BC, with over 16 slides",price:"Start from $34.99/ticket",link:"#"},{id:"05",imgUrl:"static/2d554e22faa25f.jpg_r_640x214_2a966a54.jpg",title:"Vancouver Aquarium",description:"The Vancouver Aquarium is a non-profit society dedicated to the conservation of aquatic life.",price:"Strat from $36.49/ea",link:"#"}]}}},k,!1,function(t){i("Cajn")},"data-v-171bb136",null).exports},computed:c()({},Object(d.c)(["city"])),mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.city!==this.lastCity&&(this.lastCity=this.city,this.getHomeInfo())},data:function(){return{swiperList:[],iconList:[],recommendList:[],lastCity:""}},methods:{getHomeInfo:function(){u.a.get("/vue-qunar/dist/static/mock/index.json?city="+this.city).then(this.handleGetHomeInfoSucc)},handleGetHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList}},getHomeInfoSuccess:function(t){console.log(t)}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("home-header"),this._v(" "),e("home-swiper",{attrs:{swiperList:this.swiperList}}),this._v(" "),e("home-icons",{attrs:{iconList:this.iconList}}),this._v(" "),e("home-recommend",{attrs:{recommendList:this.recommendList}}),this._v(" "),e("home-weekend")],1)},staticRenderFns:[]};var x=i("VU/8")($,S,!1,function(t){i("O3QW")},null,null).exports,L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n    Select City\n    "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var j=i("VU/8")({name:"CityHeader"},L,!1,function(t){i("CohD")},"data-v-087d824e",null).exports,U=i("GQaK"),D={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timmer:null,enterData:!1}},computed:{hasNoData:function(){return!this.list.length&&!this.enterData}},mounted:function(){this.scroll=new U.a(this.$refs.search)},methods:c()({onCityClick:function(t){this.changeCity(t)},onCitySelect:function(){this.hasNoData||this.$router.push({path:"/"})}},Object(d.b)(["changeCity"])),watch:{keyword:function(){var t=this;this.enterData=!0,this.timmer&&clearTimeout(this.timmer),this.timmer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e,t.keyword||(t.list=[]),t.enterData=!1},100)}}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Please enter city name..."},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",{on:{click:t.onCitySelect}},[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){t.onCityClick(e.spell.charAt(0).toUpperCase()+e.spell.slice(1))}}},[t._v("\n                "+t._s(e.spell.charAt(0).toUpperCase()+e.spell.slice(1))+"\n            ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("Result not found.")]),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.enterData,expression:"enterData"}],staticClass:"search-item border-bottom"},[t._v("Searching...")])],2)])])},staticRenderFns:[]};var E=i("VU/8")(D,T,!1,function(t){i("1ZjL")},"data-v-4aaa81ea",null).exports,A={name:"CityList",props:{cities:Object,pop:Array,letter:String},computed:c()({},Object(d.c)({city:"city"})),methods:c()({onCityClick:function(t){this.changeCity(t)},onCitySelect:function(){this.$router.push({path:"/"})}},Object(d.b)(["changeCity"])),mounted:function(){this.scroll=new U.a(this.$refs.wrapper)},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",{on:{click:t.onCitySelect}},[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("Current Location")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("Most Popular")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.pop,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){t.onCityClick(e.spell.charAt(0).toUpperCase()+e.spell.slice(1))}}},[i("div",{staticClass:"button"},[t._v(t._s(e.spell.charAt(0).toUpperCase()+e.spell.slice(1)))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title  border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-topbottom",on:{click:function(i){t.onCityClick(e.spell.charAt(0).toUpperCase()+e.spell.slice(1))}}},[t._v(t._s(e.spell.charAt(0).toUpperCase()+e.spell.slice(1)))])}))])})],2)])},staticRenderFns:[]};var F=i("VU/8")(A,O,!1,function(t){i("la4P")},"data-v-8c19e590",null).exports,H={name:"Alphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStart:!1,startY:0,timmer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{onLetterClick:function(t){this.$emit("change",t.target.innerText)},onTouchStart:function(t){this.touchStart=!0},onTouchMove:function(t){var e=this;!0===this.touchStart&&(this.timmer&&clearTimeout(this.timmer),this.timmer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},onTouchEnd:function(t){this.touchStart=!1}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.onLetterClick,touchstart:function(e){return e.preventDefault(),t.onTouchStart(e)},touchend:t.onTouchEnd,touchmove:t.onTouchMove}},[t._v(t._s(e))])}))},staticRenderFns:[]};var I={name:"City",components:{"city-header":j,"city-search":E,"city-list":F,"city-alphabet":i("VU/8")(H,R,!1,function(t){i("loWr")},"data-v-8024b818",null).exports},data:function(){return{cities:{},popularCities:[],letter:""}},methods:{getCityInfo:function(){u.a.get("/vue-qunar/dist/static/mock/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.popularCities=e.hotCities}},onLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,pop:t.popularCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.onLetterChange}})],1)},staticRenderFns:[]};var N=i("VU/8")(I,V,!1,function(t){i("fH2o")},"data-v-71a0562a",null).exports,P={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("img",{staticClass:"banner-img",attrs:{src:"static/4003f9dd7bebf61eccbf64046e26d487.water.jpg_600x330_a80ff353.jpg",alt:""}}),this._v(" "),e("div",{staticClass:"banner-info"},[e("div",{staticClass:"banner-title"},[this._v("LA Disneyland")]),this._v(" "),e("div",{staticClass:"banner-number"},[e("span",{staticClass:"iconfont banner-icon"},[this._v("")]),this._v("\n        33")])])])}]};var M={name:"Detail",components:{"detail-banner":i("VU/8")({name:"Banner"},P,!1,function(t){i("e+fX")},"data-v-384e9c46",null).exports}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner")],1)},staticRenderFns:[]};var q=i("VU/8")(M,W,!1,function(t){i("U7DX")},null,null).exports;s.a.use(r.a);var G=new r.a({routes:[{path:"/",name:"Home",component:x},{path:"/city",name:"City",component:N},{path:"/detail/:id",name:"Detail",component:q}]}),X="Beijing";try{localStorage.city&&(X=localStorage.city)}catch(t){}var Y={city:X},z={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(d.a);var B=new d.a.Store({state:Y,actions:{changeCity:function(t,e){t.commit("changeCity",e)}},mutations:z}),J=i("F3EI"),Q=i.n(J),Z=(i("v2ns"),i("v5o6")),K=i.n(Z);i("9n10"),i("M6Sr"),i("TzC8");s.a.config.productionTip=!1,K.a.attach(document.body),s.a.use(Q.a),new s.a({el:"#app",router:G,store:B,components:{App:a},template:"<App/>"})},O3QW:function(t,e){},TzC8:function(t,e){},U7DX:function(t,e){},XGMH:function(t,e){},"e+fX":function(t,e){},fH2o:function(t,e){},jfI6:function(t,e){},la4P:function(t,e){},loWr:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},v2ns:function(t,e){},yeh8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7852a2363ee5680168ba.js.map