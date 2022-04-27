import React from 'react';
import {usePromiseTracker} from "react-promise-tracker";

function LoadingComponent(){

    const {promiseInProgress } = usePromiseTracker();

    if(promiseInProgress){
        return (
            <div className='alert alert-warning'>Loading, please wait...</div>
        )
    }
    else{
       return ( <div></div> );
    }
    

}

export default LoadingComponent;