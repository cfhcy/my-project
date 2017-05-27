<template>
    <div class="head">
        <div>
            <a @click="backPage">
                <img  src="/static/image/9F9EEB00-43FC-4933-9051-1DB99051B4D3@1x.png" class="left">
            </a>
            <span>{{title}}</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props:{
            title:{
                type: String
            }
        },
        methods: {
            backPage() {
                this.$router.go(-1);
            }
        },
    };
</script>

<style lang="less" rel="stylesheet/less">
    .head{
        div{
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            font-size: 0.36rem;
            background-image: url("/static/image/biaoti-bg@2x.png");
            color: #FFFFFF;
            span{
                display: inline-block;
                margin-left: -0.44rem;
            }
            img{
                width: 0.2rem;
                margin-left: 0.22rem;
                margin-top: 0.32rem;
            }
        }
    }
</style>