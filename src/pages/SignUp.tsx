import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import InputLogin from '../components/login/InputLogin';
import ButtonLogin from '../components/login/ButtonLogin';
import { FiArrowLeft } from 'react-icons/fi';

const SignUp: FC= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // lógica de registro
    console.log('Iniciando sesión con email:', email, 'y contraseña:', password);
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="flex-col w-1/2 bg-white flex items-center justify-center">
      <div className="self-start ml-8 mb-4">
          <Link to="/">
            <FiArrowLeft className="text-blue-500 text-2xl cursor-pointer" />
          </Link>
        </div>
        <article className="max-w-md w-1/2">
          <div className="flex flex-col mb-8 text-left gap-7">
            <h1 className="text-3xl font-bold">Empieza a aprender con TechBot 👋</h1>
            <p className="text-gray-500 text-sm">Registrate para empezar a aprender  y alcanzar tus metas. 🚀</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
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
        
            <ButtonLogin text="Registrarse" bgColor="bg-black" textColor="text-white" />
          </form>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-1/4 border-gray-300" />
              <span className="text-gray-500">O</span>
              <hr className="w-1/4 border-gray-300" />
            </div>

            <ButtonLogin
              text="Sign up with Google"
              onClick={() => console.log('registro con Google')}
              bgColor="bg-background-input-login"
              textColor="text-gray-700"
              borderColor="none"
              iconSrc="/public/assets/icons/google-color-svgrepo-com.svg" 
              iconAlt="Google Logo"
            />
          </div>
          <div className="text-center mt-4 text-sm">
            <p>
              ¿Ya tienes una cuenta?{' '}
              <Link to="/login" className="text-blue-500 text-blue">
                Inicia sesión
              </Link>
            </p>
          </div>
          
        </article>
      </div>
      <div className="w-1/2 bg-white flex items-center justify-center">
        <img 
            src="/public/assets/images/techbot-login.webp" 
            alt="Chat Illustration" 
            className="w-auto h-5/6" 
            />
      </div>

    </div>
  );
};

export default SignUp;