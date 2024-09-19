const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94755930139";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_13_38_09_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyLFxuICAgICAgICA3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDgsXG4gICAgICAgIDMsXG4gICAgICAgIDU3LFxuICAgICAgICAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAwLFxuICAgICAgICA1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMixcbiAgICAgICAgODIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxLFxuICAgICAgICA5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzLFxuICAgICAgICA1NixcbiAgICAgICAgNDksXG4gICAgICAgIDY1LFxuICAgICAgICA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYwLFxuICAgICAgICA1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDYzLFxuICAgICAgICA4NixcbiAgICAgICAgMTU3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZlBnMEI1RlhLVExtV0syN1pya2VhdlpQVVJzNkwxRUovNVZZVitkbkVsOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicE00MkhLQmRTeXVzYUZGOHo3X3kxd1wiLFxuICBcInBob25lSWRcIjogXCIyYmMwNDg3ZC05NzM0LTQzMWUtOWZmNS1lMmFlMDc2ZGE0ZmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAxOTUsXG4gICAgICAxOTQsXG4gICAgICAxMDcsXG4gICAgICAyNDksXG4gICAgICAxMzQsXG4gICAgICAyMSxcbiAgICAgIDE3NixcbiAgICAgIDEzOCxcbiAgICAgIDEwMSxcbiAgICAgIDkwLFxuICAgICAgMTk4LFxuICAgICAgNjcsXG4gICAgICA5OCxcbiAgICAgIDE4NyxcbiAgICAgIDkyLFxuICAgICAgMTIxLFxuICAgICAgMTYwLFxuICAgICAgOTgsXG4gICAgICA5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICAyMDcsXG4gICAgICAxMDAsXG4gICAgICAyMTIsXG4gICAgICAxODksXG4gICAgICA2NCxcbiAgICAgIDMsXG4gICAgICA4OSxcbiAgICAgIDEyMixcbiAgICAgIDE3NSxcbiAgICAgIDIzNCxcbiAgICAgIDc0LFxuICAgICAgMTE5LFxuICAgICAgNDEsXG4gICAgICAzMSxcbiAgICAgIDEwOSxcbiAgICAgIDYwLFxuICAgICAgMSxcbiAgICAgIDEwNixcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYQ0hMWURLR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTU5MzAxMzk6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZeh8J2XrvCdl7nwnZe28J2XsfCdmIJcIixcbiAgICBcImxpZFwiOiBcIjIzNzMxNDIwNjg1OTQ5MzoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKaTNuV0lRMzlLd3R3WVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVwUm4vMmNLSkhTeU5CbnZ1S1Q0dzYrV0ZzUjZwVXVvVHRDSGd6R1JNRHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidW1hQmVyeXFWR3FCOFg2Y3JYN3VQN0xjT3pudDNsUks5dVZKdFMvVG5VUzNxU1hlTHpMRzdzd0JNYjBXcHIwYWhyQnlXaHpqbVBGY1hvaVhZZFI5RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZGdSVXVpWDlxSFQwbEdLTVVPSmhuS3FuWEE5UW84VzRyNjhaWm1YazZ0VFpqWG9BR0p3NDhWUzNJZ3FYeTdnSFIxMFJ5dmFvVENzb1hsRXo4M0JNQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTU5MzAxMzk6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2NzUzMTIzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCse() : "SUHAIL",



};




























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
 
