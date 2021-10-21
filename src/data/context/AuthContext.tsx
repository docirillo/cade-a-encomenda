import route from 'next/router';
import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import firebase from '../../firebase/config';
import User from '../../model/User';

interface AuthContextProps {
  user?: User;
  loginGoogle?: () => Promise<void>;
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

  async function loginGoogle() {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    setSession(response.user);
    route.push('/');
  }

  useEffect(() => {
    const cancel = firebase.auth().onIdTokenChanged(setSession);
    return () => cancel();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
