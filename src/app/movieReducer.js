export const initialState = {
  search: "",
  movies: {},
};

export function movieReducer(state, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    default:
      return state;
  }
}
