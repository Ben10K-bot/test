let handler = m => m;

handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat];
    let responses;

    if (/^(.كت)$/i.test(m.text)) {
        const characters = [
            "لوفي", "ناروتو", "سابو", "ايس", "رايلي", 
            "جيرايا", "ايتاتشي", "ساسكي", "شيسوي", "يوهان", 
            "غوهان", "آيزن", "فايوليت", "نامي", "هانكوك", 
            "روبين", "كاكاشي", "ريومو", "ريمورو", "غوكو", 
            "غوغو", "كيلوا", "غون", "كورابيكا", "يوسكي", 
            "ايشيدا", "ايتيشغو", "ميناتو", "رينجي", "جيمبي", 
            "انوس", "سايتاما", "نيزيكو", "اوراهارا", "تانجيرو", 
            "نويل", "استا", "يونو", "لايت"
        ];

        responses = characters.map(character => `*∞───「كـت」───∞*\n\n*~『${character}』~*\n\n*∞───「كـت」───∞*`);
    }

    if (responses && responses.length > 0) {
        let randomIndex = Math.floor(Math.random() * responses.length);
        await conn.reply(m.chat, responses[randomIndex], m);
    }
    return true;
};

export default handler