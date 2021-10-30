import Parcel from '../../core/Parcel';
import Image from 'next/image';
import avatar from '../../../public/images/moradores/avatar1.png';
import parcelImage from '../../../public/images/parcelImage.png';
import { IconDelete, IconEdit } from '../icons';

interface NewParcelTableProps {
  parcels: Parcel[];
  parcelSelected?: (parcel: Parcel) => void;
  parcelDeleted?: (parcel: Parcel) => void;
}

export default function NewParcelTable(props: NewParcelTableProps) {
  const showActions = props.parcelDeleted || props.parcelSelected;

  //funcao para renderizar o cabecalho da tabela
  function renderingHeader() {
    return (
      <tr className="bg-gray-200 dark:bg-gray-700">
        <th
          scope="col"
          className="p-3 font-bold uppercase text-gray-600 dark:text-white  hidden lg:table-cell"
        >
          Nome na Encomenda
        </th>
        <th
          scope="col"
          className="p-3 font-bold uppercase text-gray-600 dark:text-white border-lime-50 hidden lg:table-cell"
        >
          Código da Encomenda
        </th>
        <th
          scope="col"
          className="p-3 font-bold uppercase text-gray-600 dark:text-white border-lime-50 hidden lg:table-cell"
        >
          Já Retirado?
        </th>
        <th
          scope="col"
          className="p-3 font-bold uppercase text-gray-600 dark:text-white border-lime-50 hidden lg:table-cell"
        >
          Observações
        </th>

        {showActions ? (
          <th
            scope="col"
            className="p-3 font-bold uppercase text-gray-600 dark:text-white border-lime-50 hidden lg:table-cell"
          >
            Ações
          </th>
        ) : (
          false
        )}
      </tr>
    );
  }
  // funcao para renderizar os dados da tabela
  function renderingData() {
    return props.parcels?.map((parcel, i) => {
      return (
        <tr
          key={parcel.id}
          className={`${
            i % 2 === 0
              ? ' bg-gray-100 dark:bg-gray-900 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'
              : ' bg-gray-50 dark:bg-gray-700 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'
          }`}
        >
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12">
                <Image className="h-10 w-10 rounded-full" src={avatar} alt="" />
              </div>
              <div className="ml-4">
                <div className="select-none flex text-sm dark:text-gray-100 font-medium text-gray-900">
                  {parcel.name}
                </div>
                <div className="select-all text-sm text-gray-500 dark:text-gray-100">
                  <span>Contato do Morador</span>
                </div>
              </div>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12">
                <Image className="h-10 w-10" src={parcelImage} alt="" />
              </div>
              <div className="ml-4">
                <div className="select-all flex text-sm font-medium dark:text-gray-100 text-gray-900">
                  {parcel.code}
                </div>

                <div className="select-none text-sm dark:text-gray-100 text-gray-500">
                  <span>Bloco: {parcel.building} </span>
                  <span>Apto: {parcel.apartment} </span>
                </div>
              </div>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
            <div className="select-none	text-sm dark:text-gray-100 text-gray-900">
              <span className="lg:hidden absolute rounded-r-md top-0 left-0 bg-indigo-200 dark:bg-gray-800 px-2 py-1 text-xs font-bold uppercase">
                Entregue?
              </span>
              {parcel.parcelStatus}
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
            <div className="select-all text-sm dark:text-gray-100 text-gray-900">
              <span className="lg:hidden absolute rounded-r-md top-0 left-0 bg-indigo-200 dark:bg-gray-800 px-2 py-1 text-xs font-bold uppercase">
                Nota:
              </span>
              {parcel.note}
            </div>
          </td>
          {showActions ? renderingActions(parcel) : false}
        </tr>
      );
    });
  }
  //funcao para renderizar as acoes da tabela
  function renderingActions(parcel: Parcel) {
    return (
      <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static justify-center px-6 py-4 whitespace-nowrap text-sm font-medium">
        {props.parcelSelected ? (
          <button
            onClick={() => props.parcelSelected?.(parcel)}
            className={`flex-row justify-center items-center text-blue-600 dark:text-blue-600 rounded-full hover:bg-blue-100 p-2 m-1`}
          >
            {IconEdit}
          </button>
        ) : (
          false
        )}

        {props.parcelDeleted ? (
          <button
            onClick={() => props.parcelDeleted?.(parcel)}
            className={`flex-row justify-center items-center text-red-500 rounded-full hover:bg-red-100 p-2 m-1`}
          >
            {IconDelete}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  //montagem da tabela
  return (
    <table className="w-full divide-y divide-gray-200 rounded-xl overflow-hidden">
      <thead className="">{renderingHeader()}</thead>
      <tbody className="bg-white dark:bg-gray-600 divide-y divide-gray-200">
        {renderingData()}
      </tbody>
    </table>
  );
}
