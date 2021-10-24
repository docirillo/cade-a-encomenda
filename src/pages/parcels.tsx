import { useEffect, useState } from 'react';
import NewParcelBtn from '../components/parcel/NewParcelBtn';
import NewParcelForm from '../components/parcel/NewParcelForm';
import ParcelTable from '../components/parcel/ParcelTable';
import Layout from '../components/template/Layout';
import Parcel from '../core/Parcel';
import ParcelRepository from '../core/ParcelRepository';
import ParcelCollection from '../db/ParcelCollection';

export default function Parcels() {
  const repo: ParcelRepository = new ParcelCollection();

  const [parcel, setParcel] = useState(Parcel.emptyParcel());
  const [parcels, setParcels] = useState<Parcel[]>([]);
  const [visible, setVisible] = useState<'table' | 'form'>('table');

  useEffect(() => {
    repo.getAll().then(setParcels);
  }, []);

  //funcao para obter todos e deixar tabela visivel
  function getAll() {
    repo.getAll().then((parcels) => {
      setParcels(parcels);
      setVisible('table');
    });
  }

  //funcao para atualizar parcel e deixar form visivel
  function parcelSelected(parcel: Parcel) {
    setParcel(parcel);
    setVisible('form');
  }

  //funcao para apagar Parcel
  async function parcelDeleted(parcel: Parcel) {
    await repo.delete(parcel);
    getAll();
  }

  //funcao para criar novo Parcel
  function newParcel(parcel: Parcel) {
    setParcel(Parcel.emptyParcel());
    setVisible('form');
  }

  //funcao para salvar Parcel
  async function saveParcel(parcel: Parcel) {
    await repo.save(parcel);
    getAll();
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
