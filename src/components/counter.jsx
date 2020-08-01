import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

  render() {
    const { counterId } = this.props.counter.id
    return (
      <div className="counter-container">
        <h3>Counter #{counterId}</h3>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary btn-sm m-2">Increment</button>
        <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm">Decrement</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        <button onClick={() => this.props.onGenerateSingleValue(this.props.counter)} className="btn btn-success btn-sm m-2">Update</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0  ? "warning" : "primary ";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value
  }

}

Counter.propTypes = {
 onDelete: PropTypes.func,
 onIncrement: PropTypes.func,
 onDecrement: PropTypes.func,
 counter: PropTypes.object,
 onGenerateSingleValue: PropTypes.func
}
 
export default Counter;