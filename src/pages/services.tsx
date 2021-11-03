import Layout from '../components/template/Layout';
import Image from 'next/image';
import Pizzaria from '../../public/images/noticias/pizzaria.jpg';
import Barbeiro from '../../public/images/noticias/barbeiro.png';

export default function Services() {
  return (
    <Layout title="Serviços" subtitle="">
      <div className="flex">
        <div
          id="whoobe-3fery"
          className="w-full md:w-80 justify-center items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg flex-col mr-2"
        >
          <Image
            src={Pizzaria}
            alt="img"
            title="img"
            className="w-full h-auto object-cover rounded-t-lg"
            width="320px"
            height="300px"
            id="whoobe-ixxe5"
          />
          <div
            id="whoobe-1okdg"
            className="w-full p-4 justify-start flex flex-col"
          >
            <h4 className="border-b-2 text-3xl" id="whoobe-3mr7n">
              Pizzaria de Itu
            </h4>
            <p className="my-4" id="whoobe-950fw">
              Pizzaria de Itu
            </p>
            <button
              value="button"
              className="my-4 px-4 py-2 text-white hover:bg-indigo-700 bg-indigo-500"
              id="whoobe-jkkr2"
            >
              11-94578-8969
            </button>
          </div>
        </div>

        <div
          id="whoobe-3fery"
          className="w-full md:w-80 justify-center items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col"
        >
          <Image
            src={Barbeiro}
            alt="img"
            title="img"
            className="w-full h-auto bg-white object-cover rounded-t-lg"
            id="whoobe-ixxe5"
            width="320px"
            height="300px"
          />
          <div
            id="whoobe-1okdg"
            className="w-full p-4 justify-start flex flex-col"
          >
            <h4 className="border-b-2 text-3xl" id="whoobe-3mr7n">
              Barbearia Ituana
            </h4>
            <p className="my-4" id="whoobe-950fw">
              Barbearia Ituana
            </p>
            <button
              value="button"
              className="my-4 px-4 py-2 text-white hover:bg-indigo-700 bg-indigo-500"
              id="whoobe-jkkr2"
            >
              11-94354-1554
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
