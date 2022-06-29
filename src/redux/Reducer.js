
import { INCREMENT,DECREMENT } from "./Actions"

const initialState ={
    IncrementData:5,
    DecrementData:0
}


const reducer=(state = initialState,action)=>{
   switch(action.type){
    case INCREMENT:
        return {
            ...state,IncrementData:action.payload.IncrementData+1
        }
    case DECREMENT:
        return {
            ...state, DecrementData:action.payload.DecrementData-1
        } 
    default:
        return state;       
   }
}

export default reducer;