export default class Parcel {
  #parcelId: string;
  #parcelName: string;
  #parcelCode: string;
  #parcelBuilding: number;
  #parcelApartment: number;
  #parcelIsDelivered: boolean;
  #parcelNote: string;

  constructor(
    parcelName: string,
    parcelCode: string,
    parcelBuilding: number,
    parcelApartment: number,
    parcelIsDelivered: boolean,
    parcelNote: string,
    parcelId: string = null,
  ) {
    this.#parcelName = parcelName;
    this.#parcelCode = parcelCode;
    this.#parcelBuilding = parcelBuilding;
    this.#parcelApartment = parcelApartment;
    this.#parcelIsDelivered = parcelIsDelivered;
    this.#parcelNote = parcelNote;
    this.#parcelId = parcelId;
  }

  static emptyParcel() {
    return new Parcel('', '', 0, 0, false, '');
  }

  get parcelId() {
    return this.#parcelId;
  }

  get parcelName() {
    return this.#parcelName;
  }

  get parcelCode() {
    return this.#parcelCode;
  }
  get parcelBuilding() {
    return this.#parcelBuilding;
  }
  get parcelApartment() {
    return this.#parcelApartment;
  }
  get parcelIsDelivered() {
    return this.#parcelIsDelivered;
  }
  get parcelNote() {
    return this.#parcelNote;
  }
}
