import {spawn} from 'child_process';
const handler = async (m, {conn, isROwner, text}) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js';
  if (conn.user.jid == conn.user.jid) {
    // conn.readMessages([m.key])
    await m.reply('🚫 إغلاق البوت...\n انتظر لحظة');
    process.send('reset');
  } else throw 'eh';
};
handler.help = ['shutdown'];
handler.tags = ['owner'];
handler.command = ['shutdown', 'نام', 'ريستارت'];
handler.rowner = true;
export default handler;