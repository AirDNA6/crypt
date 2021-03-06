import React, { Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css'

class SearchBar extends Component {
  state = {
      value: ''
    }

    timeout = null

    doSearch = (e) => {
      this.setState({
        value: e.target.value
      })
      clearTimeout(this.timeout)
      
      this.timeout = setTimeout( () =>{
        this.props.callback(this.state.value)
      }, 500)
    }
  

  render() {
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FontAwesomeIcon className="rmdb-fa-search" icon={faSearch} size="2x"/>
          <input 
          type="text" 
          className="rmdb-searchbar-input"
          placeholder="Search" 
          onChange={this.doSearch} 
          value={this.state.value}/>
        </div>
      </div>
    )
  }

}

export default SearchBar