let handler = async (_0x3c596a, {
  conn: _0x57de8f,
  command: _0x15e0c9,
  usedPrefix: _0x31d28c
}) => {
  _0x57de8f.tebakbendera = _0x57de8f.tebakbendera ? _0x57de8f.tebakbendera : {};
  let _0x3e0d08 = _0x3c596a.chat;
  if (_0x3e0d08 in _0x57de8f.tebakbendera) {
    _0x57de8f.reply(_0x3c596a.chat, "في سؤال عشان تبقا عارف", _0x57de8f.tebakbendera[_0x3e0d08][0x0]);
    throw false;
  }
  let _0x4c11c2 = await (await fetch("https://raw.githubusercontent.com/Ben10K-bot/TheMystic-Bot-MD/master/src/JSON/Anime-3en.json")).json();
  let _0x4ad1ca = _0x4c11c2[Math.floor(Math.random() * _0x4c11c2.length)];
  let _0x37cb43 = ("*" + _0x15e0c9.toUpperCase() + "*\n  المده *" + 60 .toFixed(0x2) + "* ثانيه\n  استخدم " + _0x31d28c + "استسلم للاستسلام\n  الجائزه: " + 0x3e8 + " XP\n『Ben10&sasuke-bot』\n     ").trim();
  _0x57de8f.tebakbendera[_0x3e0d08] = [await _0x57de8f.sendFile(_0x3c596a.chat, _0x4ad1ca.img, '', _0x37cb43, _0x3c596a), _0x4ad1ca, 0x3e8, setTimeout(() => {
    if (_0x57de8f.tebakbendera[_0x3e0d08]) {
      _0x57de8f.reply(_0x3c596a.chat, "الوقت خلص!\nالاجابه هي *" + _0x4ad1ca.name + "*", _0x57de8f.tebakbendera[_0x3e0d08][0x0]);
    }
    delete _0x57de8f.tebakbendera[_0x3e0d08];
  }, 0xea60)];
};
handler.help = ["guessflag"];
handler.tags = ["game"];
handler.command = /^عين/i;
export default handler;