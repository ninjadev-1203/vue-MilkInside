<template>
  <div class="c-strategy__footer">
    <div class="c-strategy__what-we-do">
      <transition-group appear name="fade" tag="div">
        <div
          class="c-strategy__what-we-do-item"
          v-for="(weDoItem, index) in whatWeDo"
          :key="weDoItem.text + index"
          v-html="convertNewLineToBreak(weDoItem.text)"
          ref="weDoItem"
        ></div>
      </transition-group>
    </div>
    <ServicesDownButton/>
  </div>
</template>
<script>
import { convertNewLineToBreak } from '@/helpers/helpers';
import { bounceAnimationY } from '@/helpers/animations';
import ServicesDownButton from '@/components/ServicesView/ServicesSection0/ServicesDownButton.vue';

export default {
  name: 'ServicesSection0Footer',
  components: {
    ServicesDownButton,
  },
  props: {
    whatWeDo: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.whatWeDo
        .forEach((weDoItem, index) => bounceAnimationY(this.$refs.weDoItem[index], index));
    });
  },
  methods: {
    convertNewLineToBreak,
  },
};
</script>

<style scoped>
.c-strategy__what-we-do > div {
  display: contents;
}
</style>
