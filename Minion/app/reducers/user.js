'use strict';

import {LOGIN} from '../actions/types';

export type State = {
  isLoggedIn: boolean;
  hasSkippedLogin: boolean;
  sharedSchedule: ?boolean;
  id: ?string;
  name: ?string;
};

const initialState = {
	navColor:'#fff',
  navStyle:{backgroundColor:'#ff585b', color:'#fff', padding:20},
  userDeets: {
  	email:"tong.chen0507@gmail.com",

}
}

export function user(state = initialState, action = {}) {
    switch(action.type){
   case LOGIN:

return {...state, };



default:
return state;

}
}


module.exports = user;
