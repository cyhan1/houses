<template>
     <div class="user-say">
                <div class="box box-between" style="align-items:flex-end">
                    <div class="box">
                        <img src="@/assets/img/user@2x.png" alt="">
                        <div>
                            <p style='font-weight: 600'>用户昵称</p>
                            <el-rate
                                v-model="value1"
                                disabled
                                show-score
                                text-color="#ff9900"
                                :show-score='false'
                               >
                                </el-rate>

                        </div>
                    </div>
                    <div>
                        11月21号
                    </div>
                    
                </div>
                <p class="textview-overflow three">地段不错，楼下就是地铁，装修标准这周边也找不出来第二家啦！今天刚买了一个80多平的，家里人从外地都来看了，看的都还不错！期待涨价....</p>
            </div>
            
</template>
<script>
    export default {
        data() {
            return {
                value1: 5,
            }
        }
    }
</script>
<style scoped>
    .user-say {
        padding: 0.68rem 0.824rem;
        background: #F2F2F5;
        font-size: 0.515rem;
        margin-bottom: 0.618rem;
        border-radius: 0.309rem;
        margin: 0.618rem 0;
    }
    
    .user-say img {
        width: 1.185rem;
        height: 1.185rem;
        display: block;
        border-radius: 50%;
        border: 1px solid #0C66FF;
        margin-right: 0.386rem;
    }
</style>