import React, { useEffect } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import variablePie from 'highcharts/modules/variable-pie';
import BarGraph from './BarGraph';

const Charts = () => {
    variablePie(Highcharts);
    let chartOptions = {
        chart: {
            type: 'variablepie',
            backgroundColor: 'none'
        },
      plotOptions: {
            variablepie: {
                borderRadius: 0,
                dataLabels: {
                    enabled: false // Remove the name of the slice
                }
            },
          
        },
        title:false,
        tooltip: false,
        series: [{
            minPointSize: 10,
            innerSize: '60%',
            zMin: 0,
            name: 'countries',
            borderRadius: 5,
            data: [{
                name: '',
                y: 10,
                z: 10
            }, {
                name: 'Italy',
                y: 50,
                z: 50
            }, {
                name: 'Switzerland',
                y: 40,
                z: 20
            }],
            colors: [
                {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, 'gray'],
                            [1, 'lightgray']
                        ]
                    },
              {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#e4145a'],
                            [1, '#ff97ba']
                        ]
                    },
              {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#452ce4'],
                            [1, '#9d8ef9']
                        ]
                    }
            ]
        }]
    }
    useEffect(()=>{
        let pieChart = document.querySelector('.pie-chart');
        let chart = pieChart.children[3];
        chart.style.position ="absolute";
        chart.style.top ="85px";
        chart.style.left ="38px";
        chart.style.height ="200px";
        chart.style.width ="200px";
    },[]);

    
  return (
    <div className='chart-wrapper'>
        <div className='bar-graph'>
            <BarGraph/>
        </div>
        <div className='pie-chart'>
            <div className='pie-heading'>Customers</div>
            <div className='pie-heading-text'>Customers that buy products</div>
            <div className='pie-chart-background'></div>
            <HighchartsReact className="high-chart" highcharts={Highcharts} options={chartOptions} />
            <div className='pie-text-wrapper'>
                <div className='pie-percent'>65%</div>
                <div className='pie-text'>Total New</div> 
                <div className='pie-text'> Customers</div>
            </div>

        </div>
    </div>
  )
}

export default Charts