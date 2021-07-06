import React, { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export default class ApiCard extends Component {
  render() {
    return (
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
              this.props.addToFav(this.props.x);
            }}
            variant="primary"
          >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
