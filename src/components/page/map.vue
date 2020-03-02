<template>
    <el-container id='lostion' class="view-overflow">
        <el-header height='1.854rem' class="view-overflow">
            <h-title :title='"位置标注"'></h-title>
        </el-header>
        <el-main class="view-overflow">
            <div id='container'> </div>
        </el-main>
        
        
       
    </el-container>
   
</template>
<script>
    import MyTitle from '@/components/public/components/title_header'
    export default {
        components: {
            'h-title': MyTitle
        },
        mounted() {

            document.querySelector('#lostion').style.height = window.screen.height + 'px';

            var map = new BMap.Map("container");

            // 创建地图实例  
            var point = new BMap.Point(116.404, 39.915);
            // 创建点坐标  
            map.centerAndZoom(point, 15);

        },
        destoryed() {
            console.log(12)
            document.querySelector('html').removeAttribute('heigh');
        }
    }
</script>
<style scoped>
    .el-header,
    .el-main {
        padding: 0;
    }
    
    .el-main,
    .el-container {
        height: 100%;
        width: 100%;
    }
    
    #container {
        height: 100%;
        width: 100%;
    }
</style>