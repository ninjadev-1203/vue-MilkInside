<template>
  <!-- eslint-disable -->
  <div class="c-partners c-services__section" data-services-section="3">
    <div class="c-partners__intro-wrapper">
      <ServicesSectionIntro
        :number="sectionAttributes.number"
        :category="sectionAttributes.category"
        :title="sectionAttributes.title"
      />
    </div>
    <ServicesSectionHeading
      class="c-partners__heading-row"
      :subtitle="sectionAttributes.subtitle"
    >
      <SectionHeadingControlLeftRight/>
    </ServicesSectionHeading>

    <SectionLine class="c-partners__line-wrapper"/>
    <ServicesSection3Reviews/>
    <ServicesSection3Statistics/>
    <SectionLine class="c-partners__bottom-line-wrapper"/>
    <ServicesSection3Bottom/>
  </div>
</template>
<script>

import ServicesSectionIntro from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionIntro.vue';
import ServicesSectionHeading from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionHeading.vue';
import SectionHeadingControlLeftRight
  from '@/components/ServicesView/ServicesSectionCommon/SectionHeadingControlLeftRight.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import ServicesSection3Bottom from '@/components/ServicesView/ServicesSection3/ServicesSection3Bottom.vue';
import ServicesSection3Statistics from '@/components/ServicesView/ServicesSection3/ServicesSection3Statistics.vue';
import ServicesSection3Reviews from '@/components/ServicesView/ServicesSection3/ServicesSection3Reviews.vue';

export default {
  name: 'ServicesSection3',
  components: {
    ServicesSection3Reviews,
    ServicesSection3Statistics,
    ServicesSection3Bottom,
    SectionLine,
    SectionHeadingControlLeftRight,
    ServicesSectionHeading,
    ServicesSectionIntro,
  },
  props: {
    sectionAttributes: {
      type: Object,
      required: true,
    },
  },
};
</script>
