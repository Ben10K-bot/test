let handler = async (m, { command, text }) => m.reply(`╭━─━━━≪『﷽』≫━━━─━╮

✦━─━⌠  قــائمــة 📜 المهام  ⌡━─━✦

> س1
> لعرض قسم الذكاء الاصتناعي 

> س2
> لعرض قسم الاعضاء 

> س3
> لعرض قسم الجروب 

> س4
> لعرض قسم البحث 

> س5
> لعرض قسم التحويلات 

> س6
> لعرض قسم الالعاب 

> س7
> لعرض قسم الاصوات 

> س8
> لعرض قسم الصور 

> س9     
> لعرض قسم الاستيكرات 

> س10     
> لعرض قسم البنك (مغلق مؤقتا)  

> س11     
> لعرض قسم المتجر 

> س12     
> لعرض قسم المطور 

✦━━━─━─༺༻─━─━━━✦
قـــائــــــمـــه الـمهـــام 
> Ben 10
✦━━━─━─༺༻─━─━━━✦`.trim(), null, m.mentionedJid ? {
    mentions: m.mentionedJid
  } : {})
  
  handler.help = ['اوامر <teks>?']
  handler.tags = ['اوامر', 'fun']
  handler.command = /^(المهام)$/i
  
  export default handler