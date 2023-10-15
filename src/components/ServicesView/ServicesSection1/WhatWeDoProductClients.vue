<template>
  <div class="c-what-we-do__product-clients-wrapper">
    <div
      class="c-what-we-do__product-clients-header"
      :class="{'c-what-we-do__product-clients-header--hidden': index > 1}"
    >
      {{ index > 1 ? '' : 'OUR CLIENTS' }}
    </div>
    <div
      v-if="clients?.[0]?.text"
      class="c-line c-what-we-do__product-clients-line"
    ></div>
    <div
      v-if="clients?.[0]?.text"
      class="c-what-we-do__product-clients-list"
    >
      <div
        v-for="(client, index) in clients"
        class="black c-what-we-do__product-clients-list-item"
        :key="client.text + index"
      >
        {{ client.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatWeDoProductClients',
  props: {
    index: {
      type: Number,
      required: true,
    },
    clients: {
      type: Array,
    },
  },
};
</script>
