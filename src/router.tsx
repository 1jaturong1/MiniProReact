import { createBrowserRouter } from "react-router-dom";
import Login from './page/Login.tsx';
import Home from './page/Home.tsx';
import Fire from './page/Fire.tsx';
import Miscellaneous from './page/Miscellaneous.tsx';
import Transportation from './page/Transportation.tsx';
import Motor from './page/Motor.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />,
     },
    {
        path: '/motor',
        element: <Motor />,
    },
    {
        path: '/fire',
        element: <Fire />,
    },
    {
        path: '/miscellaneous',
        element: <Miscellaneous />,
    },
    {
        path: '/transportation',
        element: <Transportation />,
    }
    
        
]);

export default router;