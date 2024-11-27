 import { exec } from 'child_process'
import os from 'os'
import { performance } from 'perf_hooks'
import fs from 'fs' // للوصول إلى معلومات القرص

let handler = async (m, { conn }) => {
  let pingMsg = await conn.sendMessage(m.chat, { text: '🧞 قياس السرعة...' })

  let start = performance.now()

  exec('neofetch --stdout', async (error, stdout) => {
    let end = performance.now()
    let latency = (end - start).toFixed(2)

    let cpuInfo = os.cpus()[0].model
    let cpuCores = os.cpus().length
    let cpuSpeeds = os.cpus().map(cpu => cpu.speed)
    let minCpuSpeed = (Math.min(...cpuSpeeds) / 1000).toFixed(2) + ' GHz'
    let maxCpuSpeed = (Math.max(...cpuSpeeds) / 1000).toFixed(2) + ' GHz'

    let totalMemory = (os.totalmem() / 1024 / 1024).toFixed(2) + ' MB'
    let freeMemory = (os.freemem() / 1024 / 1024).toFixed(2) + ' MB'
    let usedMemory = (((os.totalmem() - os.freemem()) / os.totalmem()) * 100).toFixed(2) + ' %'
    let loadAvg = os.loadavg()
    let osType = os.type()
    let osArch = os.arch()

    // نسبة تحميل كل نواة
    let cpuLoadPerCore = os.cpus().map((core, index) => `نواة ${index + 1}: ${core.speed / 1000} GHz`).join('\n')

    // حساب مدة التشغيل وتحويلها إلى صيغة مفهومة
    let uptime = os.uptime()
    let uptimeHours = Math.floor(uptime / 3600)
    let uptimeMinutes = Math.floor((uptime % 3600) / 60)
    let uptimeSeconds = Math.floor(uptime % 60)
    let uptimeStr = `${uptimeHours} ساعة، ${uptimeMinutes} دقيقة، ${uptimeSeconds} ثانية`

    // معلومات القرص
    let diskInfo = 'غير متاح'
    try {
      const { size, free } = fs.statSync('/')
      diskInfo = `المساحة الكلية: ${(size / 1024 / 1024 / 1024).toFixed(2)} GB (المتاحة: ${(free / 1024 / 1024 / 1024).toFixed(2)} GB)`
    } catch (e) {
      diskInfo = 'لم يتمكن من جلب معلومات القرص'
    }

    let message = `
🧞 *البنج*: ${latency} ms
🧞 *نظام التشغيل*: ${osType}
🧞 *معمارية النظام*: ${osArch}
🧞 *المعالج*: ${cpuInfo} (${cpuCores} أنوية)
🧞 *تردد المعالج*: من ${minCpuSpeed} إلى ${maxCpuSpeed}
🧞 *نسبة تحميل كل نواة*:
${cpuLoadPerCore}
🧞 *ذاكرة النظام الكلية*: ${totalMemory}
🧞 *الذاكرة المتاحة*: ${freeMemory}
🧞 *نسبة الذاكرة المستخدمة*: ${usedMemory}
🧞 *تحميل المعالج (1 دقيقة)*: ${loadAvg[0].toFixed(2)}
🧞 *تحميل المعالج (5 دقائق)*: ${loadAvg[1].toFixed(2)}
🧞 *تحميل المعالج (15 دقيقة)*: ${loadAvg[2].toFixed(2)}
🧞 *مدة التشغيل*: ${uptimeStr}
🧞 *معلومات القرص*: ${diskInfo}
`.trim()

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: { conversation: message }
      }
    }, {})
  })
}

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['2بنج', 'speed2']

export default handler