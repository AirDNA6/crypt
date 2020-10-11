import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock, faDollarSign, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { calcTime, convertMoney } from "../../helpers.js"
import './MovieInfoBar.css'

const MovieInfoBar = (props) => {
  return (

    <div style={{backgroundColor: '#1c1c1c'}}>
          <div className="rmdb-movieinfobar">
      <div className="rmdb-movieinfobar-content">

        <div className="rmdb-movieinfobar-content-col">
          <FontAwesomeIcon className="fa-time" icon={faClock} name="clock-o" size="2x" />
          <span className="rmdb-movieinfobar-info">Running time: {calcTime(props.time)}</span>
        </div>

        <div className="rmdb-movieinfobar-content-col">
          <FontAwesomeIcon className="fa-budget" icon={faDollarSign} name="money" size="2x" />
          <span className="rmdb-movieinfobar-info">
            Budget: {convertMoney(props.budget)}
          </span>
          </div>

          <div className="rmdb-movieinfobar-content-col">
            <FontAwesomeIcon className="fa-revenue" icon={faTicketAlt} name="ticket" size="2x" />
            <span className="rmdb-movieinfobar-info">Revenue: {convertMoney(props.revenue)}</span>
          </div>
      </div>
    </div>


    <hr style={{ backgroundColor: 'white'}}/>

   

    <div className="rmdb-movieinfobar">

      <div className="rmdb-movieinfobar-content">
      <div className="rmdb-movieinfobar-content-col">

            <FontAwesomeIcon className="fa-revenue" icon={faTicketAlt} name="ticket" size="2x" />
            <span className="rmdb-movieinfobar-info">2D: $3.50</span>
          </div>

        <div className="rmdb-movieinfobar-content-col">
            <FontAwesomeIcon className="fa-revenue" icon={faTicketAlt} name="ticket" size="2x" />
            <span className="rmdb-movieinfobar-info">3D: $6.50</span>
          </div>

          <div className="rmdb-movieinfobar-content-col">
            <FontAwesomeIcon className="fa-revenue" icon={faTicketAlt} name="ticket" size="2x" />
            <span className="rmdb-movieinfobar-info">4D: $10.50</span>
          </div>

      </div>
    </div>


    </div>

      




    
  )
}

export default MovieInfoBar