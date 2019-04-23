export const TOGGLE_NAV = 'UI_TOGGLE_NAV';

export const toggleNav = isOpen => ({
  type: TOGGLE_NAV,
  isOpen,
});
