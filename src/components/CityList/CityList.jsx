import React from 'react'


import "./CityList.css"

const CityList = ({city,setCityList,setSearchBar,setLocationPoints,locationPoints}) => {


    const handleCityClick=()=>{
        setCityList([]);
        setSearchBar(city.name)
        setLocationPoints({...locationPoints, lat:city.lat, lon:city.lon})
      
    }

  return (
    <div className='cityNameContainer' onClick={()=> handleCityClick()}>
      <span>{city.name},</span>
      <span>{city.state},</span>
      <span>{city.country}</span>
    </div>
  )
}

export default CityList