import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
import moment from 'moment-timezone';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    const time = moment.tz('Africa/Egypt').format('HH');
    let wib = moment.tz('Africa/Cairo').format('HH:mm:ss');
    let date = new Date().toLocaleDateString('en-EG', { day: 'numeric', month: 'long', year: 'numeric' });

    await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } });

    // قائمة عناوين URL للصور
    const images = [

        'https://qu.ax/sxVAz.png',
        'https://qu.ax/SOEyZ.jpg',
        'https://qu.ax/NQdGL.png'// أضف عنوان URL ثالث هنا
    ];

    // اختيار عشوائي لعنوان URL من القائمة
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // إعداد رسالة الوسائط
    var messa = await prepareWAMessageMedia({ image: { url: randomImage } }, { upload: conn.waUploadToServer });

    conn.relayMessage(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        text: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊ ${m.pushName} ⌉*
── • ◈ • ──

┏━━🤖 *『』ī معلومات البوت ī《* 🤖━━┓
┃ ✨  *اسـم البـوت: ساسكي*
┃ 💻  *المـنصـة:* الله اعلم💀 
┃ 📍  *+رقم المطور: 966547540321*
┃ 📚  *اسم المطور: 『بن تن』* 
┗━━━━━━━━━━━━━┛

┏━━⏰ *『』التاريخ والوقت《* ⏰━┓
┃ 📆  *تـاريـخ اليـوم:* 『』${date}《 
┃ ⏲️  *الـوقـت الـحالـي:* 『』${wib}《 
┗━━━━━━━━━━━━━┛
هناك قائمه جديده اسمها المهام
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢`
                    },
                    footer: {
                        text: 'Ben 10'
                    },
                    header: {
                        title: '',
                        hasMediaAttachment: true,
                        imageMessage: messa.imageMessage,
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '💔 دوس عليا 💔',
                                    sections: [
                                        {
                                            title: 'اوامر ساسكي بيه',
                                            highlight_label: '𝕊𝕒𝕤𝕦𝕜𝕖 𝕓𝕠𝕥',
                                            rows: [
                                                    {
                                                      header: '🌏 قـسـم الذكاء الاصتناعي',
                                                      title: '.قسم_الذكاء_الاصتناعي',
                                                      description: '',
                                                      id: '.قسم_الذكاء_الاصتناعي'
                                                    },
                                                    {
                                                      header: '🍓 قـسـم الاعضاء',
                                                      title: '.قسم_الاعضاء',
                                                      description: '',
                                                      id: '.قسم_الاعضاء'
                                                    },
                                                    {
                                                      header: '💌 قـسـم الجروب',
                                                      title: '.قسم_الجروب',
                                                      description: '',
                                                      id: '.قسم_الجروب'
                                                    },
                                                    {
                                                      header: '🧸 قـسـم البحث',
                                                      title: '.قسم_البحث',
                                                      description: '',
                                                      id: '.قسم_البحث'
                                                    },
                                                    {
                                                      header: '📍 قـسـم التحويلات',
                                                      title: '.قسم_التحويلات',
                                                      description: '',
                                                      id: '.قسم_التحويلات'
                                                    },
                                                    {
                                                      header: '🕹 قـسـم الالعاب',
                                                      title: '.قسم_الالعاب',
                                                      description: '',
                                                      id: '.قسم_الالعاب'
                                                    },
                                                    {
                                                      header: '🎙 قـسـم الاصوات',
                                                      title: '.قسم_الاصوات',
                                                      description: '',
                                                      id: '.قسم_الاصوات'
                                                    },
                                                    {
                                                      header: '🌱 قـسـم الصور',
                                                      title: '.قسم_الصور',
                                                      description: '',
                                                      id: '.قسم_الصور'
                                                    },
                                                    {
                                                      header: '🧨 قـسـم الاستيكرات',
                                                      title: '.قسم_الاستيكرات',
                                                      description: '',
                                                      id: '.قسم_الاستيكرات'
                                                    },
                                                    {
                                                      header: '💵 قـسـم البنك',
                                                      title: '.قسم_البنك',
                                                      description: '',
                                                      id: '.قسم_البنك'
                                                    },
                                                    {
                                                    header: '🏪 قـسـم المتجر',
                                                    title: '.قسم_المتجر',
                                                    description: '',
                                                    id: '.قسم_المتجر'
                                                    },
                                                    {
                                                      header: '👑 قـسـم الـمـطـور',
                                                      title: '.قسم_المطور',
                                                      description: '',
                                                      id: '.قسم_المطور'
                                                },
                                            ]
                                        }
                                    ]
                                }),
                                messageParamsJson: 'Ben 10'
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: "{\"display_text\":\"👑 رقم المطور 👑\",\"id\":\".المطور\"}"
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: "{\"display_text\":\"🍓 تقييم البوت 🍓\",\"id\":\".تقيم\"}"
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: "{\"display_text\":\"🔗 موقع المطور 🔗\",\"url\":\"https://linktr.ee/mohamedosama01\",\"merchant_url\":\"https://linktr.ee/mohamedosama01\"}"
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "💖 القناة الخاصة بالبوت 💖",
                                    url: "https://whatsapp.com/channel/0029Vap8YXSIt5roxR0a0m21",
                                    merchant_url: "https://whatsapp.com/channel/0029Vap8YXSIt5roxR0a0m21"
                                })
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['اوامر']

export default handler