<template>
  <!--<div class="block">-->
    
    <el-carousel height="7.73rem" :interval='5000' arrow="always" trigger="click">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="@/assets/img/baner@2x.png" alt="">
      </el-carousel-item>
    </el-carousel>
  <!--</div>-->
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .el-carousel {
        margin-top: 0.258rem;
    }
    
    img {
        height: 100%;
        width: 100%
    }
</style>