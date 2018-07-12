
import Vue from 'vue'
import App from './App'
import router from './router'
import "./fonts/font/iconfont.css"
import './assets/animate.css';

Vue.config.productionTip = false;

import {store} from './store/store'
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})


store.dispatch('actionsLog');
