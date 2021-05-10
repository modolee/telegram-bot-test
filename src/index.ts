require('dotenv').config();
import { createBot } from './bot';
import { messageHandler } from './bot/handler';
import { TELEGRAM_BOT_TOKEN } from './constants';

const bot = createBot(TELEGRAM_BOT_TOKEN);
messageHandler(bot);
