<template>
    <div class="log clefilex">
        <div class="log-left">
            <div class="log-left-textarea">
                <textarea  v-model="textareaText" name="" placeholder="写下你的心情吧!">

                </textarea>
            
            </div>
            <div class="uploadPic clefilex" v-show="baseArray.length" >
                    <div v-for="(item,index) in baseArray" :key="index">
                        <div class="uploadPic-itme">
                            <div class="uploadPic-item-box">
                                <img :src="item.url"  alt=""/>
                                <div @click='removePic(item.index)'>
                                    <span class="iconfont icon-x"></span>
                                </div>
                            </div>
                        </div>
                            
                    </div>
            </div>
            <div class="log-submit">
                <input style="display:none" id="upFile"   @change="fileChange" multiple="true" type="file">
                <div class="error-disc" v-show="errorMsg">
                    {{errorMsg}}
                </div>
                <div class="imp-count">
                    {{baseArray.length}}/6
                </div>
                <div class="img-upload" @click="triggerFile">
                    图片上传
                    
                </div>
                <div class="log-publish" @click="submitTalk" >发表</div>
            </div>

            <div class="log-hint"  >
                <div v-for="(item,index) in hint" :key="index">
                    <div class="log-hint-pic">
                  
                     <i class="iconfont " :class="item.error ==0?'icon-chenggong':'icon-x'"></i>
                     </div>
                <div class="log-hint-msg">{{item.msg}}</div>
                </div>
                
            </div>

        </div>
    </div>
</template>

<style scoped lang="less">
    .log{
        width:100%;
        
       
        margin-bottom:30px;
        .log-left{
            position:relative;
            width:680px;
            float: left;
             background:#fff;
             .log-left-textarea{
                 padding:30px;
                 height:90px;
                 textarea{
                     width:100%;
                     height:100%;
                     resize: none;
                     border: 1px solid #ddd;
                     border-radius:8px;
                     outline:none;
                     padding:10px;
                     box-sizing:border-box;
                     line-height:18px;
                     &:focus{
                         border: 1px solid #007FFF;
                     }
                 }
             }

             .uploadPic{
                 padding:10px 30px;
                 background:#F4F5F5;
                 .uploadPic-itme{

                     width:103px;
                     height:100px;
                     float:left;
                     overflow: hidden;
                     position: relative;
                     padding:0 2px;
                     box-sizing: border-box;
                   
                     
                     
                     .uploadPic-item-box{
                         padding:10px;
                         box-sizing:border-box;
                         overflow: hidden;
                         height:100px;
                         background:#E7ECF5;
                         border-radius:10px;
                        
                        img{
                            width:100%;
                            height:100%;
                        }
                        div{
                            position: absolute;
                            right:3px;
                            top:3px;
                            display:none;
                            width:20px;
                            border-radius:50%;
                            height:20px;
                            cursor: pointer;
                            text-align: center;
                        
                            span{
                            font-size:20px;
                            color:#272822;
                            }
                        }
                        &:hover div{
                            display: block;
                        }
                     }
                     
                     
                 }

             }

             /*发表和上传按钮*/
             .log-submit{
                 padding:10px 30px;
                 display: flex;
                 justify-content: flex-end;
                 div{
                     width:80px;
                     height:30px;
                     margin-left:10px;
                     text-align: center;
                     line-height:30px;
                     font-size:12px;
                    
                     border-radius:10px;
                     cursor:pointer;
                     
                 }
                 div.img-upload{
                     background:#007FFF;
                      color:#fff;
                 }
                 div.log-publish{
                     background:#3DB922;
                      color:#fff;
                 }
                 div.imp-count,div.error-disc{
                     font-size:16px;
                     color:#FF0000;
                 }
                 div.error-disc{
                     width:200px;
                 }
                
             }


             //提示语
             .log-hint{
                 width:120px;
                 height:120px;
                 position:absolute;
                 left:50%;
                 top:50%;
                 margin-left:-60px;
                 margin-top:-60px;
                 div.log-hint-pic{
                     text-align: center;
                     i{
                         font-size:20px;
                         color:red;
                     }
                 }

                 div.log-hint-msg{
                     font-size:14px;
                     text-align: center;
                    
                 }

             }
             
        }

    }




    .clefilex::after{
        content:" ";
        display:block;
        clear: both;
        height:0px;

    }



</style>

<script>
export default {
    computed:{
        hint:function(){
            return this.$store.getters.getHint;
        }
    },
    data(){
        return{
            picArray:[],
            baseArray:[],
            errorMsg:"",
            textareaText:""
        }
    },
    methods:{
        removePic:function(indexs){
           
            console.log(this.picArray);
            this.picArray = this.picArray.filter((item,index)=>{
                
                return item.index != indexs;
            })
            this.baseArray = this.baseArray.filter((item,index)=>{
                return item.index != indexs;
            });

           console.log(this.picArray);
        },
        fileChange:function(e){

                if(e.target.files.length + this.picArray.length > 6){
                    this.errorMsg = "上传的张数超过上限了";
                    return;

                }
                this.errorMsg = "";
                
                for(let i = 0; i < e.target.files.length;i++){
                    e.target.files[i].index = Date.now() +parseInt( Math.random()*10000000000);
                    this.picArray.push(e.target.files[i]);
                }
            

            e.target.value = "";
            this.baseFunction(this);
           
           
        },
        triggerFile:function(){
            if(this.baseArray.length == 6){
                return;
            }
            var crEvent =document.createEvent("MouseEvents");
　　　　     crEvent.initEvent("click", true, true); 
            document.getElementById('upFile').dispatchEvent(crEvent);
        },
        baseFunction:function(tash){
          
            for(let i =0;i<tash.picArray.length;i++){
              
                let item = tash.picArray[i];
                let render = new FileReader();
                render.readAsDataURL(item);
                render.onload = function(e){


                    let fig =   tash.baseArray.some((item)=>{
                            return item.index == tash.picArray[i].index
                    });
                    if(!fig){
                        tash.baseArray.unshift({"url":e.target.result,"index":tash.picArray[i].index});
                    }
                        
                }
            }

           
        },
        submitTalk:function(){
           let token =  sessionStorage.getItem('Token');
            if(!token){
               
                this.$store.commit("closeLogin",true);
                return;
            }
            this.$store.dispatch("updataPic",{"list":this.picArray,"text":this.textareaText});
            this.picArray = [];
            this. baseArray = [];

            
        }
    }
}
</script>



