<template>
    <section class="view-overflow">
        <!--找新房子-->
        <s-header></s-header>
        <h-banner></h-banner>
        <section class="container">
            <h-navbtn></h-navbtn>
            <div class="height-score">
                <h-otitle :title='"高分楼盘"'></h-otitle>
                
                <div class="list">
                    <h-scroe></h-scroe>
                    <h-scroe></h-scroe>
                    <h-scroe></h-scroe>
                </div>
            </div>
            <div class="all-house">
                <h-otitle :title='"全部楼盘"' :isShow='false'></h-otitle>
                <h-onav></h-onav>
               
                <div class="list-item">
                    <h-item></h-item>
                    <h-item></h-item>
                    <h-item></h-item>

                </div>
            </div>
        </section>
        
    </section>
   
</template>
<script>
    import MySeachHeader from '@/components/public/components/seach_header';
    import MyBan from '@/components/public/components/banner';
    import MyNavBtn from '@/components/public/components/nav-btn';
    import MyScoreItem from '@/components/public/components/score-item';
    import MyListItem from '@/components/public/components/list_item';
    import MyOptionsTitle from '@/components/public/components/option_title';
    import MyOptionsNav from '@/components/public/components/option_nav';
    export default {
        components: {
            's-header': MySeachHeader,
            'h-banner': MyBan,
            'h-navbtn': MyNavBtn,
            'h-scroe': MyScoreItem,
            'h-item': MyListItem,
            'h-otitle': MyOptionsTitle,
            'h-onav': MyOptionsNav
        }
    }
</script>
<style scoped>
    @import url(../../assets/css/container.css);
</style>