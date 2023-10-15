<template>
  <div class="section-footer-viewing-stats">
    <p class="section-footer-viewing-stats__count">{{ viewing_stats.count }}</p>
    <p class="section-footer-viewing-stats__unit">{{ viewing_stats.unit }}</p>
    <p class="section-footer-viewing-stats__description"
       v-html="convertNewLineToBreak(viewing_stats.description)"
    ></p>
  </div>
</template>

<script>
import { convertNewLineToBreak } from '@/helpers/helpers';

export default {
  name: 'FooterViewingStats',
  props: {
    viewing_stats: {
      type: Object,
      required: true,
    },
  },
  methods: {
    convertNewLineToBreak,
  },
};
</script>
