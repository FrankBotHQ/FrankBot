/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Bot } from "../core/bot/Bot";
import { Channel } from "../core/channel/Channel";
import { WrappedMessage } from "../core/conversation/WrappedMessage";
import { CosineSimilarity } from "../core/util/CosineSimilarity";

/* A sample bot using "json database"  */
export class JsonBot implements Bot {
  private dialogs = new Map([
    ["hello", "Hi, how are you?"],
    ["good morning", "Good morning, it's a beautiful day!"],
    ["good afternoon", "Good afternoon my friend!"],
    ["good evening", "Good evening 🌃"],
    ["help", "tell me: hello, good morning, good afternoon, good evening"],
    ["fallback", "I didn't understand, type 'help' to know what can I do"],
  ]);

  hears(channel: Channel, inputMessage: WrappedMessage): void {
    inputMessage.message = inputMessage.message.toLowerCase();
    const outputMessage = new WrappedMessage(
      inputMessage.destination,
      this.processMostSimilarDialog(inputMessage.message)
    );
    channel.sendMessage(outputMessage);
  }

  private processMostSimilarDialog(input: string): string {
    let maxSimilarity = 0;
    let maxSimilarityKey!: string;
    for (const key of this.dialogs.keys()) {
      const similarity = CosineSimilarity.similarity(
        input,
        this.dialogs.get(key)!
      );
      if (similarity > maxSimilarity) {
        maxSimilarity = similarity;
        maxSimilarityKey = key;
      }
    }

    if (maxSimilarity > 0.65 && maxSimilarityKey) {
      return this.dialogs.get(maxSimilarityKey)!;
    } else {
      return this.dialogs.get("fallback")!;
    }
  }
}
