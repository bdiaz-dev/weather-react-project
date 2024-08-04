import { useEffect, useRef } from 'react'

export default function WeatherMain ({
  city = 'City',
  weatherData
}) {
  const mainRef = useRef()
  useEffect(() => {
    mainRef.current.classList.remove('noOpacity')
    const time = setTimeout(() => {
      mainRef.current.classList.add('noOpacity')
    }, 1000)
    return () => clearTimeout(time)
  }, [city])
  return (
    <div
      id='weatherMain'
      ref={mainRef}
    >
      <h2>{city + ', ' + weatherData.sys.country}</h2>
      <img
        src={`${import.meta.env.VITE_ICONS_URL_BASE}${weatherData.weather[0].icon}@4x.png`}
        alt='weather icon'
      />
      <p id='weatherDescription'>{`${weatherData.weather[0].description} ${Math.round(weatherData.main.temp)}º`}</p>
    </div>

  )
}
