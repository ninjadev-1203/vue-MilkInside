<template>
  <aside class="c-preloader">
    <div class="c-preloader__content">
      <div id="loading-animation"></div>
      <div class="c-preloader__progress">
        <div
          class="c-preloader__progress-track"
          :style="{width: `${loadingProgress}%`}"
        ></div>
      </div>
    </div>
  </aside>
</template>

<script>
import lottie from 'lottie-web';
import loadingLogoAnimation from '@/assets/lottiAnimationsData/loadingLogo';

export default {
  name: 'PreloaderBackdrop',
  props: {
    homePageData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      loadedVideoData: null,
      currentLoadingFrame: 0,
    };
  },
  mounted() {
    lottie.loadAnimation({
      container: document.getElementById('loading-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loadingLogoAnimation,
    });
  },
  computed: {
    videoData() {
      return this.homePageData
        .map((section) => section?.attributes?.video_data || {});
    },
    totalFramesCount() {
      return this.videoData.reduce((acc, obj) => {
        const urlsArrays = Object.values(obj).filter((value) => value.urls);
        const concatenated = [].concat(...urlsArrays.map((value) => value.urls));

        return acc + concatenated.length;
      }, 0);
    },
    loadingProgress() {
      const percent = (this.currentLoadingFrame / this.totalFramesCount) * 100;

      return Math.floor(percent);
    },
  },
  watch: {
    videoData: {
      handler(newVideoData) {
        // Uploading new images
        this.loadVideoData(newVideoData);
      },
      deep: true,
    },
  },
  methods: {
    loadImages(urls) {
      const promises = urls.map((url) => new Promise((resolve, reject) => {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.onload = () => {
          this.currentLoadingFrame += 1;

          return resolve(image);
        };
        image.onerror = (e) => reject(e);
        image.src = url;
      }));

      return Promise.all(promises)
        .then((images) => images)
        .catch((error) => {
          console.error(error);
          return [];
        });
    },

    loadVideoData(videoData) {
      this.currentLoadingFrame = 0;

      const loadedVideoData = videoData.map((section) => {
        const videoSections = Object.keys(section);
        const loadedSectionVideoFrames = {};

        const promises = videoSections
          .map((videoSection) => this.loadImages(section[videoSection].urls)
            .then((loadedImages) => {
              loadedSectionVideoFrames[videoSection] = loadedImages;
            }));

        return Promise.all(promises)
          .then(() => loadedSectionVideoFrames)
          .catch((error) => {
            console.error(error);
            return {};
          });
      });

      Promise.all(loadedVideoData)
        .then((data) => {
          this.$emit('finishLoading', data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
