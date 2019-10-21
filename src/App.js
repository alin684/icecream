import React from 'react';
import Chart from 'chart.js';
import DonutChart from './DonutChart.js'
import LineChart from './LineChart.js'
import BugReportForm from './BugReportForm.js'

import './App.css';

//currently imports data from a local file
import data from './data.json';

const url = "www.madeupurl.com"

Chart.defaults.global.defaultFontFamily = 'Helvetica';
Chart.defaults.global.defaultFontColor = '#FFFFFF';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: data,
    }
  }

  // fetch request for non-local data
  // componentDidMount() [
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       data: data
  //     })
  //   })
  // ]

  submitBugReport = (report) => {
    fetch(url, {
      method: 'POST',
      headers: ({
        'content-type': 'application/json',
        'accept': 'application/json'
      }),
      body: JSON.stringify(report)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="small chart">
          <DonutChart
            title={this.state.data[0].title}
            info={this.state.data[0].flavor}
          />
        </div>
        <div className="small chart">
          <DonutChart
            title={this.state.data[1].title}
            info={this.state.data[1].flavor}
          />
        </div>
        <div className="small chart">
          <DonutChart
            title={this.state.data[2].title}
            info={this.state.data[2].flavor}
          />
        </div>
        <div className="big chart">
          <LineChart
            title={this.state.data[3].title}
            info={this.state.data[3].location}
          />
        </div>
        <div>
          <BugReportForm submitForm={this.submitBugReport} />
        </div>
      </div>
    );
  }
}
