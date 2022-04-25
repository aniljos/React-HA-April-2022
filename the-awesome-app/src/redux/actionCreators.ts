import { AppDisptach } from './store';
import { GadgetStoreAction } from './gadgetsReducer';
import { CartItem } from './../model/CartItem';
import { Product } from '../model/Product';

export const createAddToCartAction = (cartItem: CartItem): GadgetStoreAction => {

    return {
        type: "ADDTOCART",
        cartItem
    }
}

export const createRemoveFromCartAction = (productId: number): GadgetStoreAction => {

    return {
        type: "REMOVECARTITEM",
        productId
    }
}

export const createSaveProductsAction = () => {

    return async (dispatch: AppDisptach) => {

        // API call
        try {

            const productsUrl = process.env.REACT_APP_PRODUCTS_URL;
            if(productsUrl){

                const response = await fetch(productsUrl);
                if(response.ok){
                    const data: Array<Product> = await response.json();
                    dispatch({
                        type: "SAVEPRODUCTS",
                        products: data
                    })
                }
                else{
                    console.log("Error", response.status);
                }
            }
        } catch (error) {
            console.log("error", error);
        }


    }


}