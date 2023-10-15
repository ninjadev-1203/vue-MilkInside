<template>
  <div class="c-clients__bottom-section">
    <div class="c-clients__statistics">
      <transition-group appear name="fade" tag="div">
        <div
          class="c-clients__statistic"
          v-for="(option, index) in statistics"
          :key="index + option.description"
          ref="statOption"
        >
          <p class="c-clients__statistic-value">
            <AnimatedNumber
              :value="option.value"
              :round="1"
              :duration="DURATION_BOUNCE_ANIMATION"
            />
          </p>
          <p class="c-clients__statistic-description"
             v-html="convertNewLineToBreak(option.description)"
          ></p>
        </div>
      </transition-group>
    </div>
    <LearnMoreButton/>
  </div>
</template>
<script>
import { convertNewLineToBreak } from '@/helpers/helpers';
import { bounceAnimationY, DURATION_BOUNCE_ANIMATION } from '@/helpers/animations';
import LearnMoreButton from '@/components/ServicesView/ServicesSectionCommon/LearnMoreButton.vue';
import AnimatedNumber from 'animated-number-vue';

export default {
  name: 'ServicesSection2ClientsBottom',
  components: {
    LearnMoreButton,
    AnimatedNumber,
  },
  props: {
    statistics: {
      type: Array,
      required: true,
    },
  },
  computed: {
    DURATION_BOUNCE_ANIMATION() {
      return DURATION_BOUNCE_ANIMATION;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.statistics
        .forEach((statOption, index) => bounceAnimationY(this.$refs.statOption[index], index));
    });
  },
  methods: {
    convertNewLineToBreak,
  },
};
</script>

<style scoped>
.c-clients__statistics > div {
  display: contents;
}
</style>
