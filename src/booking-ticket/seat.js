import React, { Component } from 'react';
import Item from './item';
import { connect } from 'react-redux';
class Seat extends Component {
  renderListItem=()=>{
    let {listItem} = this.props;
    
    return listItem.map((item)=>{
       
        return (
          <tr key={item.hang} className='d-flex '>
              <td>{item.hang}</td>
       
              {item.danhSachGhe.map((ghe)=>{
                if(!item.hang){
                  return<Item
                 key={ghe.soGhe}
                 ghe={ghe}
                 listItem = {item}
                               
                 />
                }
                else if(item.hang){
                  return(<input type="checkbox" class="seats " value={ghe.soGhe} ></input>)
                  
                }
                 
              })}
          </tr>
        )
    })
  }

  render() {
    let {listItem} = this.props;
    console.log(listItem);
    return (
      <div className="seatStructure txt-center" style={{overflowX: 'auto'}}>
      <p id="notification" />
      
        {this.renderListItem()}
        {/* <Item/> */}
        
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
  }
}

export default connect(mapStateToProps,null) (Seat);
