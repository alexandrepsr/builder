export default class Wheel {
  constructor(private _rim: number) {}

  get rim() {
    return this._rim;
  }

  set rim(value: number) {
    this._rim = value;
  }
}
