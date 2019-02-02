import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
           chartData:{
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            datasets:[
              {
                label:'Population',
                data:[
                  617594,
                  181045,
                  153060,
                  106519,
                  105162,
                  95072
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }, 
          chartData2:{
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            datasets:[
              {
                label:'Population',
                data:[
                  617,
                  18,
                  153,
                  106,
                  105,
                  954
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          },
          dataset: {
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            datasets:[
              {
                label:'Population',
                data:[
                  617594,
                  181045,
                  153060,
                  106519,
                  105162,
                  95072
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          },
          check:false
        }
        // this.setState({
        //   dataset: this.state.chartData
        // })
      }

      static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
        location:'City'
      }

      changeDataset = () => {
        if(this.state.check === true){
          this.setState({
            dataset: this.state.chartData,
            check:false
          })
        }
        else{
          this.setState({
            dataset: this.state.chartData2,
            check:true
          })
        }
      }
      render(){
        return (
          <div className="chart">
            <Bar
              data={this.state.dataset}
              options={{
                title:{
                  display:this.props.displayTitle,
                  text:'Largest Cities In Massachusetts',
                  fontSize:25
                },
                legend:{
                  display:this.props.displayLegend,
                  position:"bottom"
                }
              }}
              onElementsClick = {this.changeDataset}
            />
    
            <Line
              data={this.state.chartData}
              options={{
                title:{
                  display:this.props.displayTitle,
                  text:'Largest Cities In Massachusetts',
                  fontSize:25
                },
                legend:{
                  display:this.props.displayLegend,
                  position:"bottom"
                }
              }}
            />
    
            <Pie
              data={this.state.chartData}
              options={{
                title:{
                  display:this.props.displayTitle,
                  text:'Largest Cities In Massachusetts',
                  fontSize:25
                },
                legend:{
                  display:this.props.displayLegend,
                  position:"bottom"
                }
              }}
            />
          </div>
        )
      }
}
export default Header