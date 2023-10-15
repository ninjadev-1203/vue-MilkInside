<template>
  <div
    class="c-services__section c-what-we-do"
    data-services-section="1"
  >
    <div class="c-what-we-do__intro-wrapper">
      <ServicesSectionIntro
        :number="sectionAttributes.number"
        :category="sectionAttributes.category"
        :title="sectionAttributes.title"
      />
    </div>

    <ServicesSectionHeading
      class="c-what-we-do__heading-row"
      :subtitle="sectionAttributes.subtitle"
    >
      <SectionHeadingControlLeftRight/>
    </ServicesSectionHeading>

    <SectionLine class="c-what-we-do__line-wrapper"/>

    <ServicesSection1WhatWeDo :whatWeDo="sectionAttributes.body[0]['what-we-do']"/>
  </div>
</template>
<script>
import ServicesSectionIntro from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionIntro.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import ServicesSection1WhatWeDo from '@/components/ServicesView/ServicesSection1/ServicesSection1WhatWeDo.vue';
import SectionHeadingControlLeftRight
  from '@/components/ServicesView/ServicesSectionCommon/SectionHeadingControlLeftRight.vue';
import ServicesSectionHeading from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionHeading.vue';

export default {
  name: 'ServicesSection1',
  components: {
    ServicesSectionHeading,
    SectionHeadingControlLeftRight,
    ServicesSection1WhatWeDo,
    SectionLine,
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
