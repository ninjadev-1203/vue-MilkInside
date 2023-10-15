<template>
  <div
    class="c-nav__menu-item side-menu-button"
    :class="{'side-menu-opened': isOpenedSideMenu}"
    @click="sideMenuOnClickHandler"
    @keydown.enter="sideMenuOnClickHandler"
    tabindex="0"
    role="button"
    :aria-label="labelText"
  >
    <div
      class="animated-menu-icon"
      :class="{open: isOpenedSideMenu}"
    >
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import { COMPONENT_EVENT_SIDE_MENU_CLICKED } from '@/helpers/constants';

export default {
  name: 'SideMenuButton',
  props: {
    isOpenedSideMenu: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    labelText() {
      return this.isOpenedSideMenu
        ? 'Close side menu'
        : 'Open side menu';
    },
  },
  methods: {
    sideMenuOnClickHandler() {
      this.$emit(COMPONENT_EVENT_SIDE_MENU_CLICKED);
    },
  },
};
</script>

<style scoped>
.side-menu-button {
  position: relative;
  top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
}

.animated-menu-icon {
  width: 28px;
  height: 12px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
}

.animated-menu-icon span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #ffffff;
  border-radius: 3px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: all .25s cubic-bezier(0.1, 0.82, 0.76, 0.965);
}

.animated-menu-icon span:nth-child(1) {
  top: 0;
}

.animated-menu-icon:not(.open) span:nth-child(2){
  top: 9px;
  width: 60%;
  transition: top .25s ease-in-out;
}

.animated-menu-icon.open span:nth-child(1) {
  transform: rotate(45deg);
  top: 5px;
}

.animated-menu-icon.open span:nth-child(2) {
  transform: rotate(-45deg);
  bottom: 5px;
}
</style>
