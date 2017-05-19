import { get } from 'lodash';
import type { Action } from '../actions/types';
import { SET_USER } from '../actions/user';

export type State = {
    name: string
}

const initialState = {
  name: '',
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_USER) {
    return {
      ...state,
      name: get(action.payload, 'name', ''),
      data: action.payload,
    };
  }
  return state;
}
