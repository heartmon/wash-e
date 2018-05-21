import { CHANGE_PROGRAM, UNSELECT_PROGRAM, ADJUST_PROGRAM, CUSTOM_PROGRAM,
  UPDATE_SCORE
 } from '../actions/program';
import { PROGRAM_TYPE } from '../config/constant';

const initialState = {
  selected: '',
  custom: false,
  data: {},
  scoreChange: 0,
  currentScore: 70,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROGRAM:
      const programData = action.program;
      return { ...state, selected: action.program.key, data: programData , custom: false, scoreChange: calculateScore(programData)};
    case UNSELECT_PROGRAM:
      return { ...state, selected: '', data: {}, custom: false, scoreChange: 0};
    case ADJUST_PROGRAM:
      const data = {...state.data}
      data[action.key] = action.value;
      return { ...state, data, scoreChange: calculateScore(data) };
    case CUSTOM_PROGRAM:
      return { ...state, selected: action.program.key, data: action.program, custom: true };
    case UPDATE_SCORE:
      return { ...state, currentScore: score};
    default:
      return { ...state };
  }
};

// 
function calculateScore(data) {
  const { key } = data;
  let score = 0;
  switch (key) {
    case PROGRAM_TYPE.NORMAL_30:
      score = +21;
      break;
    case PROGRAM_TYPE.NORMAL_40:
      score = 5;
      break;
    case PROGRAM_TYPE.NORMAL_60:
      score = -11;
      break;
    case PROGRAM_TYPE.HYGIENE:
      score = -40;
      break;
    case PROGRAM_TYPE.DELICATE:
      score = 2;
      break;
  }

  // calculate on other data like temperature
  
  return score;
}

function calculateCustomScore() {

}

export default reducer;
