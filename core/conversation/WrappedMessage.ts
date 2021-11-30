/* eslint-disable @typescript-eslint/no-explicit-any */
export class WrappedMessage {
  destination: string;
  message: string;
  additionalInfo: any;

  constructor(destination: string, message: string, additionalInfo?: any) {
    this.destination = destination;
    this.message = message;
    this.additionalInfo = additionalInfo;
  }
}
