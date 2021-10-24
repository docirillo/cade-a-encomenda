import NewParcelBtn from '../components/parcel/NewParcelBtn';
import NewParcelForm from '../components/parcel/NewParcelForm';
import ParcelTable from '../components/parcel/ParcelTable';
import Layout from '../components/template/Layout';
import useParcels from '../data/hooks/useParcels';

export default function Parcels() {
  const {
    parcel,
    parcels,
    newParcel,
    getParcel,
    deleteParcel,
    saveParcel,
    tableVisible,
    showTable,
  } = useParcels();

  return (
    <Layout
      title="Parcels"
      subtitle="Estamos construindo uma aplicação de encomendas"
    >
      {tableVisible ? (
        <>
          <div className="flex justify-end">
            <NewParcelBtn className="mb-4 bg-yellow-500" onClick={newParcel}>
              New Parcel
            </NewParcelBtn>
          </div>

          <ParcelTable
            parcels={parcels}
            parcelSelected={getParcel}
            parcelDeleted={deleteParcel}
          />
        </>
      ) : (
        <NewParcelForm
          parcel={parcel}
          parcelChanged={saveParcel}
          cancelled={showTable}
        />
      )}
    </Layout>
  );
}
