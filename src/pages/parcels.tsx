import { useState } from 'react';
import NewParcelBtn from '../components/parcel/NewParcelBtn';
import NewParcelForm from '../components/parcel/NewParcelForm';
import ParcelTable from '../components/parcel/ParcelTable';
import Layout from '../components/template/Layout';
import Parcel from '../core/Parcel';

export default function Parcels() {
  const [parcel, setParcel] = useState(Parcel.emptyParcel());
  const [visible, setVisible] = useState<'table' | 'form'>('table');

  const parcels = [
    new Parcel(
      'Morador 1',
      'QH183328678BR',
      44,
      303,
      'no',
      'Pacote Rasgado',
      '1',
    ),
    new Parcel(
      'Morador 2',
      'QH189377028BR',
      44,
      203,
      'no',
      'Retirar Hoje',
      '2',
    ),
    new Parcel('Morador 3', 'OQ046337409BR', 44, 103, 'no', 'sem nota', '3'),
    new Parcel(
      'Morador 4',
      'OP760092533BR',
      45,
      303,
      'no',
      'Pacote Aberto',
      '4',
    ),
    new Parcel(
      'Morador 5',
      'OP718166305BR',
      40,
      303,
      'no',
      'caixa grande',
      '5',
    ),
  ];

  function parcelSelected(parcel: Parcel) {
    setParcel(parcel);
    setVisible('form');
  }

  function parcelDeleted(parcel: Parcel) {
    console.log(`Excluir...${parcel.parcelName}`);
  }

  function newParcel(parcel: Parcel) {
    setParcel(Parcel.emptyParcel());
    setVisible('form');
  }

  function saveParcel(parcel: Parcel) {
    console.log(parcel);
    setVisible('table');
  }

  return (
    <Layout
      title="Parcels"
      subtitle="Estamos construindo uma aplicação de encomendas"
    >
      {visible === 'table' ? (
        <>
          <div className="flex justify-end">
            <NewParcelBtn className="mb-4 bg-yellow-500" onClick={newParcel}>
              New Parcel
            </NewParcelBtn>
          </div>

          <ParcelTable
            parcels={parcels}
            parcelSelected={parcelSelected}
            parcelDeleted={parcelDeleted}
          />
        </>
      ) : (
        <NewParcelForm
          parcel={parcel}
          parcelChanged={saveParcel}
          cancelled={() => setVisible('table')}
        />
      )}
    </Layout>
  );
}
