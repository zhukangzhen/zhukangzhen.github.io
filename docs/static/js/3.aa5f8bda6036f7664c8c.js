webpackJsonp([3],{P3wr:function(s,t){},q52H:function(s,t){},zV51:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("4YfN"),i=a.n(e),o=a("/KFX"),n=a("Mtv5"),r={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"item-class-show"},s._l(s.tagsInfo,function(t,e){return a("Row",{key:e,staticClass:"item-class-group"},[a("i-col",{staticClass:"item-class-name",attrs:{span:"3"}},[s._v(s._s(t.tagName)+" : ")]),s._v(" "),a("i-col",{staticClass:"item-class-select",attrs:{span:"21"}},s._l(t.tags,function(t,e){return a("span",{key:e},[s._v(s._s(t))])}),0)],1)}),1)},staticRenderFns:[]};var c=a("C7Lr")({name:"GoodsClassNav",data:function(){return{tagsInfo:[{tagName:"品牌",tags:["华为(HUAWEI)","三星(SAMSUNG)","小米(MI) "]},{tagName:"手机配件",tags:["手机保护套","苹果周边","手机贴膜","移动电源","创意配件","手机耳机"]},{tagName:"款式",tags:["软壳","硬壳","翻盖式","边框","运动臂包","钱包式",,"其他"]},{tagName:"材质",tags:["塑料/PC","硅胶","金属","木质","镶钻","液态硅胶","TPU"]}]}}},r,!1,function(s){a("q52H")},"data-v-36567e0d",null).exports,l=a("YtJ0"),d=a("OAll"),v={name:"GoodsList",beforeRouteEnter:function(s,t,a){window.scrollTo(0,0),a()},data:function(){return{searchItem:"",isAction:[!0,!1,!1],icon:["arrow-up-a","arrow-down-a","arrow-down-a"],goodsTool:[{title:"综合",en:"sale"},{title:"评论数",en:"remarks"},{title:"价格",en:"price"}]}},computed:i()({},Object(d.e)(["asItems","isLoading"]),Object(d.c)(["orderGoodsList"])),methods:i()({},Object(d.b)(["loadGoodsList"]),Object(d.d)(["SET_GOODS_ORDER_BY"]),{orderBy:function(s,t){console.log(s),this.icon=["arrow-down-a","arrow-down-a","arrow-down-a"],this.isAction=[!1,!1,!1],this.isAction[t]=!0,this.icon[t]="arrow-up-a",this.SET_GOODS_ORDER_BY(s)}}),created:function(){this.loadGoodsList()},mounted:function(){this.searchItem=this.$route.query.sreachData},components:{Search:o.a,GoodsListNav:n.a,GoodsClassNav:c},store:l.a},_={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("Search"),s._v(" "),a("GoodsListNav"),s._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"bread-crumb"},[a("Breadcrumb",[a("BreadcrumbItem",{attrs:{to:"/"}},[a("Icon",{attrs:{type:"ios-home-outline"}}),s._v(" 首页\n        ")],1),s._v(" "),a("BreadcrumbItem",{attrs:{to:"/goodsList?sreachData="}},[a("Icon",{attrs:{type:"bag"}}),s._v(" "+s._s(s.searchItem)+"\n        ")],1)],1)],1),s._v(" "),a("div",{staticClass:"goods-box"},[a("div",{staticClass:"as-box"},[s._m(0),s._v(" "),s._l(s.asItems,function(t,e){return a("div",{key:e,staticClass:"item-as"},[a("div",{staticClass:"item-as-img"},[a("img",{attrs:{src:t.img,alt:""}})]),s._v(" "),a("div",{staticClass:"item-as-price"},[a("span",[a("Icon",{attrs:{type:"social-yen text-danger"}}),s._v(" "),a("span",{staticClass:"seckill-price text-danger"},[s._v(s._s(t.price))])],1)]),s._v(" "),a("div",{staticClass:"item-as-intro"},[a("span",[s._v(s._s(t.intro))])]),s._v(" "),a("div",{staticClass:"item-as-selled"},[s._v("\n            已有"),a("span",[s._v(s._s(t.num))]),s._v("人评价\n          ")])])})],2),s._v(" "),a("div",{staticClass:"goods-list-box"},[a("div",{staticClass:"goods-list-tool"},[a("ul",s._l(s.goodsTool,function(t,e){return a("li",{key:e,on:{click:function(a){return s.orderBy(t.en,e)}}},[a("span",{class:{"goods-list-tool-active":s.isAction[e]}},[s._v(s._s(t.title)+" "),a("Icon",{attrs:{type:s.icon[e]}})],1)])}),0)]),s._v(" "),a("div",{staticClass:"goods-list"},s._l(s.orderGoodsList,function(t,e){return a("div",{key:e,staticClass:"goods-show-info"},[a("div",{staticClass:"goods-show-img"},[a("router-link",{attrs:{to:"/goodsDetail"}},[a("img",{attrs:{src:t.img}})])],1),s._v(" "),a("div",{staticClass:"goods-show-price"},[a("span",[a("Icon",{attrs:{type:"social-yen text-danger"}}),s._v(" "),a("span",{staticClass:"seckill-price text-danger"},[s._v(s._s(t.price))])],1)]),s._v(" "),a("div",{staticClass:"goods-show-detail"},[a("span",[s._v(s._s(t.intro))])]),s._v(" "),a("div",{staticClass:"goods-show-num"},[s._v("\n              已有"),a("span",[s._v(s._s(t.remarks))]),s._v("人评价\n            ")]),s._v(" "),a("div",{staticClass:"goods-show-seller"},[a("span",[s._v(s._s(t.shopName))])])])}),0)])]),s._v(" "),a("div",{staticClass:"goods-page"},[a("Page",{attrs:{total:100,"show-sizer":""}})],1)]),s._v(" "),s.isLoading?a("Spin",{attrs:{size:"large",fix:""}}):s._e()],1)},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"item-as-title"},[t("span",[this._v("商品精选")]),this._v(" "),t("span",[this._v("广告")])])}]};var u=a("C7Lr")(v,_,!1,function(s){a("P3wr")},"data-v-02aab9e0",null);t.default=u.exports}});
//# sourceMappingURL=3.aa5f8bda6036f7664c8c.js.map