import React from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  "chart": {
    "caption": "Order Processing Indicator",
    "subcaption": "Joey's Pizza",
    "lowerlimit": "0",
    "upperlimit": "20",
    "lowerlimitdisplay": "Min",
    "upperlimitdisplay": "Max",
    "chartbottommargin": "60",
    "theme": "fusion"
  },
  "colorrange": {
    "color": [
      {
        "minvalue": "0",
        "maxvalue": "10",
        "code": "#62B58F"
      },
      {
        "minvalue": "10",
        "maxvalue": "15",
        "code": "#FFC533"
      },
      {
        "minvalue": "15",
        "maxvalue": "20",
        "code": "#F2726F"
      }
    ]
  },
  "value": "9",
  "annotations": {
    "showbelow": "1",
    "groups": [
      {
        "id": "indicator",
        "items": [
          {
            "id": "background",
            "type": "rectangle",
            "alpha": "100",
            "fillcolor": "#62B58F",
            "x": "$gaugeCenterX-75",
            "tox": "$gaugeCenterX+75",
            "y": "$chartEndY-45",
            "toy": "$chartEndY-25"
          },
          {
            "id": "message",
            "align": "CENTER",
            "bold": "1",
            "fontsize": "14",
            "type": "text",
            "text": "Normal Queue",
            "color": "#FFFFFF",
            "x": "$chartCenterX",
            "y": "$chartEndY-35"
          }
        ]
      }
    ]
  }
};

class MyComponent extends React.Component {
   render() {
      return (
      <ReactFusioncharts
         type = "hled"
         width = '100%'
         height = '100%'
         dataFormat = "JSON"
         dataSource = {dataSource} />
      );
   }
}

export default MyComponent