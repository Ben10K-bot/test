let handler = async (m, { command, text }) => m.reply(`⦓           ⦓🏆⦔          ⦔ـ
⌟🌐⌜ قـسـم الـبـحـث
⦓           ⦓🏆⦔          ⦔ـ
🧸❯ ⏐ .يوتيوب
☫ ⌟يبحث في اليوتيوب⌜
🧸❯ ⏐ .جـيـتـهاب
☫ ⌟يبحث في جيت هاب⌜
🧸❯ ⏐ .بين 
☫ ⌟بحث في يبنترست⌜
🧸❯ ⏐.انـمـي
☫ ⌟بحث عن الانمي بالانجليزي⌜
> Ben10`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['اوامر <teks>?']
handler.tags = ['اوامر', 'fun']
handler.command = /^(قسم_البحث|س4)$/i

export default handler
