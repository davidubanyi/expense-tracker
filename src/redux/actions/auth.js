import {firebase} from '../../firebase/firebase'

export const login = (userDetails={}) => ({
    type: 'LOGIN',
    userDetails
})

export const logout = () =>({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}