import { GAME } from '../types/Types'

const InitialState = {
  game: {}
}
const GameDetailReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GAME:
      return {
        ...action.payload
      }
    default:
      return { ...state }
  }
}

export default GameDetailReducer
