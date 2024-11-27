import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗ خطأ ❗] حط اسم ${usedPrefix + command} كانيكي*`;

  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  conn.sendFile(m.chat, link, 'error.jpg', `┏─━═║✠║◦¦🖤¦◦║✠║═━─┓\n『❀┇Sasuke☞︎︎︎🖤☜︎︎bot┇❀』\nالـطـلـب: ${text}\nBen10 and Sasuke\n┗─━═║✠║◦¦🖤¦◦║✠║═━─┛`, m);
};
handler.help = ['gimage <query>', 'imagen <query>'];
handler.tags = ['internet', 'tools'];
handler.command = /^(صوره|image|imagen)$/i;
export default handler;
