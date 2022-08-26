import { combineReducers , createStore} from "redux";
import SiterReducer  from './reducer/siteReducer';
import CountReducer from './redux/reduccer/CountReducer'
const rootReducer = combineReducers({site : SiterReducer ,CountReducer});
export default createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());