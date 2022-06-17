import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import GameAction from '../store/actions/GameAction'
const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GameAction())
  }, [])
  return <div>Home</div>
}

export default Home
