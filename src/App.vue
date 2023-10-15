<template>
  <div id="milkinside">
    <NavMenu
      @sideMenuClicked="toggleSideMenu"
      @onRouterClick="hideSideMenu"
      :isOpenedSideMenu="isOpenedSideMenu"
    />
    <SideMenu
      :isOpened="isOpenedSideMenu"
      @onRouterClick="hideSideMenu"
    />
    <router-view/>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue';
import SideMenu from '@/components/SideMenu.vue';

export default {
  name: 'AppWrapper',
  components: {
    NavMenu,
    SideMenu,
  },
  data() {
    return {
      isOpenedSideMenu: false,
    };
  },
  methods: {
    toggleSideMenu() {
      this.isOpenedSideMenu = !this.isOpenedSideMenu;
    },
    hideSideMenu() {
      this.isOpenedSideMenu = false;
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/index.scss';
</style>
