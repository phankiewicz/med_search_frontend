import { combineReducers } from 'redux';
import { search } from './SearchReducer';

const rootReducer = combineReducers({
    search: search
})

export default rootReducer;