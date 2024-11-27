import fetch from 'node-fetch';
import { FormData, Blob } from 'formdata-node';
import { fileTypeFromBuffer } from 'file-type';

let handler = async (m, { conn }) => {
  try {
    // التحقق مما إذا كانت الرسالة تحتوي على صورة
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!mime.startsWith('image/')) return conn.reply(m.chat, '> *◞🖼️◜ يـرجى الرد علـى صـورة فـقـط.*', m);

    // تنزيل الصورة من الرسالة
    let media = await q.download();
    
    // رفع الصورة إلى qu.ax
    const link = await uploadToQuax(media);

    // إرسال رابط الصورة في الدردشة
    let txt = `> *◞🔗🖼️◜ » رابـط الصـورة:* ${link}`;
    await conn.reply(m.chat, txt, m);
    
  } catch (e) {
    console.error(e);
    await conn.reply(m.chat, '> *◞⚠️◜ حـدث خـطـأ أثـنـاء رفع الصـورة.* ', m);
  }
};

// دالة لرفع الملف إلى qu.ax
const uploadToQuax = async (buffer) => {
  // تحديد نوع الملف باستخدام file-type
  const { ext, mime } = await fileTypeFromBuffer(buffer);
  
  // تجهيز النموذج لتحميل الملف
  const form = new FormData();
  const blob = new Blob([buffer], { type: mime }); // استخدام `buffer` مباشرة
  form.append('files[]', blob, 'tmp.' + ext);

  // إرسال الطلب إلى qu.ax
  const res = await fetch('https://qu.ax/upload.php', { method: 'POST', body: form });
  const result = await res.json();

  // التحقق مما إذا كانت عملية الرفع ناجحة
  if (result && result.success) {
    return result.files[0].url;
  } else {
    throw new Error('Failed to upload the file to qu.ax');
  }
};

handler.tags = ['التحويلات'];
handler.command = ['لرابط'];
export default handler;