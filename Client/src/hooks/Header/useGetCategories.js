import React, { useEffect, useState } from 'react'
import firebase, { storage } from 'firebase';
import 'firebase/storage';
import { firebaseConfig } from '../../config/firebase'

export const useGetCategories = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.apiRest}/products`)
      const data = await response.json()
      const { result } = data
      setData(result)

      // firebase.initializeApp(firebaseConfig);
      // var storageRef = firebase.storage().ref("products/")
      // storageRef.put(file)
      // console.log(storage);
    }
    fetchData()
  }, [])

  return data
}