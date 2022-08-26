import Items from'.././data/items.json';
const initinalState={
    item:Items ,
};
const SiterReducer =(state=initinalState,action)=>{
    switch(action.type){
        default:
            return state;
    }

}
export default SiterReducer ;