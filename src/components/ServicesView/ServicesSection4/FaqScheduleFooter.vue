<template>
  <div class="c-faq-schedule__footer-wrapper">
    <div class="c-faq-schedule__footer">
      <transition
        appear
        @enter="enterIntroContent"
        @leave="leaveIntroContent"
        v-bind:css="false"
        mode="out-in"
        :duration="200"
      >
        <div>
          <div class="c-faq-schedule__footer__title">{{ attributesBody.footer_title }}</div>
          <div
            class="c-faq-schedule__footer__description"
            v-html="convertNewLineToBreak(attributesBody.footer_description)"
          ></div>
        </div>
      </transition>
      <transition
        appear
        @enter="enterIntroContent"
        @leave="leaveIntroContent"
        v-bind:css="false"
        mode="out-in"
        :duration="200"
      >
        <div class="c-faq-schedule__footer__availability">
          Availability <br> {{ attributesBody.availability }}
        </div>
      </transition>
    </div>

    <LearnMoreButton />
  </div>
</template>

<script>
import LearnMoreButton from '@/components/ServicesView/ServicesSectionCommon/LearnMoreButton.vue';
import { convertNewLineToBreak } from '@/helpers/helpers';
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';

export default {
  name: 'FaqScheduleFooter',
  components: { LearnMoreButton },
  props: {
    attributesBody: {
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
