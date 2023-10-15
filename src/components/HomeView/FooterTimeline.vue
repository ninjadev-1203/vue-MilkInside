<template>
  <div class="section-footer-right section-footer-right--timeline">
    <template v-for="(item, index) in items">
      <span
        class="section-footer-right__divider-line section-footer-right__divider-line--timeline"
        :key="'span' + index"
      ></span>
      <div :key="'div' + index">
        <div class="section-footer-right__column-label section-footer-right__column-label--capitalize">
          {{ item.date | dateFilter }}
        </div>
        <div
          class="section-footer-right__column-text-small"
          v-if="item.description"
          v-html="convertNewLineToBreak(item.description)"
        ></div>
      </div>
    </template>
  </div>
</template>

<script>
import { dateFilter } from '@/helpers/filters';
import { convertNewLineToBreak } from '@/helpers/helpers';

export default {
  name: 'FooterTimeline',
  components: {},
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    convertNewLineToBreak,
  },
  filters: {
    dateFilter,
  },
};
</script>
