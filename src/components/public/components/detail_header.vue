<template>
     <div class="header">
           <van-swipe   @change="onChange" >
                <van-swipe-item v-for="item in imgs" :key="item.url" class="placeholder">
                     <img v-lazy="imgPath+item.url" :preview="item.preview" :preview-text="item.title" />
                </van-swipe-item>
            </van-swipe>
           

            <div class="box box-align-center box-between user-sign">
               <div @click='back'>
                    <i class="el-icon-arrow-left"></i>
                    
               </div>
                <div >
                     <i class="el-icon-edit-outline"></i>
                     <i class="el-icon-user"></i>
                </div>
             </div>
             <div class="footer text-center">
                 <span>直播</span>
                 <span>VR全景</span>
                 <span class="is-av">图片</span>
             </div>
             <span>{{current+1}}/{{imgs.length}}</span>
        </div>
</template>
<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex';



    export default {
        computed: {
            ...mapGetters(['imgPath'])
        },

        data() {
            return {
                current: 0,
                imgs: [{
                        url: '271581231610pic_hd.png',
                        preview: '1',
                        title: '图片1'
                    }, {
                        url: '271581231610pic_hd1.png',
                        preview: '1',
                        title: '图片1'
                    }, {
                        url: '271581231610pic_hd2.png',
                        preview: '1',
                        title: '图片1'
                    }, {
                        url: '271581231610pic_hd3.png',
                        preview: '1',
                        title: '图片1'
                    }, {
                        url: '271581231610pic_hd4.png',
                        preview: '1',
                        title: '图片1'
                    }, {
                        url: '271581231610pic_hd5.png',
                        preview: '1',
                        title: '图片1'
                    }, {
                        url: '271581231610pic_hd6.png',
                        preview: '1',
                        title: '图片1'
                    }, {
                        url: '271581231610pic_hd7.png',
                        preview: '1',
                        title: '图片1'
                    }, {
                        url: '271581231610pic_hd8.png',
                        preview: '1',
                        title: '图片1'
                    }, {
                        url: '271581231610pic_hd9.png',
                        preview: '1',
                        title: '图片1'
                    },

                ]

            }
        },
        methods: {
            onChange(index) {
                this.current = index;
            },
            back() {
                this.$router.go(-1);
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        color: #fff;
        width: 100%;
        height: 9.533rem;
    }
    
    .van-swipe {
        height: 9.533rem;
    }
    
    .header>div {
        /*padding: 0.58rem;*/
        box-sizing: border-box;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3
    }
    
    .header img {
        width: 100%;
        height: 100%;
    }
    
    .header .footer,
    .header>span {
        top: 7.32rem;
        font-size: 0.412rem;
        color: #2C2C3B;
        padding: 0;
    }
    
    .user-sign {
        padding: 0.58rem
    }
    
    .header .footer span,
    .header>span {
        display: inline-block;
        padding: 0.116rem 0.309rem;
        background: #fff;
        line-height: 0.773rem;
        border-radius: 0.386rem;
        margin: 0 0.232rem;
        opacity: 0.84;
    }
    
    .header>span {
        position: absolute;
        right: 0.58rem;
        font-size: 0.412rem;
        background: rgba(0, 0, 0, .6);
        opacity: 0.72;
        color: #fff;
        z-index: 3;
    }
    
    .header .footer .is-av {
        background: #0C66FF;
        color: #fff;
    }
</style>