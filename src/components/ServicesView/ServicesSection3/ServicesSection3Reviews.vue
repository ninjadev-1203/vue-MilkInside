<template>
  <!-- TODO: remove hardcoded text, replace it by values from props -->

  <div class="c-partners__reviews">
    <div class="c-partners__review c-partners__review--active">
      <transition
        appear
        @enter="enterIntroContent"
        @leave="leaveIntroContent"
        v-bind:css="false"
        mode="out-in"
        :duration="200"
      >
        <div>
          <div class="c-partners__review-title">
            Milkinside has catapulted<br>our products forward
          </div>
          <div class="c-partners__review-name">Raphael Oberholzer</div>
          <div class="c-partners__review-role">Investor, CEO of AVA coporation</div>
        </div>
      </transition>

      <transition
        appear
        @enter="enterIntroContent"
        @leave="leaveIntroContent"
        v-bind:css="false"
        mode="out-in"
        :duration="200"
      >
        <img
          class="c-partners__review-image"
          alt="review image"
          src="https://res.cloudinary.com/dm3bdznon/image/upload/v1668818934/review_6609021cc1.jpg"
        >
      </transition>
    </div>
  </div>
</template>

<script>
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';
import { convertNewLineToBreak } from '@/helpers/helpers';

export default {
  name: 'ServicesSection3Reviews',
  methods: {
    convertNewLineToBreak,
    enterIntroContent,
    leaveIntroContent,
  },
};
</script>
