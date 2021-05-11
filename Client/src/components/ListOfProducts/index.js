import React from 'react'
import useGetImageFirebase from '@hooks/generals/useGetImageFirebase'
import { P } from './styles'

const ListOfProducts = ({ image, details }) => {
  const { url } = useGetImageFirebase(image)
  return (
    <article>
      <figure>
        <img src={url} alt="Product" />
      </figure>
      <b>
        <h1>{details.name}</h1>
      </b>
      {
        details.discount
          ?
          <>
            <p>Antes: ${details.price}</p>
            <p>Ahora: ${details.price - details.discount}</p>
          </>
          :
          <P>Precio ${details.price}</P>
      }
    </article>
  )
}
export default ListOfProducts