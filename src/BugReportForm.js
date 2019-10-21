import React from 'react';

export default class BugReportForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      deets: ""
    };
  }

  handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

  handleSubmit = (event) => {
      event.preventDefault()
      this.props.submitForm(this.state)
      event.target.reset()
      this.setState({
        deets: ""
      })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" name="deets" placeholder="Submit a bug report." value={this.state.deets} onChange={this.handleChange} />
          </p>
          <p>
            <button className="submitButton" type="submit">Submit</button>
          </p>
        </form>
      </div>
    );
  }
}
