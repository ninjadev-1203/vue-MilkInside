<template>
    <div
      class="c-services__section c-strategy"
      data-services-section="0"
    >
        <ServicesSectionIntro
          :number="sectionAttributes.number"
          :category="sectionAttributes.category"
          :title="sectionAttributes.title"
        />
        <ServicesSectionHeading
          :subtitle="sectionAttributes.subtitle"
        >
          <SectionHeadingControlDropdown @dropdownChanged="onStrategyListToggled"/>
        </ServicesSectionHeading>
        <div class="c-line"></div>
        <ServicesSection0Body
          :isOpenedStrategyList="isOpenedStrategyList"
          :bodyData="sectionAttributes.body[0]"
        />
        <div class="c-line c-strategy__bottom-line"></div>
        <ServicesSection0Footer :whatWeDo="sectionAttributes.body[0].what_we_do"/>
    </div>
</template>
<script>
import ServicesSectionIntro from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionIntro.vue';
import ServicesSection0Footer from '@/components/ServicesView/ServicesSection0/ServicesSection0Footer.vue';
import ServicesSectionHeading from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionHeading.vue';
import ServicesSection0Body from '@/components/ServicesView/ServicesSection0/ServicesSection0Body.vue';
import SectionHeadingControlDropdown
  from '@/components/ServicesView/ServicesSectionCommon/SectionHeadingControlDropdown.vue';

export default {
  name: 'ServicesSection0',
  components: {
    SectionHeadingControlDropdown,
    ServicesSection0Body,
    ServicesSectionHeading,
    ServicesSection0Footer,
    ServicesSectionIntro,
  },
  props: {
    sectionAttributes: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpenedStrategyList: false,
    };
  },
  methods: {
    onStrategyListToggled(isOpened) {
      this.isOpenedStrategyList = isOpened;
    },
  },
};
</script>
