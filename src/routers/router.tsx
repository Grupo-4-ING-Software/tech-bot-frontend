import { createBrowserRouter , RouteObject } from 'react-router-dom';
import App from '../App';

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <h1>Landing screen</h1>
            },
            {
                path: '/login',
                element: <h1>Log In screen</h1>
            },
            {
                path: '/c',
                element: <h1>Chat hub screen</h1>
            }
            /*  Se debe implementar el routeo con una base de datos que contenga los chats.
                Por investigarse.
             */
        ]
    }
];

const router = createBrowserRouter(routes);
export default router;