import React, { Component } from 'react';
import Navbar from './components/navbar'
import Counters from './components/counters'
import './App.css';

class App extends Component {

  state = { 
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    addedToLocalStorage: false,
    removedFromLocalStorage: false
   }

   constructor(props) {
     super(props)
   }

   handleIncrement = counter => {
     const counters = [...this.state.counters]
     const index = counters.indexOf(counter)
     counters[index] = {...counter}
     counters[index].value++
     this.setState({counters})
   }

   handleDecrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    if(counters[index].value > 0) counters[index].value--
    this.setState({counters})
   }

   handleGeneratingSingleValue = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value = Math.floor(Math.random()*10)
    this.setState({counters})
  }

   handleReset = () => {
     const counters = this.state.counters.map(c => {
       c.value = 0;
       return c
     })
     this.setState({counters})
   }

   handleDelete = countedId => {
     const counters = this.state.counters.filter(c => c.id !== countedId)
     this.setState({counters})
   }

   handleSave = () => {
     localStorage.setItem('counters-value', JSON.stringify(this.state.counters))
     this.setState({ addedToLocalStorage: true })
   }

   handleClearStorage = () => {
     if(localStorage.getItem('counters-value')) {
      localStorage.removeItem('counters-value')
      this.state.removedFromLocalStorage = true
      this.setState({ counters: this.state.counters })
     }
   }

   isValuesSaved() {
    const counters = localStorage.getItem('counters-value')
    let parsedCounters
    if(counters) {
       parsedCounters = JSON.parse(counters)
      this.setState({ counters: parsedCounters })
    }
   }

   handleGeneratingRandomValues = () => {
     let counters = [...this.state.counters]
     counters = this.state.counters.map(c => {
       c.value = Math.floor(Math.random()*10);
       return c
     })
     this.setState({counters})
   }

   componentDidMount() {
     this.isValuesSaved()
   }

  render() {
    const { addedToLocalStorage, removedFromLocalStorage } = this.state
    return (
      <div className="app-container">
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        { addedToLocalStorage && <div className="alert alert-success">Added to localStorage</div> }
        { removedFromLocalStorage && <div className="alert alert-danger">Removed from localStorage</div> }
        <main className="main-container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={(counter) => this.handleIncrement(counter)}
            onDecrement={(counter) => this.handleDecrement(counter)}
            onDelete={(counter) => this.handleDelete(counter)}
            onSave={this.handleSave}
            onClear={this.handleClearStorage}
            onGenerateRandomValues={this.handleGeneratingRandomValues}
            onGenerateSingleValue={this.handleGeneratingSingleValue}
          />
        </main>
      </div>
    );
  }
}

export default App;
