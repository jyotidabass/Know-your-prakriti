import React, { Component } from "react";
import Form from "react-bootstrap/Form";

import "./_quiz.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import data from "../../data/data.json";

const newdata = data.map((data) => {
  return (
    <Col className="quiz-col" md="6" key={data.id}>
      <h4 className="quiz-col__question light-text">{data.question}</h4>
      <Form.Group className="quiz-col__alternatives">
        <Form.Check
          type="radio"
          label={data.a}
          name={"checkboxName" + data.id}
          id={"vata-" + data.id}
          className="vata"
        />
        <Form.Check
          type="radio"
          label={data.b}
          name={"checkboxName" + data.id}
          id={"pitta-" + data.id}
          className="pitta"
        />
        <Form.Check
          type="radio"
          label={data.c}
          name={"checkboxName" + data.id}
          id={"kapha-" + data.id}
          className="kapha"
        />
      </Form.Group>
    </Col>
  );
});

export default class Main extends Component {
  render() {
    return <Row className="quiz"> {newdata} </Row>;
  }
}
