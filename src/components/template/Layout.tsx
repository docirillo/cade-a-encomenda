import useAppData from '../../data/hooks/useAppData';
import ForceAuth from '../auth/ForceAuth';
import Content from './Content';
import Header from './Header';
import SideBar from './SideBar';

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const { theme } = useAppData();
  return (
    <ForceAuth>
      <div className={` ${theme} flex h-screen w-screen`}>
        <SideBar />
        <div
          className={`select-none flex flex-col p-7 bg-indigo-50 dark:bg-gray-800 w-full`}
        >
          <Header title={props.title} subtitle={props.subtitle} />
          <Content>{props.children}</Content>
        </div>
      </div>
    </ForceAuth>
  );
}
