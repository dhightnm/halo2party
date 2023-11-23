import React from "react";
import "./modal.css";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDoh5GyUgPbcv8SIySb-x7KwSpDTIPU1l4",
    authDomain: "halo2party-11dc0.firebaseapp.com",
    projectId: "halo2party-11dc0",
    storageBucket: "halo2party-11dc0.appspot.com",
    messagingSenderId: "834927307771",
    appId: "1:834927307771:web:cacd76db3596c20143395e",
    measurementId: "G-T3WB5HJNK9"
  };

const app = initializeApp(firebaseConfig);

const LoginModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  const auth = getAuth();

  const handleEmailPasswordLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Handle the successful authentication
              onClose(); // Close the modal
          })
          .catch((error) => {
              // Handle errors
          });
  };

  const handleGoogleLogin = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
          .then((result) => {
              // Handle the successful authentication
              onClose(); // Close the modal
          })
          .catch((error) => {
              // Handle errors
          });
  };
  
  return (
    <div className="modal-backdrop">
        <div className="modal-content">
            <form onSubmit={handleEmailPasswordLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="login-button">Login with Email</button>
            </form>
            <button onClick={handleGoogleLogin} className="login-button">Login with Google</button>
            <button type="button" onClick={onClose} className="close-button">Close</button>
        </div>
    </div>
);
};

export default LoginModal;