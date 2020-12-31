import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true, 
    orderBy: 'sale', 
    goodsInfo: { // 商品详情
      goodsImg: [],
      title: '',
      tags: [],
      discount: [],
      promotion: [],
      remarksNum: 0,
      setMeal: [],
      hot: [],
      goodsDetail: [],
      param: [],
      remarks: []
    },
    userInfo: { // 用户信息
      username: ''
    },
    signUpStep: 0, 
    marketing: { 
      CarouselItems: [], // 轮播图
      activity: [] 
    },
    seckills: { // 秒杀
      deadline: {
        hours: 0,
        minute: 0,
        seconds: 0
      },
      goodsList: []
    },
    computer: {}, // 电脑专栏
    eat: {}, 
    asItems: [], 
    goodsList: [], 
    shoppingCart: [], 
    newShoppingCart: [], 
    recommend: [] 
  },
  getters,
  actions,
  mutations
});
