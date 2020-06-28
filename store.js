import {createStore} from 'redux';
const initialState ={
    // tech: "react",
};
import reducer from './reducer';
const store = createStore(reducer, initialState);
export default store;