import data from "../data.json";
const initialState ={
    listItem : data,
}

const itemReducer =(state = initialState, action)=>{
    console.log( state,action);
    switch (action.type) {
        case "DELETE USER":{
          //xoa user
          let listUserClone =[...state.listUser];
          //tim vi tri
          const index = listUserClone.findIndex((user)=>user.id===action.payload);
          if(index !== -1){
            listUserClone.splice(index,1);
  
            //cap nhat lai state
            state.listUser = listUserClone;
          }
          return {...state};
        }
  
        case "GET_KEYWORD":{
          state.keywords = action.payload;
  
          return {...state};
        }
  
        case "SUBMIT_USER":{
          const user = action.payload
          let listUserClone = [...state.listUser];
          if(user.id){
            //update
            const index = listUserClone.findIndex((newUser)=>newUser.id ===user.id)
            if(index !== -1){
              listUserClone[index] = user;
            }
          }else{
            //add
            const userClone = {...user,id :new Date().getTime()}
            listUserClone.push(userClone)
          }
  
          //cap nhat lai state
          state.listUser = listUserClone; 
          
          return {...state};
        }
  
        case "EDIT_USER":{
          state.userEdit = action.payload;
  
          return {...state}
        }
      
        default:
          return {...state};
      }
}

export default itemReducer;