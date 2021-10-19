import { createContext, useState } from 'react';

type Theme = 'dark' | '';

interface AppContextProps {
  theme?: string;
  changeTheme?: () => void;
}
const AppContext = createContext({});

export function AppProvider(props) {
  const [theme, setTheme] = useState<Theme>('dark');
  function changeTheme() {
    setTheme(theme === '' ? 'dark' : '');
  }
  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </AppContext.Provider>
  );
}
export default AppContext;
