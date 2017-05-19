const axios = require('axios');


import type { Action } from './types';

export const SET_USER = 'SET_USER';

export function setUser(user:string):Action {
  return axios('https://js2go.com/api/package/express')
    .then(result => {
      return {
        type: SET_USER,
        payload: user,
        data: result,
      };
    })
}
