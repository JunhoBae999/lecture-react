const tag = "[store]";
//model
export default class Store {
  constructor(storage) {
    if (!storage) throw "no storage";

    this.storage = storage;
  }
}
