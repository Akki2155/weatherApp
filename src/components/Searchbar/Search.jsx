import React, { useState } from 'react'
import CityList from "../../components/CityList/CityList.jsx";
import WeatherDetail from "../../components/WeatherDetail/WeatherDetail.jsx";
import axios from 'axios';

import  "./Search.css"
import PreviousCity from '../PreviousCity/PreviousCity.jsx';
const Search = () => {

    const [searchBar, setSearchBar]=useState("");
    const [cityList, setCityList]=useState([]);
    const [locationPoints, setLocationPoints]=useState({lat:"", lon:""})
    const [weatherDetail, setWeatherDetail]=useState({});
    const [boolWeacther, setBoolWeather]=useState(false);
    const [ invalidCity, setInvalidCity]=useState(false);

    const [lastCity, setLastCity]=useState([])
   
    const handleSearch=async(e)=>{
        setSearchBar(e.target.value);
        if(e.target.value!==""){
            setCityList([]);
            setLocationPoints({lat:"", lon:""})
            const value=await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=5&appid=11782d65625caffe13e81735efb99910`)
            setBoolWeather(false)
            setInvalidCity(false);
            setCityList(value.data);
        }else{
            setCityList([]);
            setBoolWeather(false)
            setInvalidCity(false);
        }
        
    }

    const handleSearchBtn=async()=>{
        if(searchBar){
            try {
                const value=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${locationPoints.lat}&lon=${locationPoints.lon}&appid=11782d65625caffe13e81735efb99910`)
                setWeatherDetail(value.data)
                setBoolWeather(true)
                if(lastCity.length<3){
                    lastCity.push(searchBar)
                    setLastCity([...lastCity])
                  }else{
                    lastCity.shift()
                    lastCity.push(searchBar)
                    setLastCity([...lastCity])
                  }
                  console.log(lastCity)
            } catch (error) {
                setCityList([]);
                setInvalidCity(true);
            }
        }else{
            alert("Enter the city name first")
        }
    }

  return (
    <div className='inputContainer'>
       <input placeholder='Enter the city Name' value={searchBar} onChange={(e)=> handleSearch(e)}/>
       {cityList.map((city)=> (
          <CityList
            key={city.lat}
            city={city}
            setCityList={setCityList}
            setSearchBar={setSearchBar}
            locationPoints={locationPoints}
            setLocationPoints={setLocationPoints}
            setLastCity={setLastCity}
            lastCity={lastCity}
          />
       ))}
       <button className='searchBtn' onClick={()=> handleSearchBtn()}>Search</button>
       {boolWeacther? <WeatherDetail
            weatherDetail={weatherDetail}
            searchBar={searchBar}
       />
       :
       invalidCity? <>
          <h1 
        style={{
            "color":"#ffe4c4",
            "backgroundColor":"red",
            "marginTop":"80px",
            "width":"100%",
            "fontSize":"48px"
        }}
          >Invalid City Name</h1>
       </>:searchBar=="" && lastCity.length!==0? <PreviousCity lastCity={lastCity} />:null}
    </div>
  )
}

export default Search