import { useEffect, useState } from 'react'

const useGetProducts = ({ query = '' }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${process.env.apiRest}/products${query}`)
      const data = await response.json()
      const { result } = data
      setProducts(result)
    }
    fetchProducts()
  }, [])

  return { products }
}
export default useGetProducts