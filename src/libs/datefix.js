export default function dateFix ({
  dt,
  lang
}) {
  const months = {
    en: ['Ja', 'Fe', 'Ma', 'Ap', 'My', 'Jn', 'Jl', 'Au', 'Se', 'Oc', 'No', 'De'],
    es: ['En', 'Fe', 'Mr', 'Ab', 'My', 'Jn', 'Jl', 'Ag', 'Se', 'Oc', 'No', 'Di']
  }
  const day = dt.substring(8, 10)
  const month = months[lang][(Number(dt.substring(5, 7)) - 1)]
  const result = `${day} ${month}`
  return result
}
