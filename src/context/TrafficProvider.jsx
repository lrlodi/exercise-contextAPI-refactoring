import React, { useState } from 'react';
import TrafficContext from './TrafficContext'

function TrafficProvider({ children }) {

  const [signalColor, setSignalColor] = useState('redSignal');

  const renderSignal = (color) => {
    setSignalColor(color);
  }

  const trafficContextObj = {
    signalColor,
    renderSignal,
  }

  return (
    <TrafficContext.Provider value={ trafficContextObj }>
      { children }
    </TrafficContext.Provider>
  );
}

export default TrafficProvider;