import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import { userReducer } from './userReducer';
import  transactionRed  from './transactionRed';
import  histReducer  from './histReducer';
import  analysticReducer  from './analysticReducer';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    userReducer,
    transactionRed,
    analysticReducer,
    histReducer,
})

const store = createStore(rootReducers, applyMiddleware(thunk));

store.subscribe(()=> {
    console.log(store.getState());
})

export {store};