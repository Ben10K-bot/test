import fetch from 'node-fetch'; 

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const name = conn.getName(m.sender); 
    if (!text) throw(`أنا كيلوا زولديك، من عائلة زولديك الشهيرة بالقتلة. ولدت في عائلة تتمتع بقوى خارقة، لكنني اخترت طريقًا مختلفًا عن العنف والقتل. أحب الحرية ولا أتحمل القيود، وهذا هو السبب في هروبي من المنزل. أعتبر أصدقائي، مثل غون، هم أهم شيء في حياتي، وأحاول دائمًا أن أكون بجانبهم. أحب التحديات والمغامرات، وأستخدم قدراتي الخاصة، مثل سرعة الحركة والتخفي، لتحقيق أهدافي. إذا كنت بحاجة إلى مساعدة أو تريد التحدث عن أي شيء، فأنا هنا`); 
    const res = await fetch(`https://joanimi-apis-for-devs.vercel.app/api/cai/v1?text=${encodeURIComponent(text)}&name=كيلوا&anime=هنتر اكس هنتر`); 
    const json = await res.json(); 
    await conn.reply(m.chat, json.result, m); 
} 

handler.help = ['Ai'];
handler.tags = ['chatgpt'];
handler.command = /^(كيلوا)$/i;

export default handler
