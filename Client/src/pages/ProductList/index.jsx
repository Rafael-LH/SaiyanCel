import React from 'react'
import ListOfProducts from '@components/ListOfProducts'
import useGetProducts from '@hooks/generals/useGetProducts'
import { Section, Title } from '@styles/layout'

const ProductList = ({ match: { params: { type } } }) => {
  const { products } = useGetProducts({ query: `?type=${type}` })
  return (
    <>
      <Title>Saiyancel</Title>
      <Section>
        {products.map(item => <ListOfProducts key={item._id} {...item} />)}
      </Section>
    </>
  )
}

export default ProductList
