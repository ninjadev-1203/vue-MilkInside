<template>
  <button
    class="c-menu__copy"
    @click="copyUrlToClipboard"
  >
    <svg width="24" height="24" color="rgba(255, 255, 255, 0.8)" fill="none">
      <use xlink:href="@/assets/sprites/icons.svg#attachment"></use>
    </svg>
    <span>Copy Link</span>
  </button>
</template>

<script>
export default {
  name: 'SideMenuCopyLocation',
  methods: {
    copyUrlToClipboard() {
      const currentUrl = window.location.href;

      navigator.clipboard.writeText(currentUrl);
    },
  },
};
</script>
