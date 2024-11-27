import fetch from 'node-fetch';

let handler = async (m, { text, command, conn }) => {
  // التحقق من مدخلات المستخدم
  if (!text) {
    return m.reply(`*مثال الاستخدام:* ${command} وصف_الصورة`);
  }

  // استبدال النص المدخل في رابط API
  let prompt = encodeURIComponent(text.trim());
  let apiUrl = `https://api1.zenonhs.store/generate?prompt=${prompt}&width=512&height=512&useUpscaler=true`;

  try {
    // إرسال طلب إلى API للحصول على الصورة
    let response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("⚠️ حدث خطأ أثناء إنشاء الصورة.");
    }

    // تحويل الاستجابة إلى JSON
    let data = await response.json();

    // التحقق من وجود رابط الصورة في الاستجابة
    if (!data || !data.part1) {
      return m.reply("⚠️ لم يتم العثور على الصورة في الاستجابة.");
    }

    // استخراج رابط الصورة من الحقل part1
    let imageUrl = data.part1;

    // إرسال الصورة إلى المستخدم
    await conn.sendFile(m.chat, imageUrl, 'generated-image.jpg', `✅ تمت معالجة النص: "${text}"\n📸 الصورة المولدة`, m);

  } catch (error) {
    console.error("حدث خطأ:", error);
    m.reply("⚠️ حدث خطأ أثناء معالجة الطلب.");
  }
};

handler.help = ["generate-image"];
handler.tags = ["tools"];
handler.command = /^(انشاء_صورة|generate-image)$/i;

export default handler;