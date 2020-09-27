import React, { Component } from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Container, Row, Col } from 'react-bootstrap';
import './HallInfo.css'




class About extends Component {
  render() {
    return (
      <div>
        <Container className="aboutBack mt-5">

          <Row className="aboutBack">
            <h1 className="mx-auto">Hall 1</h1>
          </Row>


          <Row className="aboutBack mb-5 mt-5 ">
            <Col sm={12} xs={12} md={12} lg={6} className="center">
              <img src="../images/sala1.jpg" alt="sala1" className="img-fluid mb-5" style={{
               width: '100%',
              }}
              />
            </Col>

            <Col sm={12} xs={12} md={12} lg={6} >
              <img src="../images/planSala1.png" alt="planSala1" className="img-fluid mb-5" style={{
                width: '100%',
              }}/>
            </Col>
            <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reprehenderit distinctio pariatur amet id harum perferendis, numquam cumque corporis, non architecto dolorem, enim ab voluptate aliquam veniam asperiores deleniti dolores.</p>
          </Row>
        </Container>


        <Container className="aboutBack">

<Row className="aboutBack">
  <h1 className="mx-auto">Hall 2</h1>
</Row>


<Row className="aboutBack mb-5 mt-5 ">
  <Col sm={12} xs={12} md={12} lg={6} className="center">
    <img src="../images/sala2.jpg" alt="sala2" className="img-fluid mb-5" style={{
     width: '100%',
    }}
    />
  </Col>

  <Col sm={12} xs={12} md={12} lg={6} >
    <img src="../images/planSala2.png" alt="planSala2" className="img-fluid mb-5" style={{
      width: '100%',
    }}/>
  </Col>
  <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reprehenderit distinctio pariatur amet id harum perferendis, numquam cumque corporis, non architecto dolorem, enim ab voluptate aliquam veniam asperiores deleniti dolores.</p>
</Row>
</Container>


<Container className="aboutBack">

<Row className="aboutBack">
  <h1 className="mx-auto">Hall 3</h1>
</Row>


<Row className="aboutBack mb-5 mt-5 ">
  <Col sm={12} xs={12} md={12} lg={6} className="center">
    <img src="../images/sala3.jpg" alt="sala3" className="img-fluid mb-5" style={{
     width: '100%',
    }}
    />
  </Col>

  <Col sm={12} xs={12} md={12} lg={6} >
    <img src="../images/planSala3.png" alt="planSala3" className="img-fluid mb-5" style={{
      width: '100%',
      height: '89%',
    }}/>
  </Col>
  <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reprehenderit distinctio pariatur amet id harum perferendis, numquam cumque corporis, non architecto dolorem, enim ab voluptate aliquam veniam asperiores deleniti dolores.</p>
</Row>
</Container>


<Container className="aboutBack">

<Row className="aboutBack">
  <h1 className="mx-auto">Hall 4</h1>
</Row>


<Row className="aboutBack mb-5 mt-5 ">
  <Col sm={12} xs={12} md={12} lg={6} className="center">
    <img src="../images/sala4.jpg" alt="sala4"className="img-fluid mb-5" style={{
     width: '100%',
    }}
    />
  </Col>

  <Col sm={12} xs={12} md={12} lg={6} >
    <img src="../images/planSala4.png" alt="planSala4"className="img-fluid mb-5" style={{
      width: '100%',
    }}/>
  </Col>
  <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reprehenderit distinctio pariatur amet id harum perferendis, numquam cumque corporis, non architecto dolorem, enim ab voluptate aliquam veniam asperiores deleniti dolores.</p>
</Row>
</Container>


<Container className="aboutBack">

<Row className="aboutBack">
  <h1 className="mx-auto">Hall 5</h1>
</Row>


<Row className="aboutBack mb-5 mt-5 ">
  <Col sm={12} xs={12} md={12} lg={6} className="center">
    <img src="../images/sala5.jpg" alt="sala5" className="img-fluid mb-5" style={{
     width: '100%',
    }}
    />
  </Col>

  <Col sm={12} xs={12} md={12} lg={6} >
    <img src="../images/planSala5.png"  alt="planSala5" className="img-fluid mb-5" style={{
      width: '100%',
    }}/>
  </Col>
  <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reprehenderit distinctio pariatur amet id harum perferendis, numquam cumque corporis, non architecto dolorem, enim ab voluptate aliquam veniam asperiores deleniti dolores.</p>
</Row>
</Container>


<Container className="aboutBack">

<Row className="aboutBack">
  <h1 className="mx-auto">Hall 6</h1>
</Row>


<Row className="aboutBack mb-5 mt-5 ">
  <Col sm={12} xs={12} md={12} lg={6} className="center">
    <img src="../images/sala6.jpg" alt="sala6"className="img-fluid mb-5" style={{
     width: '100%',
    }}
    />
  </Col>

  <Col sm={12} xs={12} md={12} lg={6} >
    <img src="../images/planSala6.png" alt="planSala6"className="img-fluid mb-5" style={{
      width: '100%',
      height: '89%'
    }}/>
  </Col>
  <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reprehenderit distinctio pariatur amet id harum perferendis, numquam cumque corporis, non architecto dolorem, enim ab voluptate aliquam veniam asperiores deleniti dolores.</p>
</Row>
</Container>

      </div>




    )
  }
}

export default About