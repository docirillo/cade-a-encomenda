export default class Parcel {
  #id: string;
  #name: string;
  #code: string;
  #building: string;
  #apartment: string;
  #parcelStatus: string;
  #note: string;

  constructor(
    name: string,
    code: string,
    building: string,
    apartment: string,
    parcelStatus: string,
    note: string,
    id: string = null,
  ) {
    this.#name = name;
    this.#code = code;
    this.#building = building;
    this.#apartment = apartment;
    this.#parcelStatus = parcelStatus;
    this.#note = note;
    this.#id = id;
  }

  static emptyParcel() {
    return new Parcel('', '', '0', '0', 'NÃO', '');
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get code() {
    return this.#code;
  }
  get building() {
    return this.#building;
  }
  get apartment() {
    return this.#apartment;
  }
  get parcelStatus() {
    return this.#parcelStatus;
  }
  get note() {
    return this.#note;
  }
}
