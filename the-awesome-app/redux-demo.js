//import {createStore} from 'redux';

const redux = require('redux');
const createStore = redux.createStore;

//init data

const initData = {
    count: 5,
    message: "Hello Redux"
}

//reducer
const reducer = (currentState=initData, action) => {

    //return the updated state
    if(action.type === "INC_CTR"){
        return {
            ...currentState,
            count : currentState.count + 1
        }
    }
    if(action.type === "DECR_CTR"){
        return {
            ...currentState,
            count : currentState.count - 1
        }
    }
    if(action.type === "UPD_CTR"){
        return {
            ...currentState,
            count : parseInt(action.value)
        }
    }

    return currentState;
}

//create store
const store = createStore(reducer);
console.log("State: ", store.getState());

//subscribe
store.subscribe(() => {
    console.log("subscribe: ", store.getState());
})

//dispatch an action

store.dispatch({type: "INC_CTR"});
///console.log("State: ", store.getState());

store.dispatch({type: "DECR_CTR"});
//console.log("State: ", store.getState());

store.dispatch({type: "UPD_CTR", value: 10});
//console.log("State: ", store.getState());