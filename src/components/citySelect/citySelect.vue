<template>
    <div>
        <head-place :title="'城市选择'"></head-place>
        <div class="section">
            <div class="location_city">
                <p>根据您的定位推荐</p>
                <a href="">{{cityName}}</a>
            </div>
            <div class="city">
                <p>现有城市</p>
                <ul>
                    <li><a></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import headPlace from 'components/header/header';

    export default {
        created(){
            this.$ajax.get('/api/getNowCity')
            .then( (res) => {

            },( err ) =>{}
            )
        },
        computed: {
          cityName() {
              console.log(this.$route.path);
              console.log(this.$route.query.cityid);
              console.log(this.$route.query);
              console.log(this.$route.params);
              console.log(this.$route.hash);
              console.log(this.$route.fullPath);
              console.log(this.$route.matched);
              console.log(this.$route.name);
              return this.$route.params.cityname;
          }
        },
        components: {
            headPlace
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
