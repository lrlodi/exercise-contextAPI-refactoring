// src/TrafficSignal.jsx

import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { changeSignal } from './redux/actionCreators';
// import redSignal from './images/redSignal.jpeg';
// import yellowSignal from './images/yellowSignal.jpeg';
// import greenSignal from './images/greenSignal.jpeg';
import TrafficContext from './context/TrafficContext';

// const renderSignal = (signalColor) => {
//   if (signalColor === 'red') return redSignal;
//   if (signalColor === 'yellow') return yellowSignal;
//   if (signalColor === 'green') return greenSignal;
//   return null;
// };

function TrafficSignal() {

  const { signalColor, renderSignal } = useContext(TrafficContext);

  return (
    <TrafficContext.Consumer>
      {
        () => (
          <div>
            <div className="button-container">
              <button onClick={() => renderSignal('redSignal')} type="button">
                Red
              </button>
              <button onClick={() => renderSignal('yellowSignal')} type="button">
                Yellow
              </button>
              <button onClick={() => renderSignal('greenSignal')} type="button">
                Green
              </button>
            </div>
            <img className="signal" src={ signalColor } alt="trafficLight" />
          </div>
        )
      }
    </TrafficContext.Consumer>
  );
};

// const mapStateToProps = (state) => ({
//   signalColor: state.trafficReducer.signal.color
// });

// const mapDispatchToProps = { changeSignal };

// TrafficSignal.propTypes = {
//   changeSignal: PropTypes.func.isRequired,
//   signalColor: PropTypes.string.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
export default TrafficSignal;
