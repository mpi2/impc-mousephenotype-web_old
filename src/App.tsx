import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.scss';
import { ScatterPlot } from './components/charts/ScatterPlot';

const series = [
  {
    seriesName: "Female WT",
    data: [
      { x: "2015-01-01", y: 100 },
      { x: "2017-01-02", y: 10 },
      { x: "2018-01-03", y: 200 }
    ]
  },
  {
    seriesName: "Male WT",
    data: [
      { x: "2020-01-05", y: 30 },
      { x: "2020-01-06", y: 40 },
      { x: "2020-08-10", y: 80 }
    ]
  },
  {
    seriesName: "Female HOM",
    data: [
      { x: "2020-03-01", y: 25 },
      { x: "2020-04-02", y: 100 },
      { x: "2021-05-03", y: 500 }
    ]
  },
  {
    seriesName: "Male HOM",
    data: [
      { x: "2020-01-01", y: 20 },
      { x: "2020-01-02", y: 50 },
      { x: "2020-01-03", y: 60 }
    ]
  }
];

const window = [
  { x: "2015-01-01", y: 0 },
  { x: "2017-01-02", y: 200 },
  { x: "2020-01-03", y: 300 },
  { x: "2021-01-03", y: 0 }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <ScatterPlot series={series} window={window} yAxisLabel="test" xAxisLabel="test"/>
      </div>
    </div>
  );
}

export default App;
