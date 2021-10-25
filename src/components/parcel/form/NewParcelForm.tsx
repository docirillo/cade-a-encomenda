import { useState } from 'react';
import Parcel from '../../../core/Parcel';
import InputParcel from './InputParcel';
import NewParcelBtn from '../NewParcelBtn';

interface NewParcelFormProps {
  parcel: Parcel;
  parcelChanged?: (parcel: Parcel) => void;
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
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <InputParcel
                      text="Nome na Encomenda"
                      value={parcelName}
                      valueChanged={setParcelName}
                      className="mt-1 text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <InputParcel
                      text="Código da Encomenda"
                      value={parcelCode}
                      valueChanged={setParcelCode}
                      className="mt-1 text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <InputParcel
                      text="Bloco"
                      type="number"
                      value={parcelBuilding}
                      valueChanged={setParcelBuilding}
                      className="mt-1 text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <InputParcel
                      text="Apartamento"
                      type="number"
                      value={parcelApartment}
                      valueChanged={setParcelApartment}
                      className="mt-1 text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <InputParcel
                      text="Encomenda Entregue?"
                      type="text"
                      value={parcelIsDelivered}
                      valueChanged={setParcelIsDelivered}
                      className="mt-1 text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                    <InputParcel
                      text="Observações"
                      value={parcelNote}
                      valueChanged={setParcelNote}
                      className="mt-1 text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <NewParcelBtn
                  className="mr-2 transition duration-500 ease-in-out bg-blue-500 hover:bg-green-500 transform hover:-translate-y-1 hover:scale-110"
                  onClick={() =>
                    props.parcelChanged?.(
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
                </NewParcelBtn>
                <NewParcelBtn
                  className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110"
                  onClick={props.cancelled}
                >
                  Cancelar
                </NewParcelBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
