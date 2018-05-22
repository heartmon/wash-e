import lodash from 'lodash';
import { CHANGE_PROGRAM, UNSELECT_PROGRAM, ADJUST_PROGRAM, CUSTOM_PROGRAM,
  UPDATE_SCORE,
  SELECT_CUSTOM_COLOR,
  SELECT_CUSTOM_STAIN,
  SELECT_CUSTOM_TEXTILE,
  SELECT_CUSTOM_SPECIAL,
 } from '../actions/program';
import { PROGRAM_TYPE } from '../config/constant';

const initialState = {
  selected: '',
  custom: false,
  data: {},
  customData: {},
  scoreChange: 0,
  currentScore: 70,
};
const reducer = (state = initialState, action) => {
  const customData = { ...state.customData };
  const choice = action.choice;

  switch (action.type) {
    case CHANGE_PROGRAM:
      const programData = action.program;
      return { ...state, selected: action.program.key, data: programData, custom: false, scoreChange: calculateScore(programData)};
    case UNSELECT_PROGRAM:
      return { ...state, selected: '', data: {}, customData: {}, custom: false, scoreChange: 0};
    case ADJUST_PROGRAM:
      const data = {...state.data}
      data[action.key] = action.value;
      return { ...state, data, scoreChange: calculateScore(data) };
    case CUSTOM_PROGRAM:
      return { ...state, selected: action.program.key, data: action.program, custom: true };
    case UPDATE_SCORE:
      return { ...state, currentScore: action.score};
    case SELECT_CUSTOM_COLOR:
      if (!customData.color) {
        customData.color = [];
      }
      // check to toggle on/off
      var index = lodash.findIndex(customData.color, (color) => {
        return color.title === choice.title;
      });
      
      if (index == -1) {
        customData.color.push(choice);
      } else {
        customData.color.splice(index, 1);
      }

      return { ...state, customData };
    case SELECT_CUSTOM_STAIN:
      customData.stain = action.choice;
      return { ...state, customData };
    case SELECT_CUSTOM_TEXTILE:
      if (!customData.textile) {
        customData.textile = [];
      }
      // check to toggle on/off
      var index = lodash.findIndex(customData.textile, (textile) => {
        return textile.title === choice.title;
      });
      
      if (index == -1) {
        customData.textile.push(choice);
      } else {
        customData.textile.splice(index, 1);
      }

      return { ...state, customData };
    case SELECT_CUSTOM_SPECIAL:
      if (!customData.special) { 
        customData.special = [];
      }
      // check to toggle on/off
      var index = lodash.findIndex(customData.special, (special) => {
        return special.title === choice.title;
      });
      
      if (index == -1) {
        customData.special.push(choice);
      } else {
        customData.special.splice(index, 1);
      }

      return { ...state, customData };
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

function calculateCustomTime() {
  
}

export default reducer;
