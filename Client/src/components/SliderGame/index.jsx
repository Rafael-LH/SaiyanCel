import React from 'react'
// import { ContainerInfo, Img, P, H1 } from './styles'
import useGetImageFirebase from '@hooks/generals/useGetImageFirebase'
import './styles.scss'

const SliderGame = ({ image, details }) => {
  const { url } = useGetImageFirebase(image)
  return (
    <div className="container-info flex flex-wrap justify-content--center">
      <figure>
        <img className="container-info__img" src={url} alt={details.name} />
      </figure>
      <p className="text-align--center w100 my-1"><b>{details.name}</b></p>
      <>
        {details.discount ? <p className="price-before">Antes: $12500</p> : ''}
        <p>{details.discount ? 'Ahora' : 'Precio'} ${details.price}</p>
      </>
    </div>
  )
}
export default SliderGame