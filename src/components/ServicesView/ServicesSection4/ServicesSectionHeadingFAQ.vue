<template>
  <div class="c-faq-schedule__heading-row">
    <button
      class="c-faq-schedule__heading-toggle-button"
      :class="{'c-faq-schedule__heading-toggle-button--active': label === activeType}"
      v-for="(label, index) in buttons"
      :key="label + index"
      @click="onButtonClick(label === activeType, index)"
    >
      {{ label }}
    </button>
    <div class="c-faq-schedule__heading-text">{{ activeType }}</div>
  </div>
</template>

<script>
import {
  eventBus,
  BUS_EVENT_GOTO_NEXT_SECTION,
  BUS_EVENT_GOTO_PREV_SECTION,
} from '@/helpers/eventBus';

export default {
  name: 'ServicesSectionHeadingFAQ',
  props: {
    activeType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      buttons: [
        'FAQ',
        'Schedule',
      ],
    };
  },
  methods: {
    onButtonClick(disabled, index) {
      if (disabled) {
        return;
      }

      eventBus.$emit(index > 0 ? BUS_EVENT_GOTO_NEXT_SECTION : BUS_EVENT_GOTO_PREV_SECTION);
    },
  },
};
</script>
