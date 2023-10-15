<template>
  <div class="section-footer-indicators">
    <div class="section-footer-indicators__dots">
      <span
        v-for="dot in dotsCount"
        :key="dot"
        class="section-footer-indicators__dot"
        :class="{'section-footer-indicators__dot--inactive': dot !== currentDot}"
      ></span>
    </div>

    <IndicatorsMouse/>
  </div>
</template>

<script>
import IndicatorsMouse from '@/components/HomeView/IndicatorsMouse.vue';

export default {
  name: 'FooterIndicators',
  components: {
    IndicatorsMouse,
  },
  props: {
    currentDot: {
      type: Number,
      default: 1,
    },
    dotsCount: {
      type: Number,
      default: 2,
    },
  },
};
</script>
