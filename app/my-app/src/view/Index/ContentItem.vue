<template>
    <div class="ContentItem">
       <div class="ContentItem-t">
           <div class="ContentItem-t-pic">
               <div>
                    <img src="../../assets/0.jpg" alt="">
               </div>
           </div>
           <div class="publish-date">
               <b>小哲</b>
               <span>发表时间</span>
               <i>20个小时前</i>
           </div>
       </div>

       <!-- content -->
       <div class="ContentItem-c">
           
          <a href="#">{{list.content}}</a> 
   
       </div>
       <div class="ContentItem-pic-list">
          
           <div class="pic-add-images"  v-for="(item,index) in picList" :key="index"  data-pic="item"  @click="showPic">
                <img :src="item" alt="">
           </div>
           
       </div>
       <!-- 点赞和评论区 -->
       <div class="praiseOrComm">
           
           <div class="praise">
               <i class="iconfont icon-xihuan" @click="praiseActive"></i>
               <span>0</span>
           </div>
           <div class="comm">
               <i class="iconfont icon-xiazai16"></i>
               <span>0</span>
           </div>
       </div>
    </div>
</template>
<style scoped lang="less">
    .ContentItem{
      padding-bottom:20px;
        width:100%;
      
        background:#fff;
       border-bottom:1px solid #F5F5F5; 
        &:hover{
            -background:#FCFCFC;
        }
        
        .ContentItem-t{
            width:100%;
            height:50px;
            border-bottom:1px dashed #F5F5F5;
            .ContentItem-t-pic{
                padding:0 10px;
                 display:table-cell;
                vertical-align: middle;
                height:50px;
                div{
                   height:30px;
                   overflow: hidden;
                   cursor: pointer;
                   border-radius:50%;
                    width:30px;
                    img{
                        width:100%;
                        height:100%;
                        border:0;
                    }
                }


            }

            /*发表时间*/
            .publish-date{
                display:table-cell;
                vertical-align:middle;
                span{
                    font-size:12px;
                    color:#B2BAC2;
                }
                i{
                    font-style:normal;
                    font-size:12px;
                    color:#B2BAC2;
                }
                b{
                    font-weight:normal;
                    font-size:14px;
                    color:#B2BAC2;
                }
            }
        }

        /*content*/
        .ContentItem-c{
            padding:15px;
            line-height:20px;
            font-size:14px;
            a{
                text-decoration: none;
                color:#999999;
                &:hover{
                    text-decoration: underline;
                }
            }
        }


        /*图片容器*/
        .ContentItem-pic-list{
            overflow: hidden;
            display:flex;
             flex-wrap:wrap;
            padding:10px;
            .pic-add-images{
                width:104px;
                height:104px;
                margin-bottom:5px;
                overflow:hidden;
                cursor: pointer;
                padding:0 3px;
                border-radius:14px;
               
                img{
                    width:100%;
                    height:100%;
                }
            }
        }


        /*点赞和评论区*/
        .praiseOrComm{
            overflow: hidden;
            padding-left:13px;
            div{
                float: left;
                
                padding:8px;
                i{
                    font-size:20px;
                    cursor: pointer;
                    color:#B2BAC2;
                }
                i.active{
                    color: #EA6F5A;
                }
            }
        }
    }
</style>
<script>
export default {
  
    props:['list'],
    computed:{
        contentStr:function(){
            let s = this.str;
            if(this.str.length > 100){
               let num =  Math.random()*100;
             
               num+50 >100? num=90:num+=50;
             
              s =   this.str.substring(0,num)+'......';
            }
            return s;

            
        },
         picList:function(){
            if(this.list.picList == null){
                return [];
            }else{
                let list = this.list.picList.split('~');
                let pic = [];
                for(let i=0;i<list.length;i++){
                    let str = '/api/'+list[i];
                  pic.push(str);  
                }
                return pic;
            }
          
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        showPic:function(e){
           this.$store.commit("showPic",{isTrue:true,picUrl:e.target.parentNode.getAttribute("data-pic")});
        },
        praiseActive:function(){
            
        }
    }
}
</script>
