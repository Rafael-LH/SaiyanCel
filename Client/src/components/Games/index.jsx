import React from 'react'
import './styles.scss'

import SliderGame from '@components/SliderGame'
import useGetProducts from '@hooks/generals/useGetProducts'

const Games = () => {
  const { products } = useGetProducts({ query: '?category=game' })
  return (
    <section className="layoutMaxWidth container-games">
      <hgroup>
        <h1 className="title title--md">Videojuegos</h1>
        <p className="text-align--center">
          <b>
            Los video juegos han llegado ha Saiyancel sigue con toda la diversion con los mejores titulos
          </b>
        </p>
      </hgroup>
      <article>
        <h4 className="mb-2" style={{ color: 'red' }}>Nintendo</h4>
        <div className="container-games__items flex">
          {products.map(item => item.brand === 'nintendo' && <SliderGame key={item._id} image={item.image} {...item} />)}
        </div>
      </article>
      <article>
        <h4 className="mb-2" style={{ color: '#0070d1' }}>PlayStation</h4>
        <div className="container-games__items flex">
          {products.map(item => item.brand === 'sony' && <SliderGame key={item._id} image={item.image} {...item} />)}
        </div>
      </article>
      <article>
        <h4 className="mb-2" style={{ color: 'green' }}> Xbox</h4>
        <div className="container-games__items flex">
          {products.map(item => item.brand === 'microsoft' && <SliderGame key={item._id} image={item.image} {...item} />)}
        </div>
      </article>
    </section>
  )
}
export default Games