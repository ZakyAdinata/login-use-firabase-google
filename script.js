import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyCbAmFGSasmnAduUKurjKXlkAV5tkori6A",
  authDomain: "login-with-9fb6e.firebaseapp.com",
  projectId: "login-with-9fb6e",
  storageBucket: "login-with-9fb6e.appspot.com",
  messagingSenderId: "14670664038",
  appId: "1:14670664038:web:20b446bcf4f7f2750438a7",
  measurementId: "G-GZXWJJ1QGT",
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
auth.languageCode = "en"
const provider = new GoogleAuthProvider()

const googleLoginButton = document.getElementById("login-with-google")

googleLoginButton.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const user = result.user
      console.log(user)
      window.location.href = "logged.html"
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })
})
