export const DEBOUNCE_DELAY = 80;
export const debounceOptions = {
  leading: true,
  trailing: false,
};
export const BACKGROUND_ANIMATION_FPS_LOOP = 30;
export const BACKGROUND_ANIMATION_FPS_SWITCHING = 75;

export const ROUTE_LABELS = {
  // ABOUT: 'About',
  // WORK: 'Work',
  SERVICE: 'Service',
  // CONTACT: 'Contact',
};

export const ROUTES = {
  // [ROUTE_LABELS.ABOUT]: '/about',
  // [ROUTE_LABELS.WORK]: '/work',
  [ROUTE_LABELS.SERVICE]: '/services',
  // [ROUTE_LABELS.CONTACT]: '/contact',
};
export const ROUTES_WITH_LIGHT_BG = [ROUTE_LABELS.SERVICE];

export const EVENT_ROUTER_CLICK = 'onRouterClick';
export const COMPONENT_EVENT_SIDE_MENU_CLICKED = 'sideMenuClicked';
