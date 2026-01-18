import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumberClick = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
      setWaitingForNewValue(false);
    }
  };

  const handleOperation = (op) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = performCalculation(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  const performCalculation = (prev, current, op) => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '*':
        return prev * current;
      case '/':
        return prev / current;
      case '%':
        return prev % current;
      default:
        return current;
    }
  };

  const handleEquals = async () => {
    const currentValue = parseFloat(display);

    if (operation && previousValue !== null) {
      const result = performCalculation(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handleBackspace = () => {
    if (display.length === 1) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <div className="button-row">
            <button className="button btn-clear" onClick={handleClear}>C</button>
            <button className="button btn-delete" onClick={handleBackspace}>←</button>
            <button className="button btn-operator" onClick={() => handleOperation('%')}>%</button>
            <button className="button btn-operator" onClick={() => handleOperation('/')}>÷</button>
          </div>
          <div className="button-row">
            <button className="button" onClick={() => handleNumberClick(7)}>7</button>
            <button className="button" onClick={() => handleNumberClick(8)}>8</button>
            <button className="button" onClick={() => handleNumberClick(9)}>9</button>
            <button className="button btn-operator" onClick={() => handleOperation('*')}>×</button>
          </div>
          <div className="button-row">
            <button className="button" onClick={() => handleNumberClick(4)}>4</button>
            <button className="button" onClick={() => handleNumberClick(5)}>5</button>
            <button className="button" onClick={() => handleNumberClick(6)}>6</button>
            <button className="button btn-operator" onClick={() => handleOperation('-')}>−</button>
          </div>
          <div className="button-row">
            <button className="button" onClick={() => handleNumberClick(1)}>1</button>
            <button className="button" onClick={() => handleNumberClick(2)}>2</button>
            <button className="button" onClick={() => handleNumberClick(3)}>3</button>
            <button className="button btn-operator" onClick={() => handleOperation('+')}>+</button>
          </div>
          <div className="button-row">
            <button className="button btn-zero" onClick={() => handleNumberClick(0)}>0</button>
            <button className="button" onClick={handleDecimal}>.</button>
            <button className="button btn-equals" onClick={handleEquals}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
