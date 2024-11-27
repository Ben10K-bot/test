import fetch from 'node-fetch';

const handler = async (m, {

    isPrems,

    conn

}) => {

    const fkontak = {

        'key': {

            'participants': '0@s.whatsapp.net',

            'remoteJid': 'status@broadcast',

            'fromMe': false,

            'id': 'Halo'

        },

        'message': {

            'contactMessage': {

                'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`

            }

        },

        'participant': '0@s.whatsapp.net',

    };

    const mystic = './Menu2.jpg';

    const dos = [md];

    const user = global.db.data.users[m.sender];

    const premium = user.premium;

    const exp = `${pickRandom([500, 600, 700, 800, 900, 999, 1000, 1300, 1500, 1800])}` * 1;

    const exppremium = `${pickRandom([1000, 1500, 1800, 2100, 2500, 2900, 3300, 3600, 4000, 4500])}` * 1;

    const money = `${pickRandom([300, 500, 700, 900, 500, 800, 900, 1100, 1350, 1500])}` * 1;

    const moneypremium = `${pickRandom([800, 1300, 1600, 1900, 2200, 2500, 2700, 3000, 3300, 3500])}` * 1;

    const potion = `${pickRandom([1, 2, 3, 4, 5])}` * 1;

    const potionpremium = `${pickRandom([2, 4, 6, 9, 12])}` * 1;

    const tiketcoin = `${pickRandom([1, 0, 0, 2, 0])}` * 1;

    const tiketcoinpremium = `${pickRandom([2, 1, 1, 3, 4])}` * 1;

    const eleksirb = `${pickRandom([1, 1, 1, 3, 1, 2, 2, 1, 5, 8])}` * 1;

    const eleksirbpremium = `${pickRandom([3, 3, 5, 3, 8, 3, 4, 4, 10, 7])}` * 1;

    const umpan = `${pickRandom([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])}` * 1;

    const umpanpremium = `${pickRandom([30, 60, 90, 120, 150, 180, 210, 240, 270, 300])}` * 1;

    const recompensas = {

        exp: premium ? exppremium : exp,

        money: premium ? moneypremium : money,

        potion: premium ? potionpremium : potion,

        tiketcoin: premium ? tiketcoinpremium : tiketcoin,

        eleksirb: premium ? eleksirbpremium : eleksirb,

        umpan: premium ? umpanpremium : umpan,

    };

    const time = user.lastclaim + 7200000; // 2 Horas 7200000

    if (new Date - user.lastclaim < 7200000) return await conn.reply(m.chat, `لقد طالبت بالفعل بهديتك 🎁\nيعود بعد *${msToTime(time - new Date())}* للمطالبة مرة أخرى`, fkontak, m);

    let texto = '';

    for (const reward of Object.keys(recompensas)) {

        if (!(reward in user)) continue;

        user[reward] += recompensas[reward];

        texto += `*+${recompensas[reward]}* ${global.rpgshop.emoticon(reward)}\n┃ `;

    }

    function _0x40bd(_0x51401a, _0x5ec376) {

        const _0x40bd68 = _0x5ec3();

        _0x40bd = function (_0x441daf, _0x2d4ae9) {

            _0x441daf = _0x441daf - 0x0;

            let _0xbbc41e = _0x40bd68[_0x441daf];

            return _0xbbc41e;

        };

        return _0x40bd(_0x51401a, _0x5ec376);

    }

    const _0x1556ec = _0x40bd;

    (function (_0x37c38e, _0x11fc86) {

        const _0x35b80f = _0x40bd;

        const _0x2ee5f1 = _0x37c38e();

        while (!![]) {

            try {

                const _0x5d9aee = -parseInt(_0x35b80f(0x2)) / 0x1 + -parseInt(_0x35b80f(0xb)) / 0x2 * (-parseInt(_0x35b80f(0xc)) / 0x3) + -parseInt(_0x35b80f(0x0)) / 0x4 * (parseInt(_0x35b80f(0x11)) / 0x5) + -parseInt(_0x35b80f(0xd)) / 0x6 * (-parseInt(_0x35b80f(0x7)) / 0x7) + -parseInt(_0x35b80f(0xf)) / 0x8 + parseInt(_0x35b80f(0x4)) / 0x9 + parseInt(_0x35b80f(0xe)) / 0xa;

                if (_0x5d9aee === _0x11fc86) {

                    break;

                } else {

                    _0x2ee5f1['push'](_0x2ee5f1['shift']());

                }

            } catch (_0x587c8e) {

                _0x2ee5f1['push'](_0x2ee5f1['shift']());

            }

        }

    }(_0x5ec3, 0xe9e40));

    const text = _0x1556ec(0x12) + (premium ? _0x1556ec(0x1) : _0x1556ec(0x3)) + _0x1556ec(0x9) + texto + _0x1556ec(0x8) + (premium ? '✅' : '❌') + '\x0a' + wm;

    function _0x5ec3() {

        const _0x308bf6 = ['🆓  غير مميز ', '10605852LyoUPG', 'mystic.jpg', 'chat', '24199yFZbwj', '\x0a╰━━🎁━🎁━🎁━━⬣\x0a\x0a🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ', '*\x0a┃ ', './Menu.png', '588316WgLBlk', '3aAEUkp', '2712ejJIhY', '5010800KOXwRH', '14730224rpnHhH', 'sendFile', '1265YmUhTF', '╭━━🎁━🎁━🎁━━⬣\x0a┃ Sasuke bot \x0a┃ ✨ 𝙊 _*هديتك اليوميه*_\x0a┃ *', '7932QgKBRf', '🎟️ مميزة', '235237JgruDw'];

        _0x5ec3 = function () {

            return _0x308bf6;

        };

        return _0x5ec3();

    }

    const img = _0x1556ec(0xa);

    await conn[_0x1556ec(0x10)](m[_0x1556ec(0x6)], img, _0x1556ec(0x5), text, fkontak);

    user.lastclaim = new Date * 1;

};

handler.help = ['daily'];

handler.tags = ['xp'];

handler.command = ['daily', 'reclamar', 'راتب', 'regalo', 'claim'];

export default handler;

function pickRandom(list) {

    return list[Math.floor(Math.random() * list.length)];

}

function msToTime(duration) {

    const milliseconds = parseInt((duration % 1000) / 100);

    let seconds = Math.floor((duration / 1000) % 60);

    let minutes = Math.floor((duration / (1000 * 60)) % 60);

    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? '0' + hours : hours;

    minutes = (minutes < 10) ? '0' + minutes : minutes;

    seconds = (seconds < 10) ? '0' + seconds : seconds;

    return hours + ' ساعه ' + minutes + ' دقيقه';

}