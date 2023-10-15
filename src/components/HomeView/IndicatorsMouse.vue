<template>
  <div class="section-footer-indicators__mouse">
    <div
      id="scroll-animation"
      ref="scrollAnimation"
      :style="animationContainerStyles"
    ></div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import scrollAnimation from '@/assets/lottiAnimationsData/scrollAnimation';

const ANIMATION_DEFAULT_WIDTH = 18;
export default {
  name: 'IndicatorsMouse',
  props: {
    scale: {
      type: Number,
      default: 1,
    },
    color: {
      type: String,
      default: '#ffffff',
      validator(value) {
        // Check if the value is a valid HEX color
        return /^#([A-Fa-f0-9]{3}){1,2}$/.test(value);
      },
    },
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.scrollAnimation,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: scrollAnimation,
    });
  },
  computed: {
    animationContainerStyles() {
      return `width: ${ANIMATION_DEFAULT_WIDTH * this.scale}px;`;
    },
  },
};
</script>
