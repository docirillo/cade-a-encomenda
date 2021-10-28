import useAuth from '../../data/hooks/useAuth';
import { IconParcels, IconHome, IconLogout, IconSettings } from '../icons';
import Logo from './Logo';
import MenuItem from './MenuItem';

export default function SideBar() {
  const { logout } = useAuth();

  return (
    <aside className="flex flex-col bg-gradient-to-t from-violet-400 via-indigo-500 to-violet-500 dark:from-gray-600 dark:via-gray-700 dark:to-gray-900">
      <div
        className={` flex flex-col items-center justify-center h-20 w-20
      `}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Home" icon={IconHome} />
        <MenuItem url="/parcels" text="Encomendas" icon={IconParcels} />
        <MenuItem url="/settings" text="Ajustes" icon={IconSettings} />
      </ul>
      <ul>
        <MenuItem
          text="Sair"
          icon={IconLogout}
          onClick={logout}
          className={`text-white hover:bg-red-400 hover:text-white dark:text-white dark:hover:bg-red-400 dark:hover:text-white `}
        />
      </ul>
    </aside>
  );
}
