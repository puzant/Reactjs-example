import React, { Component } from 'react';
import Counter from '../components/counter'

class Counters extends Component {
  render() { 
    const {onReset, onDecrement, onIncrement, onDelete, onSave, onClear, onGenerateRandomValues, onGenerateSingleValue, counters} = this.props
    return ( 
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset All</button>
        <button onClick={onSave} className="btn btn-info btn-sm m-2">Save Counters</button>
        <button onClick={onClear} className="btn btn-danger btn-sm m-2">Clear Storage</button>
        <button onClick={onGenerateRandomValues} className="btn btn-success btn-sm m-2">Generate Values</button>
        { counters.map(counter => (
          <Counter 
            onDelete={onDelete} 
            onIncrement={onIncrement} 
            onDecrement={onDecrement} 
            key={counter.id} 
            counter={counter}
            onGenerateSingleValue={onGenerateSingleValue}
          >
              <h4>Counter #{counter.id}</h4>
          </Counter>
        )) }
      </div>
     );
  }
}
 
export default Counters;