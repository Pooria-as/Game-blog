import axios from 'axios'
import { GAME_DETAIL_URL } from '../../utilities/Url'
import { GAME } from '../types/Types'

export const GameDetailAction = id => async dispatch => {
  const GameDetail = await axios.get(GAME_DETAIL_URL(id)).then(res => res.data)

  dispatch({
    type: GAME,
    payload: {
      Game: GameDetail
    }
  })
}
