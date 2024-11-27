import fetch from 'node-fetch';
import { fileTypeFromBuffer } from 'file-type';

let handler = async (m, { conn }) => {
  try {
    // التحقق مما إذا كانت الرسالة تحتوي على صورة
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!mime.startsWith('image/')) return conn.reply(m.chat, '> *◞🖼️◜ يـرجى الرد علـى صـورة فـقـط.* ', m);

    // تنزيل الصورة من الرسالة
    let media = await q.download();

    // رفع الصورة إلى imgbb
    const link = await uploadToImgbb(media);

    // إرسال رابط الصورة في الدردشة
    let txt = `> *◞🔗🖼️◜ » رابـط الصـورة.:* ${link}`;
    await conn.reply(m.chat, txt, m);
    
  } catch (e) {
    console.error(e);
    await conn.reply(m.chat, '> *◞⚠️◜ حـدث خـطـأ أثـنـاء رفع الصـورة.* ', m);
  }
};

// دالة لرفع الملف إلى imgbb
const uploadToImgbb = async (buffer) => {
  const { ext, mime } = await fileTypeFromBuffer(buffer);
  const apiKey = 'e8e3881e0d0a086bcef331601b2bf794'; // ضع مفتاح API الخاص بك من imgbb هنا
  const form = new FormData();
  form.append('image', buffer.toString('base64')); // تحويل الصورة إلى base64

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: 'POST',
    body: form
  });

  const result = await res.json();
  if (result.success) {
    return result.data.url; // الرابط المباشر للصورة
  } else {
    throw new Error('Failed to upload the file to imgbb');
  }
};

handler.tags = ['التحويلات'];
handler.command = ['لرابط2'];
export default handler;