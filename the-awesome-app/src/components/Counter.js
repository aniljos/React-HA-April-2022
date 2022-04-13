import {Component} from 'react';

class Counter extends Component{

    render(){

        //return the JSX
        return (
            <div>
                <h4>Count: {this.props.initCount}</h4>
                <p>Count for testing</p>
            </div>
        )
    }

}

export default Counter;