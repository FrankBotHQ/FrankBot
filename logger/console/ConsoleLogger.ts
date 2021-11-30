import { Logger } from "../../core/logger/Logger";

export class ConsoleLogger implements Logger {
  logInfo(action: string, message: string): void {
    this.log("INFO", action, message);
  }
  logError(action: string, message: string): void {
    this.log("ERROR", action, message);
  }
  log(type: string, action: string, message: string): void {
    console.log(`[${type}][${action}] - ${JSON.stringify(message)}`);
  }
}
