import React from 'react';
import './App.css';
import Cars from './Cars';
import CarsProvider from './context/CarsProvider';
import TrafficProvider from './context/TrafficProvider';
import TrafficSignal from './TrafficSignal';

function App() {
  return (
    <>
    <CarsProvider>
      <Cars />
    </CarsProvider>
    <TrafficProvider>
      <TrafficSignal />
    </TrafficProvider>
    </>
    );
  }

export default App;
