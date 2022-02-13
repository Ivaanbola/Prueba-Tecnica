import util from '../utils/Util';

export const EDIT_ITEM = 'EDIT_ITEM';
export const GET_GAMES = 'GET_GAMES';

const API_URL = 'https://www.amiiboapi.com/api/amiibo/?gameseries=The Legend of Zelda';

export const getGames = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();

            if (json) {
                let result = [];
                let index = 0;
                for (let amiibo of json.amiibo) {
                    amiibo.key=index++;
                    amiibo.price = util.getNumberRandomRound10();
                    amiibo.quantity = 0;
                    result.push(amiibo);
                }
                console.log(result);
                dispatch({
                    type: GET_GAMES,
                    payload: result,
                });
            } else {
                console.log('Unable to fetch!');
            }
        };
    } catch (error) {
        console.log(error);
    }
};


export const editItem = item => dispatch =>
    dispatch({
        type: EDIT_ITEM,
        payload: item,
    });

