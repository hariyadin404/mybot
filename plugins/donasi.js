let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
╭━━•›ꪶ ۪۪⸙ ━ ━ ━ ━ ꪶ ۪۪⸙‹•━━╮ 
┃╭┈─────────────⩵꙰ཱི࿐ 
┃╰──*DONATE*──➤ ↶↷* 
╰•͙✩̣̣
⁙┃ *⸙ ુོ➪ *VIA EMONEY*
⁙┃ ુོ DANA   : 6285346545126
⁙┃ ુོ OVO      : 6285346545126
⁙┃ ુོ GOPAY : 6285346545126
⁙┃ ુོ PULSA : 6285346545126
⁙┃ ુོ saweria.co/raselganz
⁙┃ ુོ trakteer.id/raselganz/tip
⁙┃ ુོ
⁙┃ *⸙ ુོ➪ *INSTAGRAM OWNER*
⁙┃ ુོ instagram.com/rasel.ganz
⁙┃ 
⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°
`.trim(), watermark, 'Konfirmasi', '.konfirm saya ingin donasi njink', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler