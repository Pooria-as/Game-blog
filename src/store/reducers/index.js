import { combineReducers } from 'redux'
import GameDetailReducer from './GameDetailReducer'
import GameReducer from './GameReducer'

const RootReducer = combineReducers({
  Games: GameReducer,
  Detail:GameDetailReducer
})

export default RootReducer
