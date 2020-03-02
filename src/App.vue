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
    body,
    #app {
        margin: 0;
        padding: 0;
        height: 100%;
    }
    
    html,
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
        /*text-align: center;*/
        color: #2c3e50;
        width: 16rem;
        margin: 0 auto;
        background: #fff;
        box-sizing: border-box;
        overflow: auto;
    }
    /*走马灯*/
    /*.header .el-carousel__indicators--horizontal {
        display: none;
    }*/
    
    .banner .van-swipe__indicators {
        bottom: 1.08rem;
    }
    /*.el-carousel__indicators--horizontal {
        bottom: 1.08rem;
    }*/
    /*.el-carousel__indicator--horizontal {
        padding: 0 4px;
    }*/
    /*.el-carousel__indicators--horizontal li button {
        height: 0.206rem;
        width: 0.206rem;
        border-radius: 50%;
    }*/
    /*详情走马灯*/
    /*nav*/
    
    .el-tabs .el-tabs__item {
        font-size: 0.618rem;
    }
    
    .el-tabs .el-tabs__item.is-active {
        font-size: 0.77rem
    }
    
    .user-say .el-rate__icon {
        font-size: 10px;
        margin-right: 0px;
    }
    
    .comment-on .el-textarea__inner {
        background-color: #F2F2F5;
        padding: 0.618rem;
        box-sizing: border-box;
    }
    
    .comment-on .el-upload--picture-card {
        width: 2.834rem;
        height: 2.834rem;
        border-radius: 0.309rem;
        font-size: 0.515rem;
        padding-top: 0.5rem;
        line-height: 1;
    }
    
    .geolocation+.el-input .el-input__inner {
        border: 1px solid transparent;
        height: 1.546rem;
        line-height: 1.546rem;
    }
    
    .el-drawer {
        overflow: auto;
        background: #F2F2F5
    }
    /*地区选项 seach_header.vue*/
    
    .el-drawer__header {
        /*height: 1.91rem;*/
        margin: 0;
        line-height: 1.91rem;
        font-size: 0.618rem;
        font-weight: 600;
        border-bottom: 0.0387rem solid #CCCCD1;
        color: #202020;
        padding: 0;
        flex-direction: row-revers;
    }
    
    .el-drawer__header span:focus {
        outline: none;
    }
    
    .van-index-anchor {
        padding: 0;
    }
    
    .van-index-anchor .v-title {
        margin-left: 0.618rem;
        font-size: 0.618rem;
        font-weight: 600;
    }
    
    .van-index-bar__index {
        font-size: 0.464rem;
        margin: 0.155rem 0;
    }
    
    .van-cell {
        padding: 0.386rem 0.618rem;
        font-size: 0.618rem;
        border-bottom: 1px solid #F2F2F5;
    }
</style>