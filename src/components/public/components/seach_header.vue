<template>
    <section class="box box-align-center">
        <i class="el-icon-arrow-left" @click='back' v-if='isBack'></i>
        <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input2">
  </el-input>
  <i class="el-icon-user"></i>
  <i class="el-icon-location-outline"></i>

    </section>
    
        <!--<el-input placeholder="请输入内容" v-model="input3" class="input-with-select"  prefix-icon="el-icon-search">
            <el-select v-model="select" slot="prepend" placeholder="请选择" style="color: red">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
            </el-select>-->
    <!--<el-button slot="append" icon="el-icon-search"></el-button>-->
  </el-input>
    
</template>
<script>
    export default {
        props: {

            isBack: {
                type: Boolean,
                default: true,
                //  required: true
            }
        },
        data() {
            return {
                input2: '',
                value: '',
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            }
        }

    }
</script>
<style scoped>
    section {
        margin: 0.258rem 0.58rem;
    }
</style>