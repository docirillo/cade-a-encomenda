import NewParcelBtn from '../components/parcel/NewParcelBtn';
import NewParcelForm from '../components/parcel/form/NewParcelForm';
import ParcelTable from '../components/parcel/table/ParcelTable';
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
    <Layout title="Encomendas" subtitle="Consulte e Cadastre Novas Encomendas">
      {tableVisible ? (
        <>
          <div className="flex justify-start">
            <NewParcelBtn
              className="mb-4 transition duration-500 ease-in-out bg-blue-500 hover:bg-green-500 transform hover:-translate-y-1 hover:scale-110"
              onClick={newParcel}
            >
              Nova Encomenda
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
