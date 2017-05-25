<template>
    <div v-show="service">
        <div @click="serviceOpen" class="service">
        </div>
        <div class="service_main">
            <img @click="serviceOpen" class="right" src="/static/image/x@2x.png">
            <div class="service_code">
                <span>长按识别客服二维码</span>
                <img :src="serviceMessage.qrcode" alt="">
            </div>
            <div class="service_phone">
                <span>或者</span>
                <button @click="callPhone">拨打客服电话:{{serviceMessage.service_tel}}</button>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
          service: {
              type: Boolean
          },
          serviceMessage: {
              type: Object
          }
      },
      methods: {
          serviceOpen() {
             console.log(this.$store.state.service);
             this.$store.commit('change', this.service);
          },
          callPhone() {
              window.location.href = 'tel:' + this.service.service_tel;
          }
      }
    };
</script>

<style>

</style>
