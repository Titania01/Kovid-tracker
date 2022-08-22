import { FETCH_STAT } from "./types";

const initialState = {
  stat: {},
};

export default function statReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_STAT:
      return {
        ...state,
        stat: action.payload,
      };

    default:
      return state;
  }
}




