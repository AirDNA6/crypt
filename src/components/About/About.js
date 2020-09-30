import React, { Component } from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'


const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 44.78214727, lng: 20.78214727 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 44.78214727, lng: 20.47183692 }} />
      )}
    </GoogleMap>
  ))
);



class About extends Component {
  render() {
    return (
      <div>

        {/* <Container> */}
<MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAN7mwyR_B3NDDLnuwkLds1RU9IUSBklc8&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />

        {/* </Container> */}


        <Container>
          <Row className="aboutBack mb-5 mt-5">

            <Col sm={12} xs={12}  className="mt-5 mb-5 aboutFont">The Crypt was completely renovated in 2020 in accordance with the latest world standards. Reconstruction and adaptation of the old cinema space resulted in the first multiplex in Belgrade, with six superbly equipped halls, with a total capacity of almost 1,000 seats, as well as two catering facilities - Cinema and The End cafe.<br /> <br />
            In addition to the regular film repertoire, the Crypt hosts ceremonial premieres of domestic films, as well as the FEST, Cinema City, Cinemania and Kids Fest festivals. An important segment of our offer is the possibility of purchasing concessions (popcorn, nachos and various soft drinks) that the audience can consume during the screening.
            </Col>
          </Row>
        </Container>


        <Container>
          <Row className="aboutBackReverse mb-5">

            <Col sm={12} xs={12} lg={4} md={12} className="mt-3 mb-3">
              <img src="../images/projekcija1.jpg" className="img-fluid" alt="projekcija1" style={{width: '100%'}} />
            </Col>

            <Col sm={12} xs={12} lg={8} md={12} className="mt-3 aboutFont">The cinema is located near high-frequency parts of the city, such as Slavija, Stadion Rajko Mitic and Vojvode Stepe Street. Crypt is located near numerous lines of public and suburban transport, which allows citizens of Novi Sad and the surrounding area to quickly and cheaply come to the cinema. In front of the cinema and in its surroundings there are public parking areas, and in the immediate vicinity there are several organized parking lots, which facilitates the arrival of visitors who choose their own transport.
            </Col>

          </Row>
          {/* <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row> */}
        </Container>

      </div>




    )
  }
}

export default About