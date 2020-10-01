import React from 'react'
import './Hala.css'

const HallOneColGrid = (props) => {

  const renderElements = () => {
    const gridElements = props.children.map((element, i) =>{
      return(
      <div key={i} className="rmdb-grid-element">

        {element}
      </div>
      )
    })
    return gridElements.splice(0, 5 )
    //.splice(0, 5)

  }


  return (
    <div className="rmdb-grid">
     <h1>Family</h1>
      <div className="rmdb-grid-content">
        
        {renderElements()}
      </div>
    </div>
  )
}

export default HallOneColGrid