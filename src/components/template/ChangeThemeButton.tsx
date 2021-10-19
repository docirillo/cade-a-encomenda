import { IconSun } from '../icons';
import { IconMoon } from '../icons';

interface ChangeThemeButtonProps {
  theme: string;
  changeTheme: () => void;
}
export default function ChangeThemeButton(props: ChangeThemeButtonProps) {
  return props.theme === 'dark' ? (
    <div
      onClick={props.changeTheme}
      className={`hidden sm:flex items-center bg-gradient-to-r from-yellow-200 to-yellow-600 w-14 lg:w-24 h-8 cursor-pointer p-1 rounded-full`}
    >
      <div
        className={`flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full`}
      >
        {IconSun(5)}
      </div>
      <div className={`hidden lg:flex items-center ml-4 text-white`}>
        <span className={`text-sm`}>Light</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.changeTheme}
      className={`hidden sm:flex items-center justify-end bg-gradient-to-r from-gray-500 to-gray-900 w-14 lg:w-24 h-8 cursor-pointer p-1 rounded-full`}
    >
      <div className={`hidden lg:flex items-center mr-2 text-gray-300`}>
        <span className={`text-sm`}>Dark</span>
      </div>
      <div
        className={`flex items-center justify-center bg-black text-blue-300 w-6 h-6 rounded-full`}
      >
        {IconMoon(5)}
      </div>
    </div>
  );
}