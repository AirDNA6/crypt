import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config'

import HeroImage from '../elements/HeroImage/HeroImage'
import SearchBar from './SearchBar'
import FourColGrid from '../elements/FourColGrid/FourColGrid'
import MovieThumb from '../elements/MovieThumb/MovieThumb'
import LoadMoreBtn from './LoadMoreBtn'
import Spinner from '../elements/Spinner/Spinner'


import './Home.css'

class Marvel extends Component {
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
    const endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=420`
    this.fetchItems(endpoint)
  }


  searchItems = (searchTerm) => {
    console.log(searchTerm);
    let endpoint = ''
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    })

    if (searchTerm === '') {
      const endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=420`
    } else {

      endpoint = ` ${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}
    `
    
    }

    this.fetchItems(endpoint)

  }

  loadMoreItems = () => {
    let endpoint = ''
    this.setState({
      loading: true
    })

    if (this.state.searchTerm === '') {
      endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=420&page=${this.state.currentPage + 1}`
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`
    }

    this.fetchItems(endpoint)

  }

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
            <SearchBar callback={this.searchItems} />
          </div> : null}
        <div className="rmdb-home-grid">
        <FourColGrid
            header={this.state.searchTerm ? `Search Result` : `Now playing`}
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
          </FourColGrid>
          {this.state.loading ? <Spinner /> : null}
          {(this.state.currentPage <= this.state.totalPages && !this.state.loading) ? <LoadMoreBtn text="Load More" onClick={this.loadMoreItems}/> : null }
        </div>


      </div>
    )
  }

}

export default Marvel