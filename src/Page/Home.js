import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Game from '../components/Games/Game'
import GameAction from '../store/actions/GameAction'
import { Circles } from 'react-loader-spinner'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Detial from '../components/Games/Detial'
const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GameAction())
  }, [dispatch])
  const games = useSelector(state => state.Games)
  console.log(games)
  return (
    <div>
      <Detial />

      <h3 style={{ textAlign: 'center' }}>UpComing Games</h3>
      <Games>
        {games.upcomming.length != 0 ? (
          games.upcomming.map(({ id, name, released, background_image }) => (
            <Game
              key={id}
              id={id}
              name={name}
              released={released}
              img={background_image}
            />
          ))
        ) : (
          <Spiner>
            <Circles color='#00BFFF' height={80} width={80} />
          </Spiner>
        )}
      </Games>
      <h3 style={{ textAlign: 'center' }}>Popular Games</h3>
      <Games>
        {games.popular.length != 0 ? (
          games.popular.map(({ id, name, released, background_image }) => (
            <Game
              key={id}
              id={id}
              name={name}
              released={released}
              img={background_image}
            />
          ))
        ) : (
          <Spiner>
            <Circles color='#00BFFF' height={80} width={80} />
          </Spiner>
        )}
      </Games>
      <h3 style={{ textAlign: 'center' }}>New Games</h3>
      <Games>
        {games.newgames.length != 0 ? (
          games.newgames.map(({ id, name, released, background_image }) => (
            <Game
              key={id}
              id={id}
              name={name}
              released={released}
              img={background_image}
            />
          ))
        ) : (
          <Spiner>
            <Circles color='#00BFFF' height={80} width={80} />
          </Spiner>
        )}
      </Games>
    </div>
  )
}

const Games = styled(motion.div)`
  padding: 2rem 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(401px, 1fr));
  grid-column-gap: 1rem;
`

const Spiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export default Home
