import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
 
    const s = [
"https://qu.ax/dkjYz.jpg",
"https://qu.ax/dkjYz.jpg",
    ];  
    
    let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)])
    if (stiker) {
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    }
}

handler.customPrefix = /(ساسكي|ساسوكي|ساسكى|ساسوكى)$/i;
handler.command = new RegExp
export default handler