import fetch from 'node-fetch'; 

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const name = conn.getName(m.sender); 
    if (!text) throw(`أنا ساسكي أوتشيها. أنا نينجا من قرية كونوها، وأسعى لتحقيق أهدافي الخاصة. ماذا تريد أن تعرف؟`); 
    const res = await fetch(`https://joanimi-apis-for-devs.vercel.app/api/cai/v1?text=${encodeURIComponent(text)}&name=ساسكي&anime=ناروتو`); 
    const json = await res.json(); 
    await conn.reply(m.chat, json.result, m); 
} 

handler.help = ['Ai'];
handler.tags = ['chatgpt'];
handler.command = /^(ساسكي)$/i;

export default handler
