import ParcelTable from '../components/parcel/ParcelTable';
import Layout from '../components/template/Layout';
import Parcel from '../core/Parcel';

export default function Parcels() {
  const parcels = [
    new Parcel(
      'Morador 1',
      'QH183328678BR',
      44,
      303,
      false,
      'Pacote Rasgado',
      '1',
    ),
    new Parcel(
      'Morador 2',
      'QH189377028BR',
      44,
      203,
      false,
      'Retirar Hoje',
      '2',
    ),
    new Parcel('Morador 3', 'OQ046337409BR', 44, 103, false, 'sem nota', '3'),
    new Parcel(
      'Morador 4',
      'OP760092533BR',
      45,
      303,
      false,
      'Pacote Aberto',
      '4',
    ),
    new Parcel(
      'Morador 5',
      'OP718166305BR',
      40,
      303,
      true,
      'caixa grande',
      '5',
    ),
  ];

  function parcelSelected(parcel: Parcel) {
    console.log(parcel.parcelName);
  }

  function parcelDeleted(parcel: Parcel) {
    console.log(`Excluir...${parcel.parcelName}`);
  }

  return (
    <Layout
      title="Parcels"
      subtitle="Estamos construindo uma aplicação de encomendas"
    >
      <ParcelTable
        parcels={parcels}
        parcelSelected={parcelSelected}
        parcelDeleted={parcelDeleted}
      />
    </Layout>
  );
}
