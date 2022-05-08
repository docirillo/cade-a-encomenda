import Layout from '../components/template/Layout';

export default function Profile() {
  return (
    <Layout title="Perfil" subtitle="">
      <div className="min-h-screen p-6 bg-gray-200 dark:bg-black flex items-start justify-start">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white dark:bg-gray-800 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600 dark:text-white">
                  <p className="font-medium text-lg">Detalhes do Perfil</p>
                  <p>Preencha os campos que deseja alterar.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Nome Completo</label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-gray-800"
                        value=""
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Endereço de E-mail</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 dark:bg-gray-800"
                        value=""
                        placeholder="email@domínio.com"
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                          Enviar
                        </button>
                      </div>
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
