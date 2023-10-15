<template>
  <div
    class="c-background"
    data-section="2"
  >
    <canvas
      ref="canvas"
      width="1920"
      height="1080"
      :style="canvasStyles"
    >
    </canvas>
  </div>
</template>

<script>
import { throttle } from 'lodash';

export default {
  name: 'AnimatedBackground',
  props: {
    images: {
      type: Array,
      required: true,
    },
    noLoop: {
      type: Boolean,
      default: false,
    },
    fps: {
      type: Number,
      default: 30,
    },
    backgroundMobileOffsetX: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentIndex: 0,
      isPlaying: false,
      windowInnerWidth: 0,
    };
  },
  created() {
    this.windowInnerWidth = window.innerWidth;

    window.addEventListener('resize', throttle(() => {
      this.windowInnerWidth = window.innerWidth;
    }, 100));
  },
  mounted() {
    this.isPlaying = true;
    this.animate();
  },
  watch: {
    images: {
      handler() {
        this.isPlaying = false;
        this.currentIndex = 0;

        this.$nextTick(() => {
          // Restart animation with new list of images
          setTimeout(() => {
            if (!this.isPlaying) {
              this.isPlaying = true;
              this.animate();
            }
          }, 100);
        });
      },
      deep: true,
    },
  },
  computed: {
    backgroundMobileOffsetXReduced() {
      const maxOffsetX = this.getMaxOffsetX();

      return this.backgroundMobileOffsetX > maxOffsetX
        ? this.backgroundMobileOffsetX
        : maxOffsetX;
    },
    canvasStyles() {
      return (this.windowInnerWidth <= 425 && this.backgroundMobileOffsetX)
        ? `object-position: ${this.backgroundMobileOffsetXReduced}px 0px;`
        : '';
    },
  },
  methods: {
    getMaxOffsetX() {
      const { canvas } = this.$refs;

      if (!canvas) {
        return 0;
      }

      const scaleFactor = canvas.scrollHeight / canvas.height;
      const scaledWidth = Math.floor(canvas.width * scaleFactor);
      const maxOffsetX = scaledWidth - canvas.clientWidth;

      return maxOffsetX * -1;
    },
    /**
     * Starts the animation loop for the background images.
     * Uses requestAnimationFrame to redraw the canvas at a specific frame rate.
     * If noLoop is set to true, the animation will stop after playing once.
     */
    animate() {
      /**
       * Get a reference to the canvas element and create a context object.
       * @type {HTMLCanvasElement}
       */
      const { canvas } = this.$refs;
      const ctx = canvas.getContext('2d');

      // Calculate the time interval between each frame based on the set fps.
      const fpsInterval = 1000 / this.fps;
      let lastFrameTime = Date.now();

      // Define a function to draw each frame of the animation.
      const drawFrame = () => {
        // If the animation is stopped, exit the function.
        if (!this.isPlaying) {
          return;
        }

        // Request the next frame of the animation.
        requestAnimationFrame(drawFrame);

        // Calculate the elapsed time since the last frame was drawn.
        const now = Date.now();
        const elapsed = now - lastFrameTime;

        // If the elapsed time is greater than the time interval between frames,
        // draw the next frame of the animation.
        if (elapsed > fpsInterval) {
          lastFrameTime = now - (elapsed % fpsInterval);

          // Draw the current image onto the canvas and increment the current index.
          const image = this.images[this.currentIndex];
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          this.currentIndex = (this.currentIndex + 1) % this.images.length;

          // If the animation should only play once and has finished, stop the animation
          // and emit a 'finished' event.
          if (this.noLoop && !this.currentIndex) {
            this.isPlaying = false;
            this.currentIndex = 0;
            this.$emit('finished');
          }
        }
      };

      // Start the animation loop.
      requestAnimationFrame(drawFrame);
    },
  },
};
</script>
