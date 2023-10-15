<template>
    <div
      class="c-menu__window"
      :style="bacgroundStyles"
    >
      <p class="window_section window_section-category">
        {{ sectionAttributes.number }} - {{ sectionAttributes.category }}
      </p>
      <p class="window_section" v-html="convertNewLineToBreak(sectionAttributes.title)"></p>
    </div>
</template>
<script>
import { convertNewLineToBreak } from '@/helpers/helpers';

export default {
  name: 'SideMenuSlide',
  props: {
    sectionAttributes: {
      type: Object,
      require: true,
    },
  },
  computed: {
    backgroundImage() {
      return this.sectionAttributes?.video_data?.loop_video?.urls[0] || '';
    },
    bacgroundStyles() {
      return `
      background: url('${this.backgroundImage}');
      background-size: cover;
      `;
    },
  },
  methods: {
    convertNewLineToBreak,
  },
};
</script>

<style scoped>
.c-menu__window {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10%;
}

.c-menu__window:not(.current):hover {
  opacity: 0.9;
  cursor: pointer;
}

.window_section {
  font-size: max(2.2rem, 14px);
  line-height: 1.25;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 15px;
  text-rendering: geometricPrecision;
}

.window_section-category {
  font-size: 70%;
}
</style>
