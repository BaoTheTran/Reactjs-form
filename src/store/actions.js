import { SUBMIT } from "./constants";
import { DELETE } from "./constants";
import { EDIT } from "./constants";
import { SEARCH } from "./constants";

const actSubmit =(student)=>{
    return{
        type: SUBMIT,
        payload: student,
    }
};

const actDelete =(id)=>{
    return{
        type: DELETE,
        payload : id,
    }
};

const actEdit =(student)=>{
    return{
        type: EDIT,
        payload: student,
    }
};

const actSearch =(keyword)=>{
    return{
        type: SEARCH,
        payload: keyword,
    }
};

const actClear=()=>{
    return{
        type: EDIT,
        payload: null,
    }
}

export {actSubmit,actDelete,actEdit,actSearch,actClear};