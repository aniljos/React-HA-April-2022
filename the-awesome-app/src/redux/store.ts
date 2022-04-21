import { createStore, combineReducers, Store, EmptyObject } from 'redux';
import { AuthAction, AuthData, authReducer } from './authReducer';
import { gadgetsReducer, GadgetStoreAction } from './gadgetsReducer';


// let store: Store<EmptyObject & {auth: AuthData; gadgets: never;}, AuthAction | GadgetStoreAction>;

// if(process.env.REACT_APP_IN_PROD === "false"){

//         store 
//                 = createStore(combineReducers({auth: authReducer, gadgets: gadgetsReducer}), 
//                     (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
// }
// else{
//         store 
//                 = createStore(combineReducers({auth: authReducer, gadgets: gadgetsReducer}));

// }

//export default store


export const store = createStore(combineReducers({ auth: authReducer, gadgets: gadgetsReducer }),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export type AppDisptach = typeof store.dispatch;
export type AppRootState = ReturnType<typeof store.getState>;