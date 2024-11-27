const handler = async (_0x43bd04, {
  conn: _0x53e84d
}) => {
  try {
    const _0x29afc5 = process.uptime() * 0x3e8;
    const _0xa479e9 = clockString(_0x29afc5);
    const _0x235190 = "@" + _0x43bd04.sender.split("@s.whatsapp.net")[0x0];
    const _0x11b212 = ("╭────[ *Saskue Bot* ]\n│\n│ *➤ مرحبا " + _0x235190 + "*\n│\n│ *=> 🤖 المده الي اشتغلتها:* " + _0xa479e9 + "\n│ *=> ✅ البوت شغال عام*\n│ *=> 👑 المطورين: Ben10 - Sasuke*\n│ *=> 🔗 الحسابات:* https://linktr.ee/mohamedosama01\n- - - - - - - - \n╰────────────────").trim();
    if (_0x43bd04.isGroup) {
      _0x53e84d.sendMessage(_0x43bd04.chat, {
        "text": _0x11b212.trim(),
        "mentions": [..._0x11b212.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x2a9c3f => _0x2a9c3f[0x1] + "@s.whatsapp.net"),
        "contextInfo": {
          "forwardingScore": 0x98967f,
          "isForwarded": true,
          "mentionedJid": [..._0x11b212.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x5161f1 => _0x5161f1[0x1] + "@s.whatsapp.net"),
          "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "renderLargerThumbnail": true,
            "title": global.titulowm,
            "containsAutoReply": true,
            "mediaType": 0x1,
            "thumbnail": imagen6,
            "mediaUrl": "https://linktr.ee/mohamedosama01",
            "sourceUrl": "https://linktr.ee/mohamedosama01"
          }
        }
      }, {
        "quoted": _0x43bd04
      });
    } else {
      const _0x1e69b4 = {
        "key": {
          "participants": "0@s.whatsapp.net",
          "remoteJid": "status@broadcast",
          "fromMe": false,
          "id": "Halo"
        },
        "message": {
          "contactMessage": {
            "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=" + _0x43bd04.sender.split("@")[0x0] + ":" + _0x43bd04.sender.split("@")[0x0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
          }
        },
        "participant": "0@s.whatsapp.net"
      };
      _0x53e84d.sendMessage(_0x43bd04.chat, {
        "text": _0x11b212.trim(),
        "mentions": [..._0x11b212.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x2f0617 => _0x2f0617[0x1] + "@s.whatsapp.net"),
        "contextInfo": {
          "forwardingScore": 0x98967f,
          "isForwarded": true,
          "mentionedJid": [..._0x11b212.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x58f1a6 => _0x58f1a6[0x1] + "@s.whatsapp.net"),
          "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "renderLargerThumbnail": true,
            "title": global.titulowm,
            "containsAutoReply": true,
            "mediaType": 0x1,
            "thumbnail": imagen6,
            "mediaUrl": "https://linktr.ee/mohamedosama01",
            "sourceUrl": "https://linktr.ee/mohamedosama01"
          }
        }
      }, {
        "quoted": _0x1e69b4
      });
    }
  } catch {}
};
handler.help = ["estado"];
handler.tags = ["main"];
handler.command = /^(estado|status|الحاله|state|stado|stats|runtime|uptime)$/i;
export default handler;
function clockString(_0x4d038a) {
  const _0x2b9b70 = isNaN(_0x4d038a) ? "--" : Math.floor(_0x4d038a / 0x5265c00);
  const _0x199f55 = isNaN(_0x4d038a) ? "--" : Math.floor(_0x4d038a / 0x36ee80) % 0x18;
  const _0x3261a4 = isNaN(_0x4d038a) ? "--" : Math.floor(_0x4d038a / 0xea60) % 0x3c;
  const _0x5320d6 = isNaN(_0x4d038a) ? "--" : Math.floor(_0x4d038a / 0x3e8) % 0x3c;
  return ["\n│ *=> 💥 " + _0x2b9b70, " يوم* ", "\n│ *=> 💫 " + _0x199f55, " ساعه* ", "\n│ *=> 💠 " + _0x3261a4, " دقيقه* ", "\n│ *=> ♦ " + _0x5320d6, " ثانيه* "].map(_0x444607 => _0x444607.toString().padStart(0x2, 0x0)).join('');
}