import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Main</Navbar.Brand>
          <Link to="/">Main</Link>
          <Link to="/myfav">MyFav</Link>
        </Navbar>
      </div>
    );
  }
}
