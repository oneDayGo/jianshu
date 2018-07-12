<template>

    <div class="LoginIn">
        <div class="LoginIn-box">
            <div class="LoginInFrom">
                <div class="LoginInFrom-item">
                       <span class="iconfont icon-ai-user"></span>
                        <input type="text" @focus="foc" v-model="user" placeholder="请输入你的昵称" >
                </div>
                <div class="LoginInFrom-item">
                       <span class="iconfont icon-ai-password"></span>
                        <input type="password"  @focus="foc" v-model="password" placeholder="设置密码" >
                </div>
                
            </div>
            <div class="submit" @click="submits">
                    立即注册
            </div>
        </div>
    </div>
</template>
<script>
export default {
     beforeRouteEnter(to,from,next){
        next(vm=>{

            vm.$store.commit("upisError",false);
            vm.$store.commit("upDics","");
        });
        
    },
    data(){
        return {
        user:"",
        password:""
        }
  },
   
   methods:{
        submits:function(){
            try{
                if(this.user.trim().length == 0){
                     throw Error('注册账户不能为空');
                 }
                 if(this.password.trim().length == 0){
                     throw Error('注册密码不能为空');
                 }
                 
                 let obj = {};
                 obj['user'] = this.user;
                 obj['password'] = this.password;
                 //发起请求
                 this.$store.dispatch("actionsUser",obj);

            }catch(e){
               // console.log(e.message);
                //upisError
                this.$store.commit("upisError",true);
                this.$store.commit("upDics",e.message);
                this.user = "";
                this.password = "";
                return;
            }
          
        },
        foc:function(){
            //获取焦点后
            this.$store.commit("upisError",false);
            this.$store.commit("upDics","");
        }
    }
}
</script>


<style scoped lang="less">
 
    .LoginIn{
        display:flex;
        padding-top:30px;
        width:100%;
        justify-content:center;
        .LoginIn-box{
            width:300px;
            
            align-self:center;
           
            .LoginInFrom{
                width:100%;
                border:1px solid #C8C8C8;
                 border-radius:3px;
                 overflow: hidden;
                 border-bottom:0;
                .LoginInFrom-item{
                    width:100%;
                    height:45px;
                    border-bottom:1px solid #C8C8C8;
                    overflow: hidden;
                    box-sizing: border-box;
                    background:#F8F8F8;
                    span{
                        
                        width:40px;
                        float:left;
                        font-size:16px;
                        line-height:45px;
                        text-align: center;
                    }
                    input{
                        
                        width:260px;
                        height:45px;
                        border:0;
                        float:left;
                        background:#F8F8F8;
                        outline:none;
                    }
                }
            }

           
        }

         .submit{
                margin-top:30px;
                width:100%;
                height:40px;
                text-align: center;
                border-radius:10px;
                line-height:40px;
                font-size:20px;
                background:#3DB922;
                cursor:pointer;
                color:#fff;
               
            }


        
    }
</style>