import { SET_TEXT } from '../constants/actionTypes';

const initialState = '';

const textReducer = (
  state = initialState,
  action: { type: string; payload: { text: string } }
) => {
  if (action.type === SET_TEXT) {
    return action.payload.text;
  }

  return state;
};

export default textReducer;
