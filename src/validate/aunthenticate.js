import { signInWithEmailAndPassword } from "firebase/auth";
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

export default authenticate