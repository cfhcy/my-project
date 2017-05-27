<template>
    <div>
        <head-place :title="'城市选择'"></head-place>
        <div class="section">
            <div class="location_city">
                <p>根据您的定位推荐</p>
                <router-link to="/main">{{cityName}}</router-link>
            </div>
            <div class="city">
                <p>现有城市</p>
                <ul>
                    <li v-for="city in citys"><router-link :class="{selected : cityNo == city.city_no}" :to="{name:'backCity',params:{'city_no': city.city_no,'city_name': city.name}}">{{city.name}}</router-link></li>
                </ul>
            </div>
        </div>
        <down-navigation></down-navigation>
    </div>
</template>

<script type="text/ecmascript-6">
    import headPlace from 'components/header/header';
    import downNavigation from 'components/downNavigation/navigation';

    export default {
        data() {
            return{
                citys: []
            }
        },
        created(){
            this.$ajax.get('/api/getNowCity')
            .then( (res) => {
                this.citys = res.data;
            },( err ) =>{
                alert('页面加载出错');
            })
        },
        computed: {
          cityName() {
              return this.$route.params.city_name;
          },
          cityNo() {
            return this.$route.params.city_no;
          },
          serviceState() {
             return this.$store.state.mainService.service;
          }
        },
        components: {
            headPlace,
            downNavigation
        }
    };
</script>

<style lang="less" rel='stylesheet/less'>
    body{
        font-size: 0.32rem;
    }
    .section{
        a{
            display: inline-block;
            color: #1b1b1b;
            width: 1.5rem;
            height: 0.64rem;
            line-height: 0.6rem;
            text-align: center;
            border:1px solid #ddd;
            border-radius: 0.06rem;
        }
        div{
            padding-left: 0.25rem;
            background-color: #fff;
        }
        p{
            padding: 0.25rem 0;
            color:#999;
        }
        .city{
            padding-bottom: 0.2rem;
            &:after{
                display: block;
                clear: both;
                content: '';
            }
            ul{
                li{
                    float: left;
                    width: 25%;
                    height: 0.86rem;
                }
            }
        }
        .selected{
            color: #23cc77;
            border-color: #23cc77;
            background-color: #f4fcf8;
        }
    }
</style>
