import useAppData from '../../data/hooks/useAppData';
import ChangeThemeButton from './ChangeThemeButton';
import Title from './Title';
import UserAvatar from './UserAvatar';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {
  const { theme, changeTheme } = useAppData();
  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ChangeThemeButton theme={theme} changeTheme={changeTheme} />
        <UserAvatar className="ml-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
      </div>
    </div>
  );
}
