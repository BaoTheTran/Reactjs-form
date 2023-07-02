import React, { Component } from "react";
import ShoesList from "./shoesList";
import data from "./data.json";
import Modal from "./modal";

export default class ShoesShop extends Component {
  constructor(props){
    super(props);
    this.state = {
      listProduct : data,
      productDetail : data[0],
    }
  }

  handleDetailProduct = (product)=>{
    this.setState({
      productDetail : product,
    })
  }

  render() {
    const {listProduct,productDetail} = this.state;
    return (
      <div>
        <h1 className="title text-center alert alert-warning">Shoes Shop</h1>
        <h3 className="alert alert-info">Click vào hình ảnh để xem chi tiết</h3>
        <div className="container">
        <ShoesList 
        listProduct ={listProduct} 
        getDetail ={this.handleDetailProduct}
        />
        <Modal
        productDetail = {productDetail}
        />
        </div>
      </div>
    );
  }
}
