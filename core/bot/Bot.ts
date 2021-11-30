import { Channel } from "../channel/Channel";
import { WrappedMessage } from "../conversation/WrappedMessage";

export interface Bot {
  hears(channel: Channel, inputMessage: WrappedMessage): void;
}
