import React, { useState } from 'react';
import CarsContext from './CarsContext';

function CarsProvider({ children }) {

  const [red, setRed] = useState(false);
  const [blue, setBlue] = useState(false);
  const [yellow, setYellow] = useState(false);

  const moveCar = (car, side) => {
  
    switch(car) {
      case 'red': return setRed(side);
      case 'blue': return setBlue(side);
      case 'yellow': return setYellow(side);
      default: return;
    }
  };
  
    const cars_context = {
      red,
      blue,
      yellow,
      moveCar,
    }

    return(
      <CarsContext.Provider value={ cars_context }>
        { children }
      </CarsContext.Provider>
    );
  }

export default CarsProvider;
