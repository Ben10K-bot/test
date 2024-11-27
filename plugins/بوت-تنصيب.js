/*import { DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser } from '@whiskeysockets/baileys'
import qrcode from 'qrcode'
import fs from 'fs'
import pino from 'pino'
import crypto from 'crypto'
import NodeCache from 'node-cache'
import { makeWASocket } from '../lib/simple.js'
if (global.conns instanceof Array) {
console.log()
} else {
global.conns = []
}
let handler = async (m, { conn, args, usedPrefix, command, isOwner, isPrems, isROwner }) => {
if (!global.db.data.settings[conn.user.jid].jadibotmd && !isROwner) {
conn.reply(m.chat, '🚩 تم تعطيل هذا الأمر بواسطة المنشئ الخاص بي.', m)
return
}
let parentw = args[0] && args[0] == "plz" ? conn : await global.conn
if (!(args[0] && args[0] == 'plz' || (await global.conn).user.jid == conn.user.jid)) {
return conn.reply(m.chat, `「💭」يمكنك استخدام هذا الأمر فقط في البوت الرئيسي.\n\n• Wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix + command}`, m)
}
async function serbot() {
let serbotFolder = crypto.randomBytes(10).toString('hex').slice(0, 8)
let folderSub = `./jadibts/${serbotFolder}`
if (!fs.existsSync(folderSub)) {
fs.mkdirSync(folderSub, { recursive: true })
}
if (args[0]) {
fs.writeFileSync(`${folderSub}/creds.json`, Buffer.from(args[0], 'base64').toString('utf-8'))
}
const { state, saveCreds } = await useMultiFileAuthState(folderSub)
const msgRetryCounterCache = new NodeCache()
const { version } = await fetchLatestBaileysVersion()
const connectionOptions = {
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ['Sasuke Sub-Bot', 'Edge', '2.0.0'],
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true,
generateHighQualityLinkPreview: true,
getMessage: async (clave) => {
let jid = jidNormalizedUser(clave.remoteJid)
let msg = await store.loadMessage(jid, clave.id)
return msg?.message || ""
},
msgRetryCounterCache,
version
}
let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true
async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) {
conn.isInit = true
}
if (qr) {
let txt = '🚩 𝕊𝔸𝕊𝕌𝕂𝔼 𝕊𝔼ℝ𝔹𝕆𝕋 🚩\n\n* امسح هذا ال qr لصبح بوت فرعي *\n\n🍟 كيف تمسح الرمز:\n\n`1` : في الصفحه الرايسيه اضغط الثلاث نقات\n\n`2` : اضغط الاجهزه المرتبطه\n\n`3` : امسح ال qr\n\n> *ملاحظه:* بنهي الرمز في خلال 30 ثانيه'

let sendQR = await parentw.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), "qrcode.png", txt, m, null)
setTimeout(() => {
parentw.sendMessage(m.chat, { delete: sendQR.key })
}, 30000)
}
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
let i = global.conns.indexOf(conn)
if (i < 0) {
return console.log(await creloadHandler(true).catch(console.error))
}
delete global.conns[i]
global.conns.splice(i, 1)
if (code !== DisconnectReason.connectionClosed) {
await parentw.reply(conn.user.jid, "🚩 تم فقدان الاتصال بالخادم.", m)
}
}
if (global.db.data == null) {
loadDatabase()
}
if (connection == "open") {
conn.isInit = true
global.conns.push(conn)
await parent.reply(m.chat, args[0] ? '🐢 تم الاتصال بنجاح بـ WhatsApp.' : '🚩 تم ربط بوت فرعي بنجاح.', m);
await sleep(5000)
if (args[0]) {
return
}
await parentw.reply(conn.user.jid, `🚩 *لإعادة ربط بوت فرعي استخدم الرمز الخاص بك`, m)
}
}
const timeoutId = setTimeout(() => {
if (!conn.user) {
try {
conn.ws.close()
} catch {}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)
if (i >= 0) {
delete global.conns[i]
global.conns.splice(i, 1)
}
fs.rmdirSync(`./jadibts/${serbotFolder}`, { recursive: true })
}
}, 30000)
let handler = await import("../handler.js")
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) {
handler = Handler
}
} catch (e) {
console.error(e)
}
if (restatConn) {
try {
conn.ws.close()
} catch {}
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions)
isInit = true
}
if (!isInit) {
conn.ev.off("messages.upsert", conn.handler)
conn.ev.off("connection.update", conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
} 
conn.handler = handler.handler.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)
conn.ev.on("messages.upsert", conn.handler)
conn.ev.on("connection.update", conn.connectionUpdate)
conn.ev.on("creds.update", conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
serbot()
}
handler.help = ["serbot"]
handler.tags = ["jadibot"]
handler.command = ["ربط","q-bot"]
// handler.register = true
export default handler
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}