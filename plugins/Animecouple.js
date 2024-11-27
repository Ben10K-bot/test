import _0x34fca4 from 'node-fetch';
let handler = async (_0x205f78, {
  conn: _0x575e56
}) => {
  let _0x32c3b9 = await (await _0x34fca4('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json();
  let _0x700d7e = _0x32c3b9[Math.floor(Math.random() * _0x32c3b9.length)];
  let _0x2bdbd1 = await (await _0x34fca4(_0x700d7e.cowo)).buffer();
  await _0x575e56.sendFile(_0x205f78.chat, _0x2bdbd1, '', "تطقيم ل ولد 👦رقم المطور +966547540321", _0x205f78);
  let _0x20092b = await (await _0x34fca4(_0x700d7e.cewe)).buffer();
  await _0x575e56.sendFile(_0x205f78.chat, _0x20092b, '', "تطقيم ل بنت 👧رقم المطور +966547540321", _0x205f78);
};
handler.help = ['ppcouple', "ppcp"];
handler.tags = ["internet"];
handler.command = ["طقم", "تطقيم"];
export default handler;