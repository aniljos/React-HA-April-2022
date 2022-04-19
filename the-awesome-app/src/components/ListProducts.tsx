import React, { Component, PureComponent } from "react";
import { Product } from "../model/Product";
import EditProduct from "./EditProduct";
import './ListProducts.css';



//props
interface ListProductsProps {}
//state
interface ListProductsState {
  products: Array<Product>;
  selectedProduct: Product | null;
}

// <ListProducts />
class ListProducts extends PureComponent<ListProductsProps, ListProductsState> {
  state: ListProductsState = {
    products: new Array<Product>(),
    selectedProduct: null
  };


  constructor(props: ListProductsProps){
    super(props);

    console.log("[ListProducts constructor]")
  }
  

  async componentDidMount() {
    console.log("[ListProducts componentDidMount]")
    // const url = "http://localhost:9000/products1";
    // fetch(url)
    //     .then((response) => {

    //         console.log("response", response);
    //         response.json().then((data) => {

    //             console.log("data", data);
    //         })
    //     });

    //async and await
    try {
      const url = "http://localhost:9000/products";
      const response = await fetch(url);
      console.log("response", response);
      const data = await response.json();
      console.log("data", data);

      this.setState({
        products: data,
      });
    } catch (error) {
      console.log("error", error);
    }
  }
  deleteProduct = async (product: Product, index: number) => {

      try {
        
        const url = "http://localhost:9000/products/" + product.id;
        const response = await fetch(url, {method: "Delete"});
        if(response.ok){
          alert("Deleted the record");
          //copy of the state
          const copy_of_products = [...this.state.products];
          copy_of_products.splice(index, 1);
          this.setState({
            products: copy_of_products
          });
        }
        else{
          alert("Delete Failed")
        }

      } catch (error) {
        alert("Delete Error")
      }
  }

  editProduct = (product: Product, index: number) => {

    this.setState({
      selectedProduct : product
    });
  }

  renderProducts(){
    return this.state.products.map((item, index) => {
        return (
            <div className="product"  key={item.id}>
                <p>Id: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Description: {item.description}</p>
                <div>
                    <button onClick={() => {this.deleteProduct(item, index)}}>Delete</button> &nbsp;
                    <button onClick={() => {this.editProduct(item, index)}}>Edit</button>
                </div>
            </div>
        )
    })
  }

  render(): React.ReactNode {

    console.log("[ListProducts render]")
    return (
      <div>
        <h3>List Products</h3>
        <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
            {this.renderProducts()}
        </div>

        <div>
            {this.state.selectedProduct ?  <EditProduct product={this.state.selectedProduct}/> : null }
        </div>
        <br/>
        <br/><br/><br/><br/>
      </div>
    );
  }

  //other Lifecycle methods

  componentWillMount(){
    console.log("[ListProducts componentWillMount]")
  }

  componentWillReceiveProps(){
    console.log("[ListProducts componentWillReceiveProps]")
  }
  // shouldComponentUpdate(newProps: any, newState: any){
  //   console.log("[ListProducts shouldComponentUpdate]");
  //   return true;
  // }
  componentWillUpdate(){
    console.log("[ListProducts componentWillUpdate]");
  }

  componentDidUpdate(){
    console.log("[ListProducts componentDidUpdate]");
  }

  componentWillUnmount(){
    console.log("[ListProducts componentWillUnmount]");
  }
}

export default ListProducts;
