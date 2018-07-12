<template>
    <div class="Pheader">
        <div class="Pheader-box">
            <div class="Pheader-box-left">
                <div>
                    <img src="../../assets/logo.a7995ad.svg" alt="">
                </div>
            </div>
            <div class="Pheader-box-right">
                <div class="header-pic">
                    <div class="header-pic-d" @click.stop="isShow">
                        <img src="../../assets/0.jpg" alt="">
                    </div>
                </div>
                <!-- 定位盒子 -->
                <div v-show="is_show" :class="is_show == true?'animated fadeInUp':''" class="Pheader-filex">
                    <div class="Pheader-filex-item">
                        <a href="#">
                            <i class="iconfont icon-ai-user"></i>
                            <span>我的主页</span>
                        </a>
                    </div>
                    <div class="Pheader-filex-item">
                        <a href="#">
                            <i class="iconfont icon-xihuan"></i>
                            <span>我喜欢的</span>
                        </a>
                    </div>
                    <div class="Pheader-filex-item">
                        <a href="#">
                            <i class="iconfont icon-shezhi"></i>
                            <span>设置</span>
                        </a>
                    </div>
                    <div class="Pheader-filex-item">
                        <a href="#">
                            <i class="iconfont icon-dengchu"></i>
                            <span>登出</span>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            is_show:false
        }
    },
    mounted(){
        document.addEventListener('click',this.addOrRemove,false);

         
    },
    destroyed(){
        //解绑事件
        document.removeEventListener('click',this.addOrRemove,false);
    },
    methods:{
        isShow:function(){
            this.is_show  = !this.is_show;
        },
        addOrRemove:function(){
            this.is_show = false;
        }
    }
}
</script>

<style scoped lang="less">
    .Pheader{
        width:100%;
        height:80px;
        background:#fff;
        .Pheader-box{
            width:1000px;
            margin:0 auto;
            .Pheader-box-left{
                float: left;
                height:80px;
                div{
                    display:table-cell;
                    vertical-align:middle;
                    height:80px;
                    img{
                        border:0;
                       
                    }
                }
                
            }

            /*right*/
            .Pheader-box-right{
                float:right;
                position: relative;
                height:80px;
                .header-pic{
                    display:table-cell;
                    height:80px;
                    vertical-align:middle;
                    div.header-pic-d{
                        width:50px;
                        height:50px;
                        overflow:hidden;
                        border-radius:50%;
                        display:inline-block;
                        cursor:pointer;
                        img{
                            border:0;
                            width:100%;
                            height:100%;
                        }
                    }
                    
                }

                /*定位盒子*/
                .Pheader-filex{
                    width:130px;
                    padding:5px 0;
                    background: #fff;
                    position: absolute;
                    left:-65px;
                    top:85px;
                    box-shadow:0px 0px 15px rgba(0, 0,0,0.3);
                    .Pheader-filex-item{
                        padding:0 10px;
                        a{
                            display:block;
                            text-decoration:none;
                            color:#B2BAC2;
                            
                            height:30px;
                            i{
                                display: inline;
                                line-height:30px;
                                margin-right:5px;

                            }
                            span{
                                display:inline-block;
                                line-height:30px;
                                color: #71777C;
                            }
                        }
                        &:hover{
                            background:#F9F9F9;
                        }
                    }
                }
            }
            
        }
    }
</style>


