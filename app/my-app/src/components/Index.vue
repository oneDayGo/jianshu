<template>
    <div class="Index">
        <Pheader/>
        <Content/>
    </div>
</template>
<script>
import Pheader from '../view/Index/Pheader.vue'
import Content from '../view/Index/Content.vue'
export default {
    components:{
        Pheader,
        Content
    }
}
</script>
<style scoped lang="less">
   html,body,.Index{
       background:#F4F5F5;
       width:100%;
       
   }
   .Index{
       height:100%;
       
   }
</style>
