<template>
  <div class="section-footer-right section-footer-right--app-stats">
    <template v-for="(item, index) in items">
      <div
        :key="'div' + index"
        class="section-footer-right__stats-item"
      >
        <svg
          class="section-footer-right__stats-item-icon"
          width="56"
          height="56"
          color="#fff"
          fill="none"
        >
          <use
            v-if="item.platform === 'App Store'"
            xlink:href="@/assets/sprites/icons.svg#apple"
          ></use>
          <use
            v-if="item.platform === 'Google Play'"
            xlink:href="@/assets/sprites/icons.svg#google"
          ></use>
        </svg>

        <span
          class="section-footer-right__divider-line section-footer-right__divider-line--desktop-only"
        ></span>

        <div>
          <div class="section-footer-right__column-label">{{ item.count }} Apps Shipped to</div>
          <div class="section-footer-right__column-text">{{ item.platform }}</div>
        </div>
      </div>

      <span
        :key="'span' + index"
        class="section-footer-right__divider-line section-footer-right__divider-line--mobile-only"
      ></span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'FooterAppStats',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
