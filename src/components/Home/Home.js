import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config'

import HeroImage from '../elements/HeroImage/HeroImage'
import SearchBar from './SearchBar'

import MovieThumb from '../elements/MovieThumb/MovieThumb'
import LoadMoreBtn from './LoadMoreBtn'
import Spinner from '../elements/Spinner/Spinner'
import HomeColGrid from './HomeColGrid'


import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import { MDBNotification } from "mdbreact";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Home.css'

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: '',
    totalResults: 0
  }


  componentDidMount() {
    this.setState({
      loading: true
    })
    const endpoint = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    this.fetchItems(endpoint)
  }


  // searchItems = (searchTerm) => {
  //   console.log(searchTerm);
  //   let endpoint = ''
  //   this.setState({
  //     movies: [],
  //     loading: true,
  //     searchTerm
  //   })

  //   if (searchTerm === '') {
  //     endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  //   } else {

  //     endpoint = ` ${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}
  //   `
    
  //   }

  //   this.fetchItems(endpoint)

  // }


  fetchItems = (endpoint) => {
    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      this.setState({
        movies: [...this.state.movies, ...result.results],
        heroImage: this.state.heroImage || result.results[5],
        loading: false,
        currentPage: result.page,
        totalPages: result.total_pages,
        totalResults: result.total_results
      })
    })
    .catch(error => console.error('Error:', error))
  }

  render() {
    return (

               
<div>

<MDBContainer
        style={{
          width: "auto",
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 9999
        }}
      >
        <MDBNotification
          autohide={6000}
           bodyClassName="p-5 font-weight-bold white-text"
          className="stylish-color-dark"
          show
          fade
          icon="bell"
          iconClassName="green-text"
          closeClassName="green-text"
          title="SPECIAL EVENT"
          message="2000s MOVIES IN MX4D"
          // text="just now"
          titleClassName=" green-text"
        />
        <MDBNotification
          autohide={7000}
          show
          fade
          bodyClassName="p-5 font-weight-bold white-text"
          className="stylish-color-dark"
          icon="bell"
          iconClassName="red-text"
          closeClassName="red-text"
          title="MARVEL NIGHT"
          message="“Part of the journey is the end.”
          ~ Tony Stark, Avengers: Endgame"
          // text="2 seconds ago"
          titleClassName="red-text"
        />

<MDBNotification
          autohide={8000}
          show
          bodyClassName="p-5 font-weight-bold white-text"
          className="stylish-color-dark"
          fade
          icon="bell"
          iconClassName="blue-text"
          closeClassName="blue-text"
          title="DC NIGHT"
          message="Sometimes It's Only Madness That Makes Us What We Are."
          // text="2 seconds ago"
          titleClassName=" blue-text"
        />
      </MDBContainer>
    

      <div className="rmdb-home">
        {this.state.heroImage ?
          <div>
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
              title={this.state.heroImage.original_title}
              text={this.state.heroImage.overview} />
            {/* <SearchBar callback={this.searchItems} /> */}
          </div> : null}



        <div className="rmdb-home-grid">
        <HomeColGrid
            header={`Top 10 rated movies`}
            loading={this.state.loading}
            >
            {this.state.movies.map ( (element, i) => {
              return <MovieThumb
                        key={i}
                        clickable={true}
                        image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.png'}
                        movieId={element.id}
                        movieName={element.original_title}
                     />
            })}
          </HomeColGrid>
          {this.state.loading ? <Spinner /> : null}
         
        </div>
     </div>
        <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>Marvel Nights & DC Night</strong>
            </MDBCardTitle>

            <MDBCardImage
              src="./images/mvsd.jpg"
              style={{width: "100%"}}
              className="img-fluid mx-auto"
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
               SPECIAL EVENT
              </MDBCardTitle>
              <MDBCardText>
                We are calling all superheroes to join us as the Crypt take on the Belgrade. 
                Your special event ticket purchase includes a winning price a limited themed Hulkbuster Bobblehead!
                Be sure to come dressed as your favorite superhero for what is to be a truly marvelous night! Buy your tickets soon and join in on the superhero action!
              </MDBCardText>


            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>


        </div>


    )
  }

}

export default Home