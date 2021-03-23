export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  LOG_OUT: "LOG_OUT",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.LOG_OUT:
      return {
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
