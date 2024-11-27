import fetch from 'node-fetch'; 

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const name = conn.getName(m.sender); 
    if (!text) throw(`أنا مونكي دي. لوفي! قائد قراصنة قبعة القش، وأحلم بأن أكون ملك القراصنة! إذا كان لديك أي أسئلة أو مغامرات تريد أن تخوضها، فلا تتردد في إخباري!`); 
    const res = await fetch(`https://joanimi-apis-for-devs.vercel.app/api/cai/v1?text=${encodeURIComponent(text)}&name=لوفي&anime=ون بيس`); 
    const json = await res.json(); 
    await conn.reply(m.chat, json.result, m); 
} 

handler.help = ['Ai'];
handler.tags = ['chatgpt'];
handler.command = /^(لوفي)$/i;

export default handler
