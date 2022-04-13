function Hello(props){


    console.log("Hello props", props);
    //props.title = ""; //read-only, cannot change it

    //return the JSX(UI)
    return (
        <div>
            <h4>Title: {props.title}</h4>
            <p>Message: {props.message}</p>
            <p>{"Render at: " +  new Date().toString()}</p>
        </div>
    )
}

export default Hello;