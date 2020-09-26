import React from 'react'
import ListOfProducts from '@components/ListOfProducts'
import image from '@images/products/new-product.jpeg'

const NewProducts = () => (
  <ListOfProducts
    title="Lo nuevo que ha llegado a Saiyancel"
    data={[image, image, image, image, image, image]}
  />
)
export default NewProducts