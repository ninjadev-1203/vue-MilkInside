<template>
  <div class="section-footer-left">
    <span
      class="section-footer-arrow"
      style="background:linear-gradient(217.27deg,#d1bddb -17.84%,#f2eff0 100%)"
    >
      <svg width="20" height="20" color="#000" fill="none">
        <use xlink:href="@/assets/sprites/icons.svg#right"></use>
      </svg>
    </span>

    <p class="section-footer-left-title">{{ sectionAttributes.footer_title }}</p>
    <p class="section-footer-left-description">{{ sectionAttributes.footer_description }}</p>
  </div>
</template>

<script>
export default {
  name: 'FooterLeft',
  props: {
    sectionAttributes: {
      type: Object,
      required: true,
    },
  },
};
</script>
