import React from 'react'
import { Section } from './styles'
import imageGameNintendo from '@images/nintendo.jpg'
import imageGamePlayStation from '@images/playstation.jpg'
import imageGameXbox from '@images/xbox.jpg'
import SliderGame from '@components/SliderGame'

const Games = () => {
  const dataNintendo = [imageGameNintendo, imageGameNintendo, imageGameNintendo, imageGameNintendo, imageGameNintendo, imageGameNintendo, imageGameNintendo, imageGameNintendo, imageGameNintendo, imageGameNintendo]
  const dataPayStation = [imageGamePlayStation, imageGamePlayStation, imageGamePlayStation, imageGamePlayStation, imageGamePlayStation, imageGamePlayStation, imageGamePlayStation, imageGamePlayStation, imageGamePlayStation, imageGamePlayStation]
  const dataXbox = [imageGameXbox, imageGameXbox, imageGameXbox, imageGameXbox, imageGameXbox, imageGameXbox, imageGameXbox, imageGameXbox, imageGameXbox, imageGameXbox]
  return (
    <Section>
      <hgroup>
        <h1>Videojuegos</h1>
        <h3>
          Los video juegos han llegado ha Saiyancel sigue con toda la diversion con los mejores titulos
        </h3>
      </hgroup>
      <SliderGame
        style={{ color: 'red' }}
        sectionName="Nintendo"
        data={dataNintendo}
      />
      <SliderGame
        style={{ color: '#0070d1' }}
        sectionName="PlayStation"
        data={dataPayStation}
      />
      <SliderGame
        style={{ color: 'green' }}
        sectionName="Xbox"
        data={dataXbox}
      />
    </Section>
  )
}
export default Games