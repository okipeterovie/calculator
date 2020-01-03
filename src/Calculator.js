import React, { Component } from 'react';
import KeyPads from './KeyPads';
import Display from './Display';
import History from './History';


let currentValue = '';
let register = [];
let history = [];
let result = '';


class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {expression: '', value: '', history: [], showHistory: false};

        this.handleOnDigit = this.handleOnDigit.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);
        this.handleOnClearAll = this.handleOnClearAll.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.handleOnSubtract = this.handleOnSubtract.bind(this);
        this.handleOnDivide = this.handleOnDivide.bind(this);
        this.handleOnMultiply = this.handleOnMultiply.bind(this);
        this.handleOnDecimalPoint = this.handleOnDecimalPoint.bind(this);
        this.handleOnEquals = this.handleOnEquals.bind(this);
        this.handleOnToggleSign = this.handleOnToggleSign.bind(this);
        this.handleOnHistorySelected = this.handleOnHistorySelected.bind(this);
        this.handleOnToggleHistory = this.handleOnToggleHistory.bind(this);
        this.handleOnClearHistory = this.handleOnClearHistory.bind(this);
    }

    inputDigit(evt) {
        if (isNaN(evt.target.value)) {
            throw Error('Only numeric input is allowed');
        }

        if (result !== '') {
            result = '';
            currentValue = '';            
        }

        currentValue += evt.target.value;
    }

    inputDecimal() {
        if (result !== '') {
            result = '';
            currentValue = '';         
        }

        if (currentValue.indexOf('.') >= 0) {
            return;
        }

        if (currentValue === '') {
            currentValue += '0.';
        } else {
            currentValue += '.';
        }
    }

    clear() {
        currentValue = '';
        register = [];
        result = '';
    }

    clearAll() {
        currentValue = '';
        register = [];
        result = '';
        history = [];
    }

    clearHistory() {
        history = [];
    }

    deleteInput() {
        if (currentValue === '') {
            return;
        }

        currentValue = currentValue.substring(0, currentValue.length - 1);
    }

    add() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('+');

        currentValue = '';
        
    }

    subtract() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('-');

        currentValue = '';

        console.log(register);
    }

    multiply() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('*');

        currentValue = '';
    }

    divide() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('/');
        
        currentValue = '';
    }

    equals() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);

        const expression = register.join(' ');

        result = parseInt(eval(expression));
        currentValue = result.toString();
        history.push(expression, '=', result, '.');
        // history.splice(0, 0, { expression, result });
        register = [];
    }

    loadHistory(index) {
        currentValue = history[index].result.toString();
        
    }

    toggleSign() {
        currentValue = (parseFloat(currentValue) * (-1)).toString();
    }

    getValue() {
        return currentValue;
    }

    getExpression() {
        return register.join(' ');
    }

    getHistory() {        
        // console.log(history);
        const newHistory = history.join(' ');
        
        return newHistory;

    }

    getResult() {
        return result;
    }
    
    
    handleOnAdd() {
        this.add()

        this.setState(() => ({
            expression: this.getExpression(),
            value: this.getValue().toString()
        }));

    }

    
    handleOnClear() {
        this.clear();

        this.setState(() => ({
            expression: this.getExpression(),
            value: this.getValue().toString()
        }));
    }

    
    handleOnClearAll() {
        this.clearAll();
        
        this.setState(() => ({
            expression: this.getExpression(),
            history: this.getHistory(),
            value: this.getValue().toString()
        }));
    }


    handleOnClearHistory() {
        this.clearHistory();

        this.setState(() => ({ 
            history: this.getHistory(),
            showHistory: false
        }));
    }

    
    handleOnDecimalPoint() {
        this.inputDecimal();

        this.setState(() => ({
            expression: this.getExpression(),
            value: this.getValue().toString()
        }));
    }

    
    handleOnDelete() {
        this.deleteInput();

        this.setState(() => ({
            value: this.getValue().toString()
        }));
    }

    
    handleOnDigit(number) {
        this.inputDigit(number);

        this.setState(() => ({
            value: this.getValue()
        }));
    }

    
    handleOnDivide() {
        this.divide();
        
        this.setState(() => ({
            expression: this.getExpression(),
            value: this.getValue().toString()
        }));
    }

    
    handleOnEquals() {
        this.equals();

        this.setState(() => ({
            expression: this.getExpression(),
            value: this.getResult().toString(),
            history: this.getHistory().toString()
        }));
    }

    
    handleOnHistorySelected(index) {
        this.loadHistory(index);
        
        this.setState(prevState => ({
            expression: prevState.history[index].expression,
            value: this.getValue().toString()
        }));
    }

    
    handleOnMultiply() {
        this.multiply();
        
        this.setState(() => ({
            expression: this.getExpression(),
            value: this.getValue().toString()
        }));
   
    }

    
    handleOnSubtract() {
        this.subtract();
        
        this.setState(() => ({
            expression: this.getExpression(),
            value: this.getValue().toString()
        }));
    }


    handleOnToggleHistory() {
        this.setState(prevState => ({ showHistory: !prevState.showHistory }));
    }

    
    handleOnToggleSign() {
        this.toggleSign();

        this.setState(() => ({
            value: this.getValue().toString()
        }));
    }
    render (){
        return(
            <div>

                <Display value={this.state.value} expression={this.state.expression} />

                <History anyHistory={this.state.history.length > 0} 
                        onToggleHistory={this.handleOnToggleHistory}
                        />
                
                {
                        !this.state.showHistory && <KeyPads 
                            onDigit={this.handleOnDigit}
                            onAdd={this.handleOnAdd}
                            onSubtract={this.handleOnSubtract}
                            onDivide={this.handleOnDivide}
                            onMultiply={this.handleOnMultiply}
                            onDecimalPoint={this.handleOnDecimalPoint}
                            onEquals={this.handleOnEquals}
                            onClear={this.handleOnClear}
                            onClearAll={this.handleOnClearAll}
                            onDelete={this.handleOnDelete}
                            onToggleSign={this.handleOnToggleSign} />
                    }

                    {
                        this.state.showHistory && <History 
                            history={this.state.history}
                             />
                    }
            </div>
        )
    }
}

export default Calculator;