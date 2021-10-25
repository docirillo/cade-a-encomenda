import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import { IconWarning } from '../components/icons';
import useAuth from '../data/hooks/useAuth';

export default function Auth() {
  const { register, login, loginGoogle } = useAuth();

  const [error, setError] = useState(null);
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function showError(msg, timerInSeconds = 5) {
    setError(msg);
    setTimeout(() => setError(null), timerInSeconds * 1000);
  }

  async function submit() {
    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        await register(email, password);
      }
    } catch (e) {
      showError(e?.message ?? 'Unexpected Error');
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w1/3 lg:w-1/3">
        <Image
          src={logo}
          alt="Authentication Logo Image"
          className="h-screen w-full object-cover"
          width={900}
          height={900}
        />
      </div>
      <div className="m-10 md:w-2/3 w-full lg:w-1/3">
        <h1 className={`text-3xl font-bold mb-5`}>
          {mode === 'login'
            ? 'Entre com a sua Conta'
            : 'Cadastre-se no Cadê a Encomenda?'}
        </h1>
        {error ? (
          <div
            className={`flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg`}
          >
            {IconWarning(7)}
            <span className="ml-3">{error}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="E-mail"
          type="email"
          value={email}
          valueChanged={setEmail}
          required
        />
        <AuthInput
          label="Senha"
          type="password"
          value={password}
          valueChanged={setPassword}
          required
        />

        <button
          onClick={submit}
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}
        >
          {mode === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={loginGoogle}
          className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`}
        >
          Entrar com Google
        </button>

        {mode === 'login' ? (
          <p className="mt-8">
            Este é seu primeiro acesso?
            <a
              onClick={() => setMode('register')}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {' '}
              Crie sua Conta
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já possui cadastro?
            <a
              onClick={() => setMode('login')}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {' '}
              Entre com as suas Credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
