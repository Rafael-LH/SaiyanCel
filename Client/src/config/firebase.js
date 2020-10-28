import * as firebase from "firebase/app";

export const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  storageBucket: process.env.storageBucket,
  // projectId: process.env.projectId,
  // messagingSenderId: process.env.messagingSenderId,
  // appId: process.env.appId
};
