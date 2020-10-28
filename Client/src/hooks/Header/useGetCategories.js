import React, { useEffect, useState } from 'react'
import { firebaseConfig } from '../../config/firebase'

export const useGetCategories = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.apiRest}/products`)
      const data = await response.json()
      const { result } = data
      setData(result)
      firebase.initializeApp(firebaseConfig);
      var storage = firebase.storage();
      console.log(storage);
      // var storage = firebase.app().storage("gs://bucketproducts-ec2a8.appspot.com/products");;
    }
    fetchData()
  }, [])

  return data
}