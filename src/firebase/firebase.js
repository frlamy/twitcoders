// Import the functions you need from the SDKs you need
import app from "firebase/app";
import 'firebase/auth'
import firebaseConfig from "./config";
import 'firebase/firestore'


class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth()
        this.facebookProvider = new app.auth.FacebookAuthProvider()
        this.db = app.firestore()
    }

    login = async provider => {
        const { user } = await this.auth.signInWithPopup(
            this[`${provider}Provider`]
        )
        console.log(user)
    }

    logout = async () => this.auth.signOut()
}

const firebase = new Firebase()
export default firebase