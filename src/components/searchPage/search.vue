<template>
    <div>
        <div class="search_head">
            <form id="J-form" action="/wechat/index/search">
                <div class="search">
                    <span @click="changeSearch">取消</span>
                    <input type="text" name="content">
                    <img src="/static/image/sousuoicon@2x.png" id="J-search" alt="">
                </div>
            </form>
        </div>
        <div class="item">
            <div>
                <ul>
                    <li>横店</li>
                    <li>宋城</li>
                    <li>温泉</li>
                    <li>滑雪</li>
                    <li>迪士尼</li>
                    <li>大明山</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        methods: {
            changeSearch() {
                this.$store.commit('changeSearch', this.$store.state.mainService.search);
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    .search_head{
        .search{
            height: 1rem;
            line-height: 1rem;
            background-image: linear-gradient(-142deg,#93f9b9 0%,#1d976c 100%);
            span{
                float: left;
                color: #fff;
                padding-left: 0.1rem;
             }
            input{
                float: left;
                width: 5.8rem;
                height: 0.7rem;
                border-radius: 1rem;
                border: none;
                outline: none;
                margin-left: 0.22rem;
                font-size: 0.28rem;
                margin-top: 0.15rem;
                color: #1b1b1b;
                padding-left: 0.3rem;

            }
            img{
                float: right;
                width: 0.4rem;
                margin-top: 0.3rem;
                margin-right: 0.2rem;
            }
        }
    }
    .item{
        div{
            &:after{
                display: block;
                clear: both;
                content: '';
            }
            background-color: #FFFFFF;
            font-size: 0.24rem;
            color: #9b9b9b;
            padding: 0 0.22rem;
            padding-top: 0.2rem;
            ul{
                li{
                    float: left;
                    border:0.02rem solid #9b9b9b;
                    border-radius: 1rem;
                    padding: 0.055rem 0.11rem;
                    margin-right: 0.2rem;
                    margin-bottom: 0.2rem;
                }
            }
        }
    }
</style>