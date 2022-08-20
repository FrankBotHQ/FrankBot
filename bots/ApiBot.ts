/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Bot } from "../core/bot/Bot";
import { Channel } from "../core/channel/Channel";
import { WrappedMessage } from "../core/conversation/WrappedMessage";
import axios from "axios";

/* A bot that processes the information it receives from the channel using external API */
export class ApiBot implements Bot {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  hears(channel: Channel, inputMessage: WrappedMessage): void {
    axios.post(this.endpoint, inputMessage);
    inputMessage.message = inputMessage.message.toLowerCase();
    // TODO: get response from endpoint
    const outputMessage = new WrappedMessage(inputMessage.destination, "Olá");
    channel.sendMessage(outputMessage);
  }
}
