import route from 'next/router';
import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import firebase from '../../firebase/config';
import User from '../../model/User';

interface AuthContextProps {
  user?: User;
  loading?: boolean;
  register?: (email: string, password: string) => Promise<void>;
  loginGoogle?: () => Promise<void>;
  login?: (email: string, password: string) => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

//usuário normalizado com os dados recebidos do firebase
async function userNormalized(userFirebase: firebase.User): Promise<User> {
  const token = await userFirebase.getIdToken();
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provider: userFirebase.providerData[0].providerId,
    imageUrl: userFirebase.photoURL,
  };
}

//função para gerenciamento do cookie da sessão de autenticação
function manageCookie(logged: boolean) {
  if (logged) {
    Cookies.set('cade-a-encomenda-auth', logged, {
      expires: 7,
    });
  } else {
    Cookies.remove('cade-a-encomenda-auth');
  }
}

export function AuthProvider(props) {
  //estado de carregamento
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>(null);

  //função para a configuração da sessão de usuário
  async function setSession(userFirebase) {
    if (userFirebase?.email) {
      const user = await userNormalized(userFirebase);
      setUser(user);
      manageCookie(true);
      setLoading(false);
      return user.email;
    } else {
      setUser(null);
      manageCookie(false);
      setLoading(false);
      return false;
    }
  }
  //autenticacao com email e senha
  async function login(email, password) {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      await setSession(response.user);
      route.push('/');
    } finally {
      setLoading(false);
    }
  }

  //metodo de cadastrar usuario
  async function register(email, password) {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await setSession(response.user);
      route.push('/');
    } finally {
      setLoading(false);
    }
  }

  //autenticacao com login do Google
  async function loginGoogle() {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      await setSession(response.user);
      route.push('/');
    } finally {
      setLoading(false);
    }
  }
  //realizando logout da aplicacao
  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await setSession(null);
    } finally {
      setLoading(false);
    }
  }

  //confirmando que o cookie está true, válido e presente
  useEffect(() => {
    if (Cookies.get('cade-a-encomenda-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(setSession);
      return () => cancel();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        loginGoogle,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
