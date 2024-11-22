import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputLogin from '../components/login/InputLogin';
import ButtonLogin from '../components/login/ButtonLogin';
import { FiArrowLeft } from 'react-icons/fi';
import { ROUTES } from '../shared/utils/routes';

const SignUp: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(ROUTES.APP.CHAT);
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="flex-col w-1/2 bg-white flex items-center justify-center">
        <div className="self-start ml-8 translate-y-12 border rounded-full bg-white p-2 shadow-md hover:bg-gray-50 -translate-x-10 md:translate-x-0">
          <Link to={ROUTES.LANDING}>
            <FiArrowLeft className="text-blue-500 text-3xl cursor-pointer" />
          </Link>
        </div>
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
              value={password}
              onChange={setPassword}
            />
        
            <ButtonLogin 
              text="Registrarse" 
              bgColor="bg-black" 
              textColor="text-white"
              className="text-base py-3"
              onClick={() => handleLogin(new Event('click') as unknown as React.FormEvent)}
            />
          </form>
          <div className="mt-8 space-y-6">
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
      <div className="w-1/2 bg-white flex items-center justify-center">
        <img 
          src="/assets/images/techbot-login.webp" 
          alt="Chat Illustration" 
          className="w-auto h-5/6" 
        />
      </div>
    </div>
  );
};

export default SignUp;