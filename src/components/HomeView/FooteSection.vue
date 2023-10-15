<template>
  <div
    class="section-footer"
    ref="scrollContainer"
    @scroll="onScroll"
  >
    <FooterLeft
      :sectionAttributes="sectionAttributes"
    />
    <FooterDetails
      v-if="sectionAttributes.footer_details[0]"
      :footer_details="sectionAttributes.footer_details[0]"
    />
  </div>
</template>

<script>
import FooterLeft from '@/components/HomeView/FooterLeft.vue';
import FooterDetails from '@/components/HomeView/FooterDetails.vue';

export default {
  name: 'FooterSection',
  components: {
    FooterDetails,
    FooterLeft,
  },
  props: {
    sectionAttributes: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.emitSnapCount();
  },
  methods: {
    onScroll() {
      this.$emit('footerSectionScrollLeft', this.$refs.scrollContainer.scrollLeft);
      this.emitCurrentSnapChange();
    },
    emitCurrentSnapChange() {
      const { scrollContainer } = this.$refs;
      const { scrollWidth, clientWidth } = scrollContainer;
      const snapCount = Math.ceil(scrollWidth / clientWidth);
      const step = Math.ceil(scrollWidth / snapCount);
      const currentSnap = Math.ceil(this.$refs.scrollContainer.scrollLeft / step) + 1;

      this.$emit('currentSnapChange', currentSnap);
    },
    emitSnapCount() {
      const { scrollContainer } = this.$refs;
      const { scrollWidth, clientWidth } = scrollContainer;
      const snapCount = Math.ceil(scrollWidth / clientWidth);

      this.$emit('footerSectionSnapCountChange', snapCount);
    },
  },
};
</script>
