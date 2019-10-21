import Chart from 'chart.js';

export default class DonutChart extends React.Component {
  constructor(props) {
    super(props)

    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'doughnut',
      data: {
        labels: ,
        datasets: [{
          data: ,
          backgroundColor: this.props.colors
        }]
      }
    })
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}
