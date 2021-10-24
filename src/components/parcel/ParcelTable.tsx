import Parcel from '../../core/Parcel';
import Image from 'next/image';
import avatar from '../../../public/images/moradores/avatar1.png';
import parcelImage from '../../../public/images/package.svg';
import { IconDelete, IconEdit } from '../icons';

interface ParcelTableProps {
  parcels: Parcel[];
  parcelSelected?: (parcel: Parcel) => void;
  parcelDeleted?: (parcel: Parcel) => void;
}

export default function ParcelTable(props) {
  const showActions = props.parcelDeleted || props.parcelSelected;
  //funcao para renderizar o cabecalho da tabela
  function renderingHeader() {
    return (
      <tr>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Name
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Parcel Code
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Note
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Status
        </th>
        {showActions ? (
          <th
            scope="col"
            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Actions
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
          key={parcel.parcelCode}
          className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
        >
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <Image className="h-10 w-10 rounded-full" src={avatar} alt="" />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {parcel.parcelName}
                </div>
                <div className="text-sm text-gray-500">
                  <span>Contato do Morador</span>
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={parcelImage}
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {parcel.parcelCode}
                </div>
                <div className="text-sm text-gray-500">
                  <span>Building: {parcel.parcelBuilding} </span>
                  <span>Apt: {parcel.parcelApartment} </span>
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{parcel.parcelNote}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Delivered
            </span>
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
            className={`flex justify-center items-center text-blue-600 rounded-full hover:bg-blue-100 p-2 m-1`}
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
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">{renderingHeader()}</thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {renderingData()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}