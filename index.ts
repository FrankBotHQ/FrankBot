import { VenomBotChannel } from "./channels/venom-bot/VenomBotChannel";
import { FirstBot } from "./bot/samples/FirstBot";
import { ChannelConfig } from "./core/config/ChannelConfig";

const venomBot: VenomBotChannel = new VenomBotChannel();

const config = new ChannelConfig();
config.bot = new FirstBot();
venomBot.create(config);
