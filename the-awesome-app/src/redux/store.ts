import { logMiddleware } from './logMiddleware';
import { createStore, combineReducers, Store, EmptyObject, applyMiddleware, compose } from 'redux';
import { AuthAction, AuthData, authReducer } from './authReducer';
import { gadgetsReducer, GadgetStoreAction } from './gadgetsReducer';
import thunk from 'redux-thunk';


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


// export const store = createStore(combineReducers({ auth: authReducer, gadgets: gadgetsReducer }),
//         (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

// export const store = createStore(
//         combineReducers({ auth: authReducer, gadgets: gadgetsReducer }),applyMiddleware(logMiddleware));

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
        combineReducers({ auth: authReducer, gadgets: gadgetsReducer }), 
        composeEnhancers( applyMiddleware(logMiddleware, thunk)));


export type AppDisptach = typeof store.dispatch;
export type AppRootState = ReturnType<typeof store.getState>;