import React from 'react'
import {Link} from 'react-router-dom'
// import './MovieThumb.css'


import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
 

const HallOneMovieThumb = (props) => {
  return (
    <div>
     
      {/* {props.clickable ?
        <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
          <img src={props.image} alt="moviethumb" />
      
        </Link>
        :
        <img src={props.image} alt="moviethumb" />
      } */}

<Row className="mt-5">
        <Col sm={12} md="4" >
      {props.clickable ?
        <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
          <img
    width="100%"
    height="auto"
    className="mr-3 mx-auto"
    src={props.image}
    alt="Generic placeholder"
     />
      
        </Link> :
  <img
    width="100%"
    height="auto"
    className="mr-3 mx-auto"
    src={props.image}
    alt="Generic placeholder"
  
  />
      }
      </Col>
      
      <Col sm={12} md={8}>
 
  <h1>{props.movieName}</h1>
    <p>
     {props.overview}
    </p>
    
    <p>
    {props.date}
    </p>

    <p>
      {props.vote_average}
    </p>
  
  </Col>


</Row>
    </div>
  )
}

export default HallOneMovieThumb