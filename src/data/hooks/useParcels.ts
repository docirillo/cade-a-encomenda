import { useEffect, useState } from 'react';
import Parcel from '../../core/Parcel';
import ParcelRepository from '../../core/ParcelRepository';
import ParcelCollection from '../../db/ParcelCollection';
import useTableOrForm from './useTableOrForm';

export default function useParcels() {
  const repo: ParcelRepository = new ParcelCollection();
  const { tableVisible, showTable, showForm } = useTableOrForm();
  const [parcel, setParcel] = useState<Parcel>(Parcel.emptyParcel());
  const [parcels, setParcels] = useState<Parcel[]>([]);

  useEffect(getAll, []);

  //funcao para obter todos e deixar tabela visivel
  function getAll() {
    repo.getAll().then((parcels) => {
      setParcels(parcels);
      showTable();
    });
  }

  //funcao para atualizar parcel e deixar form visivel
  function getParcel(parcel: Parcel) {
    setParcel(parcel);
    showForm();
  }

  //funcao para apagar Parcel
  async function deleteParcel(parcel: Parcel) {
    await repo.delete(parcel);
    getAll();
  }

  //funcao para criar novo Parcel
  function newParcel() {
    setParcel(Parcel.emptyParcel());
    showForm();
  }

  //funcao para salvar Parcel
  async function saveParcel(parcel: Parcel) {
    await repo.save(parcel);
    getAll();
  }

  return {
    parcel,
    parcels,
    newParcel,
    saveParcel,
    deleteParcel,
    getParcel,
    getAll,
    tableVisible,
    showTable,
  };
}
