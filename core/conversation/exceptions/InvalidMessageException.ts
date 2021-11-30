export class InvalidMessageException extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, InvalidMessageException.prototype);
  }
}
