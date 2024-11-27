const handler = _0x4f84cb => _0x4f84cb;
handler.before = async function (_0x403d32) {
  this.suit = this.suit ? this.suit : {};
  if (db.data.users[_0x403d32.sender].suit < 0x0) {
    db.data.users[_0x403d32.sender].suit = 0x0;
  }
  const _0x1413ae = Object.values(this.suit).find(_0x4e9ffe => _0x4e9ffe.id && _0x4e9ffe.status && [_0x4e9ffe.p, _0x4e9ffe.p2].includes(_0x403d32.sender));
  if (_0x1413ae) {
    let _0xa7f313 = '';
    let _0x18f779 = false;
    if (_0x403d32.sender == _0x1413ae.p2 && /^(acc(ept)?|اوافق|aceptar|موافق|aceptare?|nao|gamau|rechazar|ga(k.)?bisa)/i.test(_0x403d32.text) && _0x403d32.isGroup && _0x1413ae.status == "wait") {
      if (/^(غيرموافق|غير موافق|rechazar|ga(k.)?bisa)/i.test(_0x403d32.text)) {
        const _0x418a32 = "*[❗] @" + _0x1413ae.p2.split`@`[0x0] + " تم رفض التحدي, اللعبه توقفت*";
        _0x403d32.reply(_0x418a32, null, {
          "mentions": this.parseMention(_0x418a32)
        });
        delete this.suit[_0x1413ae.id];
        return true;
      }
      _0x1413ae.status = "play";
      _0x1413ae.asal = _0x403d32.chat;
      clearTimeout(_0x1413ae.waktu);
      const _0x17e235 = "🎮 لعبه التحدي 🎮\n\n—◉ اللعبة, تم إرسال الخيارات إلى الدردشة الخاصة ل @" + _0x1413ae.p.split`@`[0x0] + " و @" + _0x1413ae.p2.split`@`[0x0] + "\n\n◉ حدد خيارًا في الدردشة الخاصة بك, على التوالى\n*◉ اختر الخيار في wa.me/" + conn.user.jid.split`@`[0x0] + global.hello;
      _0x403d32.reply(_0x17e235, _0x403d32.chat, {
        "mentions": this.parseMention(_0x17e235)
      });
      const _0x56a1b1 = "من فضلك اختر خيار\nحجره\nورقه\nمقص\nالمكافئه +" + _0x1413ae.poin + "𝚇𝙿\nالخساره " + _0x1413ae.poin_lose + "𝚇𝙿\n*قم بالرد على الرسالة بالخيار الذي تريده*\n*مثال: ورقه*";
      const _0x9231d2 = "من فضلك اختر خيار\nحجره\nورقه\nمقص\nالمكافئه +" + _0x1413ae.poin + "𝚇𝙿\nالخساره " + _0x1413ae.poin_lose + "𝚇𝙿\n*قم بالرد على الرسالة بالخيار الذي تريده*\n*مثال: ورقه*";
      if (!_0x1413ae.pilih) {
        this.sendMessage(_0x1413ae.p, {
          "text": _0x56a1b1
        }, {
          "quoted": _0x403d32
        });
      }
      if (!_0x1413ae.pilih2) {
        this.sendMessage(_0x1413ae.p2, {
          "text": _0x9231d2
        }, {
          "quoted": _0x403d32
        });
      }
      _0x1413ae.waktu_milih = setTimeout(() => {
        if (!_0x1413ae.pilih && !_0x1413ae.pilih2) {
          this.sendMessage(_0x403d32.chat, {
            "text": "[❗] لم يقم اللاعب بالقبول او الرفض و تم انتهاء الوضت, اللعبه توقفت"
          }, {
            "quoted": _0x403d32
          });
        } else if (!_0x1413ae.pilih || !_0x1413ae.pilih2) {
          _0xa7f313 = !_0x1413ae.pilih ? _0x1413ae.p2 : _0x1413ae.p;
          const _0x435ffd = "*[❗] @" + (_0x1413ae.pilih ? _0x1413ae.p2 : _0x1413ae.p).split`@`[0x0] + " لم تختار اي خيار, انتهت اللعبه*";
          this.sendMessage(_0x403d32.chat, {
            "text": _0x435ffd
          }, {
            "quoted": _0x403d32
          }, {
            "mentions": this.parseMention(_0x435ffd)
          });
          db.data.users[_0xa7f313 == _0x1413ae.p ? _0x1413ae.p : _0x1413ae.p2].exp += _0x1413ae.poin;
          db.data.users[_0xa7f313 == _0x1413ae.p ? _0x1413ae.p : _0x1413ae.p2].exp += _0x1413ae.poin_bot;
          db.data.users[_0xa7f313 == _0x1413ae.p ? _0x1413ae.p2 : _0x1413ae.p].exp -= _0x1413ae.poin_lose;
        }
        delete this.suit[_0x1413ae.id];
        return true;
      }, _0x1413ae.timeout);
    }
    const _0x360976 = _0x403d32.sender == _0x1413ae.p;
    const _0x3c98f6 = _0x403d32.sender == _0x1413ae.p2;
    if (_0x360976 && /^(مقص|حجره|ورقه)/i.test(_0x403d32.text) && !_0x1413ae.pilih && !_0x403d32.isGroup) {
      _0x1413ae.pilih = /^(مقص|حجره|ورقه)/i.exec(_0x403d32.text.toLowerCase())[0x0];
      _0x1413ae.text = _0x403d32.text;
      _0x403d32.reply("*[ ✔ ] لقد اخترت " + _0x403d32.text + ", ارجع المجموعة و " + (_0x1413ae.pilih2 ? "شوف النتيجه*" : "انتظر النتيجه*"));
      if (!_0x1413ae.pilih2) {
        this.reply(_0x1413ae.p2, "*[❗] الخيار المختار, حان دورك للاختيار!!*", 0x0);
      }
    }
    if (_0x3c98f6 && /^(مقص|حجره|ورقه)/i.test(_0x403d32.text) && !_0x1413ae.pilih2 && !_0x403d32.isGroup) {
      _0x1413ae.pilih2 = /^(مقص|حجره|ورقه)/i.exec(_0x403d32.text.toLowerCase())[0x0];
      _0x1413ae.text2 = _0x403d32.text;
      _0x403d32.reply("*[ ✔ ] لقد اخترت " + _0x403d32.text + ",  ارجع المجموعة و " + (_0x1413ae.pilih ? "شوف النتيجه*" : "انتظر النتيجه*"));
      if (!_0x1413ae.pilih) {
        this.reply(_0x1413ae.p, "*[❗] الخيار المختار, حان دورك للاختيار!!*", 0x0);
      }
    }
    const _0x187daf = _0x1413ae.pilih;
    const _0x38c744 = _0x1413ae.pilih2;
    if (_0x1413ae.pilih && _0x1413ae.pilih2) {
      clearTimeout(_0x1413ae.waktu_milih);
      if (/حجره/i.test(_0x187daf) && /مقص/i.test(_0x38c744)) {
        _0xa7f313 = _0x1413ae.p;
      } else if (/حجره/i.test(_0x187daf) && /ورقه/i.test(_0x38c744)) {
        _0xa7f313 = _0x1413ae.p2;
      } else if (/مقص/i.test(_0x187daf) && /ورقه/i.test(_0x38c744)) {
        _0xa7f313 = _0x1413ae.p;
      } else if (/مقص/i.test(_0x187daf) && /حجره/i.test(_0x38c744)) {
        _0xa7f313 = _0x1413ae.p2;
      } else if (/ورقه/i.test(_0x187daf) && /حجره/i.test(_0x38c744)) {
        _0xa7f313 = _0x1413ae.p;
      } else if (/ورقه/i.test(_0x187daf) && /مقص/i.test(_0x38c744)) {
        _0xa7f313 = _0x1413ae.p2;
      } else if (_0x187daf == _0x38c744) {
        _0x18f779 = true;
      }
      this.reply(_0x1413ae.asal, ("\n*👑 نتائج التحدي 👑*" + (_0x18f779 ? "\n*—◉ رَابِطَة!!*" : '') + "\n*@" + _0x1413ae.p.split`@`[0x0] + " (" + _0x1413ae.text + ")* " + (_0x18f779 ? '' : _0x1413ae.p == _0xa7f313 ? " *رَابِطَة 🥳 +" + _0x1413ae.poin + "XP*" : " *خسر 🤡 " + _0x1413ae.poin_lose + "XP*") + "\n*@" + _0x1413ae.p2.split`@`[0x0] + " (" + _0x1413ae.text2 + ")* " + (_0x18f779 ? '' : _0x1413ae.p2 == _0xa7f313 ? " *رَابِطَة 🥳 +" + _0x1413ae.poin + "XP*" : " *خسر 🤡 " + _0x1413ae.poin_lose + "XP*") + "\n").trim(), _0x403d32, {
        "mentions": [_0x1413ae.p, _0x1413ae.p2]
      });
      if (!_0x18f779) {
        db.data.users[_0xa7f313 == _0x1413ae.p ? _0x1413ae.p : _0x1413ae.p2].exp += _0x1413ae.poin;
        db.data.users[_0xa7f313 == _0x1413ae.p ? _0x1413ae.p : _0x1413ae.p2].exp += _0x1413ae.poin_bot;
        db.data.users[_0xa7f313 == _0x1413ae.p ? _0x1413ae.p2 : _0x1413ae.p].exp += _0x1413ae.poin_lose;
      }
      delete this.suit[_0x1413ae.id];
    }
  }
  return true;
};
handler.exp = 0x0;
export default handler;
function random(_0x40a1af) {
  return _0x40a1af[Math.floor(Math.random() * _0x40a1af.length)];
}