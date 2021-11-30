export interface Logger {
  logInfo(action: string, message: string): void;
  logError(action: string, message: string): void;
  log(type: string, action: string, message: string): void;
}
