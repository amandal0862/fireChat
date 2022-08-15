import React from 'react'
import Button from '@mui/material/Button';
import {auth} from '../firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function SignIn() {
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  }
  return (
    <div>
      <Button onClick={signInWithGoogle}>Sign In with Google</Button>
    </div>
  )
}

export default SignIn
