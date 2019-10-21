import Chart from 'chart.js';
import React from 'react';

export default class DonutChart extends React.Component {
  constructor(props) {
    super(props)

    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'doughnut',
      data: {
        labels: this.props.info.map(flavor => flavor.name),
        datasets: [{
          data: this.props.info.map(flavor => flavor.percentage),
          backgroundColor: this.props.info.map(flavor => flavor.color)
        }]
      },
      options: {
        title: {
            display: true,
            text: this.props.title,
            fontSize: 20,
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
