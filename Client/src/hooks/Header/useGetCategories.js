import React, { useEffect, useState } from 'react'
// import firebase, { storage } from 'firebase';
// import 'firebase/storage';
// import { firebaseConfig } from '../../config/firebase'

export const useGetCategories = () => {
  const [data, setData] = useState([])
  // const [urlImage, setUrlImage] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.apiRest}/products/categories`)
      const data = await response.json()
      const { result } = data
      setData(result)
      // firebase.initializeApp(firebaseConfig);
      // const storage = firebase.storage();
      // const pathReference = storage.refFromURL('gs://bucketproducts-ec2a8.appspot.com/products/iphone-11-pro.png');
      // // Get the download URL
      // pathReference.getDownloadURL().then(function (url) {
      //   setUrlImage({
      //     ...urlImage,
      //     url,
      //   });
      //   console.log(url);
      // }).catch(function (error) {
      //   switch (error.code) {
      //     case 'storage/object-not-found':
      //       console.error('Not found')
      //       break;
      //     case 'storage/unauthorized':
      //       console.error('Unauthorized')
      //       break;
      //     case 'storage/canceled':
      //       console.error('Canceled')
      //       break;
      //     case 'storage/unknown':
      //       console.error('Unknown')
      //       break;
      //   }
      // });
      // console.log(pathReference);
      // console.log(storageRef.getMetadata());
      // storageRef.put(file)
      // console.log(storage);
    }
    fetchData()
  }, [])

  return data
}