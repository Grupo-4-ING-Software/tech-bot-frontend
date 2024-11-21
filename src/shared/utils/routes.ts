export const ROUTES = {

  LANDING: '/',
  LOGIN: '/login',
  REGISTER: '/register',

  APP: {
    ROOT: '/app',
    CHAT: '/app/chat',
    DIAGRAM: '/app/diagram',
    HISTORY: '/app/history',
  },
} as const;


export const getRoute = {
  public: {
    landing: () => ROUTES.LANDING,
    login: () => ROUTES.LOGIN,
    register: () => ROUTES.REGISTER,
  },
  app: {
    root: () => ROUTES.APP.ROOT,
    chat: () => ROUTES.APP.CHAT,
    diagram: () => ROUTES.APP.DIAGRAM,
    history: () => ROUTES.APP.HISTORY,
  },
} as const;
