<template>
    <div class="box box-between box-align-center signdiv" :class="{'deep':pageType===2}">
                 <div class="active">
                     交通(37)
                 </div>
                 <div>
                    教育(19)
                 </div>
                 <div>
                     医院(19)
                 </div>
                 <div>
                     银行(19)
                 </div>
             </div>
</template>
<script>
    export default {
        props: {
            pageType: {
                type: Number,
                default: 0,
                // required:false
            }
        }

    }
</script>
<style scoped>
    .signdiv {
        margin: 0.618rem 0;
    }
    
    .signdiv div {
        padding: 0.232rem 0.515rem;
        background: #F2F2F5;
        color: #9E9EA6;
        font-size: 0.464rem;
        border-radius: 0.206rem;
    }
    
    .signdiv.deep div {
        background: #CCCCD1;
    }
    
    .signdiv .active,
    .signdiv.deep .active {
        background: #0C66FF;
        color: #fff;
    }
</style>