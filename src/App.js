import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import Context from './context';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { 
        color: 'red' 
      },
    }
    
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }
  
  moveCar(color, side) {
    this.setState({
      ...this.state, cars: {...this.state.cars, [color]: side},
    })
  }
  
  changeSignal(myColor) {
    this.setState({
      ...this.state, signal: {color: myColor},
    })
  }

  render() {
    const MyContext = {
      cars: this.state.cars,
      moveCar: this.moveCar,
      signal: this.state.signal,
      changeSignal: this.changeSignal,
    }
    return (
      <Context.Provider value={MyContext}>
        <div className="container">
          <Cars />
          <TrafficSignal />
        </div>
        </Context.Provider>
    )
  }

}

export default App;
