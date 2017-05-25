<template>
    <div v-if="products" class="attraction">
            <div>
                <div class="attraction-head">
                    <p class="attraction-head-left left">
                        {{productType}}
                        <span></span>
                    </p>
                    <a href="/wechat/index/more-ticproducts">
                        <p class=" right">
                            更多<img src="/static/image/118777603082319711.png" alt="">
                        </p>
                    </a>
                </div>
                <div class="attraction-main main" >
                    <a v-for="product in products" href="/wechat/product/ticproduct/">
                        <div class="attraction-main-left">
                            <div>
                                <img :src="product.image" alt="">
                                <p class="product_title">{{product.title}}</p>
                            </div>
                            <div class="attraction-price">
                                <span>{{product.count}}人已购买</span>
                                <p>
                                    <span><i>&yen;</i>{{product.price}}</span>起
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: {
            productType: {
                type: String
            },
            products: {
                type: Array
            }
        },
        computed: {
            product() {
                console.log(this.products);
            }
        }
    };
</script>

<style>

</style>
