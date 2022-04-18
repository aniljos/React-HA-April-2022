import React, {Component} from 'react';


// var counter = new Counter();
// counter.inc();

class Counter extends Component{

    //assume its immutable
    state = {
        count: 0
    }

    inputRef = React.createRef();

    constructor(props){
        super(props);
        console.log("Counter props", this.props);

        this.state.count = this.props.initCount;
    }

    // Event handlers ===> Arrow function
    inc= () => {
        console.log("in inc...", this);
        ///this.state.count++;

        const updatedCount = this.state.count + 1;
        //this.setState is async
        //this.setState(slice of the updated state, callback(state updated))
        this.setState({
            count: updatedCount
        }, () => {
            console.log("count", this.state.count);
        });
        
    }
    decr = () => {

        const updatedCount = this.state.count - 1;
        //this.setState is async
        //this.setState(slice of the updated state, callback(state updated))
        this.setState({
            count: updatedCount
        }, () => {
            console.log("count", this.state.count);
        });
    }

    handleChange = (evt) => {

        console.log(evt);
        const value = evt.target.value;
        this.setState({
            count: value ? parseInt(value) : 0
        });
    }

    handleUpdate = () => {
        console.log(this.inputRef);

        const value = this.inputRef.current.value;
        if(value){
            this.setState({
                count: parseInt(value)
            })
        }
        
    }

    render(){

        //return the JSX
        return (
            <div>
                <h4>Count: {this.state.count}</h4>
                <p>Count for testing</p>
                <div>
                    <button onClick={this.inc}>Inc</button>&nbsp;
                    <button onClick={this.decr}>Decr</button>
                </div>
                <div>
                    {/* Controlled input */}
                    Count: <input type="number" 
                                placeholder='Enter the Count' 
                                value={this.state.count} onChange={this.handleChange}/>
                </div>

                <div>
                    {/* Uncontrolled input */}
                    <input ref={this.inputRef} type="number" placeholder='Value to Update'/>&nbsp;
                    <button onClick={this.handleUpdate}>Update</button>
                </div>
            </div>
        )
    }

}

export default Counter;