const _0x4d0618 = _0x9110;
(function (_0x3219c8, _0x5db051) {
    const _0x202659 = _0x9110;
    const _0x545cde = _0x3219c8();
    while (!![]) {
        try {
            const _0xd5a25d = parseInt(_0x202659(0x2)) / 0x1 * (parseInt(_0x202659(0x14)) / 0x2) + -parseInt(_0x202659(0x12)) / 0x3 + -parseInt(_0x202659(0x10)) / 0x4 + -parseInt(_0x202659(0x3)) / 0x5 * (-parseInt(_0x202659(0x9)) / 0x6) + parseInt(_0x202659(0x8)) / 0x7 * (-parseInt(_0x202659(0x13)) / 0x8) + parseInt(_0x202659(0xc)) / 0x9 * (parseInt(_0x202659(0x11)) / 0xa) + parseInt(_0x202659(0x1a)) / 0xb;
            if (_0xd5a25d === _0x5db051) {
                break;
            } else {
                _0x545cde['push'](_0x545cde['shift']());
            }
        } catch (_0x1943ba) {
            _0x545cde['push'](_0x545cde['shift']());
        }
    }
}(_0x17e3, 0x85725));
const handler = async (_0x2b487c, {
    conn: _0x5afe72,
    text: _0x4f03a6
}) => {
    const _0x5c1c51 = _0x9110;
    if (!_0x4f03a6) throw _0x5c1c51(0x0);
    _0x5afe72[_0x5c1c51(0xf)](_0x2b487c['chat'], global['API'](_0x5c1c51(0x18), _0x5c1c51(0xe), {
        'avatar': await _0x5afe72[_0x5c1c51(0x4)](_0x2b487c[_0x5c1c51(0x5)], _0x5c1c51(0x1))['catch'](_0x2b118f => _0x5c1c51(0x7)),
        'comment': _0x4f03a6,
        'username': _0x5afe72[_0x5c1c51(0x17)](_0x2b487c[_0x5c1c51(0x5)])
    }), _0x5c1c51(0xa), _0x5c1c51(0x16), _0x2b487c);
};
handler[_0x4d0618(0x6)] = [_0x4d0618(0x15)];

function _0x9110(_0x59e68e, _0x17e30b) {
    const _0x9110d8 = _0x17e3();
    _0x9110 = function (_0x3f2d34, _0x2498be) {
        _0x3f2d34 = _0x3f2d34 - 0x0;
        let _0x44bbea = _0x9110d8[_0x3f2d34];
        return _0x44bbea;
    };
    return _0x9110(_0x59e68e, _0x17e30b);
}
handler[_0x4d0618(0xd)] = [_0x4d0618(0xb)];

function _0x17e3() {
    const _0x203c72 = ['sender', 'help', 'https://telegra.ph/file/24fa902ead26340f3df2c.png', '119fzxNGb', '6VpnYjA', 'error.png', 'maker', '27cTTMEv', 'tags', '/canvas/youtube-comment', 'sendFile', '873152gyIpto', '907450YgiPWk', '1342725zZXCya', '160840YJAEqf', '38MLDNMG', 'ytcomment <comment>', '*¡¡اليك الكومنت الوهمي الخاص بك🌐!!*\x0a sasuke bot', 'getName', 'https://some-random-api.com', 'command', '277530hiOxLW', 'ادخل نص\x0a\x0a+20 1205987431\x0a+966547540321', 'image', '40772PmNdEZ', '2410560SODeeP', 'profilePictureUrl'];
    _0x17e3 = function () {
        return _0x203c72;
    };
    return _0x17e3();
}
handler[_0x4d0618(0x19)] = /^(كومنت)$/i;
export default handler;