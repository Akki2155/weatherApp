import React from 'react'

import "./PreviousCity.css"
const PreviousCity = ({lastCity}) => {
  return (
    <div className='lastcityContainer'>
        <h3>Last 3 city entries</h3>
        {lastCity.map((city)=> (
            <li>{city}</li>
        ))}
    </div>
  )
}

export default PreviousCity