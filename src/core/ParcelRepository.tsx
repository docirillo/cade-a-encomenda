import Parcel from './Parcel';

export default interface ParcelRepository {
  save(parcel: Parcel): Promise<Parcel>;
  delete(parcel: Parcel): Promise<void>;
  getAll(): Promise<Parcel>;
}
