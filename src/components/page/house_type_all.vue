<template>
    <!--全部户型-->
    <section>
        <h-header :title="'户型全部'"></h-header>
        <section class="container">
            <h-sign></h-sign>
            <div >
                <h-type v-for = '(items,inx) in type' :item='items' :key='inx'></h-type>
                <h-type v-for = '(items,inx) in type' :item='items' :key='inx'></h-type>
                 
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
        data() {
            return {
                type: [{
                    url: 'type.png',
                    layout: '3室2厅2卫',
                    area: '142',
                    direction: '朝向西南',
                    price: '3366',
                    sign: [{
                        name: '在售',
                        statu: 2
                    }, {
                        name: '亲子乐园',
                        statu: 0
                    }, {
                        name: '贴心物业',
                        statu: 0
                    }, {
                        name: '地铁沿线',
                        statu: 0
                    }, ],
                }, {
                    url: 'type1.png',
                    layout: '3室2厅2卫',
                    area: '142',
                    direction: '朝向西南',
                    price: '3366',
                    sign: [{
                        name: '在售',
                        statu: 2
                    }, {
                        name: '亲子乐园',
                        statu: 0
                    }, {
                        name: '贴心物业',
                        statu: 0
                    }, {
                        name: '地铁沿线',
                        statu: 0
                    }, ],
                }, {
                    url: 'type2.png',
                    layout: '3室2厅2卫',
                    area: '142',
                    direction: '朝向西南',
                    price: '3366',
                    sign: [{
                        name: '在售',
                        statu: 2
                    }, {
                        name: '亲子乐园',
                        statu: 0
                    }, {
                        name: '贴心物业',
                        statu: 0
                    }, {
                        name: '地铁沿线',
                        statu: 0
                    }, ],
                }, {
                    url: 'type3.png',
                    layout: '3室2厅2卫',
                    area: '142',
                    direction: '朝向西南',
                    price: '3366',
                    sign: [{
                        name: '在售',
                        statu: 2
                    }, {
                        name: '亲子乐园',
                        statu: 0
                    }, {
                        name: '贴心物业',
                        statu: 0
                    }, {
                        name: '地铁沿线',
                        statu: 0
                    }, ],
                }]
            }
        }
    }
</script>
<style scoped>
    @import url(../../assets/css/container.css);
    .container {
        margin-bottom: 2rem;
    }
</style>