import _0x4046aa from "similarity";
export async function before(_0x1b13a5) {
  let _0xe1432 = _0x1b13a5.chat;
  if (!_0x1b13a5.quoted || !_0x1b13a5.quoted.fromMe || !_0x1b13a5.quoted.isBaileys || !_0x1b13a5.text || !/استخدم.*استسلم/i.test(_0x1b13a5.quoted.text) || /.*hhint/i.test(_0x1b13a5.text)) {
    return true;
  }
  this.tebakbendera = this.tebakbendera ? this.tebakbendera : {};
  if (!(_0xe1432 in this.tebakbendera)) {
    return this.reply(_0x1b13a5.chat, "السؤال خلص يا احول", _0x1b13a5);
  }
  if (_0x1b13a5.quoted.id == this.tebakbendera[_0xe1432][0x0].id) {
    let _0x13bc73 = /^(استسلم|surr?ender)$/i.test(_0x1b13a5.text);
    if (_0x13bc73) {
      clearTimeout(this.tebakbendera[_0xe1432][0x3]);
      delete this.tebakbendera[_0xe1432];
      return this.reply(_0x1b13a5.chat, "*طلع فاشل و استسلم :( !*", _0x1b13a5);
    }
    let _0x18bfc6 = JSON.parse(JSON.stringify(this.tebakbendera[_0xe1432][0x1]));
    if (_0x1b13a5.text.toLowerCase() == _0x18bfc6.name.toLowerCase().trim()) {
      global.db.data.users[_0x1b13a5.sender].exp += this.tebakbendera[_0xe1432][0x2];
      this.reply(_0x1b13a5.chat, "✅ *صح!*\n+" + this.tebakbendera[_0xe1432][0x2] + " XP", _0x1b13a5);
      clearTimeout(this.tebakbendera[_0xe1432][0x3]);
      delete this.tebakbendera[_0xe1432];
    } else if (_0x4046aa(_0x1b13a5.text.toLowerCase(), _0x18bfc6.name.toLowerCase().trim()) >= 0.72) {
      _0x1b13a5.reply("❗ *قربت!*");
    } else {
      this.reply(_0x1b13a5.chat, "❌ *خطا!*", _0x1b13a5);
    }
  }
  return true;
}
0x0;