import React, { ChangeEvent, Component } from 'react';
import { Product } from '../model/Product';


interface EditProductProps{
    product: Product,
    onCancel? : (message: string) => void,
    onSave? : (updatedProduct: Product) => void
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
        console.log("EditProduct constructor", this.props.product.id);
    }
   

    save = () => {

        if(this.props.onSave && this.state.currentProduct !== null){

            this.props.onSave(this.state.currentProduct);
        }
    }
    cancel = () => {

        if(this.props.onCancel){
            this.props.onCancel("The operation was cancelled");
        }
    }

    handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {

        const value = e.target.value
        if(value){
            const updatedProduct = {...this.state.currentProduct};
            updatedProduct.name = value;
            this.setState({
                currentProduct: updatedProduct
            });
        }
    }

    handleDescChange = (e: ChangeEvent<HTMLInputElement>) => {

        const value = e.target.value
        if(value){
            const updatedProduct = {...this.state.currentProduct};
            updatedProduct.description = value;
            this.setState({
                currentProduct: updatedProduct
            });
        }
    }
    handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {

        const value = e.target.value
        if(value){
            const updatedProduct = {...this.state.currentProduct};
            updatedProduct.price = parseFloat(value);
            this.setState({
                currentProduct: updatedProduct
            });
        }
    }

    getProductId(){
        alert("Updating Product " + this.state.currentProduct?.id);
    }

    render(): React.ReactNode {
        
       
        const {currentProduct} = this.state;

        return(
            <div>
                <h4>Edit Product : ID {currentProduct?.id}</h4>

                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" value={currentProduct?.name} onChange={this.handleNameChange}/>
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" value={currentProduct?.price} 
                                                    onChange={this.handlePriceChange}/>
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <input id="description" value={currentProduct?.description} 
                                                     onChange={this.handleDescChange}/>
                </div>

                <div>
                    <button onClick={this.save}>Save</button>&nbsp;
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        )
    }

     // static getDerivedStateFromProps(nextProps: EditProductProps, currentState: EditProductState){

    //     //return the new state
    //     if(nextProps.product.id !== currentState.currentProduct?.id){

    //         return {
    //             currentProduct: nextProps.product
    //         }
    //     }
    //     //return null for no state change
    //     return null;

    // }
}

export default EditProduct;