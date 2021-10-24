import { useState } from 'react';
import Parcel from '../../core/Parcel';
import InputParcel from './InputParcel';
import NewParcelBtn from './NewParcelBtn';

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
    <div>
      {parcelId ? (
        <InputParcel readonly text="Code" value={parcelId} className="mb-4" />
      ) : (
        false
      )}
      <InputParcel
        text="Parcel Name"
        value={parcelName}
        valueChanged={setParcelName}
        className="mb-3"
      />
      <InputParcel
        text="Parcel Code"
        value={parcelCode}
        valueChanged={setParcelCode}
        className="mb-3"
      />
      <InputParcel
        text="Parcel Building"
        type="number"
        value={parcelBuilding}
        valueChanged={setParcelBuilding}
        className="mb-3"
      />
      <InputParcel
        text="Parcel Apartment"
        type="number"
        value={parcelApartment}
        valueChanged={setParcelApartment}
        className="mb-3"
      />
      <InputParcel
        text="Parcel Delivered?"
        type="text"
        value={parcelIsDelivered}
        valueChanged={setParcelIsDelivered}
        className="mb-3"
      />
      <InputParcel
        text="Parcel Note"
        value={parcelNote}
        valueChanged={setParcelNote}
        className="mb-3"
      />

      <div className="flex mt-7 justify-start">
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
          {parcelId ? 'Update' : 'Register'}{' '}
        </NewParcelBtn>
        <NewParcelBtn
          className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110"
          onClick={props.cancelled}
        >
          Cancel
        </NewParcelBtn>
      </div>
    </div>
  );
}
