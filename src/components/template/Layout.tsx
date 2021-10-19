import useAppData from '../../data/hook/useAppData';
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
    <div className={` ${theme} flex h-screen w-screen`}>
      <SideBar />
      <div className={`flex flex-col p-7 bg-gray-100 dark:bg-gray-800 w-full`}>
        <Header title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}