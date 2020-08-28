import { 
  SET_USER_DETAIL,
  TOGGEL_SIDEBAR,
  ASSIGN_VALUE
} from "../actions/actionTypes";

const initialState = {
  userBO: {},
};

export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_DETAIL':
      return {
        ...state,
        userBO: action.payload
      }
    default:
      return state
  }
}