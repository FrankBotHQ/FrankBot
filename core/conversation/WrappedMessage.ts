/* eslint-disable @typescript-eslint/no-explicit-any */
import { InvalidMessageException } from "./exceptions/InvalidMessageException";

export class WrappedMessage {
  destination: string;
  message: string;
  additionalInfo: any;

  constructor(destination: string, message: string, additionalInfo?: any) {
    if (message == null || message == "") {
      throw new InvalidMessageException(
        "You are trying to assemble a message with undefined content"
      );
    }

    this.destination = destination;
    this.message = message;
    this.additionalInfo = additionalInfo;
  }
}
