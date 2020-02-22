<template>
    <!--全部户型-->
    <section>
        <h-header :title="'户型全部'"></h-header>
        <section class="container">
            <h-sign></h-sign>
            <div >
                <h-type></h-type>
                 <h-type></h-type>

                  <h-type></h-type> 
                  <h-type></h-type>
                  <h-type></h-type>
                 <h-type></h-type>

                  <h-type></h-type> 
                  <h-type></h-type>
            </div>
            <h-footer></h-footer>
        </section>

    </section>
</template>
<script>
    import MyTitleHeader from '@/components/public/components/title_header';
    import MySignNav from '@/components/public/components/sign_nav';
    import MyHomeTye from '@/components/public/components/house_type_cross';
    import MyFooter from '@/components/public/components/detail_footer';
    export default {
        components: {
            'h-header': MyTitleHeader,
            'h-sign': MySignNav,
            'h-type': MyHomeTye,
            'h-footer': MyFooter
        },
    }
</script>
<style scoped>
    @import url(../../assets/css/container.css);
    .container {
        margin-bottom: 2rem;
    }
</style>