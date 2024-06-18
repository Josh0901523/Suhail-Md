const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_31_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNixcbiAgICAgICAgMTcxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcwLFxuICAgICAgICA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgODQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDY4LFxuICAgICAgICA1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI3LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDMyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm12Vm1mNkszOEpYdk5SUXAyeUEzVEcyS0hEZzlPOFIyeHpVL3Iwd0U4OFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA4NzYyNzkzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUM1MkRDRTU1QThFRjY2NzE2RDEwMEU4QzI5OTA1NzRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NzAzMDkyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFfbnVpbkVBUmFxLUhBSlhBOEtfWWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTBhZjNmOTUtZjgwZi00M2VkLWJhOGYtYTE5MjVmYjZiN2NiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDI0NSxcbiAgICAgIDc0LFxuICAgICAgMTkwLFxuICAgICAgMTkwLFxuICAgICAgMTExLFxuICAgICAgOTAsXG4gICAgICAxNjUsXG4gICAgICAxNjQsXG4gICAgICAzMixcbiAgICAgIDM4LFxuICAgICAgMTQxLFxuICAgICAgMjI0LFxuICAgICAgODUsXG4gICAgICAxNzgsXG4gICAgICAyMjYsXG4gICAgICAxNzAsXG4gICAgICA0NyxcbiAgICAgIDE0OSxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDEyMCxcbiAgICAgIDg4LFxuICAgICAgMjMyLFxuICAgICAgNDUsXG4gICAgICAyMTgsXG4gICAgICAxOCxcbiAgICAgIDE1OSxcbiAgICAgIDQsXG4gICAgICAxNyxcbiAgICAgIDE5MCxcbiAgICAgIDY5LFxuICAgICAgMTgwLFxuICAgICAgODYsXG4gICAgICA5NCxcbiAgICAgIDUsXG4gICAgICAxMzIsXG4gICAgICAyLFxuICAgICAgMjA5LFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVWUkJENE5GXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg3NjI3OTM3OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKb3NoX0dyYXBoaWNzZGVzaWduLkZyYW1lcyBMdGRcIixcbiAgICBcImxpZFwiOiBcIjE3OTg3MzIzMDM3NzE3OTo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BqTHBzOEZFT2lueGJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL1ZpY2U0K3phK3hYd1JKelZzRytadEthWFV2cm9yOG1wOFVwbXJINHFqaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvMWM5SXR5RWZHbWh0T2YxcVZsOUZPL04zTDUzNkZhVUw1dlE3c0k1djhCZjhQeEN4WDNiSGFiNmI1L211MS9ZVStZdU44U3NpSVVZQkkxODNBc09EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyT09IWHllelVCRFZQTHg5RVA3ZFZqTktpdGhpV2JEUGlBcEFrMTNIOVlTUXZ4Y3kxTWlINkdDdis2SnhycHB6RlpnWGZicVdEUUMzQjdNNXBzUnNEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDg3NjI3OTM3OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3MDMwODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQNlFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA2US5qc29uIjogIntcImtleURhdGFcIjpcIko2dU5vdlpGYk9KRE5PeW51cmFqNlEwSDhGaVNyT3NFZHRnRlRST04xQ1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUwODQ4NDU5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
