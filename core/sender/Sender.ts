import { Channel } from "../../src/channel/Channel";
import { WrappedMessage } from "../../src/channel/WrappedMessage";

export interface Sender {
  send(channel: Channel, wrappedMessage: WrappedMessage): void;
}
