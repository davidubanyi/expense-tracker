import React from "react";
import {connect} from 'react-redux'
import {startLoginForEmail, startLoginForGoogle} from "../../redux/actions/auth" 
import Layout from "../Layout";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {firebase} from "../../firebase/firebase"

const uiConfig = {
  signInFlow: 'redirect',
  signInSuccessUrl: '/expense',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
  ]
}


const HomePage = ({startLoginForGoogle, startLoginForEmail}) => {
  return (
    <Layout>
      <div><button onClick={startLoginForGoogle}>Login</button></div>
      <div><button onClick={()=> firebase.auth().signOut()}>Sign Up</button></div>
      <div ><StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /></div>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLoginForEmail: () => dispatch(startLoginForEmail()),
  startLoginForGoogle: () => dispatch(startLoginForGoogle()),
})
export default connect(undefined, mapDispatchToProps)(HomePage);
