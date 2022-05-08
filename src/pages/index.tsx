import Layout from '../components/template/Layout';
import Image from 'next/image';
import Noticia1 from '../../public/images/noticias/noticia1.jpg';
import Noticia2 from '../../public/images/noticias/noticia2.jpg';
import Noticia3 from '../../public/images/noticias/noticia3.jpg';

export default function Home() {
  return (
    <Layout title="Home" subtitle="">
      <div className="flex justify-center items-center">
        <div className="container mx-auto p-12 bg-gray-100 dark:bg-gray-900 rounded-xl">
          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
            <div className="bg-white dark:bg-gray-700">
              <div>
                <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                  <div>
                    <Image
                      className="w-full"
                      src={Noticia1}
                      alt=""
                      width="500px"
                      height="358px"
                    />
                    <div className="px-4 py-2">
                      <h1 className="text-xl font-gray-700 font-bold">
                        Missa da Matriz
                      </h1>
                      <div className="flex space-x-2 mt-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-indigo-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </span>
                        <h3 className="text-lg text-gray-600 dark:text-gray-200 font-semibold mb-2">
                          Igreja Matriz de Itu
                        </h3>
                      </div>
                      <p className="text-sm tracking-normal">
                        Essa semana tem Missa na Igreja Matriz de Itu! Após a
                        missa, haverá evento beneficiente!
                      </p>
                      <button className="mt-12 w-full text-center text-gray-100 bg-indigo-400 py-2 rounded-lg">
                        Saiba Mais...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700">
              <div>
                <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                  <div>
                    <Image
                      className="w-full"
                      src={Noticia2}
                      alt=""
                      width="500px"
                      height="358px"
                    />
                    <div className="px-4 py-2">
                      <h1 className="text-xl font-gray-700 font-bold">
                        Orelhão Solidário
                      </h1>
                      <div className="flex space-x-2 mt-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-indigo-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </span>
                        <h3 className="text-lg text-gray-600 dark:text-gray-200 font-semibold mb-2">
                          Orelhão de Itu
                        </h3>
                      </div>
                      <p className="text-sm tracking-normal">
                        Do dia 20 ao dia 25 haverá evento solidário em frente ao
                        Orelhão de Itu!
                      </p>
                      <button className="mt-12 w-full text-center text-gray-100 bg-indigo-400 py-2 rounded-lg">
                        Saiba Mais...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700">
              <div>
                <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                  <div>
                    <Image
                      className="w-full"
                      src={Noticia3}
                      alt=""
                      width="500px"
                      height="358px"
                    />
                    <div className="px-4 py-2">
                      <h1 className="text-xl font-gray-700 font-bold">
                        Concurso de Fotos
                      </h1>
                      <div className="flex space-x-2 mt-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-indigo-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </span>
                        <h3 className="text-lg text-gray-600 dark:text-gray-200 font-semibold mb-2">
                          Praça dos Exageros
                        </h3>
                      </div>
                      <p className="text-sm tracking-normal">
                        Em dezembro prepare-se para o concurso de fotos
                        criativas na Praça dos Exageros! Se inscreva!
                      </p>
                      <button className="mt-12 w-full text-center text-gray-100 bg-indigo-400 py-2 rounded-lg">
                        Saiba Mais...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
