<template>
  <div class="c-nav">
    <div class="c-nav__wrapper"
         :class="{'c-nav--light': isLight,}">
      <router-link
        to="/"
        class="c-nav__logo"
        @click.native="logoOnClickHandler"
      >
        MILKINSIDE.
      </router-link>

      <div class="c-nav__menu">
        <div
          class="c-nav__menu-item"
          v-for="(route, label) in ROUTES"
          :key="label"
        >
          <router-link
            :to="route" class="c-nav__menu-link"
            @click.native="onRouterClick"
          >
            {{ label }}
          </router-link>
        </div>

        <SideMenuButton
          v-on="$listeners"
          :isOpenedSideMenu="isOpenedSideMenu"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus, BUS_EVENT_RESET_SECTION_TO_INITIAL } from '@/helpers/eventBus';
import SideMenuButton from '@/components/NavMenu/SideMenuButton.vue';
import { EVENT_ROUTER_CLICK, ROUTES, ROUTES_WITH_LIGHT_BG } from '@/helpers/constants';

export default {
  name: 'NavMenu',
  components: {
    SideMenuButton,
  },
  props: {
    isOpenedSideMenu: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      ROUTES,
    };
  },
  computed: {
    currentRouteName() {
      const currentRoute = this.$route;
      const matchingRoute = Object
        .entries(this.ROUTES)
        .find(([, route]) => currentRoute.path === route);

      return (matchingRoute ? matchingRoute[0] : '');
    },
    isLight() {
      return ROUTES_WITH_LIGHT_BG.includes(this.currentRouteName) && !this.isOpenedSideMenu;
    },
  },
  methods: {
    logoOnClickHandler() {
      eventBus.$emit(BUS_EVENT_RESET_SECTION_TO_INITIAL);
      this.onRouterClick();
    },
    onRouterClick() {
      this.$emit(EVENT_ROUTER_CLICK);
    },
  },
};
</script>
