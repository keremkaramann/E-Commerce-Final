import { USER_ACT } from "../actions/userAction";

const userInitialState = {
  user: {},
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
