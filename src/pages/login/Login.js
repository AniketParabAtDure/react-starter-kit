import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";

class Login extends Component {
  gotoDashboard = () => {
    this.props.history.push("/Home");
  }

  render() {
    return (
      <button onClick={() => this.gotoDashboard()}>Login</button>
    );
  }
}

export default withRouter(Login);
