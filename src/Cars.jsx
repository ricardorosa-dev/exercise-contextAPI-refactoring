// src/Cars.jsx

// import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
// import { moveCar } from './redux/actionCreators';
import Context from './context';
// import { render } from '@testing-library/react';

class Cars extends React.Component {
  render() {
    return (
      <Context.Consumer>
      {
        ({cars, moveCar}) => (
          <div>
      <div>
        <img
          className={cars.red ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => moveCar('red', !cars.red)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={cars.blue ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => moveCar('blue', !cars.blue)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={cars.yellow ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => moveCar('yellow', !cars.yellow)}
          type="button"
        >
          Move
        </button>
      </div>
    </div>
        )
      }
    </Context.Consumer>
    )
  }
}

// Cars.propTypes = {
//   moveCar: PropTypes.func.isRequired,
//   blueCar: PropTypes.bool.isRequired,
//   redCar: PropTypes.bool.isRequired,
//   yellowCar: PropTypes.bool.isRequired,
// };

// const mapStateToProps = (state) => ({
//   redCar: state.carReducer.cars.red,
//   blueCar: state.carReducer.cars.blue,
//   yellowCar: state.carReducer.cars.yellow});

// const mapDispatchToProps = { moveCar };

export default Cars;
