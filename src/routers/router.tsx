import { createBrowserRouter, RouteObject } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Chat from "../pages/Chat";
import ChatDiagram from "../pages/ChatDiagram";
import ChatHistory from "../pages/ChatHistory";
import NotFound from "../pages/NotFound";
import { ROUTES } from '../shared/utils/routes';

const publicRoutes: RouteObject[] = [
  {
    path: ROUTES.LANDING,
    element: <Landing />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.REGISTER,
    element: <SignUp />,
  },
];

const protectedRoutes: RouteObject = {
  path: ROUTES.APP.ROOT,
  element: <MainLayout />,
  children: [
    {
      path: 'chat',
      element: <Chat />,
    },
    {
      path: 'diagram',
      element: <ChatDiagram />,
    },
    {
      path: 'history',
      element: <ChatHistory />,
    },
  ],
};

const routes: RouteObject[] = [
  ...publicRoutes,
  protectedRoutes,
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;