import { legacy_createStore ,combineReducers} from 'redux';
import calendarReducer from './reducer/calendarReducer';
//import countReducer from './reducer/CountReducer';
//import textReducer from './reducer/TextReducer';

const rootReducer = combineReducers({
    calendarReducer
})


export const store = legacy_createStore(rootReducer)