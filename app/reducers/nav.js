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
