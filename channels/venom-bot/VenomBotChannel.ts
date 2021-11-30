/* eslint-disable @typescript-eslint/no-explicit-any */
import { Channel } from "../../core/channel/Channel";
import { WrappedMessage } from "../../core/conversation/WrappedMessage";
import { Logger } from "../../core/logger/Logger";
import { Bot } from "../../core/bot/Bot";
import { ChannelConfig } from "../../core/config/ChannelConfig";
import * as venom from "venom-bot";

export class VenomBotChannel implements Channel {
  bot!: Bot;
  logger!: Logger;
  client: any;
  create(
    channelConfig: ChannelConfig,
    errorCallback: any = (error: any) => {
      this.logger.logError("create", error);
    }
  ): void {
    this.bot = channelConfig.bot;
    this.logger = channelConfig.logger;

    venom
      .create({
        session: `FrankBot`,
      })
      .then((client: any) => {
        this.client = client;
        this.client
          .onMessage((message: any) => {
            try {
              this.sendSeen(message.from);
              this.client.startTyping(message.from);
              const wrappedMessage = new WrappedMessage(
                message.from,
                message.body
              );
              this.bot.hears(this, wrappedMessage);
            } catch (e) {
              this.client.close();
            }
          })
          .catch(errorCallback);
      });
  }
  sendMessage(
    wrappedMessage: WrappedMessage,
    resultCallback: any = (result: any) => {
      this.logger.logInfo("sendMessage", result);
    },
    errorCallback: any = (error: any) => {
      this.logger.logError("sendMessage", error);
    }
  ): void {
    this.client
      .sendText(wrappedMessage.destination, wrappedMessage.message)
      .then(resultCallback)
      .catch(errorCallback);
  }
  sendLocation(
    wrappedMessage: WrappedMessage,
    resultCallback: any = (result: any) => {
      this.logger.logInfo("sendLocation", result);
    },
    errorCallback: any = (error: any) => {
      this.logger.logError("sendLocation", error);
    }
  ): void {
    this.client
      .sendLocation(
        wrappedMessage.destination,
        wrappedMessage.additionalInfo.latitude,
        wrappedMessage.additionalInfo.longitude,
        wrappedMessage.message
      )
      .then(resultCallback)
      .catch(errorCallback);
  }
  sendImage(
    wrappedMessage: WrappedMessage,
    resultCallback: any = (result: any) => {
      this.logger.logInfo("sendImage", result);
    },
    errorCallback: any = (error: any) => {
      this.logger.logError("sendImage", error);
    }
  ): void {
    this.client
      .sendImage(
        wrappedMessage.destination,
        wrappedMessage.additionalInfo.filePath,
        wrappedMessage.message,
        wrappedMessage.message
      )
      .then(resultCallback)
      .catch(errorCallback);
  }
  sendFile(
    wrappedMessage: WrappedMessage,
    resultCallback: any = (result: any) => {
      this.logger.logInfo("sendFile", result);
    },
    errorCallback: any = (error: any) => {
      this.logger.logError("sendFile", error);
    }
  ): void {
    this.client
      .sendFile(
        wrappedMessage.destination,
        wrappedMessage.additionalInfo.filePath,
        wrappedMessage.additionalInfo.filePath,
        wrappedMessage.message
      )
      .then(resultCallback)
      .catch(errorCallback);
  }
  sendButtons(
    wrappedMessage: WrappedMessage,
    resultCallback: any = (result: any) => {
      this.logger.logInfo("sendButtons", result);
    },
    errorCallback: any = (error: any) => {
      this.logger.logError("sendButtons", error);
    }
  ): void {
    this.client
      .sendFile(
        wrappedMessage.destination,
        wrappedMessage.additionalInfo.title,
        wrappedMessage.additionalInfo.buttons,
        wrappedMessage.additionalInfo.description
      )
      .then(resultCallback)
      .catch(errorCallback);
  }
  sendSeen(destination: string): void {
    this.client.sendSeen(destination);
  }
  startTyping(destination: string): void {
    this.client.startTyping(destination);
  }
  stopTyping(destination: string): void {
    this.client.stopTyping(destination);
  }
}
