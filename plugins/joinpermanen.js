let { MessageType } = require('@adiwajshing/baileys')
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 999999
        var now = new Date() * 999999
        if (now < global.db.data.chats[res.gid].expired) global.db.data.chats[res.gid].expired += jumlahHari
        else global.db.data.chats[res.gid].expired = now + jumlahHari
    })
    await conn.sendMessage(res.gid, `Halo,\n *${conn.user.name}* adalah bot whatsapp yang dibangun dengan Nodejs, Saya baru saja bergabung di grup ini diundang oleh @${m.sender.split`@`[0]}
    
ketik *#menu* untuk melihat daftar perintah`, MessageType.text, { contextInfo: { externalAdReply :{
       mediaUrl: ' ',
       mediaType: 4,
       title: 'rasel ×͜×',
       body: 'Whatsapp Developer Bot',
       thumbnailUrl: image,
sourceUrl: 'https://wa.me/6285346545126?text=Assalamualaikum'
}}})
}
handler.help = ['joinp <linkgrup>']
handler.tags = ['main', 'update']
handler.command = /^joinp$/i

handler.rowner = true

module.exports = handler
