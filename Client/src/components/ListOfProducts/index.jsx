import React from 'react'
import useGetImageFirebase from '@hooks/generals/useGetImageFirebase'
import './styles.scss'

const ListOfProducts = ({ image, details }) => {
  const { url } = useGetImageFirebase(image)
  return (
    <article className="container-product grid-12 grid-md-6 grid-lg-4 text-align--center">
      <figure className="text-align--center">
        <img className="container-product__image" src={url} alt="Product" />
      </figure>
      <b>
        <h1>{details.name}</h1>
      </b>
      {
        details.discount
          ?
          <>
            <p className="before-price">Antes: ${details.price}</p>
            <p>Ahora: ${details.price - details.discount}</p>
          </>
          :
          <p className="price">Precio ${details.price}</p>
      }
    </article>
  )
}
export default ListOfProducts