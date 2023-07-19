import React, { Component } from 'react';
import Student from './student';
import { connect } from 'react-redux';
class ListStudent extends Component {
  renderList=()=>{
    let {list,keyword} = this.props;
    list = list.filter((student)=>student.tenSV.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
    return list?.map((student)=>{
      return  <Student
      key={student.id}
      student={student}
      />
    })
  }

  render() {
    return (
      <table className='table'>
      <thead  className='alert alert-primary text-primary'>
        <tr>
          <td><h5>Mã sinh viên</h5></td>
          <td><h5>Họ tên</h5></td>
          <td><h5>Số điện thoại</h5></td>
          <td><h5>Email</h5></td>
          <td><h5>Option</h5></td>
        </tr>
      </thead>
      
      <tbody>
        {this.renderList()}
      </tbody>
    </table>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    list: state.itemReducer.list,
    keyword: state.itemReducer.keyword,
  }
}

export default connect(mapStateToProps,null) (ListStudent);
