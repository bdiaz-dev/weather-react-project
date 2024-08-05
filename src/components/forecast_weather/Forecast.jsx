import { useEffect, useRef } from 'react'
import dateFix from '../../libs/datefix'

export default function Forecast ({
  forecastWeatherData,
  lang,
  city = ''
}) {
  const mainRef = useRef()
  useEffect(() => {
    mainRef.current.classList.remove('noOpacity')
    const time = setTimeout(() => {
      mainRef.current.classList.add('noOpacity')
    }, 2000)
    return () => clearTimeout(time)
  }, [city])
  return (
    <>
      <h3>{lang === 'en' ? 'Forecast Weather' : 'Pronóstico'}</h3>
      <ul id='forecastList' ref={mainRef}>
        {forecastWeatherData.list.map((item, i) => (
          <li key={item.dt}>
            <div>
              <b>{dateFix({ dt: (item.dt_txt.substring(0, 10)), lang })}</b>
              <b>{item.dt_txt.substring(11, 16)}</b>
            </div>
            <div>
              <img src={`${import.meta.env.VITE_ICONS_URL_BASE}${item.weather[0].icon}.png`} alt='weather icon' />
              <span>{item.weather[0].description}</span>
              <span>{` ${Math.round(item.main.temp)}º`}</span>
            </div>
            {
              (i + 1 < forecastWeatherData.list.length) &&
                <b className='forecastArrow'>
                  {'>'}
                </b>
            }
          </li>
        ))}
      </ul>
    </>
  )
}
