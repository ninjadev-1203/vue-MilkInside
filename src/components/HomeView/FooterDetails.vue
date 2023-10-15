<template>
  <component
    v-if="footerComponent && hasData"
    :is="footerComponent"
    :items="footer_details.item"
    :desktop_icon_group="footer_details.desktop_icon_group"
    :mobile_icon_group="footer_details.mobile_icon_group"
  />
</template>

<script>
import FooterTimeline from '@/components/HomeView/FooterTimeline.vue';
import FooterAppStats from '@/components/HomeView/FooterAppStats.vue';
import FooterIcons from '@/components/HomeView/FooterIcons.vue';
import FooterStatistics from '@/components/HomeView/FooterStatistics.vue';

export default {
  name: 'FooterDetails',
  components: {
    FooterTimeline,
    FooterAppStats,
    FooterIcons,
    FooterStatistics,
  },
  props: {
    footer_details: {
      type: Object,
      required: true,
    },
  },
  computed: {
    footerComponent() {
      const componentMap = {
        'homepage.footer-timeline': 'FooterTimeline',
        'homepage.footer-app-statistics': 'FooterAppStats',
        'homepage.footer-icons': 'FooterIcons',
        'homepage.footer-statistics': 'FooterStatistics',
      };

      // eslint-disable-next-line no-underscore-dangle
      return componentMap[this.footer_details.__component] || '';
    },
    hasData() {
      return this.footer_details.item
        || this.footer_details.desktop_icon_group
        || this.footer_details.mobile_icon_group;
    },
  },
};
</script>
