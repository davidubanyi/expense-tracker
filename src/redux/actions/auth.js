import {firebase, googleAuthProvider, emailAuthProvider} from "../../firebase/firebase"

export const startLoginForGoogle = () => {
    return ()=> {
       return firebase.auth().signInWithRedirect(googleAuthProvider) 
    }
}
export const startLoginForEmail = () => {
    return ()=> {
       return firebase.auth().signInWithRedirect(emailAuthProvider) 
    }
}