import React from 'react'
import ListOfProducts from '@components/ListOfProducts'
import useGetProducts from '@hooks/generals/useGetProducts'

const NewProducts = () => {
  const { products } = useGetProducts({ query: '?tags=new' })
  return (
    products.map(item => <ListOfProducts key={item._id} {...item} />)
  )
}
export default NewProducts