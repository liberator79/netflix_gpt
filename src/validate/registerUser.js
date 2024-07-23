import { auth } from "../services/firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"


const registerUser = async (name, email, password) => {
    const responce = {}
    try{
        responce.UserCred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(responce.UserCred.user, {
            displayName : name,
        })
    }catch(e){
        responce.error = e;
    }
    return responce;
}

export default registerUser;