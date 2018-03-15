import { CHANGE_AUTH } from '../actions/types';

export default function (state = false, actions) {
  switch (actions.type) {
    case CHANGE_AUTH:
      return actions.payload;

    default:
      return state;
  }
}
