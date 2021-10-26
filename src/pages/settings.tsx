import Button from '../components/template/Button';
import Layout from '../components/template/Layout';

export default function Settings() {
  return (
    <Layout
      title="Configurações"
      subtitle="Estamos construindo uma aplicação de encomendas"
    >
      <h3>
        <Button
          className="mb-4 ml-4 transition duration-500 ease-in-out bg-purple-500
          dark:bg-gray-600 dark:hover:bg-green-500 hover:bg-green-500 transform
          hover:-translate-y-1 hover:scale-110"
          onClick={null}
        >
          Configurações
        </Button>
      </h3>
    </Layout>
  );
}
