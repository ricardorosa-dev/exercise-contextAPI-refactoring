// src/TrafficSignal.jsx

import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { changeSignal } from './redux/actionCreators';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import Context from './context';


class TrafficSignal extends React.Component {
  constructor() {
    super();
    
    this.renderSignal = this.renderSignal.bind(this);
  }
  
  renderSignal (color) {
    if (color === 'red') return redSignal;
    if (color === 'yellow') return yellowSignal;
    if (color === 'green') return greenSignal;
    return null;
  };
  
  render() {
    return (
      <Context.Consumer>
      {
        ({signal, changeSignal}) => (
          <div>
          <div className="button-container">
            <button onClick={() => changeSignal('red')} type="button">
              Red
            </button>
            <button onClick={() => changeSignal('yellow')} type="button">
              Yellow
            </button>
            <button onClick={() => changeSignal('green')} type="button">
              Green
            </button>
          </div>
          <img className="signal" src={this.renderSignal(signal.color)} alt="" />
        </div>
        )
      }
    </Context.Consumer>
    )
  }
}

// const mapStateToProps = (state) => ({
//   signalColor: state.trafficReducer.signal.color
// });

// const mapDispatchToProps = { changeSignal };

// TrafficSignal.propTypes = {
//   changeSignal: PropTypes.func.isRequired,
//   signalColor: PropTypes.string.isRequired,
// };

export default TrafficSignal;
