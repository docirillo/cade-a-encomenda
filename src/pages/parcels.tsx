import Button from '../components/forms/buttons/Button';
import ParcelForm from '../components/forms/ParcelForm';
import ParcelTable from '../components/tables/ParcelTable';
import Layout from '../components/template/Layout';
import useParcels from '../data/hooks/useParcels';
import { IconAdd } from '../components/icons';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Parcel from '../core/Parcel';

export default function Parcels() {
  const {
    parcel,
    parcels,
    newParcel,
    setParcel,
    getParcel,
    deleteParcel,
    saveParcel,
  } = useParcels();

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function newParcelModal() {
    newParcel;
    setParcel(Parcel.empty());
    setIsOpen(true);
  }

  function getParcelModal(parcel: Parcel) {
    getParcel(parcel);
    setIsOpen(true);
  }

  return (
    <Layout title="Encomendas" subtitle="">
      <>
        <div className="flex justify-start">
          <Button
            className="mb-1 ml-2 transition duration-500 ease-in-out bg-violet-500 dark:bg-gray-600 dark:hover:bg-emerald-500 hover:bg-emerald-500"
            onClick={newParcelModal}
          >
            {IconAdd}
          </Button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Cadastro de Encomenda
                  </Dialog.Title>
                  <div className="mt-2">
                    <ParcelForm
                      parcel={parcel}
                      onChange={saveParcel}
                      cancelled={closeModal}
                    />
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
        <ParcelTable
          parcels={parcels}
          parcelSelected={getParcelModal}
          parcelDeleted={deleteParcel}
        />
      </>
    </Layout>
  );
}
