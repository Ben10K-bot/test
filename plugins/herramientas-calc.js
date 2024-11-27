const _0x50b7d1 = _0x27af;

function _0x5b82() {
    const _0x2b3d39 = ['1VxOOTe', 'replace', 'Math.E', 'tags', 'help', '20683344jdNIEW', '*[🧮] ادخل المعادله الحسابية لاحلها لك*\x0a', '6IWdyRi', '3747690vGQKGx', 'command', 'calc <expression>', '8SUxtBX', '8391875sbDuUS', 'Math.PI', 'math', '𝙷𝙴𝚈!! 𝙴𝚂𝚃𝙰𝚂 𝙷𝙰𝙲𝙸𝙴𝙽𝙳𝙾 𝚃𝚁𝙰𝙼𝙿𝙰', '*[❗ خطأ ❗] لا تستخدم الأمر بطريقة خاطئة المعادلات الموجودة  هي -, +, *, /, ×, ÷, π, e, (, )*', '212YUfagf', 'reply', '16998xCKidh', 'tools', 'chat', '4394747SLlGEH', '3195542IWqLlJ', 'return ', '9332510QHtQHk'];
    _0x5b82 = function () {
        return _0x2b3d39;
    };
    return _0x5b82();
}(function (_0x28a5d5, _0x47ba34) {
    const _0x3b6d1c = _0x27af;
    const _0x4d6e82 = _0x28a5d5();
    while (!![]) {
        try {
            const _0x1c361f = parseInt(_0x3b6d1c(0x7)) / 0x1 * (parseInt(_0x3b6d1c(0x4)) / 0x2) + -parseInt(_0x3b6d1c(0x0)) / 0x3 * (parseInt(_0x3b6d1c(0x18)) / 0x4) + -parseInt(_0x3b6d1c(0x13)) / 0x5 * (-parseInt(_0x3b6d1c(0xe)) / 0x6) + -parseInt(_0x3b6d1c(0x3)) / 0x7 * (parseInt(_0x3b6d1c(0x12)) / 0x8) + -parseInt(_0x3b6d1c(0xf)) / 0x9 + parseInt(_0x3b6d1c(0x6)) / 0xa + -parseInt(_0x3b6d1c(0xc)) / 0xb;
            if (_0x1c361f === _0x47ba34) {
                break;
            } else {
                _0x4d6e82['push'](_0x4d6e82['shift']());
            }
        } catch (_0x170d5d) {
            _0x4d6e82['push'](_0x4d6e82['shift']());
        }
    }
}(_0x5b82, 0xf05f4));
const handler = async (_0x45868d, {
    conn: _0xe8e404,
    text: _0x63569c
}) => {
    const _0x3284d0 = _0x27af;
    const _0x4564e9 = _0x45868d[_0x3284d0(0x2)];
    _0xe8e404[_0x3284d0(0x15)] = _0xe8e404[_0x3284d0(0x15)] ? _0xe8e404[_0x3284d0(0x15)] : {};
    if (_0x4564e9 in _0xe8e404[_0x3284d0(0x15)]) {
        clearTimeout(_0xe8e404[_0x3284d0(0x15)][_0x4564e9][0x3]);
        delete _0xe8e404[_0x3284d0(0x15)][_0x4564e9];
        _0x45868d[_0x3284d0(0x19)](_0x3284d0(0x16));
    }
    const _0x1d2ddc = _0x63569c[_0x3284d0(0x8)](/[^0-9\-\/+*×÷πEe()piPI/]/g, '')[_0x3284d0(0x8)](/×/g, '*')[_0x3284d0(0x8)](/÷/g, '/')[_0x3284d0(0x8)](/π|pi/gi, _0x3284d0(0x14))[_0x3284d0(0x8)](/e/gi, _0x3284d0(0x9))[_0x3284d0(0x8)](/\/+/g, '/')[_0x3284d0(0x8)](/\++/g, '+')[_0x3284d0(0x8)](/-+/g, '-');
    const _0x149a8b = _0x1d2ddc['replace'](/Math\.PI/g, 'π')[_0x3284d0(0x8)](/Math\.E/g, 'e')[_0x3284d0(0x8)](/\//g, '÷')[_0x3284d0(0x8)](/\*×/g, '×');
    try {
        console['log'](_0x1d2ddc);
        const _0x4b84d7 = new Function(_0x3284d0(0x5) + _0x1d2ddc)();
        if (!_0x4b84d7) throw _0x4b84d7;
        _0x45868d[_0x3284d0(0x19)]('*' + _0x149a8b + '* = _' + _0x4b84d7 + '_\x0a\x0a*\"•Ben 10|Sasuke•*\"');
    } catch (_0x5c496b) {
        if (_0x5c496b == undefined) throw _0x3284d0(0xd);
        throw _0x3284d0(0x17);
    }
};
handler[_0x50b7d1(0xb)] = [_0x50b7d1(0x11)];
handler[_0x50b7d1(0xa)] = [_0x50b7d1(0x1)];
handler[_0x50b7d1(0x10)] = /^(احسب(ulat(e|or))?|kalk(ulator)?)$/i;

function _0x27af(_0x14e332, _0x5b82cd) {
    const _0x27af68 = _0x5b82();
    _0x27af = function (_0x5269c3, _0x39e07d) {
        _0x5269c3 = _0x5269c3 - 0x0;
        let _0x159cad = _0x27af68[_0x5269c3];
        return _0x159cad;
    };
    return _0x27af(_0x14e332, _0x5b82cd);
}
export default handler;