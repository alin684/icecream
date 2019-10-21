import Chart from 'chart.js';
import React from 'react';

export default class LineChart extends React.Component {
  constructor(props) {
    super(props)

    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'line',
      data: {
        labels: this.props.info[0].data.map(month => month.time),
        datasets: [
          {
            label: this.props.info[0].city,
            data: this.props.info[0].data.map(month => month.revenue),
            backgroundColor: '#8F461A',
            fill: 'none',
            pointRadius: 3,
            borderWidth: 3,
            lineTension: 0,
            borderColor: '#8F461A'
          },
          {
            label: this.props.info[1].city,
            data: this.props.info[1].data.map(month => month.revenue),
            backgroundColor: '#EA0029',
            fill: 'none',
            pointRadius: 3,
            borderWidth: 3,
            lineTension: 0,
            borderColor: '#EA0029'
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'month'
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                min: 0
              }
            }
          ]
        },
        title: {
            display: true,
            text: this.props.title,
            fontSize: 24,
            fontColor: '#FFFFFF'
        },
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'bottom'
        }
      }
    })
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}
