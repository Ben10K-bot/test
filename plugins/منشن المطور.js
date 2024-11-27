import { Sticker, StickerTypes } from 'wa-sticker-formatter';
import fetch from 'node-fetch';

let handler = m => m;

handler.all = async function (m) {
    let img = [
        "https://telegra.ph/file/70ea701a782ab221e5137.png",
        "https://telegra.ph/file/1323ff8235bf024cd55db.jpg",
        "https://telegra.ph/file/1323ff8235bf024cd55db.jpg",
        "https://telegra.ph/file/1323ff8235bf024cd55db.jpg",
        "https://telegra.ph/file/f7799a1459cac6eb1346c.png",
        "https://telegra.ph/file/4e84292a76a07ab824228.png",
        "https://telegra.ph/file/89e26986fe95e591d09f7.jpg",
        "https://telegra.ph/file/c32bc343f2401e84800f0.jpg"
    ];

    let img1 = img[Math.floor(img.length * Math.random())];

    if (m.mentionedJid && m.mentionedJid[0]) {
        let ownerNumbers = global.owner.map(([number]) => number.replace(/[^0-9]/g, ''));
        let mentionedNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');

        if (ownerNumbers.includes(mentionedNumber)) {
            let response = await fetch(img1);
            let buffer = await response.buffer();

            let sticker = new Sticker(buffer, {
                pack: '𝗡𝗮𝗻𝗼-𝗕𝗼𝘁-𝗩𝟮',
                author: 'ERIN-MD',
                type: StickerTypes.FULL,
                quality: 50
            });

            let stickerBuffer = await sticker.toBuffer();
            return this.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });
        }
    }
};

export default handler;