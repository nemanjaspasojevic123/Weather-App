import React, { useState } from 'react';
import './App.css';
import { getAllData, getForecast } from './services/WeatherServices';
import { Card } from './Card';
import { Forecast } from './Forecast';

function App() {
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState('')
  const [city, setCity] = useState('')
  const [cityInput, setCityInput] = useState('')
  const [forecast, setForecast] = useState([])


  const handleClick = () => {
    if(cityInput === '' || cityInput === ' '){
      alert('Please enter city name')
      return
    }else{
    getAllData(cityInput).then(response => {
      setWeather(response.weather);
      setTemp(response.main)
      setCity(response.name)
      })
    }
  };

  const handleForecast = () => {
    getForecast(cityInput).then(res => {
      setForecast(res.list)
    })
  }

  return (
    <>
      <div className="form">
        <div><h1 className="header">Weather App</h1></div>
        <div>
          <input type="text" className="input-form" onChange={e => setCityInput(e.target.value)} placeholder="City name"></input>
          <button className="btn" onClick={e => handleClick(e)}>Get Weather</button>
        </div><br></br>
        <div><span className="city">{city}</span></div>
        <div>
          <p className="num"><span className="num-temp">{temp.temp}</span> °C</p>
          <p>Feels like: <span className="num">{temp.feels_like}</span> °C</p>
        </div>
        <div>
          {weather.map(el => <Card info={el} key={el.id} />)}
        </div><br></br><br></br>
        <div>
          <button className="btn-down" onClick={e => handleForecast(e)}>Get forecast for next 5 days</button>
        </div>
      </div>
      <div>
        {forecast.map(el => <Forecast forecast={el} key={el.dt} />)}
      </div>
    </>
  );
}

export default App;
