import { CHANGE_MENU, CHANGE_CUSTOM_STEP } from '../actions/nav';

const initialState = {
  menu: 'HOME',
  customStep: 1,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MENU:
      switch (action.to) {
        case 'PRE_DEFINED':
          return {
            ...state,
            menu: 'PRE_DEFINED'
          }
        case 'CUSTOM':
          return {
            ...state,
            menu: 'CUSTOM',
          }
        case 'WASHING':
          return {
            ...state,
            menu: 'WASHING',
          }
        default: 
          return { 
            ...state,
            menu: action.to,
          };
      }
    case CHANGE_CUSTOM_STEP:
      return { ...state, customStep: action.step };
    default:
      return { ...state };
  }
};

export default reducer;
