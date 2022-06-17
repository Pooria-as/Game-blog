const REACT_APP_API_KEY = `bc47d2d88bcc4adc87132c8485ce7114`
const BASE_URL = `https://api.rawg.io/api/`
const POPULAR_GAMES = `games?key=${REACT_APP_API_KEY}`
export const POPULAR_GAMES_URL = `${BASE_URL}${POPULAR_GAMES}`
const date = new Date()
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate()
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

export const POPULAR_GAMES_DATA = `${POPULAR_GAMES_URL}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
export const UPCOMING_GAMES = `${POPULAR_GAMES_URL}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
export const NEW_GAMES = `${POPULAR_GAMES_URL}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`
