const axios = require('axios');


import type { Action } from './types';

export const SET_USER = 'SET_USER';

export function loginUser(email:string, password:string):Action {
  console.log('login user in...');
  if (!email || !password) {
    // TODO: add default user account
  }
  const method = 'POST';
  return axios({
    data: {
      email,
      password,
    },
    method,
    url: 'https://d.joinhoney.com/login',
  })
    .then(result => {
      console.log('result', result.data);
      return {
        type: SET_USER,
        payload: result.data,
        data: result,
      };
    })
    .catch(err => {
      console.log('login error', err);
    });
}


export function setUser(user:string):Action {
  console.log('log user in...');
  return axios('https://js2go.com/api/package/express')
    .then(result => {
      console.log('result', result);
      return {
        type: SET_USER,
        payload: user,
        data: result,
      };
    })
}
