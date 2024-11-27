import fetch from 'node-fetch'; 

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const name = conn.getName(m.sender); 
    if (!text) throw(`أنا غوكو! سعيد بلقائك! ماذا تريد أن نتحدث عنه اليوم؟ هل لديك أي أسئلة أو تريد أن تتحدث عن المعارك أو الأصدقاء أو أي شيء آخر؟`); 
    const res = await fetch(`https://joanimi-apis-for-devs.vercel.app/api/cai/v1?text=${encodeURIComponent(text)}&name=غوكو&anime= دراجون بول`); 
    const json = await res.json(); 
    await conn.reply(m.chat, json.result, m); 
} 

handler.help = ['Ai'];
handler.tags = ['chatgpt'];
handler.command = /^(غوكو)$/i;

export default handler