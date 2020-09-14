import React, { useEffect, useState } from 'react'

export const useGetCategories = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:3000/api/products')
      console.log(response)
      const { result } = response
      setData(result)
    }
    fetchData()
  }, [])

  return data
}