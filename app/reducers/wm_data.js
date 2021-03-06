import moment from 'moment';

import { 
  CHANGE_CLOTHES_WEIGHT, 
  START_WASH, 
  CHANGE_STEP_FROM_START_TO_WASH, 
  TIMER_COUNTDOWN, 
  CHANGE_STEP_FROM_WASH_TO_FINISH,
  CHANGE_STEP_FROM_FINISH_TO_SUMMARY,
  SHORTCUT_FINISH ,
  RESET_STEP,
  MACHINE_GET_SICK,
  MACHINE_BACK_TO_NORMAL
} from '../actions/wm_data';
import { WASHING_STATE } from '../config/constant';

const initialState = {
  clothesWeight: 0,
  maxWeight: 8,
  step: WASHING_STATE.CONFIG,
  washInfo: {
    currentTime: 0,
    finishTime: 0,
    washState: '',
  },
  sick: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CLOTHES_WEIGHT:
      return { ...state, clothesWeight: action.weight };
    case START_WASH:
      // calculate the time
      const programTimeInMinute = action.program.time;
      const programTimeInSec = programTimeInMinute * 60;
      const finishTime = 0;
      const currentTime = programTimeInSec;
      const washState = '';
      return { ...state, step: WASHING_STATE.START_WASHING, washInfo: {finishTime, currentTime, washState} };
    case CHANGE_STEP_FROM_START_TO_WASH:
      return { ...state, step: action.step };
    case TIMER_COUNTDOWN:
      return { ...state, washInfo: { ...state.washInfo, currentTime: state.washInfo.currentTime + action.step }};
    case SHORTCUT_FINISH:
      return { ...state, washInfo: { ...state.washInfo, currentTime: 3}};
    case CHANGE_STEP_FROM_WASH_TO_FINISH:
      return { ...state, step: action.step }; 
    case CHANGE_STEP_FROM_FINISH_TO_SUMMARY:
      return { ...state, step: action.step };
    case RESET_STEP: 
      return { ...state, step: WASHING_STATE.CONFIG };
    case MACHINE_GET_SICK:
      return { ...state, sick: true};
    case MACHINE_BACK_TO_NORMAL:
      return { ...state, sick: false};
    default:
      return { ...state }; 
  }
};

export default reducer;
