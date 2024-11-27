const handler = async (_0x33fc0e, {
  conn: _0x445746
}) => {
  let _0x546d62 = '';
  for (const [_0x110185, _0x2c1b65] of Object.entries(_0x445746.chats).filter(([_0x43c078, _0x4d55d0]) => _0x43c078.endsWith("@g.us") && _0x4d55d0.isChats)) _0x546d62 += "\n│⚝ ⃟👥❯ الاسم " + (await _0x445746.getName(_0x110185)) + "\n│⚝ ⃟💌❯ رمز " + _0x110185 + " │[" + (_0x2c1b65?.["metadata"]?.["read_only"] ? "شغال" : "شغال") + "]\n\n";
  _0x33fc0e.reply(("╮───────────────╭ـ\n*│❣️مـجـمـوعـات الـبـوت❣️*\n│🧿Ben10|sasuke\n╯───────────────╰ـ\n" + _0x546d62 + "\n").trim());
};
handler.help = ["groups", "grouplist"];
handler.tags = ["owner"];
handler.command = /^(groups|2الجروبات|listadegrupo|gruposlista|listagrupos)$/i;
handler.rowner = true;
export default handler;