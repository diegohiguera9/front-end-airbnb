import { legacy_createStore ,combineReducers} from 'redux';
import calendarReducer from './reducer/calendarReducer';
import peopleReducer from './reducer/peopleReducer'
import headerReducer from './reducer/headerReducer'

const rootReducer = combineReducers({
    calendarReducer,peopleReducer,headerReducer
})


export const store = legacy_createStore(rootReducer)