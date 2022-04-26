import React from 'react';


//HOC => function that receives the component it is going wrap
// HOC => function returns a new component
export const withBorder = (Component: any) => {

    
    //return a component(class/ functional)
    return function WithBorderHOC(props: any){

        //console.log("Typeof Component",Component);
        return (
            <div style={{border: "2px solid red"}}>
                <Component {...props}/>
            </div>
        );

    }
}