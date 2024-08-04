export default function todayDate (lang) {
  const todayDate = new Date()
  const months = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  }
  const weekDays = {
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    es: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  }
  const weekDay = weekDays[lang][todayDate.getDay()]
  const month = months[lang][todayDate.getMonth()]
  return (`${weekDay} ${todayDate.getDate()} ${month} ${todayDate.getFullYear()}`)
}
