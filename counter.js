import React from "react";
import "./_counter.scss";

import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vata: 0,
      pitta: 0,
      kapha: 0,
      vataProportion: 0,
      pittaProportion: 0,
      kaphaProportion: 0,
      show:false,
      dosha: "Vatta"
    };
  }

  showResults(e) {
    // Select all checked checkboxes in the current page
    let checkedBoxed = document.querySelectorAll("input[name]:checked");
    let answers = [];

    // Get all the ids to the answers array
    checkedBoxed.forEach(function (checkedBox) {
      let string = checkedBox.id;
      let stringSplited = string.split("-", 1);
      answers.push(stringSplited[0]);
    });

    // Count all the vata, pitta and kapha in the answers array
    let vataCount = answers.filter((x) => x === "vata").length;
    let pittaCount = answers.filter((x) => x === "pitta").length;
    let kaphaCount = answers.filter((x) => x === "kapha").length;

    let totalCount = 100 / (vataCount + pittaCount + kaphaCount);

    // one or two doshas
    let doshaResult;
    if( Math.max(vataCount, pittaCount, kaphaCount) === vataCount) {
      if ( vataCount - pittaCount <= 2 ){
        doshaResult = "Vata-Pitta";
      } else if ( vataCount - kaphaCount <= 2 ) {
        doshaResult = "Vata-Khapa";
      } else {
        doshaResult = "Vata";
      }
    } else if ( Math.max(vataCount, pittaCount, kaphaCount) === pittaCount ) {
      if ( pittaCount - vataCount <= 2 ){
        doshaResult = "Pitta-Vata";
      } else if ( pittaCount - kaphaCount <= 2 ) {
        doshaResult = "Pitta-Khapa";
      } else {
        doshaResult = "Pitta";
      }
    } else if ( Math.max(vataCount, pittaCount, kaphaCount) === kaphaCount ) {
      if ( kaphaCount - vataCount <= 2 ){
        doshaResult = "Kapha-Vata";
      } else if ( kaphaCount - pittaCount <= 2 ) {
        doshaResult = "Kapha-Pitta";
      } else {
        doshaResult = "Kapha";
      }
    }

    // Update the state with the count
    this.setState({
      vata: vataCount,
      pitta: pittaCount,
      kapha: kaphaCount,
      vataProportion: Math.round(totalCount * vataCount),
      pittaProportion: Math.round(totalCount * pittaCount),
      kaphaProportion: Math.round(totalCount * kaphaCount),
      show: true,
      dosha: doshaResult
    });
  }

  render() {
    return (

      <div className="counter">

        <Row className="counter-row-button">
          <Col>
            <Button className="w-100" variant="outline-success" onClick={(e) => this.showResults(e)}>
              See results
            </Button>{" "}
          </Col>
        </Row>

        <Row className="counter-row-results align-items-center h-100">

          <Col md="6" xs="12" className="text-right">

          <ProgressBar className="counter__bar" >
            <ProgressBar  variant="info" label={`Vata: ${this.state.vataProportion}%`}  now={this.state.vataProportion} key={1} />
            <ProgressBar  variant="success" label={`Pitta: ${this.state.pittaProportion}%`} now={this.state.pittaProportion} key={2} />
            <ProgressBar  variant="danger" label={`Kapha: ${this.state.kaphaProportion}%`} now={this.state.kaphaProportion} key={3} />
          </ProgressBar>

          </Col>

          <Col className="text-center mx-auto">

            {
            this.state.show? 
                <div>
                  <h4>Your dosha is:</h4>
                  <h5> {this.state.dosha} </h5>
                  <span className="counter__result">Vata: {this.state.vata} | </span>
                  <span className="counter__result">Pitta: {this.state.pitta} | </span>
                  <span className="counter__result">Kapha: {this.state.kapha}</span>
                </div>
              : null
            } 

          </Col>

        </Row>

      </div>
    );
  }
}

export default Counter;
