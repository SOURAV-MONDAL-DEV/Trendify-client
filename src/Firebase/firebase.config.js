// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};



// const firebaseConfig = {
//   apiKey: "AIzaSyCmnTvM5KHoh81GnKAyPx0qztorhZUUx_A",
//   authDomain: "trendify-now.firebaseapp.com",
//   projectId: "trendify-now",
//   storageBucket: "trendify-now.appspot.com",
//   messagingSenderId: "897479164459",
//   appId: "1:897479164459:web:ac06859db0f4b2b9c7606e",
//   measurementId: "G-MZN0M83BPE"
// };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;