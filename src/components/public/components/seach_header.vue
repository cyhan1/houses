<template>
    <section class="box box-align-center box-between">
        <i class="el-icon-arrow-left icon" @click='back' v-if='isBack'></i>
        <div class="box box-align-center location-input" >
            <div class="geolocation box " @click="close">
                <div class="text-overflow">
                    {{city}}
                </div>
                <i class="el-icon-caret-bottom"></i>
             

            </div>
        
            <el-input
                placeholder="楼盘名/开发商/学区/地铁等"
                prefix-icon="el-icon-search"
                v-model="input2">
            </el-input>
        </div>
        <div>
            <i class="el-icon-user icon user" @click='go_to_middle'  ></i>
            <i class="el-icon-location-outline icon" @click='go_to_map' v-if='!isBack'></i>
        </div>
       
         <el-drawer class="text-center"
                title='城市选择'
                :visible.sync="drawer"
                :direction='"ltr"'
                size="100%">
               
                <van-index-bar  :sticky="false" :index-list="indexList" class="text-left">
                    <van-index-anchor index="#">
                        <span class="v-title">当前定位</span>
                        <van-cell :title='city'></van-cell>
                    </van-index-anchor>
                    <van-index-anchor  v-for='(items,index) in region' :key='items.initial' :index="items.initial"  >
                        <span class="v-title">{{items.initial=='热'?'热门城市':items.initial}}</span>
                        <van-cell  v-for='(k,i) in items.list' :key='i' :index='i' :title="k.name" @click="chooseCity(k.name)"/>
                    </van-index-anchor>
                </van-index-bar>
               
            </el-drawer>
 
    </section>
    
      
    
</template>


<script>
    import provcityarea from '@/assets/static/provcityarea.json';
    import city from '@/assets/static/city.json';


    export default {
        mounted() {

            let _this = this;
            let myCity = new BMap.LocalCity();
            myCity.get(function(data) {
                _this.city = data.name
            })
        },
        props: {
            isBack: {
                type: Boolean,
                default: true,
                //  required: true
            }
        },
        data() {
            return {
                indexList: ["#", "热", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
                input2: '',
                city: '沈阳', //当前城市
                direction: 'ltr',
                drawer: false,
                region: null, //全国城市

            }
        },
        methods: {
            chooseCity(obj) {
                this.city = obj;
                this.close();
            },
            close() { //关闭/打开
                this.drawer = !this.drawer;
                if (!this.drawer) return;
                if (!this.region) {
                    this.region = city.city;
                }

            },
            back() {
                this.$router.go(-1);
            },
            go_to_map() { //地图
                this.$router.push('/map')
            },
            go_to_middle() { //个人中心
                this.$router.push('/personal')
            }

        }

    }
</script>
<style scoped>
    section {
        margin: 0.258rem 0.58rem;
        font-size: 0.515rem;
    }
    
    .location-input {
        border: 1px solid #DCDFE6;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 0.309rem;
        padding: 0 0.618rem;
        width: 12.264rem;
        margin-right: 0.618rem;
    }
    
    .geolocation {
        width: 2.5rem;
        padding-right: 0.578rem;
        line-height: 0.515rem;
        border-right: 1px solid #F2F2F5;
    }
    
    .el-input {
        width: 10.05rem;
    }
    
    .icon {
        font-size: 0.9rem;
    }
    
    .region span,
    .cityarr span,
    .county span {
        display: inline-block;
        padding: 0.155rem 0.309rem;
    }
    
    .active {
        color: #fff;
        background: #00A3FF;
    }
</style>