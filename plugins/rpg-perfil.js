const _0x1c6978 = _0xba4c;

function _0xba4c(_0x45e3c5, _0x185085) {
    const _0xd02ad1 = _0xd02a();
    return _0xba4c = function (_0xba4cd1, _0xe6272d) {
        _0xba4cd1 = _0xba4cd1 - 0xc0;
        let _0x4f60d7 = _0xd02ad1[_0xba4cd1];
        return _0x4f60d7;
    }, _0xba4c(_0x45e3c5, _0x185085);
}(function (_0x42c130, _0x5abe82) {
    const _0x3835bf = _0xba4c,
        _0x2f2a1c = _0x42c130();
    while (!![]) {
        try {
            const _0x5f29a2 = -parseInt(_0x3835bf(0xc6)) / 0x1 + parseInt(_0x3835bf(0xe5)) / 0x2 * (parseInt(_0x3835bf(0xd4)) / 0x3) + parseInt(_0x3835bf(0xdb)) / 0x4 + parseInt(_0x3835bf(0xde)) / 0x5 + parseInt(_0x3835bf(0xd3)) / 0x6 * (-parseInt(_0x3835bf(0xcc)) / 0x7) + -parseInt(_0x3835bf(0xda)) / 0x8 + -parseInt(_0x3835bf(0xe7)) / 0x9 * (-parseInt(_0x3835bf(0xe9)) / 0xa);
            if (_0x5f29a2 === _0x5abe82) break;
            else _0x2f2a1c['push'](_0x2f2a1c['shift']());
        } catch (_0x567296) {
            _0x2f2a1c['push'](_0x2f2a1c['shift']());
        }
    }
}(_0xd02a, 0x26c16));
import {
    createHash
} from 'crypto';

function _0xd02a() {
    const _0x249f78 = ['@s.whatsapp.net', '10iQEKhm', 'tags', 'help', 'mentionedJid', 'chat', 'El usuario que está mencionando no está registrado en mi base de datos', '\x0a*العمر❤️‍🔥:* ', '89161khnqaF', 'users', 'profilePictureUrl', '\x0a*مميز💫:* ', 'update', 'data', '7RBudnF', ' هو\x0a*مسجل👑:* ', './src/avatar_contact.png', '\x0a*رقمك💕:* ', '\x0a*الحد ', 'sendMessage', 'digest', '1552974zBUVpj', '93102vtFxdq', 'includes', '\x0a*لينكك📮:* wa.me/', 'md5', '\x0a*رقم التحقق الخاص بك:* \x0a', 'international', '1652120DOHwBG', '546256BJXofc', 'profile [@user]', '*اسمك💌:* ', '1422090GLKyDb', 'split', 'getName', 'user', 'prems', 'hex', 'getNumber', '18JGEWyy', 'jid', '116631fHtKRt'];
    _0xd02a = function () {
        return _0x249f78;
    };
    return _0xd02a();
}
import _0x500a74 from 'awesome-phonenumber';
import _0x284e47 from 'node-fetch';
let handler = async (_0x1bc20e, {
    conn: _0x330b0c,
    usedPrefix: _0x9d2920,
    participants: _0xf89026,
    isPrems: _0x439d75
}) => {
    const _0x594f6a = _0xba4c;
    let _0x22c843 = _0x594f6a(0xce),
        _0x408915 = _0x1bc20e[_0x594f6a(0xc2)] && _0x1bc20e[_0x594f6a(0xc2)][0x0] ? _0x1bc20e[_0x594f6a(0xc2)][0x0] : _0x1bc20e['fromMe'] ? _0x330b0c[_0x594f6a(0xe1)][_0x594f6a(0xe6)] : _0x1bc20e['sender'];
    if (!(_0x408915 in global['db'][_0x594f6a(0xcb)][_0x594f6a(0xc7)])) throw _0x594f6a(0xc4);
    try {
        _0x22c843 = await _0x330b0c[_0x594f6a(0xc8)](_0x408915);
    } catch (_0x44a436) {} finally {
        let {
            name: _0x1716ac,
            limit: _0x21bb65,
            lastclaim: _0x3f7fc6,
            registered: _0x2128a0,
            regTime: _0x416c5d,
            age: _0x34fe17,
            premiumTime: _0x47ee90
        } = global['db'][_0x594f6a(0xcb)][_0x594f6a(0xc7)][_0x408915], _0x1f9794 = _0x330b0c[_0x594f6a(0xe0)](_0x408915), _0x26a987 = global[_0x594f6a(0xe2)][_0x594f6a(0xd5)](_0x408915['split']
            `@` [0x0]), _0x4e8f90 = createHash(_0x594f6a(0xd7))[_0x594f6a(0xca)](_0x408915)[_0x594f6a(0xd2)](_0x594f6a(0xe3)), _0x22adfd = _0x594f6a(0xdd) + _0x1f9794 + ' ' + (_0x2128a0 ? '(' + _0x1716ac + ') ' : '') + _0x594f6a(0xcf) + _0x500a74('+' + _0x408915['replace'](_0x594f6a(0xe8), ''))[_0x594f6a(0xe4)](_0x594f6a(0xd9)) + _0x594f6a(0xd6) + _0x408915[_0x594f6a(0xdf)]
        `@` [0x0] + (_0x2128a0 ? _0x594f6a(0xc5) + _0x34fe17 + ' 💎سنه' : '') + _0x594f6a(0xd0) + _0x21bb65 + _0x594f6a(0xcd) + (_0x2128a0 ? 'يب' : 'لا') + _0x594f6a(0xc9) + (_0x47ee90 > 0x0 ? 'يب' : (_0x439d75 ? 'يب' : 'لا') || '') + _0x594f6a(0xd8) + _0x4e8f90;
        _0x330b0c[_0x594f6a(0xd1)](_0x1bc20e[_0x594f6a(0xc3)], {
            'image': {
                'url': _0x22c843
            },
            'caption': _0x22adfd
        }, {
            'quoted': _0x1bc20e
        });
    }
};
handler[_0x1c6978(0xc1)] = [_0x1c6978(0xdc)], handler[_0x1c6978(0xc0)] = ['xp'], handler['command'] = /^بروفايلي|انا|أنا|بروفايل$/i;
export default handler;