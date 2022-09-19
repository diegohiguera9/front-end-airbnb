import { legacy_createStore ,combineReducers} from 'redux';
import calendarReducer from './reducer/calendarReducer';
import peopleReducer from './reducer/peopleReducer'
//import countReducer from './reducer/CountReducer';
//import textReducer from './reducer/TextReducer';

const rootReducer = combineReducers({
    calendarReducer,peopleReducer
})


export const store = legacy_createStore(rootReducer)