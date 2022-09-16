import { legacy_createStore ,combineReducers} from 'redux';
//import countReducer from './reducer/CountReducer';
//import textReducer from './reducer/TextReducer';

const rootReducer = combineReducers({
    //countReducer,
    //textReducer
})


export const store = legacy_createStore(rootReducer)