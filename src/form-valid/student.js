import React, { Component } from 'react';
import {connect} from "react-redux";
import { actDelete,actEdit } from '../store/actions';

class Student extends Component {

  render() {
    const {student,deleteSV,editSV} = this.props;
    return (
   
      <tr>
      <td>{student.maSV}</td>
      <td>{student.tenSV}</td>
      <td>{student.phoneSV}</td>
      <td>{student.emailSV}</td>
      <td>  
        <button className='btn btn-info'
        onClick={()=>{editSV(student)}}
        >Sửa</button>
        <button className='btn btn-danger' 
        onClick={()=>{deleteSV(student.id)}}
        >Xóa</button>
      </td>
    </tr>

    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    deleteSV:(id)=>dispatch(actDelete(id)),

    editSV :(student)=>dispatch(actEdit(student)),

  }
}



export default connect(null,mapDispatchToProps) (Student);