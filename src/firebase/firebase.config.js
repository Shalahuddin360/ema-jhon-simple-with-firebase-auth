// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcMQjoOocD-7oTkF6MAFeaXUMqx5kghXM",
  authDomain: "ema-jhon-with-firebase-a-cea39.firebaseapp.com",
  projectId: "ema-jhon-with-firebase-a-cea39",
  storageBucket: "ema-jhon-with-firebase-a-cea39.appspot.com",
  messagingSenderId: "496012132686",
  appId: "1:496012132686:web:2b9be692d030da0d72de1f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default(app);