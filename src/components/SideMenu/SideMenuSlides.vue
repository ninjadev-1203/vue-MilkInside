<template>
    <div
      class="c-menu__windows"
      v-if="ascSortedHomePageData.length"
      :style="windowsPositionStyles"
    >
      <SideMenuSlide
        v-for="(section, index) in ascSortedHomePageData"
        :sectionAttributes="section.attributes"
        :class="{
          current: !(index > 0),
          active: index === selectedSection,
        }"
        :key="index"
        @click.native="selectedSection = index"
      />
    </div>
</template>

<script>

import * as cmsClient from '@/client/cmsClient';
import SideMenuSlide from '@/components/SideMenu/SideMenuSlide.vue';

export default {
  name: 'SideMenuSlides',
  components: { SideMenuSlide },
  data() {
    return {
      homePage: null,
      selectedSection: 0,
    };
  },
  created() {
    this.getPageParams();
  },
  computed: {
    ascSortedHomePageData() {
      const ascHomePageData = [...(this.homePage?.data || [])];

      return ascHomePageData.sort((a, b) => a.attributes.number - b.attributes.number);
    },
    windowsPositionStyles() {
      const SECTION_STEP = -25;

      return `top: ${SECTION_STEP * this.selectedSection}vh;`;
    },
  },
  methods: {
    async getPageParams() {
      try {
        this.homePage = await cmsClient.getHomepageSections();
      } catch (error) {
        window.console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.c-menu__windows {
  position: relative;
  transition: top 0.5s;
}

.active {
  opacity: 1;
}
</style>
