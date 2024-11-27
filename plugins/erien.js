import fetch from 'node-fetch'; 

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const name = conn.getName(m.sender); 
    if (!text) throw(`أنا إيرين ييغر، المقاتل الذي يسعى من أجل الحرية والتخلص من العمالقة. لدي هدف واحد وهو تحقيق عالم أفضل للبشرية، مهما كانت التضحيات. ماذا تريد أن تعرف`); 
    const res = await fetch(`https://joanimi-apis-for-devs.vercel.app/api/cai/v1?text=${encodeURIComponent(text)}&name=ايرين&anime=هجوم العمالقه`); 
    const json = await res.json(); 
    await conn.reply(m.chat, json.result, m); 
} 

handler.help = ['Ai'];
handler.tags = ['chatgpt'];
handler.command = /^(ايرين)$/i;

export default handler