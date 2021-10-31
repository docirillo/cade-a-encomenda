import { useEffect, useState } from 'react';
import Parcel from '../../core/Parcel';
import ParcelRepository from '../../core/ParcelRepository';
import ParcelCollection from '../../db/ParcelCollection';

export default function useParcels() {
  const repo: ParcelRepository = new ParcelCollection();
  const [parcel, setParcel] = useState<Parcel>(Parcel.empty());
  const [parcels, setParcels] = useState<Parcel[]>([]);
  let [isOpen, setIsOpen] = useState(false);

  useEffect(getAll, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  //funcao para obter todos
  function getAll() {
    repo.getAll().then((parcels) => {
      setParcels(parcels);
    });
  }

  //funcao para atualizar parcel
  function getParcel(parcel: Parcel) {
    setParcel(parcel);
    setIsOpen(true);
  }

  //funcao para apagar Parcel
  async function deleteParcel(parcel: Parcel) {
    await repo.delete(parcel);
    getAll();
  }

  //funcao para criar novo Parcel
  function newParcel() {
    setParcel(Parcel.empty());
    setIsOpen(true);
  }

  //funcao para salvar Parcel
  async function saveParcel(parcel: Parcel) {
    await repo.save(parcel);
    setIsOpen(false);
    getAll();
  }

  return {
    parcel,
    parcels,
    newParcel,
    saveParcel,
    deleteParcel,
    getParcel,
    setParcel,
    getAll,
    closeModal,
    openModal,
    isOpen,
  };
}
