<template>
    <div class="house-type box box-align-center" @click='go_to_detail'>
        <img :src="imgPath+item.url" alt="">
        <div>
             <div class="box box-start" style='margin: 0.309rem 0 0 0'>
                <div>3室2厅2卫</div>
                <div class="sign"><span class="active">在售</span><span>环绕江景</span></div>
            </div>
            <div class="text-left star">
                <span>4.6</span>
                <img src="@/assets/img/star.png" alt="">
                 <img src="@/assets/img/star.png" alt="">
                  <img src="@/assets/img/star.png" alt="">
                   <img src="@/assets/img/star.png" alt="">
                    <img src="@/assets/img/star.png" alt="">
            </div>
            <div style="font-size: 0.464rem;color:#878791">
                <p style="margin: 0.206rem 0">建面:<span style="color:#2C2C3B">142㎡&nbsp;朝向西南</span></p>
                <p>参考价格:<span style="color:#ED5248">3366万</span></p>
            </div>       
        </div>
        <div class='share text-center'>
            <i class='el-icon-share'></i>
            <p>分享</p>
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
        props: {
            item: {
                type: Object,
                default: function() {
                    return {
                        url: 'type3.png',
                        layout: '3室2厅2卫',
                        area: '142',
                        direction: '朝向西南',
                        price: '3366',
                        sign: [{
                            name: '必看好房',
                            statu: 1
                        }, {
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
        },
        methods: {
            go_to_detail() {
                this.$router.push("/house_type_detail")
            }
        }
    }
</script>
<style scoped>
    .house-type {
        position: relative;
        margin: 0.618rem 0;
    }
    
    img {
        width: 4.64rem;
        height: 3.478rem;
        border-radius: 0.463rem;
        margin-right: 0.618rem;
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
    
    .star img {
        width: 0.36rem;
        height: 0.36rem;
        vertical-align: middle;
    }
    
    .star span {
        margin-right: 0.309rem;
    }
    
    .share {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
</style>