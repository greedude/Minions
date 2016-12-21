import * as types from './types';


export function login(navProps, res) {
  console.log(res);
  return {
    type: types.LOGIN,
    nav:navProps,
    data: res
  };
}

export function feedMinion(health){
	return {
		type: types.FEED_MINION,
		health

	};

}

export function playMinion(mood){
	return {
		type: types.PLAY_MINION,
		mood

	}

}

export function addCoin(coin){
	return {
		type: 'ADD_COIN',
		coin

	};

}

