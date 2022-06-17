import axios from 'axios'
import { NEW_GAMES, POPULAR_GAMES_DATA, UPCOMING_GAMES } from '../../utilities/Url'
import { GAMES } from '../types/Types'

const GameAction = () => async dispatch => {
  const Populargames = await axios.get(POPULAR_GAMES_DATA).then(res => res.data)
  const newgames = await axios.get(NEW_GAMES).then(res => res.data)
  const upcomming = await axios.get(UPCOMING_GAMES).then(res => res.data)
  dispatch({
    type: GAMES,
    payload: {
      popular: Populargames.results,
      upcomming: upcomming.results,
      newgames: newgames.results
    }
  })
}

export default GameAction
