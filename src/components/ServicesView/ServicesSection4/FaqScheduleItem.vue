<template>
  <div class="display-contents">
    <div class="c-faq-schedule__item">
      <div>
        <p class="c-faq-schedule__item-title">{{ item.title }}</p>
        <p v-if="item.description"
           class="c-faq-schedule__item-description"
        >
          {{ item.description }}
        </p>
      </div>
      <div class="c-faq-schedule__item-data">
        <div class="c-faq-schedule__item-data-value">{{ item.value_number }}</div>
        <div>
          <div
            class="c-faq-schedule__item-data-text"
            v-html="convertNewLineToBreak(item.value_title)"
          ></div>
        </div>
      </div>
    </div>

    <div class="c-faq-schedule__item-divider"></div>
  </div>
</template>

<script>
import { convertNewLineToBreak } from '@/helpers/helpers';

export default {
  name: 'FaqScheduleItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    convertNewLineToBreak,
  },
};
</script>

<style scoped>
.display-contents {
  display: contents;
}
</style>
