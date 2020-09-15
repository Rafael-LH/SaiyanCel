import React, { useEffect, useState } from 'react'

export const useGetCategories = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.apiRest}/products`)
      const data = await response.json()
      const { result } = data
      setData(result)
    }
    fetchData()
  }, [])

  return data
}