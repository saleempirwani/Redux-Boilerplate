import { VALUE } from "./types";

// CREATE YOUR ACTION'S FUNCTION HERE
export const func_name = () => async (dispatch) => {
  return dispatch({
    type: VALUE,
    payload: {},
  });
};
