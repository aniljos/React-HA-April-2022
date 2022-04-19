import React, { Component } from 'react';
import { Product } from '../model/Product';


interface EditProductProps{
    product: Product
}

interface EditProductState{
    currentProduct: Product | null;
}

class EditProduct extends Component<EditProductProps, EditProductState>{

    state: EditProductState = {
        currentProduct: null
    }

    constructor(props: EditProductProps){
        super(props);

        this.state.currentProduct = this.props.product;
    }
    static getDerivedStateFromProps(nextProps: EditProductProps, currentState: EditProductState){

        //return the new state
        if(nextProps.product.id !== currentState.currentProduct?.id){

            return {
                currentProduct: nextProps.product
            }
        }
        //return null for no state change
        return null;

    }

    save = () => {}
    cancel = () => {}

    render(): React.ReactNode {
        
       
        const {currentProduct} = this.state;

        return(
            <div>
                <h4>Edit Product : ID {currentProduct?.id}</h4>

                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" value={currentProduct?.name} />
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" value={currentProduct?.price}/>
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <input id="description" value={currentProduct?.description}/>
                </div>

                <div>
                    <button onClick={this.save}>Save</button>&nbsp;
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default EditProduct;