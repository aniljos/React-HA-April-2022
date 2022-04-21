import React from 'react';
import {useSelector} from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import {AppRootState} from '../redux/store';


function ProtectedRoute(props: any){

    const isAuthenticated = useSelector((state: AppRootState)=> {return state.auth.isAuthenticated});
    const location = useLocation();

    console.log("ProtectedRoute", location);

    if(isAuthenticated){

        return props.children;
        
    }
    else{

        //Redirect to Login
        return (
            <Navigate to="/login" state={location.pathname} />
        )
        

    }
   
}

export default ProtectedRoute;