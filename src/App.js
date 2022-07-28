// import logo from "./logo.svg";
import "./App.css";
import product from "./product.json";




import React, { Component } from "react";


//console.log(product);
export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      name: "Francis",
      cartitems: [],
    };


  }

  addcart(product) {
    //console.log(prod);
    var check = this.state.cartitems;
    // console.log(check);
    this.setState({ cartitems: [...check, product] });
    console.log(product);
  }

  // removeelement(v){
  //   product.find((o)=>{
  //    if(o==v){
  //     this.removeelement(this.cartitems);

  //    }

  //   })

  // }
  render() {

    return (

      <div>
        {product.map((tools, index) => {
          return (
            <div key={index}>
              <h1>{tools.name}</h1>
              <button onClick={() => this.addcart(tools)}>Add to cart</button>
            </div>
          );
        })}
        <h1>Addcart items</h1>

        {this.state.cartitems.map((product, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  color: "red",
                  border: "solid black 2px",
                  width: "20%",
                  textAlign: "center",
                  backgroundColor: "yellow",
                  listStyle: "none",
                }}
              >
                <li>
                  <h3>{product.name}</h3>
                </li>
                <li style={{ color: "green" }}>{product.price}</li>
                <li style={{ color: "blue" }}>{product.qty}</li>
                <button onClick={() => this.removeelement(product)}>
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
