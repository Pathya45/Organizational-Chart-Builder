import React from 'react';
import { ChartProvider } from './context/ChartContext';
import Chart from './components/Chart';
import './styles/App.css';

const App = () => {
  return (
    <ChartProvider>
      <div className="App">
        <Chart />
      </div>
    </ChartProvider>
  );
};

export default App;
