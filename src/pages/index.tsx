import Layout from '../components/template/Layout';
import useAppData from '../data/hook/useAppData';

export default function Home() {
  const { changeTheme } = useAppData();
  return (
    <Layout
      title="Página Inicial"
      subtitle="Estamos construindo uma aplicação de encomendas"
    >
      <h3>Conteúdo</h3>
      <button onClick={changeTheme}>Change Theme</button>
    </Layout>
  );
}
