const cities = [
  {
    name: {
      en: 'Lisbon',
      es: 'Lisboa'
    }
  },
  {
    name: {
      en: 'New York',
      es: 'Nueva York'
    }
  },
  {
    name: {
      en: 'London',
      es: 'Londres'
    }
  }
]

const setCityName = ({ selectedCity, lang }) => {
  if (lang === 'en') return selectedCity
  const cityObject = cities.find(city => city.name.en === selectedCity)
  return cityObject.name.es
}

export { cities, setCityName }
