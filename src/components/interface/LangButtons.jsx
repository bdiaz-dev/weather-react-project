export default function LangButtons ({
  lang,
  setLang
}) {
  return (
    <div id='langButtonsContainer'>
      <button
        id='langButton'
        className={lang === 'en' ? 'langActive' : ''}
        onClick={() => { setLang('en') }}
      >
        ENG
      </button>
      <button
        id='langButton'
        className={lang === 'es' ? 'langActive' : ''}
        onClick={() => { setLang('es') }}
      >
        ESP
      </button>
    </div>
  )
}
