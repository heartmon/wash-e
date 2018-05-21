
const initialState = {
  happiness: 70,
  calculatedHappiness: 70,
  bubbles: {
    energy: false,
    tip: false, // TIP_TYPE
    clothes: false,
    chemical: false,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default reducer;