import { GAMES } from '../types/Types'

const InitialState = {
  popular: [],
  newgames: [],
  upcomming: []
}
const GameReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GAMES:
      return {
        ...state,
        ...action.payload
      }
    default:
      return { ...state }
  }
}

export default GameReducer
