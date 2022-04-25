import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Product } from '../model/Product';
import { AppDisptach } from '../redux/store';

function GadgetStore(){

    const [products, setProducts] = useState<Array<Product>>([]);
    const dispatch = useDispatch<AppDisptach>();

    useEffect(() => {

        fetchProducts();

    }, [])


    async function fetchProducts(){

        try {
            
            const productsUrl = process.env.REACT_APP_PRODUCTS_URL;
            if(productsUrl){

                const response = await fetch(productsUrl);
                if(response.ok){
                    const data: Array<Product> = await response.json();
                    setProducts(data);
                }
                else{
                    console.log("Error", response.status);
                }
            }


        } catch (error) {
            console.log("error", error);
        }
    }
    function addToCart(product: Product){

        dispatch({type: "ADDTOCART", cartItem: {product, quantity: 1}});
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


export default GadgetStore;