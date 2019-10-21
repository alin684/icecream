import React from 'react';
import './App.css';

const url = ""
Chart.defaults.global.defaultFontFamily = 'Helvetica';
Chart.defaults.global.defaultFontColor = 'red';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: getData() //??????
    }
  }

  componentDidMount() [
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({
        data: data
      })
    })
  ]

  render() {
    return (
      <div className="App">
        <div className="small donut-chart">
          <DonutChart
            title={this.state.}
            data={this.state.}
            colors={this.state.}
          />
        </div>
      </div>
    );
  }
}

export default App;
