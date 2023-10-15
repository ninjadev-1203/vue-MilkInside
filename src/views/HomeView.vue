<template>
  <div
    class="c-home c-home--active"
    :class="{loading: loading,}"
    @mousewheel="handleScroll"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
  >
    <preloaderBackdrop
      v-if="loading"
      :homePageData="ascSortedHomePageData"
      @finishLoading="onFinishLoading"
    />

    <AnimatedBackground
      v-if="!loading"
      :images="isSectionSwitching ? switchSectionVideoUrls : activeSectionVideoUrls"
      :noLoop="isSectionSwitching"
      :fps="backgroundAnimationFps"
      :backgroundMobileOffsetX="backgroundMobileOffsetX"
      @finished="onSectionSwitchingFinished"
    />

    <div class="c-home__wrapper">
      <div class="c-home__sections">
        <HomeSection
          v-if="activeSection"
          :sectionAttributes="activeSection.attributes"
          :sectionId="activeSection.id"
          @footerSectionScrollLeft="onFooterSectionScrollLeft"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as cmsClient from '@/client/cmsClient';
import { BUS_EVENT_RESET_SECTION_TO_INITIAL, eventBus } from '@/helpers/eventBus';
import HomeSection from '@/components/HomeView/HomeSection.vue';
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import PreloaderBackdrop from '@/components/PreloaderBackdrop.vue';
import { debounce } from 'lodash';
import {
  BACKGROUND_ANIMATION_FPS_LOOP,
  BACKGROUND_ANIMATION_FPS_SWITCHING,
  DEBOUNCE_DELAY,
  debounceOptions,
} from '@/helpers/constants';

const touchExcludedClasses = ['section-footer'];
const backgroundMobileOffsets = [
  -120,
  -165,
  -155,
  -370,
  -550,
  -450,
];

export default {
  name: 'HomeView',
  components: {
    AnimatedBackground,
    HomeSection,
    PreloaderBackdrop,
  },
  data() {
    return {
      homePage: null,
      loadedVideoData: null,
      activeSectionIndex: 0,
      direction: 0,
      isSectionSwitching: false,
      loading: false,
      startY: 0,
      footerSectionOffsetX: 0,
    };
  },
  created() {
    eventBus.$on(BUS_EVENT_RESET_SECTION_TO_INITIAL, this.resetSectionToInitial);
    this.getPageParams();
  },
  watch: {
    activeSectionIndex() {
      this.footerSectionOffsetX = 0;
    },
  },
  computed: {
    ascSortedHomePageData() {
      const ascHomePageData = [...(this.homePage?.data || [])];

      return ascHomePageData.sort((a, b) => a.attributes.number - b.attributes.number);
    },
    activeSection() {
      return this.ascSortedHomePageData[this.activeSectionIndex];
    },
    prevSectionVideoData() {
      return this.direction
        ? this.loadedVideoData[this.activeSectionIndex - this.direction]
        : {};
    },
    activeSectionVideoUrls() {
      return this.loadedVideoData[this.activeSectionIndex]?.loop_video || [];
    },
    switchSectionVideoUrls() {
      const videoDirection = this.direction > 0 ? 'forward_video' : 'backward_video';

      return this.prevSectionVideoData[videoDirection] || [];
    },
    backgroundAnimationFps() {
      return this.isSectionSwitching
        ? BACKGROUND_ANIMATION_FPS_SWITCHING
        : BACKGROUND_ANIMATION_FPS_LOOP;
    },
    backgroundMobileOffsetX() {
      return (backgroundMobileOffsets[this.activeSectionIndex] || 0) - this.footerSectionOffsetX;
    },
  },
  methods: {
    async getPageParams() {
      this.loading = true;

      try {
        this.homePage = await cmsClient.getHomepageSections();
      } catch (error) {
        window.console.error(error);
      }
    },

    onFinishLoading(loadedVideoData) {
      this.loadedVideoData = loadedVideoData;

      this.$nextTick(() => {
        this.loading = false;
      });
    },

    onSectionSwitchingFinished() {
      this.isSectionSwitching = false;
      this.direction = 0;
    },

    onFooterSectionScrollLeft(offsetX) {
      this.footerSectionOffsetX = offsetX;
    },

    resetSectionToInitial() {
      this.activeSectionIndex = 0;
    },

    /**
     Handles the scroll event and switches between sections based on the scroll direction.
     @param {Event} event - The scroll event.
     */
    handleScroll: debounce(function (event) {
      // If section switching is already in progress, do nothing
      if (this.isSectionSwitching) {
        return;
      }

      // Determine the direction of the scroll based on deltaY
      const direction = event.deltaY > 0 ? 1 : -1;
      // Determine the total number of sections
      const totalSections = this.ascSortedHomePageData.length - 1;
      const newActiveIndex = this.activeSectionIndex + direction;

      this.direction = direction;

      // Check if the new index is within the bounds of the sections array
      if (newActiveIndex >= 0 && newActiveIndex <= totalSections) {
        // Set the section switching flag to prevent multiple switches in a short period of time
        this.isSectionSwitching = true;
        // Update the active section index
        this.activeSectionIndex = newActiveIndex;
      }
    }, DEBOUNCE_DELAY, debounceOptions),

    /**
     * Handles touch start events by storing the initial touch point,
     * unless the target element is excluded.
     * @param {TouchEvent} event - The touch start event.
     */
    handleTouchStart: debounce(function (event) {
      if (this.shouldExcludeTarget(event.target) || this.isSectionSwitching) {
        return;
      }

      this.startY = event.touches[0].clientY; // store initial touch point
    }, DEBOUNCE_DELAY, debounceOptions),

    /**
     * Handles touch move events by determining the scroll direction
     * and calling the `handleScroll` method, unless the target element is excluded.
     * @param {TouchEvent} event - The touch move event.
     */
    handleTouchMove: debounce(function (event) {
      if (this.shouldExcludeTarget(event.target) || this.isSectionSwitching) {
        return;
      }

      const currentY = event.touches[0].clientY; // current finger position on the screen
      const deltaY = (currentY - this.startY) * -1; // determining the direction of the scroll

      // handling the scroll event using deltaY
      this.handleScroll({ deltaY });

      this.startY = currentY; // update initial touch point
    }, DEBOUNCE_DELAY, debounceOptions),

    /**
     * Checks if the target element should be excluded from touch event handling.
     * @param {HTMLElement} target - The target element to check.
     * @returns {boolean} - True if the target element should be excluded, false otherwise.
     */
    shouldExcludeTarget(target) {
      return touchExcludedClasses.some((className) => {
        const excludedParent = target.closest(`.${className}`);

        return excludedParent && excludedParent.contains(target);
      });
    },
  },
};
</script>
