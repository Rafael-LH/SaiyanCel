import { useEffect, useState } from 'react'
import firebase from 'firebase';
import { firebaseConfig } from '../../config/firebase'
import 'firebase/storage';

const useGetImageFirebase = (image) => {
  const [url, setUrl] = useState()
  useEffect(() => {
    const fetchBucket = () => {
      try {
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        const storage = firebase.storage();
        const pathReference = storage.refFromURL(`gs://bucketproducts-ec2a8.appspot.com/${image}`);

        // Get the download URL
        pathReference.getDownloadURL().then(function (url) {
          setUrl(url)
        }).catch(function (error) {
          switch (error.code) {
            case 'storage/object-not-found':
              console.error('Not found')
              break;
            case 'storage/unauthorized':
              console.error('Unauthorized')
              break;
            case 'storage/canceled':
              console.error('Canceled')
              break;
            case 'storage/unknown':
              console.error('Unknown')
              break;
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    if (image) fetchBucket()
  }, [image])
  return { url }
}
export default useGetImageFirebase