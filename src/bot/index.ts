import * as TelegramBot from 'node-telegram-bot-api';

/**
 * 텔레그램 봇 생성
 * @param token
 */
export const createBot = token => {
  // Create a bot that uses 'polling' to fetch new updates
  return new TelegramBot(token, { polling: true });
};
