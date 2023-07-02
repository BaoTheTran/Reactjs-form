import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const {productProp,layChiTiet} = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={productProp.image} alt="" 
          data-toggle="modal"
          data-target="#modelId"
          onClick={()=>{layChiTiet(productProp)}}
          />
          <div className="card-body alert alert-success">
            <h4 className="card-title">{productProp.name}</h4>
            <p>{productProp.shortDescription}</p>
            <p>${productProp.price}</p>
          
          </div>
        </div>
      </div>
    );
  }
}
