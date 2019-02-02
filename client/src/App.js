import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Chart from './component/reactchart';
import ChartGoogle from './component/google';
import Chartfusion from './component/fusion';

class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> */}
        React-chart-j2
        <Chart/>
        React-google-Chart
        <ChartGoogle/>
        Fusion Chart
        <Chartfusion/>
      </div>
    );
  }
}

export default App;
