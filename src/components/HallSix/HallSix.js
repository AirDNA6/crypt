import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config'

import HeroImage from '../elements/HeroImage/HeroImage'
import HallSixMovieThumb from './HallSixMovieThumb'
import HallSixColGrid from './HallSixColGrid'

import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import './Hala.css'

class HallSix extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,

    totalResults: 0,
  //  vote_count: 0
  }


  componentDidMount() {
    this.setState({
      loading: true
    })
    //https://api.themoviedb.org/3/genre/movie/list?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US

    // const endpoint = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    //
    //https://api.themoviedb.org/3/discover/movie?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&with_genres=28
    //`${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`
    const endpoint = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&with_genres=35&page=1`
    this.fetchItems(endpoint)
  }

  //   loadMoreItems = () => {
  //   let endpoint = ''
  //   this.setState({
  //     loading: true
  //   })

  //   if (this.state.searchTerm === '') {
  //     endpoint = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`
  //   } else {
  //     endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`
  //   }

  //   this.fetchItems(endpoint)

  // }


  fetchItems = (endpoint) => {
    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      this.setState({
        movies: [...this.state.movies, ...result.results],
        heroImage: this.state.heroImage || result.results[0],
        loading: false,
        currentPage: result.page,
        totalPages: result.total_pages,
        totalResults: result.total_results,
       // vote_count: result.vote_count
      })
    })
    .catch(error => console.error('Error:', error))
  }

  render() {
    return (
      <div >
        {this.state.heroImage ?
          <div>
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
              title={this.state.heroImage.original_title}
              text={this.state.heroImage.overview}
               />
          </div> : null}
        <Container className="mt-2 mb-3">
          <Row>
            <Col sm={12}>
        <HallSixColGrid
        //: ${this.state.totalResults}
        header={`Fantasy Movies`}
            loading={this.state.loading}
        //    vote_count={this.state.vote_count}
            >
            {this.state.movies.map ( (element, i) => {
              return <HallSixMovieThumb
                        key={i}
                        clickable={true}
                        image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.png'}
                        movieId={element.id}
                        movieName={element.original_title}
                       vote_count={element.vote_count}
                       overview={element.overview}
                       date={element.release_date}
                       vote_average={element.vote_average}
                     />
            })}
          </HallSixColGrid>
          </Col>
          </Row>
        </Container>


      </div>
    )
  }

}

export default HallSix