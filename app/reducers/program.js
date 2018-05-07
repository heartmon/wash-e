import { CHANGE_PROGRAM, UNSELECT_PROGRAM, ADJUST_PROGRAM } from '../actions/program';

const initialState = {
  selected: '',
  custom: false,
  data: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROGRAM:
      return { ...state, selected: action.program.key, data: action.program };
    case UNSELECT_PROGRAM:
      return { ...state, selected: '', data: {}};
    case ADJUST_PROGRAM:
      const data = {...state.data}
      data[action.key] = action.value;
      console.log(data); 
      return { ...state, data };
    default:
      return { ...state };
  }
};

export default reducer;
