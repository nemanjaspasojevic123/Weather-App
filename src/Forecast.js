import React from 'react'

export const Forecast = ({ forecast }) => {
    let date = new Date(forecast.dt * 1000)
    return (
        <div className="forecast">
            <div className="form-forecast" >
                <div className="date">{date.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                })}</div>
                <div className="temp">Temperature: <span className="num">{forecast.main.temp}</span> °C</div>
                <div className="icon">{forecast.weather.map(el => {
                    return <div key={el.id}>
                        <div><img src={`http://openweathermap.org/img/wn/${el.icon}@2x.png`} alt="No img"></img></div>
                        <div>{el.main}</div></div>
                })}
                </div>
            </div>
        </div>
    )
}