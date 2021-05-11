import React from 'react'
import image from '@images/products/iphone-11-pro.png'
import ListOfProducts from '@components/ListOfProducts'
import { Section, Title } from '@styles/layout'
import useGetOffer from '@hooks/home/useGetOffer'

const Discounts = () => {
  const { offer } = useGetOffer()
  console.log(offer);
  return (
    <Section>
      <Title>Estas son las ofertas del día</Title>
      {
        offer.map(item => <ListOfProducts key={item._id} {...item} />)
      }
    </Section>
  )
}
export default Discounts