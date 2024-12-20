// *# Img2hd API Guide Code | كود تحسين الجوده ✅*
// https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B
import fs from 'fs';
import fetch from 'node-fetch';
import FormData from 'form-data';

let handler = async (m, { text, conn }) => {
     let q = m.quoted ? m.quoted : m;
     let mime = (q.msg || q).mimetype || '';
  try {
    if (!mime) {
      return m.reply("❌ يرجى الرد على صورة لتحسين جودتها.");
    }

    if (!mime.startsWith("image/")) {
      return m.reply("❌ يرجى الرد على صورة، لا فيديو أو مستند!");
    }

    let media = await q.download(true);
    let data = await uploadFile(media);
    let imag = data.files[0]?.url;

    await conn.sendFile(m.chat, `https://api.joanimi-world.site/api/img2hd?url=${imag}`, '', '', m);

  } catch (error) {
    console.error("Error:", error);
    throw "حدث خطأ أثناء تنفيذ الأمر.";
  }
};

handler.help = ["hd"];
handler.tags = ["tools"];
handler.command = ['جوده','hd'];
export default handler;

async function uploadFile(path) {
  let form = new FormData();
  form.append('files[]', fs.createReadStream(path));

  let res = await (await fetch('https://uguu.se/upload.php', {
    method: 'POST',
    headers: {
      ...form.getHeaders()
    },
    body: form
  })).json();

  await fs.promises.unlink(path);
  return res;
}