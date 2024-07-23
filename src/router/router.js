import { createBrowserRouter } from 'react-router-dom';
import Parent from "../pages/Parent"
import PATHS from './routes';
import Browse from '../pages/Browse';
import Home from '../pages/Home';
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"
import GPTSearch from '../pages/GPTSearch';

const appRouter = createBrowserRouter([


    {
        path: PATHS.HOME,
        children: [
            {
                path: PATHS.HOME,
                element:<Parent type = "public"><Home /></Parent>,
            },
            {
                path: PATHS.SIGNIN,
                element:<Parent type = "public"><Signin /></Parent>,
            },
            {
                path: PATHS.SIGNUP,
                element:<Parent type = "public"><Signup /></Parent>,
            },
            {
                path: PATHS.BROWSE,
                element: <Parent type = "private"><Browse /></Parent>
            },
            {
                path: PATHS.GPTSEARCH,
                element: <Parent type = "private"><GPTSearch /></Parent>
            }
        ],
    },
    {
        path: PATHS.SIGNIN,
        element: <Signin />
    }

])

export default appRouter