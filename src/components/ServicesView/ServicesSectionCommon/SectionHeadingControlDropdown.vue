<template>
  <button
    class="c-strategy__dropdown-btn"
    @click="dropdownToggle"
  >
    <svg
      width="24" height="24" color="#000" fill="none"
      v-if="isOpened"
    >
      <use xlink:href="@/assets/sprites/icons.svg#opened"></use>
    </svg>
    <svg
      width="24" height="24" color="#000" fill="none"
      v-else
    >
      <use xlink:href="@/assets/sprites/icons.svg#open"></use>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'SectionHeadingControlDropdown',
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    dropdownToggle() {
      this.isOpened = !this.isOpened;
      this.$emit('dropdownChanged', this.isOpened);
    },
  },
};
</script>
