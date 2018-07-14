import * as SanSeActionTypes from './sanse.type';
const initialState = {
  
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SanSeActionTypes.HELLO: {
      break;
    }

    default:
      return state;
  }
}