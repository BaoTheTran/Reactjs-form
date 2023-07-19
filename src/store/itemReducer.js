import { SUBMIT } from "./constants";
import { DELETE } from "./constants";
import { EDIT } from "./constants";
import { SEARCH } from "./constants";

const initialState ={
    list : [
      {
        id : 1,
        maSV : 2710,
        tenSV : "Trần Thế Bảo",
        phoneSV : "123456789",
        emailSV : "tablet@example.com",
      },
      {
        id : 2,
        maSV : 1234,
        tenSV : "Cybersoft",
        phoneSV : "123456789",
        emailSV : "tablet@example.com",
      }
    ],
    studentEdit : null,
    keyword: "",
    
}

const itemReducer =(state = initialState, action)=>{
    console.log( state,action);
    switch (action.type) {
        case SUBMIT:{
          const student = action.payload.info;
          let listClone =[...state.list];
          if(student.id){
            //update
            const index = listClone.findIndex((newStudent)=>newStudent.id  === student.id);
            if(index !== -1){
              listClone[index] = student;
            }
          }else{
            //add
            const studentClone ={...student, id : new Date().getTime()};
            listClone.push(studentClone);
            console.log("123");
          }
          state.list = listClone;
          return{...state};
        }

        case DELETE:{
          let listClone = [...state.list];
          const index = listClone.findIndex((student)=>student.id === action.payload);
          if(index!== -1){
            listClone.splice(index, 1);
            state.list =listClone;
          }
          return {...state};
        }

        case EDIT:{
          state.studentEdit = action.payload;
          return {...state};
        }

        case SEARCH:{
          state.keyword =action.payload;
          return {...state};
        }

        default:
          return {...state};
      }
}

export default itemReducer;