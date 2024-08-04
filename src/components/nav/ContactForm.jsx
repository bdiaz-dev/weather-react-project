import { useEffect, useState } from 'react'

export default function ContactForm ({
  lang
}) {
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [nameInput, setNameInput] = useState('')
  const [birthdateInput, setBirthdateInput] = useState('')
  const [cityInput, setCityInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [phoneInput, setPhoneInput] = useState('')

  useEffect(() => {
    const allInputsFilled =
      nameInput !== '' &&
      birthdateInput !== '' &&
      cityInput !== '' &&
      emailInput !== '' &&
      phoneInput !== ''

    setButtonDisabled(!allInputsFilled)
  }, [nameInput, birthdateInput, cityInput, emailInput, phoneInput])

  const handleSend = () => {
    const userConfirmed = window.confirm(`Is this your right data? \n Your name is ${nameInput} \n You has birth on ${birthdateInput} \n You lives on ${cityInput} \n Your email is ${emailInput} \n And your phone is ${phoneInput}`)
    if (userConfirmed) {
      window.alert('Thanks, we will contact you soon.')
    }
  }

  return (
    <details id='contactForm'>
      <summary>{lang === 'en' ? 'Contact us' : 'Contactanos'}</summary>
      <form action=''>

        <label>{lang === 'en' ? 'Name' : 'Nombre'}</label>
        <input
          type='text'
          value={nameInput}
          onChange={(e) => { setNameInput(e.target.value) }}
          placeholder='Jhon Doe'
        />

        <label>{lang === 'en' ? 'Birthday' : 'Fecha de nac.'}</label>
        <input
          type='date'
          value={birthdateInput}
          onChange={(e) => { setBirthdateInput(e.target.value) }}
        />

        <label>{lang === 'en' ? 'Current City' : 'Ciudad'}</label>
        <input
          type='text'
          value={cityInput}
          onChange={(e) => { setCityInput(e.target.value) }}
          placeholder='London'
        />

        <label>email</label>
        <input
          type='email'
          value={emailInput}
          onChange={(e) => { setEmailInput(e.target.value) }}
          placeholder='your@email.es'
        />

        <label>{lang === 'en' ? 'Phone number' : 'Teléfono'}</label>
        <input
          type='text'
          value={phoneInput}
          onChange={(e) => { setPhoneInput(e.target.value) }}
          placeholder='600600600'
        />
        <button
          disabled={buttonDisabled}
          style={{ borderColor: (buttonDisabled ? '#1a1a1a' : '') }}
          onClick={handleSend}
        >
          {lang === 'en' ? 'Send' : 'Enviar'}
        </button>
      </form>
    </details>
  )
}
