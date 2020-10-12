import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config'

import HeroImage from '../elements/HeroImage/HeroImage'
import SearchBar from './SearchBar'

import MovieThumb from '../elements/MovieThumb/MovieThumb'
import LoadMoreBtn from './LoadMoreBtn'
import Spinner from '../elements/Spinner/Spinner'
import HomeColGrid from './HomeColGrid'

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
        heroImage: this.state.heroImage || result.results[0],
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
    )
  }

}

export default Home