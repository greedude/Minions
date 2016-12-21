'use strict';

import {FEED_MINION, PLAY_MINION, ENTER_MINION} from '../actions/types';


const initialState = {
	name:"Alex",
	image: "",
	selected: false,
	number: "1",
	type: "Fire",
	dob: '01/01/2000',
	mood: 50,
	state: 0,
	health: 50,
	coin: 100
}

function minion(state = initialState, action){

	switch (action.type){
		case FEED_MINION:
		console.log('enter feed');
		return {name: state.name,
		image: state.image,
		selected: state.selected,
		number: state.number,
		type: state.type,
		dob: state.dob,
		mood: state.mood,
		state: state.state,
		health: action.health+1,
		coin: state.coin - 1
	};

		case PLAY_MINION:
		console.log('enter play');
		return {name: state.name,
		image: state.image,
		selected: state.selected,
		number: state.number,
		type: state.type,
		dob: state.dob,
		mood: action.mood+1,
		state: state.state,
		health: state.health,
		coin: state.coin - 2};

		case 'ADD_COIN':
		return {name: state.name,
		image: state.image,
		selected: state.selected,
		number: state.number,
		type: state.type,
		dob: state.dob,
		mood: state.mood,
		state: state.state,
		health: state.health,
		coin: action.coin + 10};


		default:
			return state;


	}

}


module.exports = minion;
