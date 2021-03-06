import { useState } from 'react';
import Parcel from '../../core/Parcel';
import Input from './inputs/Input';
import Button from './buttons/Button';
import TextArea from './inputs/TextArea';

interface ParcelFormProps {
  parcel: Parcel;
  onChange?: (parcel: Parcel) => void;
  cancelled?: () => void;
}

export default function ParcelForm(props: ParcelFormProps) {
  const parcelId = props.parcel?.id;
  const [parcelName, setParcelName] = useState(props.parcel?.name ?? '');
  const [parcelCode, setParcelCode] = useState(props.parcel?.code ?? '');
  const [parcelBuilding, setParcelBuilding] = useState(
    props.parcel?.building ?? '0',
  );
  const [parcelApartment, setParcelApartment] = useState(
    props.parcel?.apartment ?? 0,
  );
  const [parcelIsDelivered, setParcelIsDelivered] = useState(
    props.parcel?.parcelStatus ?? '',
  );
  const [parcelNote, setParcelNote] = useState(props.parcel?.note ?? '');
  return (
    <div className="flex  flex-initial items-center justify-start">
      <div className="m-1 w-full">
        <div className="px-4 py-5 bg-white dark:bg-gray-700 sm:p-6 rounded-md">
          <Input
            text="Nome na Encomenda"
            value={parcelName}
            maxLength="30"
            onChange={setParcelName}
            className="uppercase dark:text-white text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-3/3 shadow-sm sm:text-sm rounded-md"
          />

          <Input
            text="Código da Encomenda"
            maxLength="13"
            value={parcelCode}
            onChange={setParcelCode}
            className="uppercase mt-2 dark:text-white text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-3/3 shadow-sm sm:text-sm rounded-md"
          />

          <Input
            text="Bloco"
            maxLength="2"
            value={parcelBuilding}
            onChange={setParcelBuilding}
            className="uppercase mt-2 dark:text-white text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-2/6 shadow-sm sm:text-sm rounded-md"
          />

          <Input
            text="Apartamento"
            maxLength="3"
            value={parcelApartment}
            onChange={setParcelApartment}
            className="uppercase mt-2 dark:text-white text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-2/6 shadow-sm sm:text-sm rounded-md"
          />

          <Input
            text="Entregue?"
            maxLength="3"
            value={parcelIsDelivered}
            onChange={setParcelIsDelivered}
            className="uppercase mt-2 dark:text-white text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-3/12 shadow-sm sm:text-sm rounded-md"
          />

          <TextArea
            text="Observações"
            maxlength="50"
            value={parcelNote}
            onChange={setParcelNote}
            className="uppercase mt-2 dark:text-white text-gray-500 focus:ring-violet-500 focus:border-violet-500 block w-3/3 shadow-sm sm:text-sm rounded-md"
          />

          <Button
            className="mt-4 mr-2 transition duration-500 ease-in-out dark:bg-gray-600 dark:hover:bg-emerald-500 hover:bg-emerald-500 transform hover:-translate-y-1 hover:scale-110"
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
            className="transition duration-500 ease-in-out dark:bg-gray-600 dark:hover:bg-rose-500 hover:bg-rose-400 transform hover:-translate-y-1 hover:scale-110"
            onClick={props.cancelled}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}
