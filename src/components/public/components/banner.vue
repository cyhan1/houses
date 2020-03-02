<template>
  
     <van-swipe   @change="onChange"  :autoplay='5000' :duration='1000' indicator-color="white" class="banner">
          <van-swipe-item v-for="item in 4" :key="item" class="placeholder">
            <img src="@/assets/img/baner@2x.png" alt="">
                <!--<img v-lazy="imgPath+item.url" :preview="item.preview" :preview-text="item.title" />-->
          </van-swipe-item>
      </van-swipe>
   
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
        methods: {
            onChange(index) {

            }
        }
    }
</script>
<style scoped>
    .el-carousel {
        margin-top: 0.258rem;
    }
    
    .van-swipe {
        height: 7.73rem;
    }
    
    .van-swipe__indicators {
        bottom: 1.08rem;
    }
    
    img {
        height: 100%;
        width: 100%
    }
</style>