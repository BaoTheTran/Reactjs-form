import React, { Component } from "react";
import Item from "./item";

export default class ShoesList extends Component {
  renderListProduct = ()=>{
      const {listProduct,getDetail} = this.props;

      return listProduct.map((product)=>{
        return <Item 
        key={product.maSP} 
        productProp={product} 
        layChiTiet={getDetail}
        />
      })
      }
    
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderListProduct()}
        </div>
      </div>
    );
  }
}
