import React, { Component } from "react";

class ErrorAlert extends Component {
  render() {
    return (
      <div className="alert alert-danger text-center" role="alert">
        <h2>An error occured, please try again later.</h2>
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default ErrorAlert;
