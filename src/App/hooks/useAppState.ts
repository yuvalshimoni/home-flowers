import { useReducer } from 'react';
import { cartReducer } from 'App/state/reducers/cart';
import { AppState } from 'App/state/types';

export const useAppState = (): AppState => {
    const [cart, cartDispatch] = useReducer(cartReducer, []);
    console.log(cart);

    return {
        cart,
        cartDispatch,
    };
};
