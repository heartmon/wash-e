export const CHANGE_PROGRAM = 'CHANGE_PROGRAM';
export const UNSELECT_PROGRAM = 'UNSELECTED_PROGRAM';
export const ADJUST_PROGRAM = 'ADJUST_PROGRAM';
export const CUSTOM_PROGRAM = 'CUSTOM_PROGRAM';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export const SELECT_CUSTOM_COLOR = 'SELECT_CUSTOM_COLOR';
export const SELECT_CUSTOM_STAIN =  'SELECT_CUSTOM_STAIN';
export const SELECT_CUSTOM_TEXTILE = 'SELECT_CUSTOM_TEXTILE';
export const SELECT_CUSTOM_SPECIAL = 'SELECT_CUSTOM_SPECIAL';

export const changeProgram = program => ({
  type: CHANGE_PROGRAM,
  program,
});

export const customProgram = program => ({
  type: CUSTOM_PROGRAM,
  program,
})

export const unselectedProgram = () => ({
  type: UNSELECT_PROGRAM,
}); 

export const adjustProgram = (key, value) => ({
  type: ADJUST_PROGRAM,
  key,
  value,
});

export const selectCustomColor = (choice) => ({
  type: SELECT_CUSTOM_COLOR,
  choice,
});

export const selectCustomTextile = (choice) => ({
  type: SELECT_CUSTOM_TEXTILE,
  choice,
});

export const selectCustomStain = (choice) => ({
  type: SELECT_CUSTOM_STAIN,
  choice,
});

export const selectCustomSpecial = (choice) => ({
  type: SELECT_CUSTOM_SPECIAL,
  choice,
});

export const updateScore = (score) => ({
  type: UPDATE_SCORE,
  score,
})
