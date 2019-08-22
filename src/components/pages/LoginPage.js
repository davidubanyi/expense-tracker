import React from "react";
import {connect} from 'react-redux'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {firebase} from "../../firebase/firebase"

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/expense',
  'credentialHelper':  'none',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
  ]
 
}


const LoginPage = () => {
  return (
      <div ><StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /></div>
  );
};

export default connect(undefined)(LoginPage);
