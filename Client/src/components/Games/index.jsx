import React from 'react'
import { Section, Article, ContainerItems, H4 } from './styles'
// import imageGamePlayStation from '@images/playstation.jpg'
// import imageGameXbox from '@images/xbox.jpg'
import SliderGame from '@components/SliderGame'
import useGetProducts from '@hooks/generals/useGetProducts'

const Games = () => {
  const { products } = useGetProducts({ query: '?category=game' })
  return (
    <Section>
      <hgroup>
        <h1>Videojuegos</h1>
        <h3>
          Los video juegos han llegado ha Saiyancel sigue con toda la diversion con los mejores titulos
        </h3>
      </hgroup>
      <Article>
        <H4 style={{ color: 'red' }}>Nintendo</H4>
        <ContainerItems>
          {products.map(item => item.brand === 'nintendo' && <SliderGame key={item._id} image={item.image} {...item} />)}
        </ContainerItems>
      </Article>
      <Article>
        <H4 style={{ color: '#0070d1' }}>PlayStation</H4>
        <ContainerItems>
          {products.map(item => item.brand === 'sony' && <SliderGame key={item._id} image={item.image} {...item} />)}
        </ContainerItems>
      </Article>
      <Article>
        <H4 style={{ color: 'green' }}> Xbox</H4>
        <ContainerItems>
          {products.map(item => item.brand === 'microsoft' && <SliderGame key={item._id} image={item.image} {...item} />)}
        </ContainerItems>
      </Article>
    </Section>
  )
}
export default Games