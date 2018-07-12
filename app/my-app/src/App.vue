<template>
  <div id="app">
    <show-max-pic v-show="showMaxPics" />
    <is-login v-show="isLogins" />
    <router-view/>
    
  </div>
</template>

<script>
import showMaxPic  from './view/lib/showMaxPic.vue';
import isLogin  from './view/lib/isLogin.vue';
export default {
  name: 'App',
  computed:{
    showMaxPics:function(){
      return this.$store.getters.getPic

    },
    isLogins:function(){
      return this.$store.getters.getCloseLogin
    }


  },
  components:{
    showMaxPic,
    isLogin 
  }
}
</script>

<style>
  *{
    margin:0;
    padding:0;
    
  }
  html,body,#app{
        
    }
    
   
</style>

