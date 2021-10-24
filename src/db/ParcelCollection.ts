import NewParcelBtn from '../components/parcel/NewParcelBtn';
import Parcel from '../core/Parcel';
import ParcelRepository from '../core/ParcelRepository';
import firebase from '../firebase/config';

export default class ParcelCollection implements ParcelRepository {
  #converter = {
    toFirestore(parcel: Parcel) {
      return {
        parcelName: parcel.parcelName,
        parcelCode: parcel.parcelCode,
        parcelBuilding: parcel.parcelBuilding,
        parcelApartment: parcel.parcelApartment,
        parcelIsDelivered: parcel.parcelIsDelivered,
        parcelNote: parcel.parcelNote,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions,
    ): Parcel {
      const data = snapshot.data(options);
      return new Parcel(
        data.parcelName,
        data.parcelCode,
        data.parcelBuilding,
        data.parcelApartment,
        data.parcelIsDelivered,
        data.parcelNote,
        snapshot.id,
      );
    },
  };

  //metodo para salvar
  async save(parcel: Parcel): Promise<Parcel> {
    if (parcel?.parcelId) {
      await this.collection().doc(parcel.parcelId).set(parcel);
      return parcel;
    } else {
      const docRef = await this.collection().add(parcel);
      const doc = await docRef.get();
      return doc.data();
    }
  }
  //metodo para apagar
  async delete(parcel: Parcel): Promise<void> {
    return this.collection().doc(parcel.parcelId).delete();
  }
  //metodo para listar
  async getAll(): Promise<Parcel[]> {
    const query = await this.collection().get();
    return query.docs.map((doc) => doc.data()) ?? [];
  }

  private collection() {
    return firebase
      .firestore()
      .collection('parcels')
      .withConverter(this.#converter);
  }
}
