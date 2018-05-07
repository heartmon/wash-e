export const CHANGE_PROGRAM = 'CHANGE_PROGRAM';
export const UNSELECT_PROGRAM = 'UNSELECTED_PROGRAM';
export const ADJUST_PROGRAM = 'ADJUST_PROGRAM';

export const changeProgram = program => ({
  type: CHANGE_PROGRAM,
  program,
});

export const unselectedProgram = () => ({
  type: UNSELECT_PROGRAM,
});

export const adjustProgram = (key, value) => ({
  type: ADJUST_PROGRAM,
  key,
  value,
});
