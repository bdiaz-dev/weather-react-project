/* eslint-disable import/no-absolute-path */
import './App.css'
import { useEffect, useRef, useState } from 'react'
import WeatherMain from './components/actual_weather/WeatherMain'
import WeatherDetails from './components/actual_weather/WeatherDetails'
import Forecast from './components/forecast_weather/Forecast'
import LangButtons from './components/interface/LangButtons'
import Cities from './components/nav/Cities'
import ContactForm from './components/nav/ContactForm'
import todayDate from './libs/todayDate'
import { setCityName } from './libs/cities'
import MenuButton from './components/nav/MenuButton'
import PageHead from './components/helmet/PageHead'

function App () {
  const [lang, setLang] = useState('en')
  const [city, setCity] = useState('Lisbon')
  const [forecastWeatherData, setForecastWeatherData] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef()
  const buttonRef = useRef()

  useEffect(() => {
    const fetchForecastWeather = async (city) => {
      const urlForFetch = `${import.meta.env.VITE_URL_BASE}forecast?q=${city}&lang=${lang}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
      const res = await fetch(urlForFetch)
      const data = await res.json()
      setForecastWeatherData(data)
    }
    const fetchWeather = async (city) => {
      const urlForFetch = `${import.meta.env.VITE_URL_BASE}weather?q=${city}&lang=${lang}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
      const res = await fetch(urlForFetch)
      const data = await res.json()
      setWeatherData(data)
    }
    fetchForecastWeather(city)
    fetchWeather(city)
  }, [city, lang])

  const handleOpenMenu = () => {
    menuRef.current.classList.toggle('openMenu')
    buttonRef.current.classList.toggle('open')
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {
        weatherData &&
          <PageHead
            title={`${weatherData.weather[0].description} ${Math.round(weatherData.main.temp)}º`}
            favicon={`${import.meta.env.VITE_ICONS_URL_BASE}${weatherData.weather[0].icon}.png`}
          />
      }
      <main>
        <MenuButton
          openMenu={handleOpenMenu}
          buttonRef={buttonRef}
        />
        <LangButtons
          lang={lang}
          setLang={setLang}
        />
        <nav ref={menuRef}>
          <Cities
            setCity={setCity}
            selectedCity={city}
            lang={lang}
            closeMenu={handleOpenMenu}
          />
          <hr style={{ width: '85%' }} />
          <ContactForm
            lang={lang}
          />

        </nav>
        <article>
          <h1>Weather App</h1>
          <h2>{todayDate(lang)}</h2>

          {/* ACTUAL WEATHER */}
          {
            weatherData &&
              <section>
                <WeatherMain
                  city={setCityName({ selectedCity: city, lang })}
                  weatherData={weatherData}
                />
                <WeatherDetails
                  weatherData={weatherData}
                  lang={lang}
                  city={setCityName({ selectedCity: city, lang })}
                />
              </section>
          }

          {/* FORECAST WEATHER */}
          {
            forecastWeatherData &&
              <section>
                <Forecast
                  forecastWeatherData={forecastWeatherData}
                  lang={lang}
                  city={setCityName({ selectedCity: city, lang })}
                />
              </section>
          }
        </article>
      </main>
    </>
  )
}

export default App
