<template>
  <div
    class="c-home__section c-home__section--first c-home__section--active"
    :data-home-section="sectionId"
  >
    <HomeSectionContent :sectionAttributes="sectionAttributes"/>
    <HomeSectionFooter
      :sectionAttributes="sectionAttributes"
      :sectionId="sectionId"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import HomeSectionContent from '@/components/HomeView/HomeSectionContent.vue';
import HomeSectionFooter from '@/components/HomeView/HomeSectionFooter.vue';

export default {
  name: 'HomeSection',
  components: {
    HomeSectionContent,
    HomeSectionFooter,
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
};
</script>
