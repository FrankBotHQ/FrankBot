import { ConsoleLogger } from "../../logger/console/ConsoleLogger";
import { Bot } from "../bot/Bot";
import { Logger } from "../logger/Logger";

export class ChannelConfig {
  bot!: Bot;
  logger: Logger = new ConsoleLogger();
}
