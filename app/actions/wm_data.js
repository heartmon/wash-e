import { WASHING_STATE } from '../config/constant';

// will call after get weight
export const CHANGE_CLOTHES_WEIGHT = 'CHANGE_CLOTHES_WEIGHT';
export const CHANGE_WM_MODE = 'CHANGE_WM_MODE';
export const START_WASH = 'START_WASH';
export const CHANGE_STEP_FROM_START_TO_WASH = 'CHANGE_STEP_FROM_START_TO_WASH';
export const CHANGE_STEP_FROM_WASH_TO_FINISH = 'CHANGE_STEP_FROM_WASH_TO_FINISH';
export const CHANGE_STEP_FROM_FINISH_TO_SUMMARY = 'CHANGE_STEP_FROM_FINISH_TO_SUMMARY';
export const TIMER_COUNTDOWN = 'TIMER_COUNTDOWN';
export const SHORTCUT_FINISH = 'SHORTCUT_FINISH';
export const PAUSE_WASH = 'PAUSE_WASH';
export const CANCEL_WASH = 'CANCEL_WASH';
export const FINISH_WASH = 'FINISH_WASH';
export const RESET_STEP = 'RESET_STEP';
export const MACHINE_GET_SICK = 'MACHINE_SICK';
export const MACHINE_BACK_TO_NORMAL = 'MACHINE_BACK_TO_NORMAL';

export const changeClothesWeight = weight => ({
    type: CHANGE_CLOTHES_WEIGHT,
    weight,
}); 

export const startWash = (program) => ({
    type: START_WASH,
    program
});
 
export const changeStepFromStartToWash = () => ({
    type: CHANGE_STEP_FROM_START_TO_WASH,
    step: WASHING_STATE.WASHING 
});

export const changeStepFromWashToFinish = () => ({
    type: CHANGE_STEP_FROM_WASH_TO_FINISH,
    step: WASHING_STATE.FINISH_WASHING,
});

export const changeStepFromFinishToSummary = () => ({
    type: CHANGE_STEP_FROM_FINISH_TO_SUMMARY,
    step: WASHING_STATE.SUMMARY,
});

export const timerCountdown = () => ({
    type: TIMER_COUNTDOWN,
    step: -1 
});

export const shortcutFinish = () => ({
    type: SHORTCUT_FINISH,
});

export const resetStep = () => ({
    type: RESET_STEP,
});

export const machineGetSick = () => ({
    type: MACHINE_GET_SICK
});

export const machineBackToNormal = () => ({
    type: MACHINE_BACK_TO_NORMAL
});