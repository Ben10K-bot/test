let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = `*❒═[لقد حصل بوت ساسكي على تقييم]═❒*\n\n*❒ الــتـقـــيـم : [ ⭐ ]*\n*❒ بـواسـطـة : [ +${m.sender.split`@`[0]} ]*\n\n*❒══[اتمنى ان يكون قد اعجبك]═══❒*`
conn.reply('966547540321@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
conn.reply('@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply('*تــم التـقـيــم + ليه كده زعلتني منك 💔😭*\n> اكتب .ابلاغ والحاجه الي مو جيده 🥲')
}
handler.command = /^(قيم١)$/i
export default handler