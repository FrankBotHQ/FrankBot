export class UnsupportedOperationException extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
  }
}
