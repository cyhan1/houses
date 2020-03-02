<template>
    <div class="house-type">
        <img :src="imgPath+item.url" alt="">
        <div class="box box-start" style='margin: 0.309rem 0 0 0'>
            <div>{{item.layout}}</div>
            <div class="sign">
                <span :class="{'active':listitem.statu==2}" v-for='(listitem,inx) in item.sign' :key='inx' v-if='inx<2'>{{listitem.name}}</span></div>
        </div>
        <div style="font-size: 0.464rem;color:#878791">
            <p style="margin: 0.206rem 0">建面:<span style="color:#2C2C3B">{{item.area}}㎡&nbsp;{{item.direction}}</span></p>
            <p>参考价格:<span style="color:#ED5248">{{item.price}}万</span></p>
        </div>       
        
    </div>
    
</template>
<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex';
    export default {
        computed: {
            ...mapGetters(['imgPath']),
        },
        mounted() {
            console.log(this.imgPath)
        },
        props: {
            item: {
                type: Object,
                default: function() {
                    return {
                        url: '271581231610pic_hd28.png',
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
                    }


                }
            }
        }

    }
</script>
<style scoped>
    .house-type {
        width: 6.493rem;
        margin-top: 0.618rem;
        /*margin: 0.618rem;*/
    }
    
    .house-type img {
        width: 6.493rem;
        height: 4.638rem;
    }
    
    .box-start P:first-child {
        color: #2C2C3B
    }
    
    .box-start span {
        font-size: 0.438rem;
        display: inline-block;
        color: #9E9EA6;
        background: #F2F2F5;
        padding: 0.052rem 0.154rem;
    }
    
    .box-start .active {
        background: rgba(12, 102, 255, 0.23);
        color: #0C66FF;
    }
</style>