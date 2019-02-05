import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Chart from './component/reactchart';
import ChartGoogle from './component/google';
import Chartfusion from './component/fusion';
import fire from './config';
import data_tmp from './component/data';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      load : false,
      data : []
    }
  }
  // updateInput = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }
  componentWillMount(){
    console.log("compontWillMount")
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection('user').onSnapshot((snapshot) => {
      // console.log(snapshot)    
      var data_new = []
      snapshot.forEach(doc => {
        data_new.push([doc.data().date,doc.data().carbon])
      });
      this.setState({
        data: data_new,
        load : true
      })
      // console.log(this.state.data)
    }, (error) => {
      console.log('Error!', error);
    });
  }
  
  render() {
    console.log(this.state.data)
    return (
        <div>
          {this.state.load 
           ? ( <Chartfusion data={this.state.data}/> ) 
           : ('loading.....')
          }
        </div>
        /* React-chart-j2
        <Chart/>
        React-google-Chart
        <ChartGoogle/>*/
       
    );
  }
}

export default App;
