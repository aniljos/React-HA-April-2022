import React, { useState, useCallback, useRef, useImperativeHandle } from 'react';

interface SimpleProps{
    count: number,
    onUpdate: (value: number) => void 
}

interface SimpleType{
    message: string;
    execute: () => void
}
// React.forwardRef => Use this to get a refrenec to a functional componet
// React.memo => React 16.3
// The component with be updated only if the state or props changes


const Simple =  React.memo(React.forwardRef((props: SimpleProps, ref)=>{

    useImperativeHandle(ref, () => {
        return {
            message: "This a reference the simple component",
            execute
        }
    });

    console.log("rendering simple component");

    function execute(){
        alert("in simple component execute");
    }

    return (
        <div>
            <h5>Simple Component</h5>
            <p>Count: {props.count}</p>
            <div>
                <button className='btn btn-warning' 
                    onClick={() => props.onUpdate(props.count + 2)}>Update Count</button>
            </div>
        </div>
    )
}));


function HooksDemo(){

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("Hello");
    const simpleRef = useRef<SimpleType>(null);

   // var x = 10;

    // callback for the child component == Not Optimized
    // function updateCount(value: number){
    //     setCount(value);
    // }

    const updateCount = useCallback((value: number) => {
        setCount(value);
    }, []);

    function invokeSimpleExecute(){
        console.log("simpleRef", simpleRef);
        simpleRef.current?.execute();
    }
    return (
        <div>
            <h3>Hooks Demo</h3>

            <p>Count: {count}</p>
            <div>
                <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Inc</button>
            </div>
            <br/>
            <div>
                <input className='form-control' placeholder='Message' 
                            value={message} onChange={e => setMessage(e.target.value)}/>
            </div><br/>
            <div className='alert alert-warning'>
                Message: {message}
            </div>
            <br/>
            <Simple ref={simpleRef} count={count} onUpdate={updateCount}/>
            <br/>

            <button className='btn btn-info' onClick={invokeSimpleExecute}>Invoke Execute of Simple Component</button>

        </div>
    );

}

export default HooksDemo;