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
                cart
            }
        }
        
    }
    if(action.type === "REMOVECARTITEM"){

        if(action.productId){
            const cart = [...state.cart];
            const indexOfItemRemove = cart.findIndex(item => item.product?.id === action.productId);
            if(indexOfItemRemove !== -1){
                cart.splice(indexOfItemRemove, 1);
                return {
                    cart
                }
            }
        }

    }
    return state;
}