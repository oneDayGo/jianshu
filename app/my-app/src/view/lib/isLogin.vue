<template>
    <div class="isLogin" @click="closeLogin">
       <div class="isLogin-box">
            <p>亲!你还未登录,请登录先</p>
           <div class="toSign">
                <router-link to="/login"  class="to-login" >去登录</router-link>
                <router-link to="/loginsin"  class="to-sign" >去注册</router-link>
           </div>
           <div class="close">
               <i class="iconfont icon-x"></i>
           </div>

       </div>
    </div>
</template>



<style scoped lang="less">
    .isLogin{
        width:100%;
        height:100%;
        background:rgba(0, 0, 0, 0.3);
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index:10;
        .isLogin-box{
            position: relative;
            width:400px;
            height:220px;
            background:#fff;
            border-radius:10px;
            p{
                margin-top:30px;
                text-align: center;
                color:red;
            }
            .toSign{
                a{
                    display:block;
                    width:200px;
                    height:40px;
                    margin:0 auto;
                    margin-top:30px;
                    text-align: center;
                    line-height:40px;
                    color:#fff;
                    text-decoration: none;
                    border-radius:10px;
                    
                }
                a.to-login{
                    background:#3194d0;
                }
                a.to-sign{
                    background:#3DB922;
                }
            }
            .close{
                width:20px;
                height:20px;
                position: absolute;
                right:3px;
                top:3px;
                cursor: pointer;
               i{
                   font-size:24px;
                   line-height:24px;


               }
            }
            

        }
    }
</style>
<script>
export default {
    methods:{
        closeLogin:function(){
            this.$store.commit("closeLogin",false);
        }
    }
}
</script>
