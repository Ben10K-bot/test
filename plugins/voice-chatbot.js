/*import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const vn = './media/what.mp3';
  const vn2 = './media/laugh.mp3';
  const chat = global.db.data.chats[m.chat];
  const fk = {
    'key': {
      'participants': '0@s.whatsapp.net',
      'remoteJid': 'status@broadcast',
      'fromMe': false,
      'id': 'Halo'
    },
    'message': {
      'contactMessage': {
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    'participant': '0@s.whatsapp.net'
  };

  if (/^بوت|يا بوت|البوت|بوووت|بووووت|بوووووت|بووووووووت$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);

    m.conn.sendMessage(m.chat, {text: ` 😢 ايه انا عملت ايه`}, {quoted: fk});

    m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fk});

  } if (/^لول|هههه|ههههه|هههههه|ههههههه|هههههههه|😂|🤣$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);

    m.conn.sendMessage(m.chat, {text: `دوم ❤🙂`}, {quoted: fk});

    m.conn.sendMessage(m.chat, {audio: {url: vn2}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fk});

  }


  return !0;
};
export default handler;
