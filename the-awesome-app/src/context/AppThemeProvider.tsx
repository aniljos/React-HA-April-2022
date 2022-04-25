import React, { useReducer } from 'react';
import { AppThemeAction, AppThemeContext, AppThemeState } from './AppThemeContext';



const reducer = (state: AppThemeState, action : AppThemeAction): AppThemeState => {

    if(action.type === "SET_DARK"){
        return {
            mode: "dark"
        }
    }
    if(action.type === "SET_LIGHT"){
        return {
            mode: "light"
        }
    }

    return state;
}
const initData: AppThemeState = {
    mode: "dark"
}


function AppThemeProvider(props: any){


    const [state, dispatch] =  useReducer(reducer, initData)


    return (
        <AppThemeContext.Provider value={{state, dispatch}}>
                {props.children}
        </AppThemeContext.Provider>
    )

}

export default AppThemeProvider;