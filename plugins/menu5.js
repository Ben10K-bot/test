import _0x485bd7 from "node-fetch";
const handler = async (_0x36c8e3, {
  conn: _0xe9b4f0,
  usedPrefix: _0x31b114,
  usedPrefix: _0x3233b5,
  __dirname: _0x23e7bd,
  text: _0x131b6f,
  isPrems: _0x25c1b0
}) => {
  try {
    if (_0x31b114 == "a" || _0x31b114 == "A") {
      return;
    }
    const {
      money: _0x4f08e8,
      joincount: _0x2db758
    } = global.db.data.users[_0x36c8e3.sender];
    const {
      exp: _0x2ecce8,
      limit: _0x2ecd16,
      level: _0xebe489,
      role: _0x1861d8
    } = global.db.data.users[_0x36c8e3.sender];
    const _0x36b56d = await _0xe9b4f0.profilePictureUrl(_0xe9b4f0.user.jid)["catch"](_0x100641 => "https://telegra.ph/file/278d4552ebe00f5d279b5.jpg");
    const _0x4b14f5 = {
      "key": {
        "fromMe": false,
        "participant": "0@s.whatsapp.net",
        ...(_0x36c8e3.chat ? {
          "remoteJid": "status@broadcast"
        } : {})
      },
      "message": {
        "contactMessage": {
          "displayName": wm,
          "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:XL;" + wm + ",;;;\nFN:" + wm + ",\nitem1.TEL;waid=" + _0x36c8e3.sender.split("@")[0x0] + ":" + _0x36c8e3.sender.split("@")[0x0] + "\nitem1.X-ABLabell:Ponsel\nEND:VCARD",
          "jpegThumbnail": imagen1,
          "thumbnail": imagen1,
          "sendEphemeral": true
        }
      }
    };
    await _0xe9b4f0.reply(_0x36c8e3.chat, "يـتـم تـجـهيـز الـقـائـمـه⏳*", _0x36c8e3, {
      "contextInfo": {
        "forwardingScore": 0x7e6,
        "isForwarded": true,
        "externalAdReply": {
          "title": "اوامــر الـبـنـك ⛰️!",
          "body": "bienvenido",
          "sourceUrl": global.md,
          "thumbnail": await (await _0x485bd7(_0x36b56d)).buffer()
        }
      }
    });
    await _0xe9b4f0.sendMessage(_0x36c8e3.chat, {
      "react": {
        "text": "💎",
        "key": _0x36c8e3.key
      }
    });
    await _0xe9b4f0.sendMessage(_0x36c8e3.chat, {
      "text": "⦓           ⦓🍀⦔          ⦔ـ\n⌟🍄⌜❥ قـائـمـة الـبـنـك ❥⌟🍄⌜\n⦓           ⦓🍀⦔          ⦔ـ\n© الاوامــر ⁦(⁠ ⁠ꈍ⁠ᴗ⁠ꈍ⁠)⁩\n⦓           ⦓🍀⦔          ⦔ـ\n🧰❯ ⏐ .عـمـلات \n◈᚜لـتـجـمـع عـمـلات᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .راتـب \n◈᚜بيعطيك راتب يومي᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .يـومـي\n◈᚜بيعطيك هديتك اليوميه᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .كـويـنـز\n◈᚜هـديـه للـغـامـرة᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .عـمـلاتـي \n◈᚜قائمة عملاتك᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .لـفـل\n◈᚜لمعرفة لفلك᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .مـتـجـر \n◈᚜بيعطيك قائمة المتجر᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .اصـتـيـاد\n◈᚜للذهاب الي مغامره᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .صـحـه | الـصـحـه\n◈᚜ بيوريك دمك في المغامره᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .عـمـل\n◈᚜لتجميع هدية من الاعمل᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .تـفـعـيـل\n◈᚜لتسجيل ف البوت᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .الـغـاء-الـتـفـعـيـل\n◈᚜لالغاء التسجيل ف البوت᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .شـراء \n◈᚜لشراء عملات في البوت᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .نـقـل \n◈᚜لتصغير حجم الصور ᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .سـرقـه \n◈᚜لسرقة طاقه من الاعضاء᚛◈\n⦓           ⦓🍀⦔          ⦔ـ\nبـس كـده ⁦(⁠≧⁠▽⁠≦⁠)⁩\n⦓           ⦓🍀⦔          ⦔ـ\n✒️⏐يوتيوب https://www.youtube.com/@telawatyasseer1\n\nاتـمـنـي أن يـعـجـبـكم الـبـوت تـابـع قـنـاتـي لـكـل الـبـوتـات الـجـديـده ☺️💗\n⦓           ⦓🍀⦔          ⦔".trim(),
      "mentions": [..."⦓           ⦓🍀⦔          ⦔ـ\n⌟🍄⌜❥ قـائـمـة الـبـنـك ❥⌟🍄⌜\n⦓           ⦓🍀⦔          ⦔ـ\n© الاوامــر ⁦(⁠ ⁠ꈍ⁠ᴗ⁠ꈍ⁠)⁩\n⦓           ⦓🍀⦔          ⦔ـ\n🧰❯ ⏐ .عـمـلات \n◈᚜لـتـجـمـع عـمـلات᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .راتـب \n◈᚜بيعطيك راتب يومي᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .يـومـي\n◈᚜بيعطيك هديتك اليوميه᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .كـويـنـز\n◈᚜هـديـه للـغـامـرة᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .عـمـلاتـي \n◈᚜قائمة عملاتك᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .لـفـل\n◈᚜لمعرفة لفلك᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .مـتـجـر \n◈᚜بيعطيك قائمة المتجر᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .اصـتـيـاد\n◈᚜للذهاب الي مغامره᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .صـحـه | الـصـحـه\n◈᚜ بيوريك دمك في المغامره᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .عـمـل\n◈᚜لتجميع هدية من الاعمل᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .تـفـعـيـل\n◈᚜لتسجيل ف البوت᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .الـغـاء-الـتـفـعـيـل\n◈᚜لالغاء التسجيل ف البوت᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .شـراء \n◈᚜لشراء عملات في البوت᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .نـقـل \n◈᚜لتصغير حجم الصور ᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .سـرقـه \n◈᚜لسرقة طاقه من الاعضاء᚛◈\n⦓           ⦓🍀⦔          ⦔ـ\nبـس كـده ⁦(⁠≧⁠▽⁠≦⁠)⁩\n⦓           ⦓🍀⦔          ⦔ـ\n✒️⏐يوتيوب https://www.youtube.com/@telawatyasseer1\n\nاتـمـنـي أن يـعـجـبـكم الـبـوت تـابـع قـنـاتـي لـكـل الـبـوتـات الـجـديـده ☺️💗\n⦓           ⦓🍀⦔          ⦔".matchAll(/@([0-9]{5,16}|0)/g)].map(_0x24b472 => _0x24b472[0x1] + "@s.whatsapp.net"),
      "contextInfo": {
        "forwardingScore": 0x98967f,
        "isForwarded": true,
        "mentionedJid": [..."⦓           ⦓🍀⦔          ⦔ـ\n⌟🍄⌜❥ قـائـمـة الـبـنـك ❥⌟🍄⌜\n⦓           ⦓🍀⦔          ⦔ـ\n© الاوامــر ⁦(⁠ ⁠ꈍ⁠ᴗ⁠ꈍ⁠)⁩\n⦓           ⦓🍀⦔          ⦔ـ\n🧰❯ ⏐ .عـمـلات \n◈᚜لـتـجـمـع عـمـلات᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .راتـب \n◈᚜بيعطيك راتب يومي᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .يـومـي\n◈᚜بيعطيك هديتك اليوميه᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .كـويـنـز\n◈᚜هـديـه للـغـامـرة᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .عـمـلاتـي \n◈᚜قائمة عملاتك᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .لـفـل\n◈᚜لمعرفة لفلك᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .مـتـجـر \n◈᚜بيعطيك قائمة المتجر᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .اصـتـيـاد\n◈᚜للذهاب الي مغامره᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .صـحـه | الـصـحـه\n◈᚜ بيوريك دمك في المغامره᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .عـمـل\n◈᚜لتجميع هدية من الاعمل᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .تـفـعـيـل\n◈᚜لتسجيل ف البوت᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .الـغـاء-الـتـفـعـيـل\n◈᚜لالغاء التسجيل ف البوت᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .شـراء \n◈᚜لشراء عملات في البوت᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .نـقـل \n◈᚜لتصغير حجم الصور ᚛◈\n⦓                 ⦔ـ\n🧰❯ ⏐ .سـرقـه \n◈᚜لسرقة طاقه من الاعضاء᚛◈\n⦓           ⦓🍀⦔          ⦔ـ\nبـس كـده ⁦(⁠≧⁠▽⁠≦⁠)⁩\n⦓           ⦓🍀⦔          ⦔ـ\n✒️⏐يوتيوب https://www.youtube.com/@telawatyasseer1\n\nاتـمـنـي أن يـعـجـبـكم الـبـوت تـابـع قـنـاتـي لـكـل الـبـوتـات الـجـديـده ☺️💗\n⦓           ⦓🍀⦔          ⦔".matchAll(/@([0-9]{5,16}|0)/g)].map(_0xf21fb3 => _0xf21fb3[0x1] + "@s.whatsapp.net"),
        "externalAdReply": {
          "showAdAttribution": true,
          "containsAutoReply": true,
          "renderLargerThumbnail": true,
          "title": "乂 💖 Ben10 🧿 Sasuke ⛰️乂",
          "containsAutoReply": true,
          "mediaType": 0x1,
          "thumbnail": [imagen6, imagen1, imagen4].getRandom(),
          "mediaUrl": global.gp1,
          "sourceUrl": global.gp1
        }
      }
    }, {
      "quoted": _0x4b14f5
    });
  } catch {
    _0xe9b4f0.reply(_0x36c8e3.chat, "*❗ حـدث خـطـاء*", _0x36c8e3);
  }
};
handler.help = ["vvvvvivv"];
handler.tags = ["vvvvvviv"];
handler.command = /^(قسم_البنك|س10)$/i;
export default handler;