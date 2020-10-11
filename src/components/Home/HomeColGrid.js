import React from 'react'
import './HomeColGrid.css'

const HomeColGrid = (props) => {

  const renderElements = () => {
    const gridElements = props.children.map((element, i) =>{
      return(
      <div key={i} className="rmdb-grid-element">

        {element}
      </div>
      )
    })
    return gridElements.splice(0, 10)
    //.splice(0, 5)

  }


  return (
    <div className="rmdb-grid">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="rmdb-grid-content">
        
        {renderElements()}
      </div>
    </div>
  )
}

export default HomeColGrid