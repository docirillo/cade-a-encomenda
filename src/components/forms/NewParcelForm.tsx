import { useState } from 'react';
import Parcel from '../../core/Parcel';
import Input from '../template/Input';
import Button from '../template/Button';
import TextArea from '../template/TextArea';
import Image from 'next/image';
import illu1 from '../../../public/images/illu1.svg';

interface NewParcelFormProps {
  parcel: Parcel;
  onChange?: (parcel: Parcel) => void;
  cancelled?: () => void;
}

export default function NewParcelForm(props: NewParcelFormProps) {
  const parcelId = props.parcel?.parcelId;
  const [parcelName, setParcelName] = useState(props.parcel?.parcelName ?? '');
  const [parcelCode, setParcelCode] = useState(props.parcel?.parcelCode ?? '');
  const [parcelBuilding, setParcelBuilding] = useState(
    props.parcel?.parcelBuilding ?? 0,
  );
  const [parcelApartment, setParcelApartment] = useState(
    props.parcel?.parcelApartment ?? 0,
  );
  const [parcelIsDelivered, setParcelIsDelivered] = useState(
    props.parcel?.parcelIsDelivered ?? '',
  );
  const [parcelNote, setParcelNote] = useState(props.parcel?.parcelNote ?? '');
  return (
    <div className="md:grid md:grid-cols-4 md:gap-6">
      <div className="mt-20 w-full">
        <Image src={illu1} alt="" />
      </div>

      <div className="mt-5 md:mt-0">
        <div className="px-4 py-5 bg-gray-50 dark:bg-gray-700 sm:p-6">
          <Input
            text="Nome na Encomenda"
            value={parcelName}
            onChange={setParcelName}
            className="mt-1 dark:text-white text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-3/3 shadow-sm sm:text-sm rounded-md"
          />

          <Input
            text="Código da Encomenda"
            value={parcelCode}
            onChange={setParcelCode}
            className="mt-1 dark:text-white text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-3/3 shadow-sm sm:text-sm rounded-md"
          />

          <Input
            text="Bloco"
            type="number"
            value={parcelBuilding}
            onChange={setParcelBuilding}
            className="mt-1 dark:text-white text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-3/12 shadow-sm sm:text-sm rounded-md"
          />

          <Input
            text="Apartamento"
            type="number"
            value={parcelApartment}
            onChange={setParcelApartment}
            className="mt-1 dark:text-white text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-3/12 shadow-sm sm:text-sm rounded-md"
          />

          <Input
            text="Entregue?"
            type="text"
            value={parcelIsDelivered}
            onChange={setParcelIsDelivered}
            className="mt-1 dark:text-white text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-3/12 shadow-sm sm:text-sm rounded-md"
          />
          {/* <select className="mt-1 dark:text-white text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-3/12 shadow-sm sm:text-sm rounded-md">
            <option>Sim</option>
            <option>Não</option>
          </select> */}

          <TextArea
            text="Observações"
            value={parcelNote}
            onChange={setParcelNote}
            className="mt-1 dark:text-white text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-3/3 shadow-sm sm:text-sm rounded-md"
          />

          <Button
            className="mt-4 mr-2 transition duration-500 ease-in-out bg-purple-900 dark:bg-gray-600 dark:hover:bg-green-500 hover:bg-green-500 transform hover:-translate-y-1 hover:scale-110"
            onClick={() =>
              props.onChange?.(
                new Parcel(
                  parcelName,
                  parcelCode,
                  parcelBuilding,
                  parcelApartment,
                  parcelIsDelivered,
                  parcelNote,
                  parcelId,
                ),
              )
            }
          >
            {parcelId ? 'Atualizar' : 'Incluir'}{' '}
          </Button>
          <Button
            className="transition duration-500 ease-in-out bg-purple-900 dark:bg-gray-600 dark:hover:bg-red-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110"
            onClick={props.cancelled}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}
