import React, { Component } from 'react';
import {connect} from "react-redux";

class Item extends Component {

  render() {
    let {listItem,ghe} = this.props;
    // console.log(listItem);
    return (
   
      <td class = 'd-flex  justify-content-center'    >{ghe.soGhe} </td>


    )
  }
}

export default Item;