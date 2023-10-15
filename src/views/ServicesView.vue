<template>
  <!-- eslint-disable -->
  <div
    class="c-services c-services--active"
    @mousewheel="handleScroll"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
  >
    <div class="c-services__wrapper">
      <div class="c-services__sections">
        <svg class="c-services__down-icon" width="24" height="24" fill="none">
          <use xlink:href="@/assets/sprites/icons.svg#down"></use>
        </svg>
        <component
          v-if="activeSection"
          :is="currentSectionComponet"
          class="c-services__section--active"
          :key="currentSectionComponet"
          :sectionAttributes="activeSection.attributes"
        />
        <transition
          @enter="enterSectionTitle"
          @leave="leaveSectionTitle"
          v-bind:css="false"
          mode="out-in"
        >
          <component
            v-if="activeSection"
            :is="currentMobileSectionComponent"
            class="c-services__section--mobile-section"
            :key="currentMobileSectionComponent"
            :sectionAttributes="activeSection.attributes"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BUS_EVENT_RESET_SECTION_TO_INITIAL,
  BUS_EVENT_GOTO_NEXT_SECTION,
  BUS_EVENT_GOTO_PREV_SECTION,
  eventBus,
} from '@/helpers/eventBus';
import { DEBOUNCE_DELAY, debounceOptions } from '@/helpers/constants';
import { debounce } from 'lodash';
import ServicesSection0 from '@/components/ServicesView/ServicesSection0.vue';
import ServicesSection1 from '@/components/ServicesView/ServicesSection1.vue';
import ServicesSection2 from '@/components/ServicesView/ServicesSection2.vue';
import ServicesSection3 from '@/components/ServicesView/ServicesSection3.vue';
import ServicesSection4 from '@/components/ServicesView/ServicesSection4.vue';
import ServicesSection5 from '@/components/ServicesView/ServicesSection5.vue';
import ServicesSectionMobile2 from '@/components/ServicesView/ServicesSectionMobile2.vue';
import ServicesSectionMobile4 from '@/components/ServicesView/ServicesSectionMobile4.vue';
import ServicesSectionMobile6 from '@/components/ServicesView/ServicesSectionMobile6.vue';
import {
  enterSectionTitle,
  leaveSectionTitle,
} from '@/helpers/animations';
import * as cmsClient from '@/client/cmsClient';

const touchExcludedClasses = [];

export default {
  name: 'ServicesView',
  components: {
    ServicesSection5,
    ServicesSection4,
    ServicesSection3,
    ServicesSection2,
    ServicesSection1,
    ServicesSection0,
    ServicesSectionMobile6,
    ServicesSectionMobile4,
    ServicesSectionMobile2,
  },
  created() {
    eventBus.$on(BUS_EVENT_RESET_SECTION_TO_INITIAL, this.resetSectionToInitial);
    eventBus.$on(BUS_EVENT_GOTO_NEXT_SECTION, this.gotoNextSection);
    eventBus.$on(BUS_EVENT_GOTO_PREV_SECTION, this.gotoPrevSection);
    this.getPageParams();
  },
  data() {
    return {
      servicePageData: null,
      activeSectionIndex: 0,
      totalSections: 5,
      direction: 0,
      isSectionSwitching: false,
      startY: 0,
    };
  },
  computed: {
    ascSortedPageData() {
      const ascPageData = [...(this.servicePageData?.data || [])];

      return ascPageData.sort((a, b) => a.attributes.number - b.attributes.number);
    },
    activeSection() {
      return this.ascSortedPageData[this.activeSectionIndex];
    },
    currentSectionComponet() {
      return `ServicesSection${this.activeSectionIndex}`;
    },
    currentMobileSectionComponent() {
      const sectionsMap = [2, 4, 6];
      const sectionIndex = this.activeSectionIndex < sectionsMap.length
        ? this.activeSectionIndex
        : sectionsMap.length - 1;

      return `ServicesSectionMobile${sectionsMap[sectionIndex]}`;
    },
  },
  methods: {
    async getPageParams() {
      this.loading = true;

      try {
        this.servicePageData = await cmsClient.getServiceSections();
      } catch (error) {
        window.console.error(error);
      }
    },

    resetSectionToInitial() {
      this.activeSectionIndex = 0;
    },

    gotoNextSection() {
      if (this.activeSectionIndex < this.totalSections) {
        this.activeSectionIndex += 1;
      }
    },

    gotoPrevSection() {
      if (this.activeSectionIndex > 0) {
        this.activeSectionIndex -= 1;
      }
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
      const { totalSections } = this;
      const newActiveIndex = this.activeSectionIndex + direction;

      this.direction = direction;

      // Check if the new index is within the bounds of the sections array
      if (newActiveIndex >= 0 && newActiveIndex <= totalSections) {
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
    enterSectionTitle,
    leaveSectionTitle,
  },
};
</script>

<style>
.c-services__wrapper {
  padding-top: 115px;
}
</style>
