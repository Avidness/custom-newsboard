import React from 'react'

const Weather = props => {
  return (
    <iframe
      id="forecast_embed"
      frameborder="0"
      height="245"
      width="1000px"
      src="//forecast.io/embed/#lat=40.766460&lon=-73.986150&name=Hell's Kitchen"
    ></iframe>
  )
}

export default Weather
