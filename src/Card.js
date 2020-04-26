import React from 'react'

export const Card = ({info}) => {
    let {main, icon} = info
    return(
        <div>
            <div className="icon-big"><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="No img"></img></div>
            <div><span className="num">{main}</span></div>
        </div>
    )
}

