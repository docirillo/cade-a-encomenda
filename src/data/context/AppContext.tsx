import { createContext, useEffect, useState } from 'react';

//type Theme = 'dark' | '';

interface AppContextProps {
  theme?: string;
  changeTheme?: () => void;
}
const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
  const [theme, setTheme] = useState('dark');

  function changeTheme() {
    const newTheme = theme === '' ? 'dark' : '';
    setTheme(theme === '' ? 'dark' : '');
    localStorage.setItem('theme', newTheme);
  }

  //salvando tema preferido no localstorage
  useEffect(() => {
    const themeSaved = localStorage.getItem('theme');
    setTheme(themeSaved);
  }, []);

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </AppContext.Provider>
  );
}
export default AppContext;
