import { CHANGE_MENU } from '../actions/nav';

const initialState = {
  menu: 'HOME',
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
    default:
      return { ...state };
  }
};

export default reducer;
