<template>
    <div class="showMaxPic" >
            <div class="showMaxPic-box">
                <div class="showMaxPic-box-fixed" @click="closeMaxPic">
                        <i class="iconfont icon-x"></i>

                </div>
                <img :src="picUrl" alt="">
            </div>
    </div>
</template>
<script>
export default {
    computed:{
        isAddClass:function(){
            return this.$store.getters.getPic
        },
        picUrl:function(){
            return this.$store.getters.getPicUrl
        }
    },
    methods:{
        closeMaxPic:function(){
            this.$store.commit("showPic",false);
        }
    }
}
</script>

<style socped lang="less">
    .showMaxPic{
        
        width:100%;
        height:100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.3);
        z-index:10;
        display: flex;
        justify-content:center;
       
       
        align-items: center;
        .showMaxPic-box{
            position: relative;
            width:400px;
            height:400px;
            padding:8px 8px;
             overflow: hidden;
             border-radius:10px;
            background:#fff;
             img{
                width:100%;
                height:100%;
            }
            .showMaxPic-box-fixed{
                width:30px;
                height:30px;
                position: absolute;
                right:0;
                cursor: pointer;
                top:0;
                i{
                    display: inline-block;
                    font-size:30px;
                   
                    color:#FFFFFF;
                    &:hover{
                        color:#A8A8A8;
                    }
                }
            }


           
            
        }
    }

</style>