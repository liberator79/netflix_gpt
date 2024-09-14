import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import PATHS from '../router/routes';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../services/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../store/userSlice'
const Parent = ({ children, type }) => {
    const dispatch = useDispatch();
    const isLogged = useSelector((store) => store.user);
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {      
            if (user) {
                if(type === "public")navigate(PATHS.BROWSE)
                dispatch(
                    addUser({
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName
                    })
                )
            } else {
                dispatch(removeUser())
                if (type === 'private' && !isLogged) {
                    navigate(PATHS.SIGNIN);
                }
            }
        });
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default Parent;