<template>
    <div class="Index-content">
        <!-- 日志说说说区 -->
            <log/>
        <!-- /end -->
       <div class="Index-content-box clefilex">
          <div class="Index-content-box-left">
              
              <div v-for="(item,index) in getLogList" :key="index">
                   <ContentItem  :list="item"/>
                 
              </div>

              <div class="noDataMsg" v-show="!getLogList.length">
                  暂无数据
              </div>
                  
              
             
          </div>
       </div>

      
    </div>
</template>
<script>
import ContentItem from './ContentItem.vue';
import log  from '../lib/log.vue';
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters([
            'getLogList'
        ])
    },
    data(){
        return{
            str:`
        `,
        list:[1,3]
        }
    },
    components:{
        ContentItem,
        log
    }
}
</script>
<style scoped lang="less">
    .Index-content{
        width:1000px;
        margin:0 auto;
        height:100%;
        padding-top:30px;
       
       .Index-content-box{
           width:1000px;
           margin:0 auto;
           .Index-content-box-left{
               width:680px;
               float:left;
               background:#fff;
               .noDataMsg{
                   line-height:40px;
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

