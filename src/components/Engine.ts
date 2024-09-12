export default class Engine {
  constructor(private _number: number) {}

  get power(): number {
    return this._number;
  }

  set power(value: number) {
    this._number = value;
  }
}
