import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actSearch } from '../store/actions';

class Search extends Component {
  handleOnChange =(event)=>{
    this.props.searchSV(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-control mb-3 w-50" placeholder='Tìm kiếm theo tên Sinh Viên'
      onChange={this.handleOnChange}
      />
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    searchSV: (keyword)=>dispatch(actSearch(keyword))
  }
}

export default connect(null,mapDispatchToProps) (Search);
