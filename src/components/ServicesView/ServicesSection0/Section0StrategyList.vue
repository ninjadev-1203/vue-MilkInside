<template>
  <div class="c-strategy__services">
    <transition-group appear name="fade" tag="div">
      <div
        v-for="(service, index) in services"
        class="c-strategy__services-item"
        :key="service.text + index"
        ref="service"
      >
        {{ service.text }}
      </div>
    </transition-group>
  </div>
</template>

<script>
import { bounceAnimationY } from '@/helpers/animations';

export default {
  name: 'Section0StrategyList',
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.services
        .forEach((service, index) => bounceAnimationY(this.$refs.service[index], index));
    });
  },
};
</script>

<style scoped>
.c-strategy__services > div {
  display: contents;
}
</style>
