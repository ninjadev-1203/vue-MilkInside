<template>
  <div class="c-partners__statistics-row">

    <div class="c-partners__statistic">
      <div class="c-partners__statistic-value">
        <AnimatedNumber
          :value="183"
          :round="1"
          :duration="DURATION_BOUNCE_ANIMATION"
        />
      </div>
      <transition
        appear
        @enter="enterIntroContent"
        @leave="leaveIntroContent"
        v-bind:css="false"
        mode="out-in"
        :duration="200"
      >
        <div class="c-partners__statistic-description">Satisfied <br> clients</div>
      </transition>
    </div>

    <transition
      appear
      @enter="enterIntroContent"
      @leave="leaveIntroContent"
      v-bind:css="false"
      mode="out-in"
      :duration="200"
    >
      <div class="c-partners__behance">
        <div class="c-partners__behance-text-wrapper">
          <div class="c-partners__behance-value">2k</div>
          <svg width="24" height="24" color="none" fill="none">
            <use xlink:href="@/assets/sprites/icons.svg#rewards"></use>
          </svg>
        </div>
        <p class="c-partners__behance-text">Reviews on <b>Behance</b></p>
      </div>
    </transition>
  </div>
</template>

<script>
import { convertNewLineToBreak } from '@/helpers/helpers';
import { enterIntroContent, leaveIntroContent, DURATION_BOUNCE_ANIMATION } from '@/helpers/animations';
import AnimatedNumber from 'animated-number-vue';

export default {
  name: 'ServicesSection3Statistics',
  components: {
    AnimatedNumber,
  },
  computed: {
    DURATION_BOUNCE_ANIMATION() {
      return DURATION_BOUNCE_ANIMATION;
    },
  },
  methods: {
    convertNewLineToBreak,
    enterIntroContent,
    leaveIntroContent,
  },
};
</script>
