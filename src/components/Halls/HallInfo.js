import React, { Component } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import "./HallInfo.css";

class About extends Component {
  render() {
    return (
      <div>
        <Container fluid className="aboutBack mb-5 mt-5">
          <Row className="aboutBack">
            <h1 className="mx-auto">Hall 1</h1>
          </Row>

          <Row className="aboutBack mb-5 mt-5 ">
            <Col  lg="auto" md="6" sm="6" xs="6" lg={{order: 'first'}}>
              <Image src="../images/sala1.jpg" style={{width: '100%'}} thumbnail/>
            </Col>

            <Col  sm={{order: 'last'}} xs={{order: 'last'}} >
              <p>Seats: 71</p>
              <p>Rows: 10</p>
              <p>VIP seats: 22</p>
              <p>Screen: 59 m²</p>
              <p>Special: HRF, analog</p>
            </Col>

            <Col  lg="auto" md="6" sm="6" xs="6" lg={{order: 'last'}} className="mb-5"> 
              <Image src="../images/planSala1.png" alt="planSala1" style={{width: '100%'}} thumbnail/>
            </Col>
          </Row>
        </Container>

        <Container fluid className="aboutBack mt-5">
          <Row className="aboutBack">
            <h1 className="mx-auto">Hall 2</h1>
          </Row>

          <Row className="aboutBack mb-5 mt-5 ">
            <Col  lg="auto" md="6" sm="6" xs="6" lg={{order: 'first'}} className="mb-5">
              <Image src="../images/sala2.jpg" style={{width: '100%'}} thumbnail />
            </Col>

            <Col  sm={{order: 'last'}} xs={{order: 'last'}} >
            <p>Seats: 163</p>
              <p>Rows: 11</p>
              <p>VIP seats: 28</p>
              <p>Screen: 72 m²</p>
              <p>Special: HRF, RealD 3D</p>
            </Col>

            <Col  lg="auto" md="6" sm="6" xs="6" lg={{order: 'last'}}> 
              <Image src="../images/planSala2.png" alt="planSala2" style={{width: '100%'}} thumbnail/>
            </Col>
          </Row>
        </Container>

        <Container fluid className="aboutBack mt-5">
          <Row className="aboutBack">
            <h1 className="mx-auto">Hall 3</h1>
          </Row>

          <Row className="aboutBack mb-5 mt-5 ">
            <Col  lg="auto" md="6" sm="6" xs="6" lg={{order: 'first'}} className="mb-5">
              <Image src="../images/sala3.jpg" style={{width: '100%'}} thumbnail/>
            </Col>

            <Col  sm={{order: 'last'}} xs={{order: 'last'}} >
            <p>Seats: 163</p>
              <p>Rows: 11</p>
              <p>VIP seats: 28</p>
              <p>Screen: 78 m²</p>
              <p>Special: HRF, RealD 3D</p>
            </Col>

            <Col  lg="auto" md="6" sm="6" xs="6" lg={{order: 'last'}} className="mb-5"> 
              <Image src="../images/planSala3.png" alt="planSala1" style={{width: '100%'}} thumbnail/>
            </Col>
          </Row>
        </Container>

        <Container fluid className="aboutBack mt-5">
          <Row className="aboutBack">
            <h1 className="mx-auto">Hall 4</h1>
          </Row>

          <Row className="aboutBack mb-5 mt-5 ">
            <Col  lg="auto" md="6" sm="6" xs="6" lg={{order: 'first'}} className="mb-5">
              <Image src="../images/sala4.jpg" style={{width: '100%'}} thumbnail/>
            </Col>

            <Col  sm={{order: 'last'}} xs={{order: 'last'}} >
            <p>Seats: 71</p>
              <p>Rows: 10</p>
              <p>Screen: 69 m²</p>
              <p>Special: RealD 3D, MX4D</p>
            </Col>

            <Col  lg="auto" md="6" sm="6" xs="6" lg={{order: 'last'}} className="mb-5"> 
              <Image src="../images/planSala4.png" alt="planSala4" style={{width: '100%'}} thumbnail/>
            </Col>
          </Row>
        </Container>

        <Container fluid className="aboutBack mt-5">
          <Row className="aboutBack">
            <h1 className="mx-auto">Hall 5</h1>
          </Row>

          <Row className="aboutBack mb-5 mt-5 ">
            <Col  lg="auto" md="6" sm="6" xs="6" lg={{order: 'first'}} className="mb-5">
              <Image src="../images/sala5.jpg" style={{width: '100%'}} thumbnail/>
            </Col>

            <Col  sm={{order: 'last'}} xs={{order: 'last'}} >
            <p>Seats: 300</p>
              <p>Rows: 16</p>
              <p>VIP seats: 36</p>
              <p>Screen: 146 m²</p>
              <p>Special: HRF, RealD 3D</p>
            </Col>

            <Col  lg="auto" md="6" sm="6" xs="6" lg={{order: 'last'}} className="mb-5"> 
              <Image src="../images/planSala5.png" alt="planSala5" style={{width: '100%'}} thumbnail/>
            </Col>
          </Row>
        </Container>

        <Container fluid className="aboutBack mt-5">
          <Row className="aboutBack">
            <h1 className="mx-auto">Hall 6</h1>
          </Row>

          <Row className="aboutBack mb-5 mt-5 ">
            <Col  lg="auto" md="6" sm="6" xs="6" lg={{order: 'first'}} className="mb-5">
              <Image src="../images/sala6.jpg" style={{width: '100%'}} thumbnail/>
            </Col>

            <Col  sm={{order: 'last'}} xs={{order: 'last'}} >
            <p>Seats: 50</p>
              <p>Rows: 7</p>
              <p>VIP seats: 8</p>
              <p>Screen: 69 m²</p>
              <p>Special: HRF, RealD 3D</p>
            </Col>

            <Col  lg="auto" md="6" sm="6" xs="6" lg={{order: 'last'}} className="mb-5"> 
              <Image src="../images/planSala6.png" alt="planSala6" style={{width: '100%'}} thumbnail/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
