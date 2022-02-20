import { SET_USERS, FETCH_USERS } from "./constants";

const initialState = {
  loading: false,
  list: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, loading: true };
    case SET_USERS:
      return { ...state, list: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
