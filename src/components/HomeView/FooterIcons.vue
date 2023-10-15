<template>
  <div class="section-footer-right section-footer-right--icons">
    <img
      class="section-footer-right__icons-image section-footer-right__icons-image--desktop"
      :src="desktopImage.url"
      :alt="desktopImage.alternativeText"
    >
    <img
      class="section-footer-right__icons-image section-footer-right__icons-image--mobile"
      :src="mobileImage.url"
      :alt="mobileImage.alternativeText"
    >
  </div>
</template>

<script>
export default {
  name: 'FooterIcons',
  props: {
    desktop_icon_group: {
      type: Object,
      required: true,
    },
    mobile_icon_group: {
      type: Object,
      required: true,
    },
  },
  computed: {
    desktopImage() {
      return this.desktop_icon_group.data?.attributes || {};
    },
    mobileImage() {
      return this.mobile_icon_group.data?.attributes || {};
    },
  },
};
</script>
