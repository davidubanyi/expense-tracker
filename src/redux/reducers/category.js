const categoryDefaultState = ["food", "transportation", "airtime", "random"];

export default (state = categoryDefaultState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      const newState = [...state, action.categoryGroup];
      return newState;
    case "REMOVE_CATEGORY":
      const remState = state.filter(
        category => category != action.categoryGroup
      );
      return remState;
    case "SET_CATEGORIES":
      return action.categoryGroup
    default:
      return state;
  }
};
