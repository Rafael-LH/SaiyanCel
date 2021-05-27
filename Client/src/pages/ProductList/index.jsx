import React from 'react'
import ListOfProducts from '@components/ListOfProducts'
import useGetProducts from '@hooks/generals/useGetProducts'

const ProductList = ({ match: { params: { type } } }) => {
  const { products } = useGetProducts({ query: `?type=${type}` })
  return (
    <section className="layoutMaxWidth grid pb-2">
      <h1 className="grid-12 text-align--center title title--md title--md">Saiyancel</h1>
      {products.map(item => <ListOfProducts key={item._id} {...item} />)}
    </section>
  )
}

export default ProductList
