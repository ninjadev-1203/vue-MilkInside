<template>
  <div class="c-home__section__section-content">
    <div class="c-intro">
      <SectionLine :invert="true"/>

      <transition
        @enter="enterIntroContent"
        @leave="leaveIntroContent"
        v-bind:css="false"
        mode="out-in"
      >
        <div
          ref="contentWrapper"
          :key="sectionAttributes.number"
          class="c-intro__content__wrapper"
          data-intro-content-wrapper=""
        >
          <div
            class="c-intro__content"
            data-intro-content=""
          >
            <div class="c-intro__left">
              <p class="c-intro__number">{{ sectionAttributes.number }}</p>
              <SectionLine
                :invert="true"
                addClass="c-intro__line"
              />
              <p
                class="c-intro__text"
                v-html="convertNewLineToBreak(sectionAttributes.category)"
              ></p>
            </div>

            <div class="c-intro__right">
              <p class="c-intro__text">Since {{ sectionAttributes.since }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <SectionLine :invert="true" addClass="c-home__section__divider"/>

    <transition-group
      @enter="enterSectionTitle"
      @leave="leaveSectionTitle"
      v-bind:css="false"
      mode="out-in"
      :duration="400"
    >
      <h2
        :key="sectionAttributes.number + 'title'"
        class="c-home__section__title"
        data-section-title=""
        data-section-item=""
        v-html="convertNewLineToBreak(sectionAttributes.title)"
      ></h2>
      <p
        :key="sectionAttributes.number + 'description'"
        v-if="sectionAttributes.description"
        class="c-home__section__description"
        data-section-title=""
        data-section-item=""
        v-html="convertNewLineToBreak(sectionAttributes.description)"
      ></p>
    </transition-group>
  </div>
</template>

<script>
import SectionLine from '@/components/common/SectionLine.vue';
import { convertNewLineToBreak } from '@/helpers/helpers';
import {
  enterSectionTitle,
  leaveSectionTitle,
  enterIntroContent,
  leaveIntroContent,
} from '@/helpers/animations';

export default {
  name: 'HomeSectionContent',
  components: {
    SectionLine,
  },
  props: {
    sectionAttributes: {
      type: Object,
      required: true,
    },
  },
  methods: {
    convertNewLineToBreak,
    enterSectionTitle,
    leaveSectionTitle,
    enterIntroContent,
    leaveIntroContent,
  },
};
</script>
