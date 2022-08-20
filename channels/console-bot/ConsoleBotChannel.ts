/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Channel } from "../../core/channel/Channel";
import { WrappedMessage } from "../../core/conversation/WrappedMessage";
import { Logger } from "../../core/logger/Logger";
import { Bot } from "../../core/bot/Bot";
import { UnsupportedOperationException } from "../../core/util/exceptions/UnsupportedOperationException";
import { ChannelConfig } from "../../core/config/ChannelConfig";
import * as readline from "readline";

export class ConsoleBotChannel implements Channel {
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

    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const wrappedMessage = new WrappedMessage(
      "console",
      "Hello World, say something..."
    );
    this.sendMessage(wrappedMessage);
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
    try {
      readline
        .createInterface({
          input: process.stdin,
          output: process.stdout,
        })
        .question(
          "Bot...: " + wrappedMessage.message + "\nYou...: ",
          (answer) => {
            if (!answer) {
              answer = " ";
            }
            const wrappedMessage = new WrappedMessage("console", answer);
            this.bot.hears(this, wrappedMessage);
          }
        );
    } catch (e) {
      errorCallback();
    }
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
    throw new UnsupportedOperationException("Invalid operation sendLocation");
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
    throw new UnsupportedOperationException("Invalid operation sendImage");
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
    throw new UnsupportedOperationException("Invalid operation sendFile");
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
    throw new UnsupportedOperationException("Invalid operation sendButtons");
  }
  sendSeen(destination: string): void {
    throw new UnsupportedOperationException("Invalid operation sendSeen");
  }
  startTyping(destination: string): void {
    throw new UnsupportedOperationException("Invalid operation startTyping");
  }
  stopTyping(destination: string): void {
    throw new UnsupportedOperationException("Invalid operation stopTyping");
  }
}
