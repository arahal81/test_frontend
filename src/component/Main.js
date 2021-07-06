import React, { Component } from "react";
import axios from "axios";
import ApiCard from "./ApiCard";
import { Col, Row } from "react-bootstrap";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_SERVER}/apidata`).then((dataApi) => {
      this.setState({
        data: dataApi.data,
      });
    });
  };

  addToFav = (x) => {
    const obj = {
      name: x.name,
      img: x.img,
      psi: x.psiPowers,
    };
    axios.post(`${process.env.REACT_APP_SERVER}/addfav`, obj);
  };

  render() {
    return (
      <>
        <Row xs={1} md={2} className="g-4">
          {this.state.data.map((item) => (
            <Col>
              <ApiCard x={item} addToFav={this.addToFav} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}
