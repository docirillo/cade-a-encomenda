import Parcel from '../core/Parcel';
import ParcelRepository from '../core/ParcelRepository';
import firebase from '../firebase/config';

export default class ParcelCollection implements ParcelRepository {
  #converter = {
    toFirestore(parcel: Parcel) {
      return {
        name: parcel.name,
        code: parcel.code,
        building: parcel.building,
        apartment: parcel.apartment,
        parcelStatus: parcel.parcelStatus,
        note: parcel.note,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions,
    ): Parcel {
      const data = snapshot.data(options);
      return new Parcel(
        data.name,
        data.code,
        data.building,
        data.apartment,
        data.parcelStatus,
        data.note,
        snapshot.id,
      );
    },
  };

  //metodo para salvar
  async save(parcel: Parcel): Promise<Parcel> {
    if (parcel?.id) {
      await this.collection().doc(parcel.id).set(parcel);
      return parcel;
    } else {
      const docRef = await this.collection().add(parcel);
      const doc = await docRef.get();
      return doc.data();
    }
  }
  //metodo para apagar
  async delete(parcel: Parcel): Promise<void> {
    return this.collection().doc(parcel.id).delete();
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
