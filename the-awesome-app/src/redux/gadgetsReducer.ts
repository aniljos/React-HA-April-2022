import { CartItem } from "../model/CartItem";
import { Product } from "../model/Product";


export interface GadgetStoreState{

    cart: Array<CartItem>,
    products: Array<Product>,
    isProductsLoaded: boolean
}
export interface GadgetStoreAction{
    type: string,
    cartItem?: CartItem,
    productId?: number,
    products?: Array<Product>
}
const initData: GadgetStoreState = {
    cart: [],
    products: [],
    isProductsLoaded: false
}

export const gadgetsReducer = (state: GadgetStoreState=initData, action: GadgetStoreAction): GadgetStoreState => {

    if(action.type === "ADDTOCART"){
        const cartItem = action.cartItem;
        if(cartItem){
            const cart = [...state.cart];
            cart.push(cartItem);
            return {
                ...state,
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

                    ...state,
                    cart
                }
            }
        }
    }
    if(action.type === "SAVEPRODUCTS"){

        if(action.products){
            return {
                ...state,
                products: action.products,
                isProductsLoaded: true
            }
        }
    }
    return state;
}