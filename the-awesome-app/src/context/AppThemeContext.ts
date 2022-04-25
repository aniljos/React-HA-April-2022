import React from 'react';

//Design the data structure of the context
// state or data
// behaviors or methods(modify of select a theme)

export interface AppThemeState{
    mode: string; // light or dark
}
export interface AppThemeAction{

    type: string
}
export interface AppTheme{

    //state
    state: AppThemeState
    //behaviors(to be added)
    dispatch?: React.Dispatch<AppThemeAction>
}


const defaultTheme: AppTheme = {
    state : {
        mode: "dark"
    },
    
}
// React.createContext(defaultValue)
export const AppThemeContext = React.createContext(defaultTheme);