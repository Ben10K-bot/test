/*import { readdir, unlink } from 'fs/promises';
import path from 'path';

const handler = (m) => m;

handler.all = async function(m) {
  const chat = global.db.data.chats[m.chat];
  const sessionPath = './MyBen 10Session/';

  
  if (global.conn.user.jid !== conn.user.jid) return;

  try {
    const files = await readdir(sessionPath);
    
    
    if (files.length >= 100) {
      await conn.sendMessage(m.chat, { text: `تم وصول عدد الملفات إلى ${files.length}، جاري التنظيف ...` }, { quoted: m });
      
      let filesDeleted = 0;

      
      for (const file of files) {
        if (file !== 'creds.json') {
          await unlink(path.join(sessionPath, file));
          filesDeleted++;
        }
      }

      await conn.sendMessage(m.chat, { text: `تم حذف ${filesDeleted} ملف(ات).` }, { quoted: m });
    }
  } catch (err) {
    console.error('Error while cleaning session files:', err);
    await conn.sendMessage(m.chat, { text: `حدث خطأ أثناء عملية التنظيف: ${err.message}` }, { quoted: m });
  }

  return true;
};

export default handler;