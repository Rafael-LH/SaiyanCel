import React from 'react'
import useGetImageFirebase from '@hooks/generals/useGetImageFirebase'

const ListOfProducts = ({ data }) => {
  const { url } = useGetImageFirebase(data.image)
  return (
    <article key={index}>
      <figure>
        <img src={item} alt="Product" />
      </figure>
      <b>
        <h1>Iphone 11 Pro</h1>
      </b>
      <p>Antes: $12500</p>
      <p>Ahora $9000</p>
    </article>
  )
}
export default ListOfProducts