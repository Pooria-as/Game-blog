import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Detial = () => {
  const { Game } = useSelector(state => state.Detail)
  console.log(Game)
  return (
    <CardShadow>
      <Detail>
        <Stats>
          <div className='Ratting'>
            <h3>
              {Game.name}
            </h3>
            <h5>{Game.rating}</h5>

            <Info>
              <h2>Platform</h2>
              <Platforms>
                {Game.platforms.map(item => (
                  <h3>{item.platform.name}</h3>
                ))}
              </Platforms>
            </Info>
          </div>
        </Stats>
        <Media>
          <img src={Game.background_image} />
         
        </Media>
        <Description>{Game.description}</Description>
        <img src={Game.background_image_additional} />
          <h5>Official Web Site : {Game.website}</h5>
          <h4>
            Game Play time : {Game.playtime} 
          </h4>
      </Detail>
    </CardShadow>
  )
}

const CardShadow = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 1rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`
const Info = styled(motion.div)`
  text-align: center;
`

const Media = styled(motion.div)`
  margin-top: 1rem;
  img {
    width: 100%;
  }
`

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  img {
    margin-left: 3rem;
  }
`

const Description = styled(motion.div)`
  margin: 1rem ;
`

export default Detial
