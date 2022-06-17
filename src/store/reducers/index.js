import { combineReducers } from 'redux'
import GameReducer from './GameReducer'

const RootReducer = combineReducers({
  Games: GameReducer
})

export default RootReducer
