import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
  ['254102510747', '👑 ░ 𝕎𝕒𝕛𝕒𝕔 𝐁𝐎𝐓 𝐂𝐑𝐄𝐀𝐓𝐎𝐑🇰🇪', true],
  ['254102510747', '💫𝐁𝐎𝐓 Collaborator💫', true],
  ['254102510747', '💫MysterymanCollaborator 2 💫', true],
  ['254102510747', '〖➠ 𝕎𝕒𝕛𝕒𝕔𝕜𝕠𝕪𝕒™┋[ↇ]', '💫 𝕎𝕒𝕛𝕒𝕔𝕜 𝐁𝐎𝐓 Collaborator 3 💫', true],
];

global.suittag = ['254102510747'];
global.prems = ['254102510747'];

global.packname = '(☞ﾟ∀ﾟ)☞';
global.author = '★𝕎𝕒𝕛𝕒𝕔 𝐁𝐎𝐓★';
global.wm = '★𝕎𝕒𝕛𝕒𝕔 𝐁𝐎𝐓★';
global.igfg = '★𝕎𝕒𝕛𝕒𝕔 𝐁𝐎𝐓★';
global.wait = '*[☢️] 𝕎𝕒𝕛𝕒𝕔 𝐁𝐎𝐓 𝐈𝐒 𝐋𝐎𝐀𝐃𝐈𝐍𝐆    「▰▰▰▱▱▱▱▱▱▱」...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png.jpg');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'en';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('en', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('en', {month: 'long'});
global.año = d.toLocaleDateString('en', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝕎𝕒𝕛𝕒𝕔𝕜 𝐁𝐎𝐓`;
global.gt = '★𝕎𝕒𝕛𝕒𝕔 𝐁𝐎𝐓★';
global.mysticbot = '★𝕎𝕒𝕛𝕒𝕔 𝐁𝐎𝐓★';
global.md = 'https://github.com/Wajackoya';
global.mysticbot = 'https://github.com/Wajackoya';
global.waitt = '*[☢️] 𝕎𝕒𝕛𝕒𝕔 𝐁𝐎𝐓 𝐈𝐒 𝐋𝐎𝐀𝐃𝐈𝐍𝐆...*';
global.waittt = '*[☢️]𝕎𝕒𝕛𝕒𝕔 𝐁𝐎𝐓 𝐈𝐒 𝐋𝐎𝐀𝐃𝐈𝐍𝐆...*';
global.waitttt = '*[☢️]𝕎𝕒𝕛𝕒𝕔 𝐁𝐎𝐓 𝐈𝐒 𝐋𝐎𝐀𝐃𝐈𝐍𝐆...*';
global.nomorown = '254102510747';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `⫹⫺ Date :  ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('Africa/Nairobi').format('HH:mm:ss')}`;// America/Los_Angeles
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
