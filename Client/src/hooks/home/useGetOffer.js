import React, { useEffect, useState } from 'react'
import useGetImageFirebase from '@hooks/generals/useGetImageFirebase'

const useGetOffer = () => {
  const API = `${process.env.apiRest}/products`;
  const [offer, setOffer] = useState([])
  useEffect(() => {
    async function getOffer() {
      const response = await fetch(`${API}/offer`)
      const data = await response.json()
      const { result } = data
      setOffer(result)
    }
    getOffer()
  }, [])
  return { offer }
}
export default useGetOffer