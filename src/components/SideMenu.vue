<template>
  <!-- eslint-disable -->
  <transition name="fade">
    <div
      class="c-menu"
      :class="{active: isOpened}"
      v-if="isOpened"
    >
      <div class="c-menu__content">
        <div class="c-intro">
          <div class="c-line__wrapper" data-start-divider="" data-section-item="">
            <div class="c-line c-line--invert"></div>
          </div>
          <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
            <div class="c-intro__content" data-intro-content="">
              <div class="c-intro__left"><p class="c-intro__number">01</p>
                <div class="c-line__wrapper">
                  <div class="c-intro__line c-line c-line--invert"></div>
                </div>
                <p class="c-intro__text">Stay tuned</p></div>
              <div class="c-intro__right"><p class="c-intro__text">Since 2011</p></div>
            </div>
          </div>
        </div>
        <div class="c-menu__groups">
          <div class="c-menu__group">
            <h2 class="c-menu__group-heading">
              <router-link
                :to="ROUTES[ROUTE_LABELS.SERVICE]"
                @click.native="onRouterClick"
              >
                {{ ROUTE_LABELS.SERVICE }}
              </router-link>
            </h2>
            <div class="c-menu__group-links"><a class="c-menu__group-link" href="#!">Product
              Strategy</a><a class="c-menu__group-link" href="#!">What we do?</a><a
              class="c-menu__group-link" href="#!">Partners</a><a class="c-menu__group-link"
                                                                  href="#!">FAQ</a><a
              class="c-menu__group-link" href="#!">Schedule</a></div>
          </div>
          <div class="c-menu__group"><h2 class="c-menu__group-heading">Work</h2>
            <div class="c-menu__group-links"><a class="c-menu__group-link" href="#!">Case
              Studies</a><a class="c-menu__group-link" href="#!">OS/OEM Design</a><a
              class="c-menu__group-link" href="#!">Product Design</a><a class="c-menu__group-link"
                                                                        href="#!">Branding</a><a
              class="c-menu__group-link" href="#!">Web Site</a></div>
          </div>
          <div class="c-menu__group"><h2 class="c-menu__group-heading">About</h2>
            <div class="c-menu__group-links"><a class="c-menu__group-link" href="#!">About us</a><a
              class="c-menu__group-link" href="#!">Values</a><a class="c-menu__group-link" href="#!">Culture</a><a
              class="c-menu__group-link" href="#!">Contact us</a><a class="c-menu__group-link"
                                                                    href="#!">Career</a></div>
          </div>
        </div>
        <div class="c-menu__footer">
          <div class="c-line c-line--invert"></div>
          <div class="c-menu__footer-content">
            <CopyLocation />
            <FooterLinks />
          </div>
        </div>
      </div>
      <SideMenuSlides/>
    </div>
  </transition>
</template>

<script>
// TODO: Need to improve template layout
import FooterLinks from '@/components/SideMenu/FooterLinks.vue';
import CopyLocation from '@/components/SideMenu/CopyLocation.vue';
import { EVENT_ROUTER_CLICK, ROUTE_LABELS, ROUTES } from '@/helpers/constants';
import SideMenuSlides from '@/components/SideMenu/SideMenuSlides.vue';

export default {
  name: 'SideMenu',
  components: {
    SideMenuSlides,
    CopyLocation,
    FooterLinks,
  },
  props: {
    isOpened: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      ROUTE_LABELS,
      ROUTES,
    };
  },
  methods: {
    onRouterClick() {
      this.$emit(EVENT_ROUTER_CLICK);
    },
  },
};
</script>

<style scoped>
.fade-leave-active {
  transition: opacity 0.5s, transform 0.6s;
}

.fade-leave-to {
  opacity: 0;
  transform: scale(4);
}
</style>
