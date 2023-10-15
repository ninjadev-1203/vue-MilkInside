<template>
  <div class="c-home__section__footer-wrapper">
    <FooterIndicators
      :currentDot="indicatorCurrentDot"
      :dotsCount="indicatorDotsCount"
    />

    <transition
      @enter="enterSectionFooter"
      @leave="leaveSectionFooter"
      :css="false"
      mode="out-in"
    >
      <FooterSection
        :sectionAttributes="sectionAttributes"
        :key="sectionAttributes.number"
        v-on="$listeners"
        @currentSnapChange="onCurrentSnapChange"
        @footerSectionSnapCountChange="onFooterSectionSnapCountChange"
      />
    </transition>

    <transition
      @enter="fadeInSectionFooter"
      @leave="fadeOutSectionFooter"
      :css="false"
      mode="out-in"
    >
      <FooterViewingStats
        v-if="sectionAttributes.viewing_stats"
        :viewing_stats="sectionAttributes.viewing_stats"
        :key="sectionAttributes.number"
      />
    </transition>

    <IndicatorsMouse
      :scale="1.5"
      class="section-footer-indicators__mouse-desktop"
    />
  </div>
</template>

<script>
import FooterIndicators from '@/components/HomeView/FooterIndicators.vue';
import FooterViewingStats from '@/components/HomeView/FooterViewingStats.vue';
import IndicatorsMouse from '@/components/HomeView/IndicatorsMouse.vue';
import {
  enterSectionFooter, leaveSectionFooter, fadeInSectionFooter, fadeOutSectionFooter,
} from '@/helpers/animations';
import FooterSection from '@/components/HomeView/FooteSection.vue';

export default {
  name: 'HomeSectionFooter',
  components: {
    FooterSection,
    FooterIndicators,
    FooterViewingStats,
    IndicatorsMouse,
  },
  props: {
    sectionAttributes: {
      type: Object,
      required: true,
    },
    sectionId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      indicatorDotsCount: 2,
      indicatorCurrentDot: 1,
    };
  },
  watch: {
    sectionId() {
      this.indicatorCurrentDot = 1;
    },
  },
  methods: {
    enterSectionFooter,
    leaveSectionFooter,
    fadeInSectionFooter,
    fadeOutSectionFooter,
    onFooterSectionSnapCountChange(snapCount) {
      this.indicatorDotsCount = snapCount;
    },
    onCurrentSnapChange(currentSnap) {
      this.indicatorCurrentDot = currentSnap;
    },
  },
};
</script>
