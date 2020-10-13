import React from 'react'
import './Hala.css'

const HallFiveColGrid = (props) => {

  const renderElements = () => {
    const gridElements = props.children.map((element, i) =>{
      return(
      <div key={i} className="backGround">

        {element}
      </div>
      )
    })
    return gridElements.splice(0, 5 )
    //.splice(0, 5)

  }


  return (
    <div>
       {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div >
        
        {renderElements()}
        
      </div>
    </div>
  )
}

export default HallFiveColGrid