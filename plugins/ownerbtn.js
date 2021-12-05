const Asena = require('../events');
const {
    MessageType,
    GroupSettingChange,
    Mimetype,
    MessageOptions
} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');

let tk = Config.WORKTYPE == 'public' ? false: true

Asena.addCommand({ pattern: 'owner', fromMe: tk, desc: 'down;load passpepr'
}, (async (message, match) => {
        // send a list message!
        const rows = [{
                 title: '  🌹𝖭𝖺𝗆𝖾 ', description: "  《《=====●|:|🔅|:|●=====》》\n\n ⌨︎ 𝖢𝗈𝖽𝖾𝖽 𝖻𝗒 - 𝗑𝖸𝖠𝖹𝖴𝖶𝖠 (helps) & 𝖸𝖠𝖴𝖶𝖠𝗑 (Developer) " , rowId: "rowid1"
           },
           {
                 title: '  📝𝖢𝗎𝗋𝗋𝖾𝗇𝗍𝗅𝗒 𝖫𝖾𝖺𝗋𝗇𝗂𝗇𝗀 ', descrition: "  《《=====●|:|🔅|:|●=====》》\n\n ⚒️ <𝗁𝗍𝗆𝗅> [𝖼𝗌𝗌] " , rowId: "rowid2"
            },     
            {  
                 title: '  🏷️ 𝖫𝗂𝗏𝖾 𝖨𝗇 ', description: "  《《=====●|:|🔅|:|●=====》》\nn 𝖢𝗎𝗋𝗋𝖾𝗇𝗍 𝗅𝗈𝖼𝖺𝗍𝗂𝗈𝗇 - 𝖦𝖺𝗅𝗅𝖾" , rowId: "rowid3"
            },
            {
                  title: '  🛡️ 𝖸𝗈𝗎𝗍𝗎𝖻𝖾 𝖼𝗁𝖺𝗇𝗇𝖾𝗅 ', description: "  《《=====●|:|🔅|:|●=====》》\n\n ▶️ 𝖸𝗈𝗎𝗍𝗎𝖻𝖾 = 𝖸𝖺𝗌𝗂𝗇𝖽𝗎 𝖱𝖺𝗌𝗁𝗆𝗂𝗍𝗁 ➲ ", rowId: "rowid4"
            },
                        {
                  title: '  🟨 WhatsApp Number ', description: "  《《=====●|:|🔅|:|●=====》》\n\𝗇 wa.me//94716314859 ", rowId: "rowid5"
            }]

        const sections = [{
            title: "𝖮𝗐𝗇𝖾𝗋 𝖣𝖾𝗍𝖺𝗂𝗅𝗌", rows: rows
        }]

        const button = {
            buttonText: 'Click Me',
            description: "Owner Details",
            sections: sections,
            listType: 1
        }

        await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));
