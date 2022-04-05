import React, {useRef} from 'react'
import { Login } from '../components/Login'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { setDoc, doc } from 'firebase/firestore'
import db from '../utils/firebase'

export const SignIn = () => {

    const emailRef = useRef()
    const passwordRef = useRef()

    // email login function
    const login = async () => {
      try{
          await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
          .then((response)=> {
            if(response) {
               window.location = './dashboard'
            }
          })

      }
      
      catch(error) {
        alert(error.message)
      }
    }


    // google login function
    const googleSignIn = async () => {
      const provider = new GoogleAuthProvider();
      try {
        signInWithPopup(auth, provider)
        .then(async (result) => {
          const user = result.user;
        
          await setDoc(doc(db, 'users', `${user.uid}`),{songs: []})
          if (user) {
            window.location = "/dashboard"
          }
        });

      } catch (error) {
        alert(error.message);
      }
    };

  return (
    <div>
        <Login 
            title='Log In'
            button='Log In'
            href='/signup'
            link='Sign Up'
            headerStatement='Need an account?'
            emailInput={emailRef}
            passwordInput={passwordRef}
            btnFunction={login}
            googleButton='Log in'
            googleFunction={googleSignIn}
        />
    </div>
  )
}
