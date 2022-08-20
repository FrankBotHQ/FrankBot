import { ConsoleBotChannel } from "../channels/console-bot/ConsoleBotChannel";
import { ApiBot } from "../bots/ApiBot";
import { ChannelConfig } from "../core/config/ChannelConfig";

const myBot: ConsoleBotChannel = new ConsoleBotChannel();

const config = new ChannelConfig();
config.bot = new ApiBot("https://frankbot.requestcatcher.com/");
myBot.create(config);
