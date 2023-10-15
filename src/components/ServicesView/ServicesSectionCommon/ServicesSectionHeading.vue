<template>
  <div class="c-strategy__heading-row">
    <transition
      appear
      @enter="enterIntroContent"
      @leave="leaveIntroContent"
      v-bind:css="false"
      mode="out-in"
      :duration="200"
    >
      <div class="c-strategy__heading">{{ subtitle }}</div>
    </transition>
    <slot></slot>
  </div>
</template>

<script>
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';

export default {
  name: 'ServicesSectionHeading',
  props: {
    subtitle: {
      type: String,
      default: '-',
    },
  },
  methods: {
    enterIntroContent,
    leaveIntroContent,
  },
};
</script>
