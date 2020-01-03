import React, { Component } from 'react';
import './Keypad.css';


class KeyPads extends Component {
 
    render(){
        return(
            <div className="keypad">
            <div className="keypad-row">
                <button className="btn keypad-secondary-btn" value="clear-all" onClick={this.props.onClearAll}>CE</button>
                <button className="btn keypad-secondary-btn" value="clear" onClick={this.props.onClear}>C</button>
                <button className="btn keypad-secondary-btn" value="backspace" onClick={this.props.onDelete}>CLR</button>
                <button className="btn keypad-secondary-btn" value="/" onClick={this.props.onDivide}>&divide;</button>
            </div>
            <div className="keypad-row">
                <button className="btn keypad-primary-btn" value="7" onClick={this.props.onDigit}>7</button>
                <button className="btn keypad-primary-btn" value="8" onClick={this.props.onDigit}>8</button>
                <button className="btn keypad-primary-btn" value="9" onClick={this.props.onDigit}>9</button>
                <button className="btn keypad-secondary-btn" value="*" onClick={this.props.onMultiply}>&times;</button>
            </div>
            <div className="keypad-row">
                <button className="btn keypad-primary-btn" value="4" onClick={this.props.onDigit}>4</button>
                <button className="btn keypad-primary-btn" value="5" onClick={this.props.onDigit}>5</button>
                <button className="btn keypad-primary-btn" value="6" onClick={this.props.onDigit}>6</button>
                <button className="btn keypad-secondary-btn" value="-" onClick={this.props.onSubtract}>&minus;</button>
            </div>
            <div className="keypad-row">
                <button className="btn keypad-primary-btn" value="1" onClick={this.props.onDigit}>1</button>
                <button className="btn keypad-primary-btn" value="2" onClick={this.props.onDigit}>2</button>
                <button className="btn keypad-primary-btn" value="3" onClick={this.props.onDigit}>3</button>
                <button className="btn keypad-secondary-btn" value="+" onClick={this.props.onAdd}>&#43;</button>
            </div>
            <div className="keypad-row">
                <button className="btn keypad-secondary-btn" value="+-" onClick={this.props.onToggleSign}>&plusmn;</button>
                <button className="btn keypad-primary-btn" value="0" onClick={this.props.onDigit}>0</button>
                <button className="btn keypad-secondary-btn" value="." onClick={this.props.onDecimalPoint}>.</button>
                <button className="btn keypad-secondary-btn" style={{color: '#4CAF50'}} value="=" onClick={this.props.onEquals}>=</button>
            </div>
        </div>
    );
};

// Keypad.defaultProps = {
//     onDigit: digit => alert(digit),
//     onClear: () => alert('clear'),
//     onClearAll: () => alert('clear-all'),
//     onDelete: () => alert('delete'),
//     onAdd: () => alert('add'),
//     onEquals: () => alert('equals'),
//     onDecimalPoint: () => alert('.'),
//     onSubtract: () => alert('subtract'),
//     onToggleSign: () => alert('+/-'),
//     onDivide: () => alert('/'),
//     onMultiply: () => alert('*')
// };

// Keypad.propTypes = {
//     onDigit: PropTypes.func,
//     onClear: PropTypes.func,
//     onClearAll: PropTypes.func,
//     onDelete: PropTypes.func,
//     onAdd: PropTypes.func,
//     onEquals: PropTypes.func,
//     onDecimalPoint: PropTypes.func,
//     onSubtract: PropTypes.func,
//     onDivide: PropTypes.func,
//     onMultiply: PropTypes.func,
//     onToggleSign: PropTypes.func
// };
//         )
//     }
}

export default KeyPads;