import { VenomBotChannel } from "./channels/venom-bot/VenomBotChannel";
import { GreetingBot } from "./bot/samples/GreetingBot";
import { ChannelConfig } from "./core/config/ChannelConfig";

const venomBot: VenomBotChannel = new VenomBotChannel();

const config = new ChannelConfig();
config.bot = new GreetingBot();
venomBot.create(config);
