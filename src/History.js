import React, { Component } from 'react';
import './History.css'

class History extends Component {
    
    render(){
        return(
            <div>
                <button disabled={!this.props.anyHistory} onClick={this.props.onToggleHistory}>
                    <i className="fa fa-history fa-2x">history</i>  
                </button>
                <div className="historyVal">
                    {this.props.history}
                </div>
            </div>
        )
    }
}

export default History;