const handler = async (_0x390f9b, {
  conn: _0x1c31c6,
  usedPrefix: _0x49dc75
}) => {
  const _0x3b65e0 = ["pdf", "zip", "vnd.openxmlformats-officedocument.presentationml.presentation", "vnd.openxmlformats-officedocument.spreadsheetml.sheet", "vnd.openxmlformats-officedocument.wordprocessingml.document"];
  const _0x1e6b53 = _0x3b65e0[Math.floor(Math.random() * _0x3b65e0.length)];
  const _0x90a398 = "*اهلا بك 👋🏻 اليك جروبات المطور 🧿 يتم تصنيع ❣️ و تعليم صنع بوتات 🍀 اذا كنت مهتم بيها💌*\n\n*➤ Sasuke channal Support |🇵🇸 :*\n*1.-* https://whatsapp.com/channel/0029Vap8YXSIt5roxR0a0m21\n*➤ Sasuke bot number*\n*2.-* https://wa.me/201205987431\n*➤ Ben 10 Num ☠️*\n*3.-* https://wa.me/966547540321\n*Islamic groub❤️*\n*5.-* https://chat.whatsapp.com/KxmMvxsBpS5HBvucOo6Fin".trim();
  const _0x23703f = {
    "document": {
      "url": "https://www.youtube.com/@telawatyasseer1"
    },
    "mimetype": "application/" + _0x1e6b53,
    "fileName": "「 اهـلاً 」",
    "fileLength": 0x5af3107a3fff,
    "pageCount": 0xc8,
    "contextInfo": {
      "forwardingScore": 0xc8,
      "isForwarded": true,
      "externalAdReply": {
        "mediaUrl": "https://www.youtube.com/@telawatyasseer1",
        "mediaType": 0x2,
        "previewType": "pdf",
        "title": "دوس هيدخلك علي قناه قران ",
        "body": wm,
        "thumbnail": imagen1,
        "sourceUrl": "https://www.youtube.com/@telawatyasseer1"
      }
    },
    "caption": _0x90a398,
    "footer": wm,
    "headerType": 0x6
  };
  _0x1c31c6.sendMessage(_0x390f9b.chat, _0x23703f, {
    "quoted": _0x390f9b
  });
};
handler.command = ["دعم", "الدعم"];
export default handler;