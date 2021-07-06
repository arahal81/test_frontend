import axios from "axios";
import React, { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import UpdateModel from "./UpdateModel";

export default class FavCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  UpdateFav = (e) => {
    e.preventDefault();
    console.log(e.target.itemName.value);
    const obj = {
      name: e.target.itemName.value,
      id: this.props.x._id,
    };
    axios
      .put(`${process.env.REACT_APP_SERVER}/update`, obj)
      .then(this.props.getAll());
    this.setState({
      show: false,
    });
  };
  delete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER}/delete/${id}`)
      .then(this.props.getAll());
  };

  render() {
    return (
      <>
        <UpdateModel
          handleClose={this.handleClose}
          UpdateFav={this.UpdateFav}
          show={this.state.show}
          x={this.props.x}
        />
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.x.img} />
          <Card.Body>
            <Card.Title>{this.props.x.name}</Card.Title>
            <Card.Text>
              <Row md={2}>
                {this.props.x.psiPowers.map((psiItem) => (
                  <Col>
                    <img src={psiItem.img} alt="" />
                    <h4>{psiItem.name}</h4>
                  </Col>
                ))}
              </Row>
            </Card.Text>
            <Button
              onClick={() => {
                this.handleShow();
              }}
              variant="primary"
            >
              Update
            </Button>
            <Button
              onClick={() => {
                this.delete(this.props.x._id);
              }}
              variant="primary"
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
