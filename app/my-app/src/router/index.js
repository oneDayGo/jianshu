import Vue from 'vue'
import Router from 'vue-router'


import Login from '@/components/Login';
import Incomp from '@/view/Login/incomp';
import signcomp from '@/view/Login/signcomp.vue';


//首页
import Indexs from '@/components/Index.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"Index",
      component:Indexs
    },
    {
      path: '/login',
      name: 'Login',
      component:Login,
      children:[
        {
          path:'/',
          name:"Incomp",
          component:Incomp 
        },{
          path:'/loginsin',
          component:signcomp
        }
      ]
      
    }
  ]
})
