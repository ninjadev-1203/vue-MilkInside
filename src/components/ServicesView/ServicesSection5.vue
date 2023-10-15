<template>
  <div class="c-faq-schedule c-services__section c-services__section--no-padding"
       data-services-section="5">
    <div class="c-faq-schedule__content-wrapper">
      <div class="c-faq-schedule__content">
        <ServicesSectionIntro
          :number="sectionAttributes.number"
          :category="sectionAttributes.category"
          :title="sectionAttributes.title"
        />

        <ServicesSectionHeadingFAQ :activeType="sectionAttributes.body[0].type"/>

        <SectionLine class="c-faq-schedule__line"/>

        <transition-group appear name="fade" tag="div">
          <div
            v-for="(item, index) in sectionAttributes.body[0].item"
            :key="index"
            ref="FaqScheduleItem"
          >
            <FaqScheduleItem :item="item"/>
          </div>
        </transition-group>
      </div>
      <FaqScheduleFooter :attributesBody="sectionAttributes.body[0]"/>
    </div>
  </div>
</template>

<script>
import ServicesSectionIntro from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionIntro.vue';
import FaqScheduleFooter from '@/components/ServicesView/ServicesSection4/FaqScheduleFooter.vue';
import FaqScheduleItem from '@/components/ServicesView/ServicesSection4/FaqScheduleItem.vue';
import ServicesSectionHeadingFAQ from '@/components/ServicesView/ServicesSection4/ServicesSectionHeadingFAQ.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import { bounceAnimationY, DURATION_BOUNCE_ANIMATION } from '@/helpers/animations';

export default {
  name: 'ServicesSection5',
  components: {
    SectionLine,
    ServicesSectionHeadingFAQ,
    FaqScheduleItem,
    FaqScheduleFooter,
    ServicesSectionIntro,
  },
  props: {
    sectionAttributes: {
      type: Object,
      required: true,
    },
  },
  computed: {
    DURATION_BOUNCE_ANIMATION() {
      return DURATION_BOUNCE_ANIMATION;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.sectionAttributes.body[0].item
        .forEach((item, index) => bounceAnimationY(this.$refs.FaqScheduleItem[index], index));
    });
  },
};
</script>
