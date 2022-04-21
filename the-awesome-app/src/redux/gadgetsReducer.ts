import { CartItem } from "../model/CartItem";


export interface GadgetStoreState{

    cart: Array<CartItem>
}
export interface GadgetStoreAction{
    type: string,
    cartItem?: CartItem,
    productId?: number
}
const initData: GadgetStoreState = {
    cart: []
}

export const gadgetsReducer = (state: GadgetStoreState=initData, action: GadgetStoreAction) => {

    if(action.type === "ADDTOCART"){
        const cartItem = action.cartItem;
        if(cartItem){
            const cart = [...state.cart];
            cart.push(cartItem);
            return {
                ...cart
            }
        }
        
    }
    return state;
}