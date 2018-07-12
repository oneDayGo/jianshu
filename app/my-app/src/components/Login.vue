<template>

    <div class="Login">
            <div class="Login-box" :class='isError== true?"animated shake":" "'>
                    <div class="Login-box-link">
                            <router-link tag="a" to="/login">登录</router-link>
                            <span>.</span>
                            <router-link tag="a" to="/loginsin">注册</router-link>
                    </div>
                    
                    <router-view></router-view>
                  <div v-show="isDics == ''?false:true" class="errDisc">{{isDics.msg}}</div>
            </div>
    </div>
</template>
<script>
export default {
    name:"Login",
    computed:{
        isError(){
            return this.$store.state.isError
        },
        isDics(){
            return this.$store.state.dics
        }
    },
    created(){
        
        //console.log(this.$store.getters.getUsers);
       // this.$store.dispatch('actionsUser');
        //animated rubberBand
    }
   
}
</script>


<style scoped lang="less">
    
    .Login{
        width:100%;
        overflow:hidden;
        height:100%;
        background:#F1F1F1;
        display:flex;
        justify-content:center;
        align-items:center;
        .Login-box{
            width:400px;
            height:300px;
            background:#FFFFFF;
            box-shadow:0px 0px 20px rgba(0, 0, 0,0.3);
            

            .Login-box-link{
                width:100%;
                height:42px;
                text-align: center;
                font-size:20px;
                
                a{
                    line-height:40px;
                    display:inline-block;
                    text-decoration: none;
                    border-bottom:2px solid transparent;
                    box-sizing:content-box;
                    height:40px;
                    color: #969696;

                }
                span{
                    display:inline-block;
                    line-height:42px;
                    color: #969696;

                }

                .router-link-active{
                     border-bottom:2px solid #EA6F5A;
                }
            }
           
        }

        .errDisc{
            padding-top:15px;
            text-align: center;
            line-height:30px;
            font-size:14px;
            color: #FF0A0A;
            
        }
    }

    
    
</style>