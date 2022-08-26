import {INCRIMENT,DECRIMENT,REMOVE} from '../Actions/Type'
const count=0 
const CountReducer=(state=count , action)=>{
    switch(action.type){
        case INCRIMENT:
            return state+1
        case DECRIMENT:
            return state-1
        case REMOVE :
            return state=0
        default: return state
}}
export default CountReducer
