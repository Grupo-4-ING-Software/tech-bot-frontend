import { FC, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputLogin from '../components/login/InputLogin';
import ButtonLogin from '../components/login/ButtonLogin';
import { FiArrowLeft } from 'react-icons/fi';
import { ROUTES } from '../shared/utils/routes';
import useSmallScreenSize from '../hooks/small-screen-size/useSmallScreenSize'
import logo from '../assets/icons/logo.svg';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { authService } from '../services/api/authService';

interface GoogleOAuthResponse {
  credential: string;
  clientId?: string;
  select_by?: string;
}

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  useEffect(() => {
    // Verifica si el usuario ya está autenticado
    const token = localStorage.getItem('access_token');
    if (token) {
      navigate(ROUTES.APP.CHAT);
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, ingresa tu correo y contraseña');
      return;
    }

    try {
      await authService.login(email, password);
      navigate(ROUTES.APP.CHAT);
    } catch {
      setError('Correo electrónico o contraseña incorrectos');
    }
  };

  const handleGoogleLogin = async (response: GoogleOAuthResponse) => {
    try {
      const googleToken = response.credential;
      await authService.googleLogin(googleToken);
      navigate(ROUTES.APP.CHAT);
    } catch (error) {
      console.error('Login error:', error);
      setError('Hubo un error al iniciar sesión con Google');
    }
  };

  const isSmallScreen = useSmallScreenSize();

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* User Login */}
      <div className="flex-col w-full md:w-1/2 flex items-center justify-center md:m-16 pt-32 px-8 md:px-16 -translate-y-9 md:translate-y-0" >
        <div className="h-6 -translate-y-6 md:-translate-y-2 ">
          <Link to={ROUTES.LANDING}>
            <img src={logo} alt="Logo de TechBot" />
          </Link>
        </div>
        {/* Go Back Button */}
        <div className="self-start ml-8 translate-y-12 border rounded-full bg-white p-2 shadow-md hover:bg-gray-50 -translate-x-10 md:-translate-x-8">
          <Link to={ROUTES.LANDING}>
            <FiArrowLeft className="text-blue-500 text-3xl cursor-pointer" />
          </Link>
        </div>

        {/* User Login Data */}
        <article className="max-w-md w-3/4">
          <div className="flex flex-col mb-10 text-left gap-7">
            <h1 className="text-4xl font-bold leading-tight w-full">
              Bienvenido de nuevo  👋
            </h1>
            <p className="text-gray-500 text-base leading-relaxed">
              Hoy es un nuevo día. Inicia sesión para empezar a aprender y alcanzar tus metas. 🚀
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            {error && <p className="text-red-500">{error}</p>}
            <InputLogin
              title="Correo electrónico"
              placeholder="example@email.com"
              type="email"
              value={email}
              onChange={setEmail}
            />

            <InputLogin
              title="Contraseña"
              placeholder="At least 8 characters"
              type="password"
              value={password}
              onChange={setPassword}
            />


            <div className="flex items-center space-x-1">
              <div className='flex-shrink-0 mb-[2px]'>
                <a href="#" className="text-landing-secondary text-xs hover:text-gray-600 transition-colors px-4 md:px-12 py-3 rounded-xl border bg-gray-50 hover:bg-gray-200">

                  ¿Olvidaste tu contraseña?

                </a>
              </div>
              <ButtonLogin
                text="Iniciar sesión"
                bgColor="bg-black"
                textColor="text-white"
                className="text-base py-3"
                onClick={() => handleLogin(new Event('click') as unknown as React.FormEvent)}
              />
            </div>

          </form>
          <div className="mt-4 space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <hr className="w-1/3 border-gray-300" />
              <span className="text-gray-500 text-base">O</span>
              <hr className="w-1/3 border-gray-300" />
            </div>

            <Link to={ROUTES.APP.CHAT}>
              <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                  onSuccess={handleGoogleLogin}
                  onError={() => console.log('Login Failed')}
                />
              </GoogleOAuthProvider>
            </Link>
          </div>
          <div className="text-center mt-6">
            <p className="text-base">
              ¿No tienes una cuenta?{' '}
              <Link to={ROUTES.REGISTER} className="text-blue font-medium hover:text-blue-600 transition-colors">
                Regístrate
              </Link>
            </p>
          </div>
        </article>
      </div>

      {/* Login Image */}
      {!isSmallScreen && (
        <div className="w-1/2 bg-white flex items-center justify-center">
          <img
            src="/assets/images/techbot-login.webp"
            alt="Chat Illustration"
            className="w-auto h-5/6"
          />
        </div>
      )}

    </div>
  );
};

export default LoginForm;