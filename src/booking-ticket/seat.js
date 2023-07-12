import React, { Component } from 'react';
import Item from './item';
import { connect } from 'react-redux';
class Seat extends Component {
  renderListItem=()=>{
    let {listItem,danhSachGhe} = this.props;
    return listItem.map((item)=>{
        return (
          <div key={item.hang}>
              {item.danhSachGhe.map((ghe)=>{
                return(
                  <Item
                  key={ghe.soGhe}
                  ghe={ghe}                  
                  />
                )
              })}
          </div>
        )
    })
  }

  render() {
    return (
      <div className="seatStructure txt-center" style={{overflowX: 'auto'}}>
      <p id="notification" />
      <table id="seatsBlock">
        <Item/>
      </table>
      <div className="screen">
        <h2 className="wthree">Screen this way</h2>
      </div>
      <button onclick="updateTextArea()">Confirm Selection</button>
    </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    //key : listUser la props cho Component Users
    listItem : state.itemReducer.listItem,
    danhSachGhe : state.itemReducer.danhSachGhe,
  }
}

export default connect(mapStateToProps,null) (Seat);
