webpackJsonp([12],{"94uq":function(t,e){},y74k:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("4YfN"),r=i.n(n),a=i("YtJ0"),o=i("OAll"),c={name:"MyShoppingCart",data:function(){return{columns:[{type:"selection",width:58,align:"center"},{title:"图片",key:"img",width:86,render:function(t,e){return t("div",[t("img",{attrs:{src:e.row.img}})])},align:"center"},{title:"标题",key:"title",align:"center"},{title:"套餐",width:198,key:"package",align:"center"},{title:"数量",key:"count",width:68,align:"center"},{title:"价格",width:68,key:"price",align:"center"}]}},created:function(){this.loadShoppingCart()},computed:r()({},Object(o.e)(["shoppingCart"])),methods:r()({},Object(o.b)(["loadShoppingCart"]),{goTo:function(){this.$router.push("/order")}}),store:a.a},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Table",{ref:"selection",attrs:{border:"",columns:this.columns,data:this.shoppingCart,size:"large","no-data-text":"您的购物车没有商品，请先添加商品到购物车再点击购买"}}),this._v(" "),e("div",{staticClass:"go-to"},[e("Button",{attrs:{type:"primary"},on:{click:this.goTo}},[this._v("去付款")])],1)],1)},staticRenderFns:[]};var l=i("C7Lr")(c,s,!1,function(t){i("94uq")},"data-v-3d9e27e0",null);e.default=l.exports}});
//# sourceMappingURL=12.2219f1d518825270c436.js.map