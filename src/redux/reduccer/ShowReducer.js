import {SHOW} from '../Actions/Type'

const show = true 

const ShowReducer = (state = show , action) => {
    switch (action.type) {
        case SHOW :
            return !state
            
    
        default:
            return state
    }
    
}

export default ShowReducer