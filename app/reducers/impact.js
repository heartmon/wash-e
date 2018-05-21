import { CHANGE_PROGRAM, UNSELECT_PROGRAM, ADJUST_PROGRAM, CUSTOM_PROGRAM } from '../actions/program';

const initialState = {
  
  animal: 70,
  tree: 70,
  air: 70,
  water: 70,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default reducer;
