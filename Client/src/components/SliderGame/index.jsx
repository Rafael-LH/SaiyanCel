import React from 'react'
import { ContainerInfo, Img, P, H1 } from './styles'
import useGetImageFirebase from '@hooks/generals/useGetImageFirebase'

const SliderGame = ({ image, details }) => {
  const { url } = useGetImageFirebase(image)
  return (
    <ContainerInfo>
      <figure>
        <Img src={url} alt={details.name} />
      </figure>
      <H1>{details.name}</H1>
      <>
        {details.discount ? <P>Antes: $12500</P> : <P></P>}
        <P>{details.discount ? 'Ahora' : 'Precio'} ${details.price}</P>
      </>
    </ContainerInfo>
  )
}
export default SliderGame