<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App',

    }
</script>

<style>
    @import url(assets/css/public.css);
    html,
    body,
    #app {
        margin: 0;
        padding: 0;
        height: 100%;
    }
    
    .el-header,
    .el-main,
    p {
        padding: 0;
        margin: 0;
    }
    
    body {
        background: #f8f8f8;
    }
    
    #app {
        font-family: PingFangSC-Regular, PingFang SC;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 16rem;
        margin: 0 auto;
        background: #fff;
        box-sizing: border-box;
    }
    
    .el-header .el-input__inner {
        /*background: #717171;*/
        /*border: 1px solid transparent;*/
    }
    /*走马灯*/
    
    .el-carousel__indicators--horizontal {
        bottom: 1.08rem;
    }
    
    .el-carousel__indicator--horizontal {
        padding: 0 4px;
    }
    
    .el-carousel__indicators--horizontal li button {
        height: 0.206rem;
        width: 0.206rem;
        border-radius: 50%;
    }
    /*nav*/
    
    .el-tabs .el-tabs__item {
        font-size: 0.618rem;
    }
    
    .el-tabs .el-tabs__item.is-active {
        font-size: 0.77rem
    }
</style>