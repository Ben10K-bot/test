/*let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `⌯ استخدمي الأمر بالشكل ده:\n${usedPrefix + command} <رقم> <رسالة>\n\n⌯ مثال:\n${usedPrefix + command} 201093317865 تم إصلاح المشكلة وشكرًا لك.`;

  let [number, ...messageParts] = text.split(' ');
  let message = messageParts.join(' ');

  if (!number || !message) throw `⌯ يرجى كتابة رقم ورسالة.\n\n⌯ مثال:\n${usedPrefix + command} 201093317865 تم إصلاح المشكلة وشكرًا لك.`;

  if (!/^\d+$/.test(number)) throw `⌯ الرقم غير صحيح، يرجى إدخال رقم مكون من أرقام فقط.`;

  let jid = `${number}@s.whatsapp.net`;

  try {
    await conn.reply(jid, message, null);
    m.reply(`⌯ تم إرسال الرسالة بنجاح إلى الرقم: ${number}`);
  } catch (e) {
    m.reply(`⌯ حدث خطأ أثناء إرسال الرسالة. تأكدي من صحة الرقم أو من أن البوت متصل.`);
  }
};

handler.help = ['الان <رقم> <رسالة>'];
handler.tags = ['owner'];
handler.command = /^(الان|send)$/i;

export default handler;