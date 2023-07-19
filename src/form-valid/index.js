import React, { Component } from 'react';
import ListStudent from './listStudent';
import Form from './form';
import Search from './search';
import { connect } from 'react-redux';

class QLSV extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='alert alert-dark text-center'>Thông tin sinh viên</h3>
          <Form/>
        <div className='text-center alert alert-dark'>
          <h3>Danh sách sinh viên</h3>
        </div>
        <Search/>
        <div>
          <ListStudent/>
        </div>
      </div>

    )
  }
}
export default QLSV;
