<template>
  <div class="c-what-we-do__product">
    <div
      class="c-what-we-do__product-content"
      :class="{'c-what-we-do__product-content--no-left-padding': indexComputed > 1}"
    >
      <div class="c-what-we-do__product-index">{{ indexComputed | zeroPadTwo }}</div>
      <div
        class="c-what-we-do__product-title"
        v-html="convertNewLineToBreak(product.title)"
      ></div>

      <div class="c-what-we-do__product-line">
        <div class="c-what-we-do__product-line--bar"></div>
        <div class="c-what-we-do__product-line--faded-bar"></div>
      </div>

      <div
        class="c-what-we-do__product-description"
        v-html="convertNewLineToBreak(product.description)"
      ></div>
    </div>
    <WhatWeDoProductClients
      :index="indexComputed"
      :clients="product.clients"
    />
    <WhatWeDoProductBackground
      v-if="product.backgroundUrl"
      :videoUrl="product.backgroundUrl"
    />
  </div>
</template>
<script>
import { convertNewLineToBreak } from '@/helpers/helpers';
import WhatWeDoProductClients from '@/components/ServicesView/ServicesSection1/WhatWeDoProductClients.vue';
import WhatWeDoProductBackground from '@/components/ServicesView/ServicesSection1/WhatWeDoProductBackground.vue';

export default {
  name: 'WhatWeDoProduct',
  components: {
    WhatWeDoProductBackground,
    WhatWeDoProductClients,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    indexComputed() {
      return this.index + 1;
    },
  },
  methods: {
    convertNewLineToBreak,
  },
  filters: {
    zeroPadTwo(value) {
      return value.toString().padStart(2, '0');
    },
  },
};
</script>
