import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { CartItem } from '../model/CartItem';
import { Product } from '../model/Product';
import { createAddToCartAction, createSaveProductsAction } from '../redux/actionCreators';
import { GadgetStoreAction } from '../redux/gadgetsReducer';
import { AppDisptach, AppRootState } from '../redux/store';


type AppThunkDispatch = ThunkDispatch<AppRootState, any, GadgetStoreAction>

function GadgetStoreRedux(){

    
    const dispatch = useDispatch<AppDisptach>();
    const thunkDispatch = useDispatch<AppThunkDispatch>();
    const products = useSelector((state: AppRootState)=> state.gadgets.products);
    const isProductsLoaded = useSelector((state: AppRootState)=> state.gadgets.isProductsLoaded);

    useEffect(() => {

        //fetchProducts();
        if(!isProductsLoaded){
            fetchProductsFromRedux();
        }
        
    }, [])


    function fetchProductsFromRedux(){

        thunkDispatch(createSaveProductsAction())
    }

    // async function fetchProducts(){

    //     try {
            
    //         const productsUrl = process.env.REACT_APP_PRODUCTS_URL;
    //         if(productsUrl){

    //             const response = await fetch(productsUrl);
    //             if(response.ok){
    //                 const data: Array<Product> = await response.json();
    //                 setProducts(data);
    //             }
    //             else{
    //                 console.log("Error", response.status);
    //             }
    //         }


    //     } catch (error) {
    //         console.log("error", error);
    //     }
    // }
    function addToCart(product: Product){

        //dispatch({type: "ADDTOCART", cartItem: {product, quantity: 1}});
        dispatch(createAddToCartAction(new CartItem(product, 1)));
    }

    function renderProducts() {

        const productsView =  products.map((item, index) => {
            return (
                <div className="col" key={index} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button className="btn btn-primary" onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }

    return (
        <div>
            <h3>Gadget Store</h3>
            <div>
                {renderProducts()}
            </div>
        </div>
    )

}


export default GadgetStoreRedux;