const _0x40cd16 = _0x49eb;
(function (_0x3d6104, _0x2eb25e) {
    const _0x1df58d = _0x49eb;
    const _0x1d274f = _0x3d6104();
    while (!![]) {
        try {
            const _0x20a765 = parseInt(_0x1df58d(0x7)) / 0x1 + -parseInt(_0x1df58d(0xe)) / 0x2 * (-parseInt(_0x1df58d(0xc)) / 0x3) + -parseInt(_0x1df58d(0x16)) / 0x4 + -parseInt(_0x1df58d(0xf)) / 0x5 + -parseInt(_0x1df58d(0x14)) / 0x6 + -parseInt(_0x1df58d(0x6)) / 0x7 * (-parseInt(_0x1df58d(0xb)) / 0x8) + parseInt(_0x1df58d(0x8)) / 0x9 * (parseInt(_0x1df58d(0x15)) / 0xa);
            if (_0x20a765 === _0x2eb25e) {
                break;
            } else {
                _0x1d274f['push'](_0x1d274f['shift']());
            }
        } catch (_0x57c9eb) {
            _0x1d274f['push'](_0x1d274f['shift']());
        }
    }
}(_0x2a1e, 0xb41a4));
import {
    Maker
} from 'imagemaker.js';

function _0x49eb(_0x4fcd13, _0x2a1e59) {
    const _0x49eb41 = _0x2a1e();
    _0x49eb = function (_0x37239f, _0x496089) {
        _0x37239f = _0x37239f - 0x0;
        let _0x1d9686 = _0x49eb41[_0x37239f];
        return _0x1d9686;
    };
    return _0x49eb(_0x4fcd13, _0x2a1e59);
}
const handler = async (_0x2275ee, {
    conn: _0x126a27,
    args: _0x37adfc,
    command: _0x516575,
    usedPrefix: _0x3aa4af
}) => {
    const _0x1e5f92 = _0x49eb;
    const _0x189313 = _0x37adfc[_0x1e5f92(0x12)](' ')[_0x1e5f92(0x18)]('|');
    if (!_0x37adfc[0x0]) throw _0x1e5f92(0x1);
    if (_0x516575 == _0x1e5f92(0x9)) {
        try {
            await _0x126a27['reply'](_0x2275ee[_0x1e5f92(0x0)], '*[💗] جـاري صـنـع الـوجـو..*', _0x2275ee);
            const _0x3feedd = await new Maker()[_0x1e5f92(0x10)](_0x1e5f92(0x3), [_0x189313[0x0]]);
            await _0x126a27[_0x1e5f92(0x11)](_0x2275ee[_0x1e5f92(0x0)], _0x3feedd['imageUrl'], _0x1e5f92(0x2), null, _0x2275ee);
        } catch {
            await _0x126a27[_0x1e5f92(0x17)](_0x2275ee[_0x1e5f92(0x0)], _0x1e5f92(0x13), _0x2275ee);
        }
    }
    if (_0x516575 == 'logochristmas') {
        try {
            await _0x126a27['reply'](_0x2275ee[_0x1e5f92(0x0)], _0x1e5f92(0x4), _0x2275ee);
            const _0x587736 = await new Maker()['Ephoto360'](_0x1e5f92(0x5), [_0x189313[0x0]]);
            await _0x126a27[_0x1e5f92(0x11)](_0x2275ee[_0x1e5f92(0x0)], _0x587736[_0x1e5f92(0xa)], 'error.jpg', null, _0x2275ee);
        } catch {
            await _0x126a27[_0x1e5f92(0x17)](_0x2275ee[_0x1e5f92(0x0)], _0x1e5f92(0x13), _0x2275ee);
        }
    }
};
handler[_0x40cd16(0xd)] = /^لوجو-حب|logochristmas|logoephoto360|logotextpro/i;
export default handler;

function _0x2a1e() {
    const _0x3792f1 = ['https://en.ephoto360.com/christmas-effect-by-name-376.html', '112oVSHKT', '1205412JBixlZ', '9NVOqPY', 'لوجو-حب', 'imageUrl', '40632FsiYQE', '488373AlUXna', 'command', '10WwXGcp', '6353395kPFGqH', 'Ephoto360', 'sendFile', 'join', '*[❗] حصل خطأ*', '439590fJRiNk', '9915460miGmzk', '4042132hneACi', 'reply', 'split', 'chat', '*[💗] حط نص عشان اعملوا لوجو*\x0aBen 10 and sasuke', 'error.jpg', 'https://en.ephoto360.com/text-heart-flashlight-188.html', '*[💗] جـاري صـنـع الـوجـو..*'];
    _0x2a1e = function () {
        return _0x3792f1;
    };
    return _0x2a1e();
}