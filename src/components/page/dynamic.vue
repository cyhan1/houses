<template>
    
    <!--最新动态-->
    <section class="view-overflow">
        <h-header :title='"户型列表"'></h-header>
        <section class="container">
             <h-sign :pageType='2'></h-sign>
             <p class="statement"><span></span> 楼盘资讯 <span>免责声明</span></p>
             <div>
                <h-msg></h-msg>
             <h-msg></h-msg>
             <h-msg></h-msg>
              <h-msg></h-msg>
             <h-msg></h-msg>
             <h-msg></h-msg>
             <h-msg></h-msg>
             <h-msg></h-msg>
             <h-msg></h-msg>
             
             </div>
            
             
        </section>
        <h-footer></h-footer>
    </section>

</template>
<script>
    import MyTitleHeader from '@/components/public/components/title_header';
    import MySignNav from '@/components/public/components/sign_nav';
    import MyMsg from '@/components/public/components/dynamic_msg';
    import MyFooter from '@/components/public/components/detail_footer';
    export default {
        components: {
            'h-header': MyTitleHeader,
            'h-sign': MySignNav,
            'h-msg': MyMsg,
            'h-footer': MyFooter
        }

    }
</script>
<style scoped>
    @import url(../../assets/css/container.css);
    .container {
        overflow: auto;
        margin-bottom: 1.95rem;
    }
    
    .statement {
        font-size: 0.515rem;
        color: #9E9EA6;
        margin: 0.206rem 0 0.618rem 0;
    }
    
    .statement span:nth-child(1) {
        display: inline-block;
        width: 0.515rem;
        height: 0.515rem;
        background: #9E9EA6;
        border-radius: 50%;
        vertical-align: middle;
    }
    
    .statement span:nth-child(2) {
        color: #FFC522
    }
</style>