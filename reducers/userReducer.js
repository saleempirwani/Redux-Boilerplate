import { VALUE } from "../actions/types";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case VALUE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
