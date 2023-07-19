import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actSubmit ,actClear} from '../store/actions';

 class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            info:{
                id : "",
                maSV: "",
                tenSV: "",
                phoneSV: "",
                emailSV: "",
            },

            error:{
                id : "",
                maSV: "",
                tenSV: "",
                phoneSV: "",
                emailSV: "",
            },

            maSVValid : false,
            tenSVValid: false,
            phoneSVValid: false,
            emailSVValid : false,
            formValid :false,
            
        }
    }

    handleOnChange = (event)=>{
        const {name, value} = event.target;
        // console.log(name,value);
        this.setState({
            info: {...this.state.info,[name]: value } ,
        },
        // ()=>{
        //     console.log(this.state);
        // }
        )
    }

    handleAdd =(event)=>{
        event.preventDefault();
        this.props.addStudent(this.state);
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.studentEdit){
            this.setState({
                info:{
                    id: nextProps.studentEdit.id,
                    maSV: nextProps.studentEdit.maSV,
                    tenSV: nextProps.studentEdit.tenSV,
                    phoneSV: nextProps.studentEdit.phoneSV,
                    emailSV: nextProps.studentEdit.emailSV,
                },               
            })
        }
    }

    handleValidation=(event)=>{
        const {name,value} = event.target;
        let mess = value.trim() ? "" : `${name} không được để trống.`;
        console.log(mess);
        let{maSVValid,emailSVValid,tenSVValid,phoneSVValid} = this.state;
        switch (name) {
            case "maSV":
                maSVValid = mess ===""? true : false;
                if(value && value.trim().length <4){
                    mess ="Vui lòng nhập trên 4 ký tự.";
                    maSVValid =  false;
                }
                break;
                case "tenSV":
                    tenSVValid = mess ===""? true : false;
                    if(value && value.trim().length <4){
                        mess ="Vui lòng nhập trên 4 ký tự.";
                        tenSVValid =  false;
                    }
                    break;
                    case "phoneSV":
                        phoneSVValid = mess ===""? true : false;
                        if(value && value.trim().length <9){
                            mess ="Vui lòng nhập trên 9 số.";
                            phoneSVValid =  false;
                        }
                        break;
                case "emailSV":
                    emailSVValid = mess ===""? true : false;
                    if(value && !value.match("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")){
                        mess ="Vui lòng nhập đúng định dạng email.";
                        emailSVValid =  false;
                    }
                    break;
                

            default:
                break;
        }

        this.setState({
            error:{...this.state.error, [name]: mess},
            maSVValid,
            tenSVValid,
            phoneSVValid,
            emailSVValid,
            formValid : maSVValid && tenSVValid&& phoneSVValid && emailSVValid,
        })

    }

  render() {
    const {info,error} = this.state;
    return (
        <div className='form-group '>
        <form className='row alert alert-info' 
        onSubmit={this.handleAdd}
        >
          <div className='form-group col-6 text-info'>
            <label>Mã sinh viên</label>
            <input type="text" className='form-control'
            name = "maSV"
            value={info.maSV}
            onChange={this.handleOnChange}
            onBlur={this.handleValidation}
            />
            {error.maSV && (<div className='text-danger'>{error.maSV}</div>)}
          </div>
          <div className='form-group col-6 text-info'>
            <label>Họ tên</label>
            <input type="text" className='form-control' 
            name = "tenSV"
            value={info.tenSV}
            onChange={this.handleOnChange}
            onBlur={this.handleValidation}
            />
            {error.tenSV && (<div className='text-danger'>{error.tenSV}</div>)}
          </div>
          <div className='form-group col-6 text-info'>
            <label>Số điện thoại</label>
            <input type="text" className='form-control'
            name = "phoneSV"
            value={info.phoneSV}
            onChange={this.handleOnChange}
            onBlur={this.handleValidation}
            />
            {error.phoneSV && (<div className='text-danger'>{error.phoneSV}</div>)}
          </div>
          <div className='form-group col-6 text-info'>
            <label>Email</label>
            <input type="text" className='form-control'
            name = "emailSV"
            value={info.emailSV}
            onChange={this.handleOnChange}
            onBlur={this.handleValidation}
            />
            {error.emailSV && (<div className='text-danger'>{error.emailSV}</div>)}
          </div>
          {this.props.studentEdit? (<button className='btn btn-info'        
          >Sửa sinh viên</button>) : (<button className='btn btn-success'        
          disabled = {!this.state.formValid}
          >Thêm sinh viên</button>)}
        </form>
      </div>
    )
  }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        addStudent :(student)=>dispatch(actSubmit(student)),
        clearForm: ()=>dispatch(actClear())
    }
  }

const mapStateToProps = (state) => {
    return{
        studentEdit : state.itemReducer.studentEdit,
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Form);
