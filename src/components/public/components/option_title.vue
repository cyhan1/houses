<template>
        <div class="box box-between box-align-end">
            <p :class='{"font-bold":isBold}'>{{title}}</p>
            <div >
                <p v-show='isShow'>查看全部</p>
                <div v-show='isSecond'>
                    <span class="active">在售</span>
                    <span>在相</span>
                </div>
            </div>
        </div>

</template>
<script>
    export default {
        props: {
            isShow: { //显示查看全部
                type: Boolean,
                default: true,
                // required:true
            },
            isSecond: { //二手详情处显示
                type: Boolean,
                default: false,
            },
            title: { //标题
                type: String,
                default: '标题',
                required: true,
            },
            isBold: { //是否要加粗
                type: Boolean,
                default: false,
            }
        }
    }
</script>
<style scoped>
    .box div {
        font-size: 0.464rem;
        color: #9E9EA6
    }
    
    .active {
        color: #0C66FF;
    }
</style>