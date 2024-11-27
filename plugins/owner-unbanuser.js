const handler = async (m, {conn, text}) => {
  if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] اسف يا ساسكي او بن تن انت نسيت تمنشن المستخدم*';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] اسف يا ساسكي او بن تن انت نسيت تمنشن المستخدم*';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] تم الغاء البان للمستخدم*\n*—◉ المستخدم يقدر يستعمل البوت حاليا*`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^الغاء-البان|فك-البان$/i;
handler.rowner = true;
export default handler;
