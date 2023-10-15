<template>
  <div class="c-intro">
    <SectionLine/>
    <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
      <transition
        appear
        @enter="enterIntroContent"
        @leave="leaveIntroContent"
        v-bind:css="false"
        mode="out-in"
        :duration="200"
      >
        <div class="c-intro__content" data-intro-content="">
          <div class="c-intro__left">
            <p class="c-intro__number">{{ number }}</p>
            <SectionLine addClass="c-intro__line"/>
            <p class="c-intro__text">{{ category }}</p>
          </div>
          <div class="c-intro__right">
            <p class="c-intro__text">{{ title }}</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import SectionLine from '@/components/common/SectionLine.vue';
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';

const DEFAULT_PROP_VALUE = '-';

export default {
  name: 'ServicesSectionIntro',
  components: { SectionLine },
  props: {
    category: {
      type: String,
      default: DEFAULT_PROP_VALUE,
    },
    title: {
      type: String,
      default: DEFAULT_PROP_VALUE,
    },
    number: {
      type: String,
      default: DEFAULT_PROP_VALUE,
    },
  },
  methods: {
    enterIntroContent,
    leaveIntroContent,
  },
};
</script>
