import { EDIT_ITEM, GET_GAMES } from './actions';

const initialState = {
    games: [],
    shoppingCart: [],
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case EDIT_ITEM:
            let shoppingCart = state.shoppingCart;
            let encontrado = false;
            let item = action.payload;
            for (let item of state.shoppingCart) {
                if (item.key == action.payload.key) {
                    item.quantity = action.payload.quantity;
                    encontrado = true;
                }
            }
            if (!encontrado) {
                shoppingCart.push(item);
            }
            console.log(shoppingCart);
            return { ...state, shoppingCart };
        case GET_GAMES:
            return { ...state, games: action.payload };
        default:
            return state;
    }
}

export default userReducer;
