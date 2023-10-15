<template>
  <div class="c-clients c-services__section" data-services-section="2">
    <div class="c-clients__content">
      <ServicesSectionIntro
        :number="sectionAttributes.number"
        :category="sectionAttributes.category"
        :title="sectionAttributes.title"
      />
      <ServicesSectionHeading
        :subtitle="sectionAttributes.subtitle"
      />
      <SectionLine class="c-clients__line"/>
      <ServicesSection2Body
        v-if="sectionAttributes.body"
        :title="sectionAttributes.body[0].title"
        :users="sectionAttributes.body[0].users"
      />
    </div>
    <SectionLine class="c-clients__bottom-line-wrapper" />
    <ServicesSection2ClientsBottom
      v-if="sectionAttributes.body"
      :statistics="sectionAttributes.body[0].statistics"
    />
  </div>
</template>
<script>
import ServicesSectionIntro from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionIntro.vue';
import ServicesSectionHeading from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionHeading.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import ServicesSection2ClientsBottom
  from '@/components/ServicesView/ServicesSection2/ServicesSection2ClientsBottom.vue';
import ServicesSection2Body from '@/components/ServicesView/ServicesSection2/ServicesSection2Body.vue';

export default {
  name: 'ServicesSection2',
  components: {
    ServicesSection2Body,
    ServicesSection2ClientsBottom,
    SectionLine,
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
