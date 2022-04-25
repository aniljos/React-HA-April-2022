import React, { useState, useReducer } from 'react'

interface User{
    name: string;
    location: string
}

const user: User = {
    name: "Anil", location: "Mumbai"
}

const reducer = (state: User, action: any): User => {

    if(action.type === "SETNAME"){
        const user = {...state};
        user.name = action.name
        return user;
    }

    if(action.type === "SETLOC"){
        const user = {...state};
        user.location = action.location
        return user;
    }

    return state;
}


function UseReducerDemo(){

    // const [name, setName] = useState("Anil");
    // const [location, setLocation] = useState("Mumbai")

    const [state, dispatch] = useReducer(reducer, user);

    return (
        <div>
            <h3>UseReducer Demo</h3>

            <div>
                {/* <input className='form-control' 
                        placeholder='Name' value={name} onChange={e => setName(e.target.value)}/> */}
                <input className='form-control' 
                        placeholder='Name' value={state.name} 
                                onChange={e => dispatch({type: "SETNAME", name: e.target.value})}/>
            </div>
            <div>
                {/* <input className='form-control' 
                        placeholder='Location' value={location} onChange={e => setLocation(e.target.value)}/> */}
                <input className='form-control' 
                        placeholder='Location' value={state.location} 
                            onChange={e => dispatch({type:"SETLOC",location: e.target.value })}/>
            </div>
            <div className='alert'>
                <p>Name: {state.name}</p>
                <p>Location: {state.location}</p>
            </div>       
            
        </div>
    )

}

export default UseReducerDemo;