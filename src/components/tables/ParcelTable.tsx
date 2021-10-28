import Parcel from '../../core/Parcel';
import Image from 'next/image';
import avatar from '../../../public/images/moradores/avatar1.png';
import parcelImage from '../../../public/images/parcelImage.png';
import { IconDelete, IconEdit } from '../icons';

interface ParcelTableProps {
  parcels: Parcel[];
  parcelSelected?: (parcel: Parcel) => void;
  parcelDeleted?: (parcel: Parcel) => void;
}

export default function ParcelTable(props: ParcelTableProps) {
  const showActions = props.parcelDeleted || props.parcelSelected;

  //funcao para renderizar o cabecalho da tabela
  function renderingHeader() {
    return (
      <tr className="dark:bg-gray-700">
        <th
          scope="col"
          className="dark:text-gray-100 px-6 py-3 text-left text-xs font-medium text-purple-100 uppercase tracking-wider"
        >
          Nome na Encomenda
        </th>
        <th
          scope="col"
          className="dark:text-gray-100 px-6 py-3 text-left text-xs font-medium text-purple-100 uppercase tracking-wider"
        >
          Código da Encomenda
        </th>
        <th
          scope="col"
          className="dark:text-gray-100 px-6 py-3 text-left text-xs font-medium text-purple-100 uppercase tracking-wider"
        >
          Já Retirado?
        </th>
        <th
          scope="col"
          className="dark:text-gray-100 px-6 py-3 text-left text-xs font-medium text-purple-100 uppercase tracking-wider"
        >
          Observações
        </th>

        {showActions ? (
          <th
            scope="col"
            className="dark:text-gray-100 px-6 py-3 text-xs font-medium text-purple-100 uppercase tracking-wider"
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
          key={parcel.code}
          className={`${
            i % 2 === 0
              ? 'bg-white dark:bg-gray-700'
              : 'bg-gray-100 dark:bg-gray-600'
          }`}
        >
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12">
                <Image className="h-10 w-10 rounded-full" src={avatar} alt="" />
              </div>
              <div className="ml-4">
                <div className="select-none text-sm dark:text-gray-100 font-medium text-gray-900">
                  {parcel.name}
                </div>
                <div className="select-all text-sm text-gray-500 dark:text-gray-100">
                  <span>Contato do Morador</span>
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12">
                <Image className="h-10 w-10" src={parcelImage} alt="" />
              </div>
              <div className="ml-4">
                <div className="select-all text-sm font-medium dark:text-gray-100 text-gray-900">
                  {parcel.code}
                </div>
                <div className="select-none text-sm dark:text-gray-100 text-gray-500">
                  <span>Bloco: {parcel.building} </span>
                  <span>Apto: {parcel.apartment} </span>
                </div>
              </div>
            </div>
          </td>
          <td className="px-12 py-4 whitespace-nowrap">
            <div className="select-none	text-sm dark:text-gray-100 text-gray-900">
              {parcel.parcelStatus}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="select-all	text-sm dark:text-gray-100 text-gray-900">
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
      <td className="flex justify-center px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
        {props.parcelSelected ? (
          <button
            onClick={() => props.parcelSelected?.(parcel)}
            className={`flex justify-center items-center text-blue-600 dark:text-blue-600 rounded-full hover:bg-blue-100 p-2 m-1`}
          >
            {IconEdit}
          </button>
        ) : (
          false
        )}

        {props.parcelDeleted ? (
          <button
            onClick={() => props.parcelDeleted?.(parcel)}
            className={`flex justify-center items-center text-red-500 rounded-full hover:bg-red-100 p-2 m-1`}
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
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-6">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-violet-500 select-none">
                {renderingHeader()}
              </thead>
              <tbody className="uppercase bg-white divide-y divide-gray-200">
                {renderingData()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
