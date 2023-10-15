<template>
  <button
    class="c-services__down-button"
    @click="onButtonClick"
  >
    <svg width="24" height="24" color="#000" fill="none">
      <use xlink:href="@/assets/sprites/icons.svg#down-arrow-large"></use>
    </svg>
  </button>
</template>

<script>
import { eventBus, BUS_EVENT_GOTO_NEXT_SECTION } from '@/helpers/eventBus';

export default {
  name: 'ServicesDownButton',
  methods: {
    onButtonClick() {
      eventBus.$emit(BUS_EVENT_GOTO_NEXT_SECTION);
    },
  },
};
</script>
