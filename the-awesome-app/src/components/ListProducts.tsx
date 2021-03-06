import React, { Component, PureComponent } from "react";
import { Product } from "../model/Product";
import EditProduct from "./EditProduct";
import "./ListProducts.css";
import { connect } from "react-redux";
import { AppDisptach, AppRootState } from "../redux/store";
import { trackPromise } from "react-promise-tracker";
import { AuthData, authReducer } from "../redux/authReducer";

//props
interface ListProductsProps {
  appUserName: string;
  //accessToken: string;
  auth: AuthData,
  setAuthData: (authData: AuthData) => void
}
//state
interface ListProductsState {
  products: Array<Product>;
  selectedProduct: Product | null;
}

// <ListProducts />
class ListProducts extends PureComponent<ListProductsProps, ListProductsState> {
  state: ListProductsState = {
    products: new Array<Product>(),
    selectedProduct: null,
  };

  count = 0;
  editProductRef = React.createRef<EditProduct>();

  constructor(props: ListProductsProps) {
    super(props);

    console.log("[ListProducts constructor]");
  }

  async componentDidMount() {
    console.log("[ListProducts componentDidMount]");
    // const url = "http://localhost:9000/products1";
    // fetch(url)
    //     .then((response) => {

    //         console.log("response", response);
    //         response.json().then((data) => {

    //             console.log("data", data);
    //         })
    //     });

    this.fetchProducts();
  }

  fetchProducts = async () => {
    //async and await
    try {
      //const url = "http://localhost:9000/products";
      const url = process.env.REACT_APP_PRODUCTS_URL;

      if (url) {
        const response = await trackPromise(fetch(url, {
          headers: {
          //  "authorization" : "bearer " + this.props.auth.accessToken
          }
        }));
        if(response.ok){
          console.log("response", response);
          const data = await response.json();
          console.log("data", data);
  
          this.setState({
            products: data,
          });
        }
        else{

          if(response.status === 403){
            const refreshUrl = "http://localhost:9000/refreshToken";
            try{
                const refreshRespone = await fetch(refreshUrl, {
                  method: "POST",
                  body: JSON.stringify({token: this.props.auth.refreshToken}),
                  headers: {
                    "content-type": "application/json"
                  }

                });
                if(refreshRespone.ok){
                  const {accessToken} = await refreshRespone.json();
                  this.props.setAuthData({
                    ...this.props.auth,
                    accessToken: accessToken
                  });

                  this.fetchProducts();


                }
            }
            catch(error){

            }
          }


        }

       
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  deleteProduct = async (product: Product, index: number) => {
    try {
      const url = "http://localhost:9000/products/" + product.id;
      const response = await fetch(url, { method: "Delete" });
      if (response.ok) {
        alert("Deleted the record");
        //copy of the state
        const copy_of_products = [...this.state.products];
        copy_of_products.splice(index, 1);
        this.setState({
          products: copy_of_products,
        });
      } else {
        alert("Delete Failed");
      }
    } catch (error) {
      alert("Delete Error");
    }
  };

  editProduct = (product: Product, index: number) => {
    this.setState({
      selectedProduct: product,
    });
  };

  editCancel = (message: string) => {
    this.setState(
      {
        selectedProduct: null,
      },
      () => {
        alert(message);
      }
    );
  };

  editUpdate = async (updatedProduct: Product) => {
    try {
      const url = "http://localhost:9000/products/" + updatedProduct.id;
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(updatedProduct),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("updated the record");
        this.fetchProducts();
        this.setState({
          selectedProduct: null,
        });
      } else {
        alert("update record failed");
      }
    } catch (error) {
      alert("update record error");
    }
  };

  showProductId = () => {
    this.editProductRef.current?.getProductId();
  };

  renderProducts() {
    return this.state.products.map((item, index) => {
      return (
        <div data-testid="prd" className="product" key={item.id}>
          <p>Id: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>
          <p>Description: {item.description}</p>
          <div>
            <button
              onClick={() => {
                this.deleteProduct(item, index);
              }}
            >
              Delete
            </button>{" "}
            &nbsp;
            <button
              onClick={() => {
                this.editProduct(item, index);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      );
    });
  }

  render(): React.ReactNode {
    console.log("[ListProducts render]");
    return (
      <div>
        <h3>List Products</h3>
        <h4>Welcome {this.props.appUserName}</h4>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}
        >
          {this.renderProducts()}
        </div>

        {/* <div>
            SelectedProduct : {this.state.selectedProduct!.id}
        </div> */}

        <div>
          {this.state.selectedProduct ? (
            <EditProduct
              ref={this.editProductRef}
              key={this.state.selectedProduct.id}
              product={this.state.selectedProduct}
              onCancel={this.editCancel}
              onSave={this.editUpdate}
            />
          ) : null}
        </div>
        <br />
        <div>
          <button onClick={this.showProductId}>Show the Product ID</button>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }

  //other Lifecycle methods

  componentWillMount() {
    console.log("[ListProducts componentWillMount]");
  }

  componentWillReceiveProps() {
    console.log("[ListProducts componentWillReceiveProps]");
  }
  // shouldComponentUpdate(newProps: any, newState: any){
  //   console.log("[ListProducts shouldComponentUpdate]");
  //   return true;
  // }
  componentWillUpdate() {
    console.log("[ListProducts componentWillUpdate]");
  }

  componentDidUpdate() {
    console.log("[ListProducts componentDidUpdate]");
  }

  componentWillUnmount() {
    console.log("[ListProducts componentWillUnmount]");
  }
}

//Read the redux state
const mapStateToProps = (state: AppRootState) => {
  return {
    appUserName: state.auth.userName,
    auth: state.auth
  };
};

//update the redux state(dispatch action)
const mapDispatchToProps = (dispatch: AppDisptach) => {

  return {
    setAuthData: (authData: AuthData) => {dispatch({type: "SET_AUTH", payload: authData})}
  }

}


//export default ListProducts;
export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);

// const fn = connect();
// const afn = fn(ListProducts);
// export default afn;
