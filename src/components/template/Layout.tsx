import Content from './Content';
import Header from './Header';
import SideBar from './SideBar';

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <Header title={props.title} subtitle={props.subtitle} />
      <SideBar />
      <Content>{props.children}</Content>
    </div>
  );
}
