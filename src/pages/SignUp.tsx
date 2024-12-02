import { FC, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputLogin from '../components/login/InputLogin';
import ButtonLogin from '../components/login/ButtonLogin';
import { FiArrowLeft } from 'react-icons/fi';
import { ROUTES } from '../shared/utils/routes';
import useSmallScreenSize from '../hooks/small-screen-size/useSmallScreenSize';
import logo from '../assets/icons/logo.svg'

const SignUp: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica si el usuario ya está autenticado
    const token = localStorage.getItem('access_token');
    if (token) {
      navigate(ROUTES.APP.CHAT);
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.detail || 'Error al registrar el usuario');
        return;
      }

      // Si la creación es exitosa, redirigir al login
      navigate(ROUTES.LOGIN);
    } catch (error) {
      setError('Hubo un error al registrar el usuario');
    }
  };

  const isSmallScreen = useSmallScreenSize();
  return (
    <div className="flex flex-row h-screen overflow-hidden pb-14">
      {/* User Register */}
      <div className="flex-col w-full md:w-1/2 flex items-center justify-center m-16 mt-0">

        {/* Logo */}
        <div className="h-6 -translate-y-19 md:-translate-y-0 my-8 pt-4 md:pt-20">
          <Link to={ROUTES.LANDING}>
            <img src={logo} alt="Logo de TechBot" />
          </Link>
        </div>

        {/* Go Back Button */}
        <div className="self-start ml-8 translate-y-12 border rounded-full bg-white p-2 shadow-md hover:bg-gray-50 -translate-x-10 md:translate-x-0">
          <Link to={ROUTES.LANDING}>
            <FiArrowLeft className="text-blue-500 text-3xl cursor-pointer" />
          </Link>
        </div>

        { /*  User register data */}
        <article className="max-w-md w-3/4">
          <div className="flex flex-col mb-10 text-left gap-7">
            <h1 className="text-4xl font-bold leading-tight">
              Empieza a aprender con TechBot 👋
            </h1>
            <p className="text-gray-500 text-base leading-relaxed">
              Regístrate para empezar a aprender y alcanzar tus metas. 🚀
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
            <InputLogin
              title="Repite tu contraseña"
              placeholder="At least 8 characters"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
            />

            <ButtonLogin
              text="Registrarse"
              bgColor="bg-black"
              textColor="text-white"
              className="text-base py-3"
              onClick={() => handleLogin(new Event('click') as unknown as React.FormEvent)}
            />
          </form>
          <div className="mt-2 space-y-2">
            <div className="flex items-center justify-center space-x-3">
              <hr className="w-1/3 border-gray-300" />
              <span className="text-gray-500 text-base">O</span>
              <hr className="w-1/3 border-gray-300" />
            </div>

            <ButtonLogin
              text="Sign up with Google"
              onClick={() => console.log('registro con Google')}
              bgColor="bg-background-input-login"
              textColor="text-gray-700"
              borderColor="none"
              className="text-base py-3"
              iconSrc="/assets/icons/google-color-svgrepo-com.svg"
              iconAlt="Google Logo"
            />
          </div>
          <div className="text-center mt-6">
            <p className="text-base">
              ¿Ya tienes una cuenta?{' '}
              <Link to={ROUTES.LOGIN} className="text-blue font-medium hover:text-blue-600 transition-colors">
                Inicia sesión
              </Link>
            </p>
          </div>
        </article>
      </div>

      {/* Register image */}
      {
        !isSmallScreen && (
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

export default SignUp;