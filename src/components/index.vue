<template>
    <!--我是主页-->
 <el-container>
     <!--<div>
         <router-link to='/new_home_detail'>详情</router-link>
    <router-link to='/find_new_home'>找房子</router-link>
     </div>-->
    <el-header  height="4.33rem">
        <h-header></h-header>
    </el-header>
  <el-main>
    <s-header :isBack='false'></s-header>
    <h-banner></h-banner>
    <section class="container">
    <h-navbtn></h-navbtn>
    <section class="house-class box">
        <div @click='go_to_new'>
            <img src="@/assets/img/find_new_home@2x.png" alt="">
            <div class="tst text-left">
                <p>找新房</p>
                <p>海量房源，新开热盘</p>
            </div>
        </div>
        <div>
            <div  @click='go_to_second'>
                <img src="@/assets/img/second-hand_house@2x.png" alt="">
                 <div class="tst text-left">
                    <p>二手房</p>
                    <p>真实房源，权威认证</p>
                </div>
            </div>
            <div  @click='go_to_rent'>
                <img src="@/assets/img/renting@2x.png" alt="">
                 <div class="tst text-left">
                    <p>租房</p>
                    <p>真实房源，权威认证</p>
                </div>
            </div>
            
        </div>
    </section>
    <section class="live-to-see">
        <img src="@/assets/img/Live_to_see@2x.png" alt="">
          <div class="tst text-left">
                <p>直播看房</p>
                <p>足不出户，线上购房</p>
            </div>
    </section>
     <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="好评榜" name="first">
           <h-list v-for='item in 4' :key="item"></h-list>
        </el-tab-pane>
    <el-tab-pane label="新房" name="second">新房</el-tab-pane>
    <el-tab-pane label="二手房" name="third">二手房</el-tab-pane>
    <el-tab-pane label="商业地产" name="fourth">商业地产</el-tab-pane>
    
  </el-tabs>
    </section>
  </el-main>
   
</el-container>
 
</template>

<script>
    import MyHeader from '@/components/public/components/header';
    import MySeachHeader from '@/components/public/components/seach_header';
    import MyBan from '@/components/public/components/banner';
    import MyNavBtn from '@/components/public/components/nav-btn';
    import MyListItem from '@/components/public/components/list_item';
    export default {
        name: 'index',
        components: {
            "h-header": MyHeader,
            "s-header": MySeachHeader,
            "h-banner": MyBan,
            'h-list': MyListItem,
            'h-navbtn': MyNavBtn
        },
        data() {
            return {
                activeName: 'first'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            go_to_new() {
                this.$router.push('/find_new_home')
            },
            go_to_rent() {
                this.$router.push('/rent_a_house')
            },
            go_to_second() {
                this.$router.push('/second_hand_house')
            }
        }
    }
</script>


<style scoped>
    .el-container {
        overflow: hidden;
    }
    
    p {
        padding: 0;
        margin: 0;
    }
    
    .el-header {
        padding: 0.58rem;
        font-size: 0.464rem;
        background: #f2f2f5;
        width: 100%;
        color: #9E9EA6;
        font-family: PingFangSC-Regular, PingFang SC;
    }
    
    .el-main {
        padding: 0;
    }
    
    .container {
        padding: 0 0.578rem;
        font-family: PingFangSC-Regular, PingFang SC;
    }
    
    .house-class div,
    .live-to-see {
        position: relative;
        font-size: 0.618rem;
        color: #2C2C3B;
    }
    
    .house-class .tst,
    .live-to-see .tst {
        position: absolute;
        top: 0.464rem;
        left: 0.464rem
    }
    
    .tst p:first-child {
        line-height: 0.876rem;
    }
    
    .tst p:last-child {
        font-size: 0.42rem;
    }
    
    .live-to-see {
        margin: 0.412rem 0;
        width: 100%;
        height: 4.69rem;
        box-sizing: border-box;
    }
    
    .live-to-see img {
        width: 100%;
        height: 100%;
    }
    
    .house-class>div:first-child {
        margin-right: 0.41rem;
    }
    
    .house-class img {
        display: block;
    }
    
    .house-class img {
        width: 7.832rem;
        height: 3.658rem;
    }
    
    .house-class>div:first-child img {
        width: 6.596rem;
        height: 7.729rem;
    }
    
    .house-class>div:last-child div:first-child {
        margin-bottom: 0.41rem;
    }
    
    .el-tabs {
        margin-top: 1.03rem;
        font-size: 0.618rem;
        color: #4A4E5F
    }
</style>