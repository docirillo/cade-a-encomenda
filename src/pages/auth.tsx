import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit() {
    if (mode === 'login') {
      console.log('login');
    } else {
      console.log('cadastrar');
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="Authentication Logo Image"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 md:w-1/2 w-full lg:w-1/3">
        <h1 className={`text-3xl font-bold mb-5`}>
          {mode === 'login'
            ? 'Entre com a sua Conta'
            : 'Cadastre-se no Cadê minha Encomenda?'}
        </h1>
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
          className={`w-full bg-indigo-500 hover: bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}
        >
          {mode === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={submit}
          className={`w-full bg-red-500 hover: bg-red-400 text-white rounded-lg px-4 py-3`}
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
