
// Initialize Firebase
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNhCDyU4OgYwN9XjiCERcBmBDKlcWcy7w",
  authDomain: "shopsphere-678f0.firebaseapp.com",
  projectId: "shopsphere-678f0",
  storageBucket: "shopsphere-678f0.appspot.com",
  messagingSenderId: "503902711076",
  appId: "1:503902711076:web:ec91fe0beceef5a4f597b1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("googleLogin").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Google Login Success:", user);
      localStorage.setItem('LoginDetails', JSON.stringify(user));
      setTimeout(() => {
        window.location.href = '../index.html';
      }, 1500);
    })
    .catch((error) => {
      console.error("Google Sign-in failed:", error);
    });
});
