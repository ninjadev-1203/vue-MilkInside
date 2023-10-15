<template>
  <div
      class="c-line__wrapper"
      data-start-divider=""
      data-end-divider=""
      data-section-item=""
  >
    <div
        class="c-line"
        :class="lineClassesComputed"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'SectionLine',
  components: {},
  props: {
    invert: Boolean,
    addClass: String,
  },
  computed: {
    lineClassesComputed() {
      const lineClasses = [];

      if (this.addClass) {
        lineClasses.push(...this.addClass.split(' '));
      }

      if (this.invert) {
        lineClasses.push('c-line--invert');
      }

      return lineClasses;
    },
  },
};
</script>
