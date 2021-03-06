// Step 1 - Including react
import React from 'react';

// Step 2 - Including the react-fusioncharts component
import FusionCharts from 'fusioncharts';

// Step 3 - Including the fusiontime file
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import ReactFC from 'react-fusioncharts';

//import schema
import schema_tmp from './schema';
// import './fusion.css';


// Step 4 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, TimeSeries);

// Step 5 - Creating the JSON object to store the chart configurations
// const jsonify = res => res.json();
// const dataFetch = data_tmp
// console.log(data_tmp)
// const schemaFetch = schema_tmp
// console.log(schema_tmp)
// console.log(jsonify)
// JSON.stringify(schema_tmp)
// console.log(schemaFetch)

class ChartViewer extends React.Component {
    constructor(props) {
        super(props);
        this.onFetchData = this.onFetchData.bind(this);
        this.state = {
            timeseriesDs: {
                type: 'timeseries',
                renderAt: 'container',
                width: '900',
                height: '500',
                chartLeftMargin : 110,
                // paletteColors:"#FAE30D,#CB0DFA,#ffffff",
                paletteColors:"#FAE30D",
                dataSource: {
                    styleDefinition: {
                        "colorstyle": {
                            "fill": "#FAE30D"
                        }
                    },
                    caption: { 
                        text: "Online Sales of a SuperStore",
                        style: {
                            text: "colorstyle"
                        } },
                    bgAlpha: 0,
                    canvasBgAlpha:0,
                    data: null, 
                    chart: {
                      style: {
                          line:"colorstyle",
                        background: {
                            "fill-opacity":"0"
                        },
                        canvas:{
                            "fill-opacity":"0"
                        }
                      }
                    },
                    yAxis: [{
                        plot: [{
                            value: ''
                        }]
                    }]
                }
            },
            data: props.data,
            loaded: true
        };
    }
    
    componentWillMount() {
        console.log("componentWillmount")
        this.onFetchData()
    }
    onFetchData() {
        Promise.all([this.state.data, schema_tmp]).then(res => {
            console.log(res)
            const data = res[0];
            const schema = res[1];
            const fusionTable = new FusionCharts.DataStore().createDataTable(data, schema);
            const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
            timeseriesDs.dataSource.data = fusionTable;
            this.setState({
                timeseriesDs : timeseriesDs,
                loaded: true
            });
        });
    }
    componentWillReceiveProps(nextProps) {
        console.log("willReceiveProps")  
        console.log(nextProps)
        this.setState({ 
            data: nextProps.data,
            loaded: false
        }, () => {
            console.log(this.state.data)
            this.onFetchData()
        });
        
    }

    render() {
        console.log("render")
        return (
        <div>
        {this.state.timeseriesDs.dataSource.data && this.state.loaded
            ? ( <ReactFC {...this.state.timeseriesDs} />) 
            : ('loading')}
        </div>
        );
    }
}

// ReactDOM.render(
//     <ChartViewer />,
//     document.getElementById('chart-container')
// );

export default ChartViewer