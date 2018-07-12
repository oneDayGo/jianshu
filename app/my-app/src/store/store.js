import Vue from 'vue'
import Vuex from 'vuex';

import  * as getters  from './getters'
import * as actions from './action';
import * as mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    //属性 
    list:[],
    isError:false,
    dics:{},
    isShowMaxPic:false, //大图显示 
    picUrl:"",
    hint:[],
    closeLogin:false //关闭提示登录
  },
  getters,
  actions,
  mutations
});