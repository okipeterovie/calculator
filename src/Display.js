import React, { Component } from 'react';
import "./Display.css";

class Display extends Component{
    render(){
        return (
            <div className="display">
                <div className="value">
                    {this.props.value}
                </div>
                <div className="expression">
                {this.props.expression}
            </div>
            </div>
        )
    }
}

export default Display;