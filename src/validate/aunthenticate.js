import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../services/firebase"

const authenticate = async (email, password) => {
    const responce = {}
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            responce.user = userCredential.user;
        })
        .catch((error) => {
            responce.error = error;
        });

    return responce
}

export const logout = async () => {
    await signOut(auth).then(() => {
        console.log("loggeg out")
    }).catch((error) => {
        console.log("an error occured")
    });
}

export default authenticate