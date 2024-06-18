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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_42_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3OCxcbiAgICAgICAgODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDI1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNixcbiAgICAgICAgMTc5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgODIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIzLFxuICAgICAgICAzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImkrbTgxYzRFc2FQS0U3dWxOVWVUQzMyZnRhb1hVRStPSUpkZ0Y2Q29FaFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA4NzYyNzkzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkI5MDc5RjE5NTAwMUM1QjFDMjYzODhCMzc4MDlEQzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NzEwOTU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZBbEpSYnlsVDZDQXFxM2E0QXZMUGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzY3ZmNmNWUtZDI2ZC00ZGM0LThkMWYtNmIxZjZiNWEzNjE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OSxcbiAgICAgIDE3NixcbiAgICAgIDE1NixcbiAgICAgIDIxNCxcbiAgICAgIDEzMCxcbiAgICAgIDEyMyxcbiAgICAgIDExOCxcbiAgICAgIDIwNixcbiAgICAgIDE0MyxcbiAgICAgIDEyLFxuICAgICAgMTY5LFxuICAgICAgOTEsXG4gICAgICAxMjEsXG4gICAgICAxOTcsXG4gICAgICAxNjgsXG4gICAgICAxNTYsXG4gICAgICAyMzIsXG4gICAgICAxNDEsXG4gICAgICAyMDYsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDM3LFxuICAgICAgMTMwLFxuICAgICAgMjgsXG4gICAgICAxNjAsXG4gICAgICAxNTEsXG4gICAgICAyMDgsXG4gICAgICAxMzYsXG4gICAgICAxMDUsXG4gICAgICAxMzIsXG4gICAgICAxOTEsXG4gICAgICAyMDksXG4gICAgICAxNjgsXG4gICAgICAyNDgsXG4gICAgICA3NCxcbiAgICAgIDkyLFxuICAgICAgMTE1LFxuICAgICAgMTAzLFxuICAgICAgMTI0LFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjEzS1ZWN05HXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg3NjI3OTM3OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSm9zaF9HcmFwaGljc2Rlc2lnbi5GcmFtZXMgTHRkXCIsXG4gICAgXCJsaWRcIjogXCIxNzk4NzMyMzAzNzcxNzk6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHpMcHM4RkVLTGx4Yk1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvVmljZTQremEreFh3Ukp6VnNHK1p0S2FYVXZyb3I4bXA4VXBtckg0cWprPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNVUk5FMlRadjV2TWhHTVdlZEJBdythcmZBd3ZQdTZEM3pNbkZWSFpRZHNCZEpyTHF1L0NyNDZwc3JVdXdnenArNmVVRENsSWMxQWg1T09Nb21YZkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpSZC9WdGpEZXdVR2dsZk5wRjNCaHBmbFIwQ0tKSnIzSlpzTFQ4Z29FZUc5dUdTaG9EeFJIQnh4M2grSVlMeVNpRk5yYWJRNXJvWFNyS084RUxJQ2d3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODc2Mjc5Mzc6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3MTA5NTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQNldcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA2Vy5qc29uIjogIntcImtleURhdGFcIjpcIk1HUGRmd2E0K0UvZnp5SHJLYitKU0hOY3BxaEZ6NGwxdk11d0h3KzZGRkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUwODQ4NDYwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODcxMDgzODMxMFwifSIKfQ=="  // PUT your SESSION_ID 


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
