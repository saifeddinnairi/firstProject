import { combineReducers , createStore} from "redux";
import SiterReducer  from './reducer/siteReducer';
const rootReducer = combineReducers({site : SiterReducer});
export default createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());