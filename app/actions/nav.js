export const CHANGE_MENU = 'CHANGE_MENU';
export const CHANGE_CUSTOM_STEP = 'CHANGE_CUSTOM_STEP';

export const changeMenu = to => ({
  type: CHANGE_MENU,
  to,
});

export const changeCustomStep = (step) => ({
  type: CHANGE_CUSTOM_STEP,
  step,
})
