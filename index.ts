import { VenomBotChannel } from "./channels/venom-bot/VenomBotChannel";
import { JsonBot } from "./bots/JsonBot";
import { ChannelConfig } from "./core/config/ChannelConfig";

const venomBot: VenomBotChannel = new VenomBotChannel();

const config = new ChannelConfig();
config.bot = new JsonBot();
venomBot.create(config);
