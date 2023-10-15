<template>
  <div class="c-strategy__section c-strategy__section--active">
    <template v-if="isOpenedStrategyList && bodyData.services">
      <transition
        appear
        @enter="enterIntroContent"
        v-bind:css="false"
        mode="out-in"
        :duration="200"
      >
        <Section0StrategyList
          :services="bodyData.services"
        />
      </transition>
    </template>
    <template v-else>
      <transition-group
        appear
        tag="div"
        @enter="enterIntroContent"
        @leave="leaveIntroContent"
        v-bind:css="false"
        mode="out-in"
        :duration="100"
      >
        <div
          class="c-strategy__top-title"
          v-html="convertNewLineToBreak(bodyData.top_title)"
          key="top-title"
        ></div>
        <div
          class="c-strategy__bottom-title"
          v-html="convertNewLineToBreak(bodyData.bottom_title)"
          key="bottom-title"
        ></div>
      </transition-group>
    </template>
  </div>
</template>
<script>
import Section0StrategyList from '@/components/ServicesView/ServicesSection0/Section0StrategyList.vue';
import { convertNewLineToBreak } from '@/helpers/helpers';
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';

export default {
  name: 'ServicesSection0Body',
  components: { Section0StrategyList },
  props: {
    isOpenedStrategyList: {
      type: Boolean,
      required: true,
      default: false,
    },
    bodyData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    convertNewLineToBreak,
    enterIntroContent,
    leaveIntroContent,
  },
};
</script>

<style scoped>
.c-strategy__section--active > div:not(.c-strategy__services) {
  display: contents;
}
</style>
