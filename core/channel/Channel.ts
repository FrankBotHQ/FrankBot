import { Logger } from "../logger/Logger";
import { WrappedMessage } from "../conversation/WrappedMessage";
import { ChannelConfig } from "../config/ChannelConfig";

export interface Channel {
  create(channelConfig: ChannelConfig, logger: Logger): void;
  sendMessage(wrappedMessage: WrappedMessage): void;
  sendLocation(wrappedMessage: WrappedMessage): void;
  sendImage(wrappedMessage: WrappedMessage): void;
  sendFile(wrappedMessage: WrappedMessage): void;
  sendButtons(wrappedMessage: WrappedMessage): void;
  sendSeen(destination: string): void;
  startTyping(destination: string): void;
  stopTyping(destination: string): void;
}
