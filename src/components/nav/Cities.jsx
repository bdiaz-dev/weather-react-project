import { cities } from '../../libs/cities'

export default function Cities ({
  setCity,
  selectedCity,
  lang,
  closeMenu
}) {
  const isActive = (ct) => {
    return selectedCity === ct.name.en
  }
  return (
    <ul id='cities'>
      {
        cities.map((city) => (
          <li
            key={city.name.en}
            onClick={() => {
              setCity(city.name.en)
              closeMenu()
            }}
            className={isActive(city) ? 'cityActive' : ''}
          >
            {city.name[lang]}
          </li>
        ))
      }
    </ul>
  )
}
