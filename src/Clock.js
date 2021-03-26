import React from 'react';

export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date : new Date()
        }
    }

    render(){
        return(
<p> il est {this.state.date.toLocaleTimeString()}</p>
        );
    
        }
    componentDidMount= ()=>{

        setInterval(()=> {
            this.setState({
                date : new Date()
            })
        }, 1000)    }

        componentWillUnmount =()=>{
            clearInterval(this.timer);
        }
}