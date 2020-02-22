<template>
    <!--租房-->
    <section class="view-overflow">
        <s-header></s-header>
        <h-banner></h-banner>
         <section class="container">
             <h-navbtn></h-navbtn>
             <div class="good-room">
                 <h-otitle :title='"认证好房"'></h-otitle>
                  <div class="list">
                    <h-score></h-score>
                    <h-score></h-score>
                    <h-score></h-score>
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
    import MyOptionsTitle from '@/components/public/components/option_title';
    import MyScoreItem from '@/components/public/components/score-item';
    import MyOptionsNav from '@/components/public/components/option_nav';
    import MyListItem from '@/components/public/components/list_item';
    export default {
        name: 'rent_a_house',
        components: {
            's-header': MySeachHeader,
            'h-banner': MyBan,
            'h-navbtn': MyNavBtn,
            'h-otitle': MyOptionsTitle,
            'h-score': MyScoreItem,
            'h-onav': MyOptionsNav,
            'h-item': MyListItem,

        }

    }
</script>
<style scoped>
    @import url(../../assets/css/container.css);
</style>