import _0x3a6e1a from "node-fetch";
const handler = async (_0x26a7dc, {
  conn: _0x4b9db4,
  text: _0x1fdabf,
  args: _0x2772d7
}) => {
  if (!_0x2772d7[0x0]) {
    return _0x4b9db4.reply(_0x26a7dc.chat, "*[🔎] ابعت الينك الي عايز تبحث عنه", _0x26a7dc);
  }
  try {
    const _0x5e4ecb = await (await _0x3a6e1a("https://image.thum.io/get/fullpage/" + _0x2772d7[0x0])).buffer();
    _0x4b9db4.sendFile(_0x26a7dc.chat, _0x5e4ecb, '', '', _0x26a7dc);
  } catch {
    try {
      const _0x413352 = "https://api.screenshotmachine.com/?key=c04d3a&url=" + _0x2772d7[0x0] + "&screenshotmachine.com&dimension=720x720";
      _0x4b9db4.sendMessage(_0x26a7dc.chat, {
        "image": {
          "url": _0x413352
        }
      }, {
        "quoted": _0x26a7dc
      });
    } catch {
      try {
        const _0x3bb99a = "https://api.lolhuman.xyz/api/SSWeb?apikey=" + lolkeysapi + "&url=" + _0x1fdabf;
        _0x4b9db4.sendMessage(_0x26a7dc.chat, {
          "image": {
            "url": _0x3bb99a
          }
        }, {
          "quoted": _0x26a7dc
        });
      } catch {
        const _0x4d52dc = "https://api.lolhuman.xyz/api/SSWeb2?apikey=" + lolkeysapi + "&url=" + _0x1fdabf;
        _0x4b9db4.sendMessage(_0x26a7dc.chat, {
          "image": {
            "url": _0x4d52dc
          }
        }, {
          "quoted": _0x26a7dc
        });
      }
    }
  }
};
handler.help = ["ss", "ssf"].map(_0x398d24 => _0x398d24 + " <url>");
handler.tags = ["internet"];
handler.command = /^بالينك|ss(web)?f?$/i;
export default handler;