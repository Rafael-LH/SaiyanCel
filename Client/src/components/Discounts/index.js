import React from 'react'
import image from '@images/products/iphone-11-pro.png'
import ListOfProducts from '@components/ListOfProducts'

const Discounts = () => {
  return (
    <ListOfProducts
      title="Estas son las ofertas del día"
      data={[image, image, image, image, image, image]}
    />
  )
}
export default Discounts