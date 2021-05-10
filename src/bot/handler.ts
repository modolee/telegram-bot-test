/**
 * 메시지 핸들링
 * @param bot
 */
export const messageHandler = bot => {
  /**
   * 특정 문구와 일치하는 경우
   */
  // Matches "/echo [whatever]"
  bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
  });

  /**
   * 메시지가 오는 모든 경우
   */
  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on('message', msg => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
  });
};
