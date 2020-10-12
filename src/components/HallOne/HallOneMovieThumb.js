import React from 'react'
import {Link} from 'react-router-dom'
// import './MovieThumb.css'


import { Row, Col} from 'react-bootstrap'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
 


const HallOneMovieThumb = (props) => {


  function currentDay(props) {
    let dateObj = new Date()
    let weekday = dateObj.toLocaleString("default", { weekday: "long" })
    return <div>Broadcast: {weekday}</div>;
  }
  
  function movieStarting() {
    let time = ["12:30h","14:00h","16:00h","18:30h", "20:00h"];
    let randomIndex = Math.floor(Math.random() * time.length);
    let randomNumber = time[randomIndex]
    time.splice(randomIndex, 1)
    console.log(randomNumber)

    return <div>Movie starts at: {randomNumber}</div>;
  //  let randomTime = time[Math.floor(Math.random() * time.length)];
  
  }
  return (
    <div>
     
      {/* {props.clickable ?
        <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
          <img src={props.image} alt="moviethumb" />


var colors = ["red","blue","green","yellow"];
var randColor = colors[Math.floor(Math.random() * colors.length)];

      
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
    Realese date: {props.date}
    </p>

    <p>
      Rating: {props.vote_average}
    </p>

    <p>
     {currentDay()}
    </p>

    <p>
      {movieStarting()}
    </p>
  
  </Col>


</Row>
    </div>
  )
}

export default HallOneMovieThumb