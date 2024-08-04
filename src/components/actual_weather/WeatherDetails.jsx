import { useEffect, useRef } from 'react'
import windDirection from '../../libs/windDirection'

export default function WeatherDetails ({
  weatherData,
  lang,
  city = 'city'
}) {
  const maxMinSVG = 'https://www.svgrepo.com/show/51585/temperature.svg'
  const windSVG = 'https://www.svgrepo.com/show/532896/wind.svg'
  const feelSVG = 'https://www.svgrepo.com/show/341126/temperature-feels-like.svg'
  const humiditySVG = 'https://www.svgrepo.com/show/521708/humidity.svg'

  const mainRef = useRef()

  useEffect(() => {
    mainRef.current.classList.remove('noOpacity')
    const time = setTimeout(() => {
      mainRef.current.classList.add('noOpacity')
    }, 1500)
    return () => clearTimeout(time)
  }, [city])

  return (
    <ul id='weatherDetails' ref={mainRef}>
      <li>
        <img src={maxMinSVG} className='detailsSVG' />
        <b>Max/Min</b>
        <div>
          <span>{`${Math.round(weatherData.main.temp_max)}º`}</span>
          <span>{`${Math.round(weatherData.main.temp_min)}º`}</span>
        </div>
      </li>
      <li>
        <img src={feelSVG} className='detailsSVG' />
        <b>{lang === 'en' ? 'Feels Like' : 'Sensación térmica'}</b>
        <div>
          <span>{`${Math.round(weatherData.main.feels_like)}º`}</span>
        </div>
      </li>
      <li>
        <img src={windSVG} className='detailsSVG' />
        <b>{lang === 'en' ? 'Wind' : 'Viento'}</b>
        <div>
          <span>{`${Math.round(weatherData.wind.speed)} Km/h`}</span>
          <span>{windDirection(Number(weatherData.wind.deg))}</span>
        </div>
      </li>
      <li>
        <img src={humiditySVG} className='detailsSVG' />
        <b>{lang === 'en' ? 'Humidity' : 'Humedad'}</b>
        <div>
          <span>{`${Math.round(weatherData.main.humidity)}%`}</span>
        </div>
      </li>
    </ul>
  )
}
