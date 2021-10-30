import Button from '../components/forms/buttons/Button';
import ParcelForm from '../components/forms/ParcelForm';
import ParcelTable from '../components/tables/ParcelTable';
import Layout from '../components/template/Layout';
import useParcels from '../data/hooks/useParcels';
import { IconAdd } from '../components/icons';

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
    <Layout title="Encomendas" subtitle="">
      {tableVisible ? (
        <>
          <div className="flex justify-start">
            <Button
              className="mb-1 ml-2 transition duration-500 ease-in-out bg-violet-500 dark:bg-gray-600 dark:hover:bg-emerald-500 hover:bg-emerald-500"
              onClick={newParcel}
            >
              {IconAdd}
            </Button>
          </div>

          <ParcelTable
            parcels={parcels}
            parcelSelected={getParcel}
            parcelDeleted={deleteParcel}
          />
        </>
      ) : (
        <ParcelForm
          parcel={parcel}
          onChange={saveParcel}
          cancelled={showTable}
        />
      )}
    </Layout>
  );
}
