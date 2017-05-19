import { get } from 'lodash';
import type { Action } from '../actions/types';
import { SET_USER } from '../actions/user';

export type State = {
  name: string
}

const initialState = {
  name: 'Sean Perry',
  data: {
    "id": "7572895911803988016",
    "email": "sean@joinhoney.com",
    "email_confirmed": true,
    "has_password": true,
    "has_image": true,
    "image_url": "\/\/storage.googleapis.com\/honey-user-images\/7572895911803988016.png",
    "name": "Sean Perry",
    "firstName": "Sean",
    "lastName": "Perry",
    "bio": "i am sean",
    "pending_points": 203,
    "available_points": 507,
    "earned_points": 3710,
    "referral_token": "pajuad",
    "created": 1444415266,
    "updated": 1495066443,
    "admin": 500,
  }
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_USER) {
    return initialState;
  }
  return state;
}
