<template>
  <div class="section-footer-right section-footer-right--statistics">
    <template v-for="(item, index) in items">
      <div
        class="section-footer-right__stats-item"
        :key="'div' + index"
      >
        <div class="section-footer-right__stats-count">{{ item.count }}</div>
        <span
          class="section-footer-right__divider-line section-footer-right__divider-line--desktop-only"
        ></span>
        <div>
          <div class="section-footer-right__column-label">{{ item.title }}</div>
          <div class="section-footer-right__column-text">{{ item.description }}</div>
        </div>
      </div>

      <span
        v-if="index < (items.length - 1)"
        class="section-footer-right__divider-line section-footer-right__divider-line--mobile-only"
        :key="'span' + index"
      ></span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'FooterStatistics',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
