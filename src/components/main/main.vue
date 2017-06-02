<template>
    <div>
        <header>
            <div class="head">
                <span class="city">
                    <router-link :to="{ name:'city',params:{ city_no : city.city_no , city_name : city.city_name}}">
                        <b>{{city.city_name}}</b>
                        <img src="/static/image/dingwei.png" alt="">
                    </router-link>
                </span>
                在途旅游
                <span @click="changeSearch">
                    <img src="/static/image/sousuoicon@2x.png" alt="">
                </span>
            </div>
        </header>
        <search-page></search-page>
        <section>
            <a  href="/wechat/activity/activity-product/">
                <div class="special">
                    <h3>本期活动</h3>
                    <div>
                        <img src="http://obizalh10.bkt.clouddn.com/58db1998509de" alt="">
                        <div>
                            <h4>{{activityProduct.title}}</h4>
                            <ul>
                                <li>
                                    {{activityProduct.venue}}|<span>{{activityProduct.buyers}}人已抢购</span>
                                </li>
                                <li>
                                    <b>&yen;110</b>起
                                </li>
                                <span>抢购</span>
                            </ul>
                        </div>
                    </div>
                </div>
            </a>
            <div class="classify">
                <ul>
                    <li>
                        <a href="/wechat/index/more-ticproducts">
                            <img src="/static/image/menpiao@2x.png" alt="">
                            门票
                        </a>
                    </li>
                    <li>
                        <a href="/wechat/index/more-pakages">
                            <img src="/static/image/140004716470097086.png" alt="">
                            套餐
                        </a>
                    </li>
                    <li>
                        <a href="/wechat/index/more-routes">
                            <img src="/static/image/xianlu@2x.png" alt="">
                            线路
                        </a>
                    </li>
                </ul>
            </div>
            <div class="promotion">
                <div class="promotion-head">
                    <p class="head-left left">
                        本期活动
                    </p>
                    <span id="time">
                    </span>
                </div>
            </div>
            <exhibition :product-type="'门票'" :products="tickets"></exhibition>
            <exhibition :product-type="'套餐'" :products="pakages"></exhibition>
            <exhibition :product-type="'线路'" :products="routes"></exhibition>
        </section>
        <footer>
            <service  :serviceMessage="serviceMessage"></service>
            <div class="navigation">
                <ul>
                    <li>
                        <a href="/wechat/index/index?r=1">
                            <img src="/static/image/shouyeanxia.png" class="navigation-samll first-img">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/static/image/huodong.png" class="   ">
                        </a>
                    </li>
                    <li>
                        <a  href="/wechat/myindex/myindex">
                            <img src="/static/image/gerenzhongxin.png" class="navigation-big">
                        </a>
                    </li>
                    <li>
                        <a @click="serviceOpen">
                            <img src="/static/image/kefu.png" class="navigation-big last-img">
                        </a>
                    </li>
                </ul>
            </div>
            <div style="height: 1.08rem"></div>
        </footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import exhibition from '../exhibition/exhibition';
    import service from '../service/service';
    import searchPage from '../searchPage/search';

    export default {
        data() {
            return {
                activityProduct: {},
                tickets: [],
                pakages: [],
                routes: [],
                serviceMessage: {},
                city: {city_no : 11000,city_name: '杭州'}
            };
        },
        computed: {
            serviceState() {
                return this.$store.state.mainService.service;
            },
            cityName(){
                return this.$route.params;
            }
        },
        created: function () {
            this.fetchData();
        },
        watch: {
            '$route' : 'fetchData'
        },
        methods: {
            fetchData() {
                if (this.$route.params.city_no){
                    this.city = this.$route.params;
                }
                this.$ajax.post('/api/getIndex',{city_no: this.$route.params.city_no})
                    .then( (res) => {
                        this.activityProduct = res.data.getActivityProduct;
                        this.tickets = res.data.getTicket;
                        this.pakages = res.data.getPakage;
                        this.routes = res.data.getRoute;
                        this.serviceMessage = res.data.getService;
                    },( err ) =>{
                        alert('页面加载出错');
                    })
            },
            serviceOpen() {
                this.$store.commit('changeService', this.$store.state.mainService.service);
            },
            changeSearch() {
                this.$store.commit('changeSearch', this.$store.state.mainService.searchState);
            }
        },
        components: {
            exhibition,
            service,
            searchPage
        }
    };
</script>

