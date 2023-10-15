<template>
  <div class="c-what-we-do__products">
    <transition-group appear name="fade" tag="div">
      <WhatWeDoProduct
        v-for="(product, index) in whatWeDo"
        :index="index"
        :product="product"
        :key="product.title + index"
        ref="product"
      />
    </transition-group>
  </div>
</template>

<script>
import WhatWeDoProduct from '@/components/ServicesView/ServicesSection1/WhatWeDoProduct.vue';
import { bounceAnimationY } from '@/helpers/animations';

export default {
  name: 'ServicesSection1WhatWeDo',
  components: { WhatWeDoProduct },
  props: {
    whatWeDo: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.whatWeDo
        .forEach((product, index) => bounceAnimationY(this.$refs.product[index].$el, index));
    });
  },
};
</script>

<style scoped>
.c-what-we-do__products {
  overflow-y: hidden;
}

.c-what-we-do__products > div {
  display: contents;
}
</style>
