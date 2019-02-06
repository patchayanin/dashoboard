import React, { Component } from 'react';
import Button,{Card,Col,Row} from 'react-bootstrap';
import './App.css';
import Chart from './component/reactchart';
import ChartGoogle from './component/google';
import Chartfusion from './component/fusion';
import Donut from './component/donutChart'
import fire from './config';
import data_tmp from './component/data';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
      sumcarbon : 0,
      load : false
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
        <div class="container">
         <h3>Carbon Dashboard</h3> 
         <div class="row">
        <div class="col-md-4">
        <Card bg="secondary" text="white" style={{ width: '23rem' , height:'23rem'}}>
        <Card.Header>COST</Card.Header>
        <Card.Body>
        {this.state.load 
         ? ( <Donut sum={this.state.sumcarbon}/>) 
         : ('loading.....')
        }
        </Card.Body>
      </Card>
      </div>
      <div class="col-md-4">
        <Card bg="secondary" text="white" style={{ width: '23rem' , height:'23rem'}}>
        <Card.Header>CHANGE IN COST</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div class="col-md-4">
        <Card bg="secondary" text="white" style={{ width: '23rem' , height:'23rem'}}>
        <Card.Header>CARBON FOOTPRINT</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </div>
      <div class="row">
        <div class="col-md-4">
        <Card bg="secondary" text="white" style={{ width: '70.5rem' }}>
        <Card.Header>COST</Card.Header>
        <Card.Body>
           {this.state.load 
         ? ( <Chartfusion data={this.state.data}/> ) 
         : ('loading.....')
           }
        </Card.Body>
      </Card> 
        </div> 
      </div>
        </div>
          // {/* Sum carbon is {this.state.sumcarbon} */ }
        /* React-chart-j2
        // <Chart/>
        // React-google-Chart
        // <ChartGoogle/>*/
    );
  }
}

export default App;
