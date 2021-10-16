let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *INDOSAT:* [085694982557]
┣➥ *Dana:* [085694982557]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi?klo ga mau ywdh wkwk gw g maksa:v Wa.me/6285694982557*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
