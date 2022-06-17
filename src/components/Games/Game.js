import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { GameDetailAction } from '../../store/actions/GameDetailAction'

const Game = ({ id, name, released, img }) => {
  const dispatch = useDispatch()
  const game = useSelector(state => state.Detail)
  const GetGameData = id => {
    dispatch(GameDetailAction(id))

  }
  return (
    <GameStyle onClick={() => GetGameData(id)}>
      <h4>{name}</h4>
      <h6>{released}</h6>
      <img src={img} alt={name} width={100} />
    </GameStyle>
  )
}

const GameStyle = styled(motion.div)`
  min-height: 40%;
  text-align: center;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.4rem;
  cursor: pointer;
  h4,
  h6 {
    padding: 0.5rem;
  }
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`

export default Game
