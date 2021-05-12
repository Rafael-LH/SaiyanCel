import React from 'react'
import ListOfProducts from '@components/ListOfProducts'
import { Section, Title } from '@styles/layout'
import useGetProducts from '@hooks/generals/useGetProducts'

const Discounts = () => {
  const { products } = useGetProducts({ query: '?tags=offer' })
  return (
    <Section>
      <Title>Estas son las ofertas del día</Title>
      {
        products.map(item => <ListOfProducts key={item._id} {...item} />)
      }
    </Section>
  )
}
export default Discounts