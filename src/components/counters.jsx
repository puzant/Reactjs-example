import React, { Component } from 'react';
import Counter from '../components/counter'

class Counters extends Component {
  render() { 
    const {onReset, onDecrement, onIncrement, onDelete, counters} = this.props
    return ( 
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset All</button>
        { counters.map(counter => (
          <Counter onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement} key={counter.id} counter={counter}>
            <h4>Counter #{counter.id}</h4>
          </Counter>
        )) }
      </div>
     );
  }
}
 
export default Counters;