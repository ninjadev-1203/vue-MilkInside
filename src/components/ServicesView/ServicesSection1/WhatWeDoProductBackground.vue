<template>
  <div class="video-container">
    <video ref="video" class="video-background" muted loop>
      <source :src="videoUrl" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'WhatWeDoProductBackground',
  props: {
    videoUrl: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.loadVideo();
  },
  methods: {
    loadVideo() {
      const { video } = this.$refs;

      video.addEventListener('canplaythrough', () => {
        video.play();
      });

      video.src = this.videoUrl;
      video.load();
    },
  },
};
</script>

<style scoped>
.video-container {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.video-background {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.c-what-we-do__product:hover .video-container {
  visibility: visible;
  opacity: 1;
}
</style>
