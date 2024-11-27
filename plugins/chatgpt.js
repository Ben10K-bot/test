import fetch from 'node-fetch'; 

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const name = conn.getName(m.sender); 
    if (!text) throw(`اسمي هو ChatGPT-4، أنا نسخة من GPT-4. كيف يمكنني مساعدتك اليوم؟`); 
    const res = await fetch(`https://joanimi-apis-for-devs.vercel.app/api/gpt?text=${encodeURIComponent(text)}&v=4`); 
    const json = await res.json(); 
    await conn.reply(m.chat, json.result, m); 
} 

handler.help = ['Ai'];
handler.tags = ['chatgpt'];
handler.command = /^(جي-بي-تي)$/i;

export default handler
