import React, { Component } from "react";
import { Product } from "../model/Product";
import './ListProducts.css';

//props
interface ListProductsProps {}
//state
interface ListProductsState {
  products: Array<Product>;
}

// <ListProducts />
class ListProducts extends Component<ListProductsProps, ListProductsState> {
  state: ListProductsState = {
    products: new Array<Product>(),
  };

  

  async componentDidMount() {
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

  renderProducts(){
    return this.state.products.map((item, index) => {
        return (
            <div className="product"  key={item.id}>
                <p>Id: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Description: {item.description}</p>
                <div>
                    <button>Delete</button> &nbsp;
                    <button>Edit</button>
                </div>
            </div>
        )
    })
  }

  render(): React.ReactNode {
    return (
      <div>
        <h3>List Products</h3>
        <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
            {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default ListProducts;
