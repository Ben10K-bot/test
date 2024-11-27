import axios from 'axios';

const handler = async (m, {conn, usedPrefix, command}) => {
    try {
        const response = await axios.get(`https://raw.githubusercontent.com/Ben10K-bot/TheMystic-Bot-MD/refs/heads/master/src/JSON/Quran.txt`);
        const cristiano = response.data.split('\n'); // تقسيم النص إلى أسطر
        const ronaldo = cristiano[Math.floor(Math.random() * cristiano.length)]; // اختيار سطر عشوائي
        conn.sendFile(m.chat, ronaldo, 'error.mp4', `اللهم اكتب لي و لك الاجر 🌸`, m);
    } catch (error) {
        console.error(error);
        conn.sendMessage(m.chat, 'حدث خطأ أثناء جلب البيانات.', m);
    }
};

handler.help = ['quran', 'قران'];
handler.tags = ['quran'];
handler.command = /^(قرآن|quran|قران)$/i;

export default handler