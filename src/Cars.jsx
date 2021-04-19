// src/Cars.jsx
import React, { useContext } from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import CarsContext from './context/CarsContext';

function Cars() {
  const { red, blue, yellow, moveCar } = useContext(CarsContext);
    return (
      <CarsContext.Consumer>
        {
          () => (
            
          <div>
            <div>
              <img
                className={red ? 'car-right' : 'car-left'}
                src={carRed}
                alt="red car"
              />
              <button
                onClick={() => moveCar('red', !red)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={blue ? 'car-right' : 'car-left'}
                src={carBlue}
                alt="blue car"
              />
              <button
                onClick={() => moveCar('blue', !blue)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={yellow ? 'car-right' : 'car-left'}
                src={carYellow}
                alt="yellow car"
              />
              <button
                onClick={() => moveCar('yellow', !yellow)}
                type="button"
              >
                Move
              </button>
            </div>
          </div>
          )
        }
  </CarsContext.Consumer>
    )}


export default Cars;