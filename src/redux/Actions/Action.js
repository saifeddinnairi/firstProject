import { INCRIMENT , DECRIMENT , REMOVE , SHOW}from './Type'
export const incriment =()=>{

return{
    type: INCRIMENT
}
}
export const decriment  =()=>{
    return{
    type: DECRIMENT
    }

}
export const showCount =()=>{
    return{
    type: SHOW
    }

}
export const remove  =()=>{
    return{
    type: REMOVE
    }

}