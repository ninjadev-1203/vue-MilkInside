<template>
  <transition
    appear
    @enter="enterIntroContent"
    @leave="leaveIntroContent"
    v-bind:css="false"
    mode="out-in"
    :duration="200"
  >
    <a class="c-learn-more" href="/about">
    <span class="c-learn-more__icon-wrapper">
      <svg
        width="16"
        height="11"
        fill="none" viewBox="0 0 19 14">
        <use xlink:href="@/assets/sprites/icons.svg#right-arrow"></use>
      </svg>
    </span>
      <span class="c-learn-more__text">Learn more <br> about us</span>
    </a>
  </transition>
</template>
<script>
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';

export default {
  name: 'LearnMoreButton',
  methods: {
    enterIntroContent,
    leaveIntroContent,
  },
};
</script>
