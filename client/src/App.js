import React, { Component } from 'react';
import Button,{Card,Col,Row,ProgressBar} from 'react-bootstrap';
import './App.css';
import fire from './config';
import Chart from './component/reactchart';
import ChartGoogle from './component/google';
import Chartfusion from './component/fusion';
import Donut from './component/donutChart'
import Bar from './component/barChart'
import RealtimeChart from './component/realtimeChart'
import EnergyChart from './component/EnergyChart'
import data_tmp from './component/data';

class App extends Component {
  constructor(props){
    super(props);
    var date = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.state = {
      data : [],
      sumcarbon : 0,
      load : false,
      date:date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear()
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
      var data_new = [],sumcarbon_new=0
      snapshot.forEach(doc => {
        data_new.push([doc.data().date,doc.data().carbon])
        sumcarbon_new+=doc.data().carbon
      });
      this.setState({
        data: data_new,
        sumcarbon: sumcarbon_new,
        load : true
      })
      // console.log(this.state.data)
    }, (error) => {
      console.log('Error!', error);
    });
  }
  
  render() {
    return (
        <div class="container-fluid">
        <div class="sidenav">
        <div class="content-nav">
          <a href="#about">Day</a>
          <a href="#services">Months</a>
          <a href="#clients">Year</a>
          <a href="#contact">Contact</a>
        </div>
        </div>
        <div class="container-item">
          <div class="row">
          <div class="h2">Carbon Dashboard</div> 
          <div class="h3">{this.state.date}</div> 
        </div>
         <div class="row">
        <div class="col-md-3">
        <Card bg="dark" text="white" style={{ width: '23rem' , height:'23rem'}}>
        <Card.Header>COST</Card.Header>
        <Card.Body>
        {this.state.load 
         ? ( <Donut sum={this.state.sumcarbon}/>) 
         : ('loading.....')
        }
        </Card.Body>
      </Card>
      </div>
      <div class="col-md-3">
        <Card bg="dark" text="white" style={{ width: '23rem' , height:'23rem'}}>
        <Card.Header>CHANGE IN COST</Card.Header>
        <Card.Body>
            <div class="card2-text">5.42%</div>
            <div class="card2-text2">DECREASE IN COST </div>
            <Bar sum={this.state.sumcarbon}/>
        </Card.Body>
      </Card>
      </div>
      <div class="col-md-3">
        <Card bg="dark" text="white" style={{ width: '23rem' , height:'23rem'}}>
        <Card.Header>CARBON FOOTPRINT</Card.Header>
        <Card.Body>
          <Card.Title>Emission</Card.Title>
          Tilldate
          <div class="progress">
            <div style={{ width: '50%'}} class="progress-bar progress-bar-warning" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class='greenEnergy'>
            <Card.Title>Green Energy Generated</Card.Title>
            Tilldate
            <div class="progress">
              <div style={{ width: '30%'}} class="progress-bar progress-bar-green" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          {/* <div class='progressbar'>
              <ProgressBar variant="warning" now={60} />
          </div> */}
          </div>
        </Card.Body>
      </Card>
      </div>
      </div>
      <div class="row">
        <div class="col-md-3">
        <Card bg="dark" text="white" style={{ width: '71rem' }}>
        <Card.Header>COST</Card.Header>
        <Card.Body>
          <RealtimeChart data={this.state.data}/>
          {/* {this.state.load 
            ? ( <Chartfusion data={this.state.data}/> ) 
            : ('loading.....')
          } */}
        </Card.Body>
      </Card> 
        </div> 
      </div>
        </div>
        </div>
    );
  }
}

export default App;
