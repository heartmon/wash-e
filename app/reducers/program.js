import { CHANGE_PROGRAM, UNSELECT_PROGRAM, ADJUST_PROGRAM, CUSTOM_PROGRAM } from '../actions/program';

const initialState = {
  selected: '',
  custom: false,
  data: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROGRAM:
      return { ...state, selected: action.program.key, data: action.program , custom: false};
    case UNSELECT_PROGRAM:
      return { ...state, selected: '', data: {}, custom: false};
    case ADJUST_PROGRAM:
      const data = {...state.data}
      data[action.key] = action.value;
      console.log(data); 
      return { ...state, data };
    case CUSTOM_PROGRAM:
      return { ...state, selected: action.program.key, data: action.program, custom: true };
    default:
      return { ...state };
  }
};

export default reducer;
