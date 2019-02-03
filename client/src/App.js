import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Chart from './component/reactchart';
import ChartGoogle from './component/google';
import Chartfusion from './component/fusion';
// import firebase from 'firebase';
import fire from './config';
// import { database } from 'firebase';

class App extends Component {
  constructor(){
    super();
    // this.app = firebase.initializeApp(db_config);
    // this.database = firebase.database().ref('user');
    this.state = {
      user : 10
    }
  }
  // updateInput = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }
  componentDidMount(){
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    db.collection('user').onSnapshot((snapshot) => {
      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        // console.log(doc.data().name + doc.data().age);
        console.log(doc.data().carbon);
        this.setState({
          user:doc.data().carbon
        })
      });
    }, (error) => {
      console.log('Error!', error);
    });

  }
  
  render() {
    return (
        <div>
          <h1>the value is {this.state.user} </h1>
          {/* <button onClick={this.getData}>
           Get Data
          </button> */}
        </div>
        /* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> */
        /* React-chart-j2
        <Chart/>
        React-google-Chart
        <ChartGoogle/>
        Fusion Chart
        <Chartfusion/> */
    );
  }
}

export default App;
