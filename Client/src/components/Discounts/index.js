import React from 'react'
import image from '@images/products/iphone-11-pro.png'
import ListOfProducts from '@components/ListOfProducts'
import { Section, Title } from './styles'
import useGetOffer from '@hooks/home/useGetOffer'

const Discounts = () => {
  const { offer } = useGetOffer()
  return (
    <Section>
      <Title>Estas son las ofertas del día</Title>
      {
        offer.map(item => <ListOfProducts data={item} />)
      }
    </Section>
  )
}
export default Discounts