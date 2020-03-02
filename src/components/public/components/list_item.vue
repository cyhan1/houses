<template>
    <section >
    <div class="box list-item">
        <div class="img placeholder">
            <img :src="itemlist.cover" alt="">
            <img src="@/assets/img/play@2x.png" alt="" class="play">
        </div>
        <div @click='go_to_detail(url)'>
            <div class="box box-between title">
                <p>{{itemlist.title}}</p>
                <p>{{itemlist.price}}元/m² <span>均</span></p>
            </div>
            <div class="text-left star">
                <span>4.6</span>
                <img src="@/assets/img/star.png" alt="">
                 <img src="@/assets/img/star.png" alt="">
                  <img src="@/assets/img/star.png" alt="">
                   <img src="@/assets/img/star.png" alt="">
                    <img src="@/assets/img/star.png" alt="">
            </div>
            <p class="text-left">{{itemlist.address}}/建面 {{itemlist.min}}~{{itemlist.max}}㎡</p>
            <div class="text-left house-sign">
                
                <span  v-for='(item,index) in itemlist.sign' :key='item.name' :class='{"span-red":item.statu==1,"span-blue":item.statu==2}'>{{item.name}}</span>
               
            </div>
            
        </div>
        
    </div>
    <footer class="footer box box-align-center" v-show='itemlist.lightspot'>
        <div class=" box box-align-center ">
             <img src="@/assets/img/sign@2x.png" alt="">
        </div>
       <span>楼盘亮点|{{itemlist.lightspot}}</span>
        
    </footer>
        </section>
</template>
<script>
    export default {
        props: {
            url: {
                type: String,
                default: '/new_home_detail',

            },
            itemlist: {
                type: Object,
                default: function() {
                    return {
                        id: 1,
                        title: '其仕和悦',
                        banner: [],
                        cover: 'http://seeker.haetek.com/houseonline/images/271581231610pic_hd10.png',
                        detailimg: [],
                        price: '16000',
                        score: 4.6,
                        address: '沈河区方家栏路',
                        min: 102,
                        max: 142,
                        sign: [{
                            name: '必看好房',
                            statu: 1
                        }, {
                            name: '在售',
                            statu: 2
                        }, {
                            name: '品牌房房企',
                            statu: 0
                        }, {
                            name: '成熟商圈',
                            statu: 0
                        }, ],
                        lightspot: "低密度住宅底商"
                    }
                }
            }
        },
        mounted() {
            // console.log(this.itemlist)
        },
        methods: {
            go_to_detail(_url) {

                this.$router.push(_url)
            },

        }
    }
</script>
<style scoped>
    section {
        font-size: 0.438rem;
        font-family: PingFangSC-Medium, PingFang SC;
        padding-bottom: 0.824rem;
        border-bottom: 1px solid #F2F2F5;
        margin-top: 0.824rem;
    }
    
    .img {
        width: 4.64rem;
        height: 3.478rem;
        position: relative;
    }
    
    .img img {
        width: 100%;
        height: 100%;
        border-radius: 0.463rem;
    }
    
    .img .play {
        position: absolute;
        left: 0.258rem;
        bottom: 0.232rem;
        width: 0.773rem;
        height: 0.77rem;
    }
    
    .img+div {
        width: 9.584rem;
        margin-left: 0.618rem;
    }
    
    .title {
        font-size: 0.618rem;
    }
    
    .title p:last-child {
        font-size: 0.567rem;
        color: #ED5248;
        font-weight: 500;
    }
    
    .title p:last-child span {
        display: inline-block;
        border: 1px disabled #CCCCD1;
        color: #CCCCD1;
        font-size: 0.464rem;
    }
    
    .star {
        margin: 0.348rem 0;
    }
    
    .star img {
        width: 0.36rem;
        height: 0.36rem;
    }
    
    .star span {
        margin-right: 0.309rem;
    }
    
    .star+p {
        margin-bottom: 0.206rem;
    }
    
    .star+p,
    .housee-sign {
        line-height: 0.618rem;
    }
    
    .house-sign span {
        display: inline-block;
        /*font-size: 0.438rem;*/
        background: #F2F2F5;
        color: #9E9EA6;
        padding: 0 0.154rem
    }
    
    .house-sign .span-red {
        background: #ED5248;
        color: #fff;
    }
    
    .house-sign .span-blue {
        color: #fff;
        background: #00A3FF
    }
    
    footer {
        margin: 0.747rem 0.206rem 0.129rem;
    }
    
    footer div {
        width: 0.515rem;
        height: 0.515rem;
        border-radius: 50%;
        background: #ED5248;
        margin-right: 0.206rem
    }
    
    footer div img {
        width: 0.36rem;
        height: 0.36rem;
        margin: 0 auto;
    }
    
    footer>span {
        background: rgba(255, 197, 34, 0.07);
    }
</style>