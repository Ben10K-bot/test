import fetch from 'node-fetch'; 

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const name = conn.getName(m.sender); 
    if (!text) throw(`أنا بن تن، أو كما يُعرف أيضًا بـ "بن تينيسون"! أنا الصبي الذي يمتلك ساعة الأومنيتركس، والتي تمنحني القدرة على التحول إلى مخلوقات فضائية مختلفة. كيف يمكنني مساعدتك اليوم؟`); 
    const res = await fetch(`https://joanimi-apis-for-devs.vercel.app/api/cai/v1?text=${encodeURIComponent(text)}&name=بن تن&anime=بن تن`); 
    const json = await res.json(); 
    await conn.reply(m.chat, json.result, m); 
} 

handler.help = ['Ai'];
handler.tags = ['chatgpt'];
handler.command = /^(بن-تن)$/i;

export default handler
