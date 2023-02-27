import React from 'react'


import "./WeatherDetail.css"
const WeatherDetail = ({weatherDetail,searchBar}) => {


  return (
    <div className='weatherDetailContainer'>
         <div className='CityNameContainer detailWrapper'>
            <span>Weather Details of City :</span>
            <span>{searchBar}</span>
         </div>
         <div className='detailWrapper'>
            <span>Current Temperature: </span>
            <span>{(weatherDetail.main.temp-273.15).toFixed(2)} &#8451;</span>
         </div>
         <div className='detailWrapper'>
            <span>Temperature Range: </span>
            <span>{(weatherDetail.main.temp_min-273.15).toFixed(2)} &#8451;</span>
            <span> to {(weatherDetail.main.temp_max-273.15).toFixed(2)} &#8451;</span>
         </div>
         <div className='detailWrapper'>
            <span>Humidity: </span>
            <span>{weatherDetail.main.humidity} </span>
         </div>
         <div className='detailWrapper'>
             <span>Sea Level: </span>
            <span>1002 </span>
         </div>
         <div className='detailWrapper'>
            <span>Ground Level: </span>
            <span>963</span>
         </div>
    </div>
  )
}

export default WeatherDetail