import React, {useRef} from 'react'
import { Login } from '../components/Login'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { setDoc, doc } from 'firebase/firestore'
import db from '../utils/firebase'



export const SignUp = () => {

    const emailRef = useRef()
    const passwordRef = useRef()


    // email register function
    const register = async () => {
        try {
            // create a user with firebase authentication
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            // add user to the collection
            .then(async (response)=> {
                // create a user document to the users collection
                await setDoc(doc(db, 'users', `${response.user.uid}`),{songs: []})

                if(response) {
                    window.location = "/dashboard"
                }
            })
            
        }
        catch(error) {
            alert(error.message)
        }
    }


    // google register function
    const googleSignUp = async () => {
      const provider = new GoogleAuthProvider();
      try {
        signInWithPopup(auth, provider).then(async (result) => {
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
        title='Sign Up'
        button='Create Account'
        href='/'
        link='Log In'
        headerStatement='Already have an account?'
        emailInput={emailRef}
        passwordInput={passwordRef}
        btnFunction={register}
        googleButton='Sign up'
        googleFunction={googleSignUp}
      />
    </div>
  )
}
