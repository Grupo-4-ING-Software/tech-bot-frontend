import { createBrowserRouter , RouteObject } from 'react-router-dom';
import App from '../App';
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Chat from "../pages/Chat";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Landing/>
            },
            {
                path: '/login',
                
                element: <Login/>
            },
            {
                path: '/chat',
                element: <Chat/>
            }
            /*  Se debe implementar el routeo con una base de datos que contenga los chats.
                Por investigarse.
             */
        ]
    }
];

const router = createBrowserRouter(routes);
export default router;