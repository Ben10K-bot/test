const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(`*${toM(a)}, يجب أن يتطلق من ${toM(b)}, انتوا مكنتوش لايقين على بعض ❤*`, null, {
    mentions: [a, b],
  });
}
handler.help = ['divorce'];
handler.tags = ['main', 'fun'];
handler.command = ['طلاق', 'divorce'];
handler.group = true;
export default handler;
