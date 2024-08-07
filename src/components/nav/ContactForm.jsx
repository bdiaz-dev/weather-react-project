import { useEffect, useRef, useState } from 'react'

export default function ContactForm ({
  lang,
  detailsRef
}) {
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [nameInput, setNameInput] = useState('')
  const [birthdateInput, setBirthdateInput] = useState('')
  const [cityInput, setCityInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [phoneInput, setPhoneInput] = useState('')
  const [sendTitle, setSendTitle] = useState('')
  const emailRef = useRef()

  useEffect(() => {
    const title = buttonDisabled
      ? lang === 'en'
        ? 'Fill all data to send'
        : 'Rellene toda la información para enviar'
      : lang === 'en'
        ? 'Send contact request'
        : 'Envíe la solicitud de contacto'
    setSendTitle(title)
  }, [lang, buttonDisabled])

  useEffect(() => {
    const allInputsFilled =
      nameInput !== '' &&
      birthdateInput !== '' &&
      cityInput !== '' &&
      emailInput !== '' &&
      phoneInput !== ''

    setButtonDisabled(!allInputsFilled)
  }, [nameInput, birthdateInput, cityInput, emailInput, phoneInput])

  const handleSend = (e) => {
    const text = {
      en: {
        question: 'Is this your right data?',
        name: 'Your name is',
        birth: 'You has birth on',
        lives: 'You lives on',
        email: 'Your email is',
        phone: 'And your phone is',
        contact: 'Thanks, we will contact you soon.',
        emailError: 'Please, verify your email',
        phoneError: 'Please, verify your phone'
      },
      es: {
        question: 'Estos son tus datos?',
        name: 'Te llamas',
        birth: 'Naciste el',
        lives: 'Vives en',
        email: 'Tu correo es',
        phone: 'Y tu teléfono es',
        contact: 'Gracias, pronto nos pondremos en contacto.',
        emailError: 'Por favor, verifica tu correo',
        phoneError: 'Por favor, verifica tu teléfono'
      }
    }
    const phoneRegex = /^[0-9]{9,}$/
    if (!phoneRegex.test(phoneInput)) {
      e.preventDefault()
      window.alert(text[lang].phoneError)
      return
    }

    if (!emailRef.current.checkValidity()) {
      e.preventDefault()
      window.alert(text[lang].emailError)
      return
    }

    const userConfirmed = window.confirm(`${text[lang].question} \n \n ${text[lang].name} ${nameInput} \n ${text[lang].birth} ${birthdateInput} \n ${text[lang].lives} ${cityInput} \n ${text[lang].email} ${emailInput} \n ${text[lang].phone} ${phoneInput}`)

    if (userConfirmed) {
      window.alert(text[lang].contact)
    } else {
      e.preventDefault()
    }
  }

  return (
    <details
      ref={detailsRef}
      id='contactForm'
    >
      <summary>{lang === 'en' ? 'Contact us' : 'Contáctanos'}</summary>
      <form action=''>

        <label>{lang === 'en' ? 'Name' : 'Nombre'}</label>
        <input
          type='text'
          value={nameInput}
          onChange={(e) => { setNameInput(e.target.value) }}
          placeholder='John Doe'
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
          ref={emailRef}
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
          style={{ borderColor: (buttonDisabled ? '#1a1a1a' : 'white') }}
          onClick={(e) => { handleSend(e) }}
          title={sendTitle}
          className='formButton'
        >
          {lang === 'en' ? 'Send' : 'Enviar'}
        </button>
      </form>
    </details>
  )
}