<style lang='less' rel='stylesheet/less'>
    @import "../../../resource/css/reset";
    .head{
        position: relative;
        padding: 0 0.21rem;
        height: 1rem;
        background: url("/static/image/biaoti-bg@2x.png");
        line-height: 1rem;
        color: #FFFFFF;
        font-size: 0.36rem;
        text-align: center;
        .city{
            position: absolute;
            height: 100%;
            left: 0.28rem;
            b{
                display: inline-block;
                max-width: 1rem;
                font-weight: normal;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 0.32rem;
                color: #fff;
            }
            img{
                width: 0.31rem;
                height: 0.35rem;
                margin-left: 0.06rem;
                margin-bottom: 0.33rem;
            }
        }
        &>span{
            position: absolute;
            right: 0.28rem;
            width: 1.3rem;
            img{
                width: 0.4rem;
                float: right;
                margin-top: 0.3rem;
            }
        }
    }
    a {
        .special {
            //padding: 0 0.22rem 0.1rem 0.22rem;
            background-color: #fff;
            margin-bottom: 0.2rem;
            h3 {
                font-size: 0.32rem;
                color: #e24c1b;
                padding: 0.1rem 0;
                padding-left: 0.22rem;
                border-bottom: 1px solid #cdcdcd;
                margin-bottom: 0.06rem;
                font-weight: normal;
            }
            &>div {
                padding: 0 0.22rem 0.3rem 0.22rem;
                img {
                    width: 100%;
                    height: 4rem;
                }
                div {
                    color: #505050;
                    font-size: 0.28rem;
                    h4 {
                        font-weight: 400;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        margin-bottom: 0.1rem;
                        font-size: 0.36rem;
                    }
                    ul {
                        position: relative;
                        li {
                            &:first-child {
                                margin-bottom: 0.1rem;
                                span {
                                    color: #f7b41e;
                                }
                            }
                            &:nth-child(2) {
                                font-family: "Microsoft Yahei", "宋体", Arial, sans-serif;
                                font-size: 0.26rem;
                                color: #fb7810;
                                b {
                                    font-weight: normal;
                                    font-size: 0.38rem;
                                }
                            }
                        }
                        & > span {
                            position: absolute;
                            top: 0.5rem;;
                            right: 0;
                            color: #fff;
                            width: 1.6rem;
                            height: 0.6rem;
                            line-height: 0.6rem;
                            text-align: center;
                            background-color: #fb7810;
                            border-radius: 0.06rem;
                        }
                    }
                }
            }
        }
    }
    .glide__track{
        height: 3.6rem;
        img{
            width:7.5rem;
            height: 3.6rem;
        }
    }
    .classify{
        height: 1.7rem;
        background-color: #FFFFFF;
        ul{
            height: 100%;
            li{
                float: left;
                width: 33.3%;
                text-align: center;
                font-size: 0.26rem;
                height: 100%;
                a{
                    color: #1D2331;
                    img{
                        display: block;
                        width: 1rem;
                        vertical-align: bottom;
                        margin: 0.2rem auto 0.06rem auto;
                    }
                }

            }
        }

    }
    .promotion{
        margin-top: 0.2rem;
        background-color: #FFFFFF;
        border-bottom: 0.02rem solid #efefef;
        .promotion-head{
            height: 0.6rem;
            border-bottom: 1px solid #CDCDCD;
            line-height: 0.6rem;
            padding: 0 0.22rem;
            #time{
                float: right;
                color:#d23625;
                font-size: 0.22rem;
            }
            .head-left{
                font-size: 0.36rem;
                color:#e2493c;
            }
            .head-right{
                font-size: 0.26rem;
                color: #1b1b1b;
                img{
                    vertical-align: middle;
                    width: 0.13rem;
                }
            }
        }
        .promotion-main{
            &:after{
                display: block;
                content: '';
                clear: both;
            }
            padding: 0.11rem 0.11rem 0.17rem 0.11rem;
            .main-left{
                margin-right: 0.24rem;
                img{
                    display: block;
                    width: 3.6rem;
                    height: 2.3rem;
                }
            }
            .main-right{
                width: 3.42rem;
                &>p:first-child{
                    font-size: 0.3rem;
                    color: #333;
                    height: 0.32rem;
                    line-height: 0.32rem;
                    margin-bottom: 0.06px;
                    overflow: hidden;
                }
                p:nth-child(2){
                    height: 0.32rem;
                    line-height: 0.32rem;
                    color: #fc353a;
                    overflow: hidden;
                    font-size: 0.24rem;
                }
                .main_price{
                    margin-bottom: 0.2rem;
                    .item_price{
                        display: inline-block;
                        font-size: 0.28rem;
                        color: #fc353a;
                        width: 50%;
                        p{
                            font-weight: 700;
                            margin-top: 0.18rem;
                            margin-right: 0.2rem;
                            display: inline-block;
                            span{
                                font-size: 0.42rem;
                            }
                        }
                        s{
                            color: #999;
                        }
                    }
                    .item_button{
                        display: inline-block;
                        color: #FFFFFF;
                        background-color: #ff5e5d;
                        height: 0.48rem;
                        line-height: 0.48rem;
                        width: 1.18rem;
                        border-radius: 0.16rem;
                        font-weight: 700;
                        text-align: center;
                        font-size: 0.24rem;
                    }
                }
                .main_num{
                    color:#fc353a;
                    .main_schedule{
                        position: relative;
                        float: left;
                        box-sizing: border-box;
                        width: 2.1rem;
                        height: 0.26rem;
                        border: 1px solid #fc353a;
                        border-radius: 0.12rem;
                        color: #fff;
                        background: #ffb7b7;
                        text-align: center;
                        overflow: hidden;
                        .item_schedule{
                            position: absolute;
                            top:0;
                            left: 0;
                            height: 100%;
                            border-radius: 0.12rem;
                            background: #ff5e5d;
                        }
                        span{
                            position: absolute;
                            top:0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            line-height: 100%;
                            font-size: 0.24rem;
                        }
                    }
                    &>span{
                        float: right;
                        font-size: 0.26rem;
                    }
                }
            }
        }
    }
    .attraction{
        background-color: #FFFFFF;
        padding: 0.16rem 0 0.10rem 0.17rem;
        margin-top: 0.1rem;
        div{
            &:after{
                clear: both;
                display: block;
                content: '';
            }
            .attraction-head{
                font-size: 0.28rem;
                height: 0.46rem;
                padding-left: 0.07rem;
                margin-bottom: 0.04rem;
                padding-right: 0.24rem;
                p{
                    float: left;
                }
                a{
                    float: right;
                    color: #9b9b9b;
                    font-size: 0.24rem;
                    img{
                        width: 0.13rem;
                        vertical-align: top;
                        margin-left: 0.02rem;
                    }
                }
                .attraction-head-left{
                    span{
                        display: block;
                        height: 0.04rem;
                        width: 100%;
                        background: linear-gradient(to right, #39ae7e , #82ebae);
                    }
                    img{
                        width: 0.54rem;
                        display: block;
                    }
                }
            }
            .attraction-main{
                font-size: 0.26rem;
                a{
                    color:#1b1b1b;
                    .attraction-main-left{
                        position: relative;
                        margin-bottom: 0.2rem;
                        float: left;
                        width: 3.53rem;
                        text-align: center;
                        margin-right: 0.1rem;
                        img{
                            width: 3.4rem;
                            height: 2.5rem;
                            margin-bottom: 0.1rem;
                        }
                        .product_title{
                            width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .attraction-price{
                            font-size: 0.2rem;
                            color: #9b9b9b;
                            width: 95%;
                            &>span{
                                display: inline-block;
                                width: 56%;
                                text-align: left;
                                padding-left: 0.08rem;
                            }
                            p{
                                display: inline-block;
                                text-align: right;
                                width: 40%;
                                span{
                                    color: #e24c1b;
                                    font-size: 0.32rem;
                                    i{
                                        font-size: 0.18rem;
                                        font-family: Arial;
                                        font-style: normal;
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }
        .price-left{
            float: left;
            padding-right:0.11rem;
        }
        .price-right{
            float: right;
            padding-left:0.11rem;
        }
    }
    .navigation{
        height: 0.98rem;
        background-color: #FFFFFF;
        width: 100%;
        position: fixed;
        bottom: 0;
        ul{
            width: 100%;
            li{
                text-align: center;
                width: 25%;
                float: left;
                img{
                    margin-top: 0.14rem;
                    display: block;
                }
                &:nth-child(2){
                    a{
                        img{
                            width: 0.48rem;
                            margin-left: 0.7rem;
                        }
                    }
                }
                .navigation-samll{
                    width: 0.44rem;
                    margin-left: 0.7rem;
                }
                .navigation-big{
                    margin-left: 0.5rem;
                    width: 0.88rem;
                }
                .first-img{
                    margin-left: 0.86rem;
                }
                .last-img{
                    margin-left: 0.425rem;
                }
            }
        }
    }
    .loading{
        font-size: 0.26rem;
        height: 0.44rem;
        line-height: 0.44rem;
        border-radius: 0.06rem;
        width:27%;
        margin: 0 auto;
        margin-top: 0.16rem;
        margin-bottom: 0.2rem;
        text-align: center;
        background: #9b9b9b;
        color: #FFFFFF;
    }
    .seckill{
        position: relative;
        img{
            &:first-child{
                width: 7.5rem;
                display: block;
            }
            &:last-child{
                position: absolute;
                width: 0.6rem;
                bottom: 0.1rem;
                right: 0.22rem;
            }
        }
    }
</style>
