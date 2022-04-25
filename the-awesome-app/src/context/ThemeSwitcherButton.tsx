import React, { useContext } from 'react';
import { AppThemeContext } from './AppThemeContext';


function ThemeSwitcherButton(){

    const theme = useContext(AppThemeContext);

    function switchTheme(){
        
        if(theme.state.mode === "dark"){
            theme.dispatch!({type: "SET_LIGHT"});
        }

        if(theme.state.mode === "light"){
            theme.dispatch!({type: "SET_DARK"});
        }
    }

    return (
        <button className='btn btn-warning' onClick={switchTheme}>Switch Theme</button>
    )
}


export default ThemeSwitcherButton;