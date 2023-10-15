<template>
  <div class="c-clients__body">
    <transition
      appear
      @enter="enterIntroContent"
      @leave="leaveIntroContent"
      v-bind:css="false"
      mode="out-in"
      :duration="200"
    >
      <h1 class="c-clients__body-title"
          v-html="convertNewLineToBreak(title)"
      ></h1>
    </transition>
    <ClientUsersGrid
      v-if="users"
      :users="users"
    />
  </div>
</template>

<script>
import { convertNewLineToBreak } from '@/helpers/helpers';
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';
import ClientUsersGrid from '@/components/ServicesView/ServicesSection2/ClientUsersGrid.vue';

export default {
  name: 'ServicesSection2Body',
  components: { ClientUsersGrid },
  props: {
    title: {
      type: String,
      required: true,
    },
    users: {
      type: Array,
    },
  },
  methods: {
    convertNewLineToBreak,
    enterIntroContent,
    leaveIntroContent,
  },
};
</script>
