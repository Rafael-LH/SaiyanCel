import React from 'react'
import ListOfProducts from '@components/ListOfProducts'
import useGetProducts from '@hooks/generals/useGetProducts'

const Discounts = () => {
  const { products } = useGetProducts({ query: '?tags=offer' })
  return (
    <section className="layoutMaxWidth grid pb-2">
      <h1 className="grid-12 text-align--center title title--md title--lg title--xl">Estas son las ofertas del día</h1>
      {
        products.map(item => <ListOfProducts key={item._id} {...item} />)
      }
    </section>
  )
}
export default Discounts