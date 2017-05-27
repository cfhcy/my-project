<template>
    <div>
        <service  :serviceMessage="serviceMessage"></service>
        <div class="navigation">
            <ul>
                <li>
                    <a href="/wechat/index/index?r=1">
                        <img src="/static/image/shouyehui@2x.png" class="navigation-samll first-img">
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
    </div>
</template>

<script type="text/ecmascript-6">
    import service from 'components/service/service';
    export default{
        data(){
          return {
              serviceMessage: {},
          }
        },
        created: function () {
            this.$ajax.get('/api/getIndex')
                .then( (res) =>{
                    this.serviceMessage = res.data.getService;
                },(err) => {
                    alert('获取客服信息失败');
                })
        },
        methods: {
            serviceOpen() {
                this.$store.commit('changeService', this.$store.state.mainService.service);
            }
        },
        components: {
            service
        }
    };
</script>

<style>

</style>