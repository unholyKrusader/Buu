const Discord = require('discord.js')
const bot = new Discord.Client()
const PREFIX = '!'

bot.on('ready', () => {
  console.log('Ready')
})

bot.login(process.env.BOT_TOKEN)

bot.on('guildMemberAdd', member => {
  let guild = member.guild
  guild.defaultChannel.send(`Buu turn ${member.user} into chocolate! Welcome to the ${guild} server!`)
})

bot.on('message', function (message) {
  if (message.author.equals(bot.user)) return

  if (!message.content.startsWith(PREFIX)) return

  var args = message.content.substring(PREFIX.length).split(' ')

  switch (args[0].toLowerCase()) {
    case 'ping':
      message.channel.send('Pong!')
      break
    case 'info':
      message.channel.send('A bot created by Zmezmer on July 8th, 2017.')
      break
    case 'rules':
      message.channel.send('http://www.dbs-cardgame.com/pdf/rulemanual.pdf')
      break
    case 'cardlist':
      message.channel.send('https://docs.google.com/document/d/10rsQ4ZteFzoqFT-X4E-l9vlPomfLqMzAPlfoRLU9vuI/edit')
      break
    case 'playonline':
      message.channel.send('Check the <#330764130250260480> channel or Buu gonna turn you into candy!')
      break
    case 'chocolate':
      message.channel.send('<:Buu:328048401331781642>Haha! Buu turned you into chocolate! If you stay and chat Buu might turn you back!')
      break
    case 'help':
      message.channel.send('!ping - pong!.\n!info - basic bot info.\n!rules - links the dbs ccg rule manual.\n!cardlist - list of all the current cards.\n!playonline - how to play online!\n!chocolate - how to not be chocolate?\n')
      break
    case 'champa':
      message.channel.send('Card Name | Card ID | Card Command```1.) Leader Champa | BT1-001 | !champa1 or !champa1awakened\n2.) Destructive Terror Champa | BT1-004 | !champa4\n' +
      '3.) Furthering Destruction Champa | BT1-005 | !champa5\n4.) Scheming Champa | BT1-006 | !champa6\n5.) Manipulating God Champa | BT1-007 | !champa7```')
      break
    case 'champa1':
      message.channel.send('http://imgur.com/HLdZx9f')
      break
    case 'champa1awakened':
      message.channel.send('http://imgur.com/vNWsAEd')
      break
    case 'champa4':
      message.channel.send('http://imgur.com/R2IstVK')
      break
    case 'champa5':
      message.channel.send('http://imgur.com/6mhlqA5')
      break
    case 'champa6':
      message.channel.send('http://imgur.com/L3tjmvP')
      break
    case 'champa7':
      message.channel.send('http://imgur.com/IN7AYZ3')
      break
    case 'vados':
      message.channel.send('Card Name | Card ID | Card Command```1.) Leader Vados | BT1-002 | !vados2 or !vados2awakened\n2.) Bewitching God Vados | BT1-008 | !vados8\n' +
      '3.) Calm-Hearted Vados | BT1-009 | !vados9\n4.) Divine Aide Vados | BT1-010 | !vados10\n5.) Vados\'s Assistance | BT1-025 | !vados25\n6.) Proud Spark Vados | ' +
      'P-002 | !vadosp2```')
      break
    case 'vados2':
      message.channel.send('http://imgur.com/Nci8sQk')
      break
    case 'vados2awakened':
      message.channel.send('http://imgur.com/D2JB4RN')
      break
    case 'vados8':
      message.channel.send('http://imgur.com/PKgi2n0')
      break
    case 'vados9':
      message.channel.send('http://imgur.com/kRUYS3w')
      break
    case 'vados10':
      message.channel.send('http://imgur.com/wFN2rX5')
      break
    case 'vados25':
      message.channel.send('http://imgur.com/0gFewZ9')
      break
    case 'vadosp2':
      message.channel.send('http://imgur.com/dQIAkO5')
      break
    case 'hit':
      message.channel.send('Card Name | Card ID | Card Command```1.) Leader Hit | BT1-003 | !hit3 or !hit3awakened\n2.) Lightning-fast Hit | BT1-011 | !hit11\n' +
      '3.) Hit | BT1-012 | !hit12```')
      break
    case 'hit3':
      message.channel.send('http://imgur.com/4Fxv1nY')
      break
    case 'hit3awakened':
      message.channel.send('http://imgur.com/hAFOEE9')
      break
    case 'hit11':
      message.channel.send('http://imgur.com/DELPCrL')
      break
    case 'hit12':
      message.channel.send('http://imgur.com/A8x9fiF')
      break
    case 'cabba':
      message.channel.send('Card Name | Card ID | Card Command```1.) Raging Cabba | BT1-013 | !cabba13\n2.) Saiyan Cabba | BT1-014 | !cabba14\n' +
      '3.) Cabba\'s Awakening | BT1-027 | !cabba27```')
      break
    case 'cabba13':
      message.channel.send('http://imgur.com/ezJpkHi')
      break
    case 'cabba14':
      message.channel.send('http://imgur.com/b7r4OQu')
      break
    case 'cabba27':
      message.channel.send('http://imgur.com/PdHQjRW')
      break
    case 'frost':
      message.channel.send('Card Name | Card ID | Card Command```1.) Terror Assault Frost | BT1-015 | !frost15\n2.) Unceasing Evolution Frost | BT1-016 | !frost16\n' +
      '3.) Evolution Premonition Frost | BT1-017 | !frost17```')
      break
    case 'frost15':
      message.channel.send('http://imgur.com/b4SwUtQ')
      break
    case 'frost16':
      message.channel.send('http://imgur.com/DojWvRu')
      break
    case 'frost17':
      message.channel.send('http://imgur.com/J1x9xhB')
      break
    case 'botamo':
      message.channel.send('Card Name | Card ID | Card Command```1.) Confident Botamo | BT1-018 | !botamo18\n2.) Botamo of Universe 6 | BT1-019 | !botamo19```')
      break
    case 'botamo18':
      message.channel.send('http://imgur.com/529cpCO')
      break
    case 'botamo19':
      message.channel.send('http://imgur.com/XtEzDoi')
      break
    case 'magetta':
      message.channel.send('Card Name | Card ID | Card Command```1.) Iron Wall Magetta | BT1-020 | !magetta20\n2.) Magetta of Universe 6 | BT1-021 | !magetta21```')
      break
    case 'magetta20':
      message.channel.send('http://imgur.com/6loHb1S')
      break
    case 'magetta21':
      message.channel.send('http://imgur.com/7YCNbaS')
      break
    case 'kai':
      message.channel.send('Card Name | Card ID | Card Command```1.) Universe 6 Supreme Kai | BT1-022 | !kai22\n2.) Kai Attendant of Universe 6 | BT1-023 | !kai23\n' +
      '3.) Guardian North Kai | BT1-050 | !kai50```')
      break
    case 'kai22':
      message.channel.send('http://imgur.com/MyBw8OY')
      break
    case 'kai23':
      message.channel.send('http://imgur.com/zxF1AbZ')
      break
    case 'kai50':
      message.channel.send('http://imgur.com/aeXJgic')
      break
    case 'assassinationplot':
      message.channel.send('http://imgur.com/L1vAvt9')
      break
    case 'fickledestruction':
      message.channel.send('http://imgur.com/uj8UVzT')
      break
    case 'vegeta':
      message.channel.send('Card Name | Card ID | Card Command```1.) Leader Vegeta | BT1-028 | !vegeta28 or !vegeta28awakened\n2.) God Charge Vegeta | BT1-036 | !vegeta36\n' +
      '3.) Assailant Vegeta | BT1-037 | !vegeta37\n4.) Vegeta | BT1-038 | !vegeta38\n5.) Raging Attacker Vegeta | BT1-064 | !vegeta64\n6.) Furious Yell Vegeta' +
      ' | BT1-065 | !vegeta65\n7.) Tenacious Vegeta | BT1-066 | !vegeta66\n8.) Vegeta, Prince of Speed | SD1-05 | !vegetasd5\n9.) One-Hit Destruction Vegeta | P-001 | ' +
      '!vegetap1```')
      break
    case 'vegeta28':
      message.channel.send('http://imgur.com/vo1C9kZ')
      break
    case 'vegeta28awakened':
      message.channel.send('http://imgur.com/wSPmF0p')
      break
    case 'vegeta36':
      message.channel.send('http://imgur.com/KchHKgZ')
      break
    case 'vegeta37':
      message.channel.send('http://imgur.com/oGt8uGG')
      break
    case 'vegeta38':
      message.channel.send('http://imgur.com/5FezpJG')
      break
    case 'vegeta64':
      message.channel.send('http://imgur.com/arXY1Hv')
      break
    case 'vegeta65':
      message.channel.send('http://imgur.com/sXDkU6K')
      break
    case 'vegeta66':
      message.channel.send('http://imgur.com/gsMxcqu')
      break
    case 'vegetasd5':
      message.channel.send('http://imgur.com/dL3HSJE')
      break
    case 'vegetap1':
      message.channel.send('http://imgur.com/tPEbEhv')
      break
    case 'beerus':
      message.channel.send('Card Name | Card ID | Card Command```1.) Leader Beerus | BT1-029 | !beerus29 or !beerus29awakened\n2.) Beerus, General of Demolition' +
      ' | BT1-041 | !beerus41\n3.) Energy Boost Beerus | BT1-042 | !beerus42```')
      break
    case 'beerus29':
      message.channel.send('http://imgur.com/gHz5548')
      break
    case 'beerus29awakened':
      message.channel.send('http://imgur.com/xWtXJJk')
      break
    case 'beerus41':
      message.channel.send('http://imgur.com/EfOe4WQ')
      break
    case 'beerus42':
      message.channel.send('http://imgur.com/v9PHurw')
      break
    case 'goku':
      message.channel.send('Card Name | Card ID | Card Command```1.) Leader Son Goku | BT1-030 | !goku30 or !goku30awakened\n2.) God Break Son Goku | BT1-031 | !goku31\n' +
      '3.) Overflowing Spirit SSGSS Son Goku | BT1-032 | !goku32\n4.) Kind Saiyan Son Goku | BT1-033 | !goku33\n5.) Leader Son Goku | BT1-056 | !goku56 or !goku56awakened\n' +
      '6.) Awakening Rage Son Goku | BT1-059 | !goku59\n7.) Son Goku | BT1-060 | !goku60\n8.) Super Saiyan God Son Goku | SD1-01 | !gokusd1 or !gokusd1awakened\n' +
      '9.) God Rush Son Goku | SD1-02 | !gokusd2\n10.) SS3 Son Goku, Maximum Energy | SD1-03 | !gokusd3\n11.) Rapid Spirit Ball Son Goku | SD1-04 | !gokusd4\n12.) ' +
      'Super Saiyan 3 Son Goku | P-003 | !gokup3```')
      break
    case 'goku30':
      message.channel.send('http://imgur.com/C4QOCQB')
      break
    case 'goku30awakened':
      message.channel.send('http://imgur.com/HrnA2o0')
      break
    case 'goku31':
      message.channel.send('http://imgur.com/zrsT1FI')
      break
    case 'goku32':
      message.channel.send('http://imgur.com/LPIYV9O')
      break
    case 'goku33':
      message.channel.send('http://imgur.com/qAhw2jP')
      break
    case 'goku56':
      message.channel.send('http://imgur.com/9Rn5fhD')
      break
    case 'goku56awakened':
      message.channel.send('http://imgur.com/O0FYv5U')
      break
    case 'goku59':
      message.channel.send('http://imgur.com/J8Yz92S')
      break
    case 'goku60':
      message.channel.send('http://imgur.com/TpV5hir')
      break
    case 'gokusd1':
      message.channel.send('http://imgur.com/OlMHnAc')
      break
    case 'gokusd1awakened':
      message.channel.send('http://imgur.com/5pD0qF0')
      break
    case 'gokusd2':
      message.channel.send('http://imgur.com/PznLSGl')
      break
    case 'gokusd3':
      message.channel.send('http://imgur.com/NYERgZB')
      break
    case 'gokusd4':
      message.channel.send('http://imgur.com/W5Cc4Sp')
      break
    case 'gokup3':
      message.channel.send('http://imgur.com/DgqaGQ6')
      break
    case 'gohan':
      message.channel.send('Card Name | Card ID | Card Command```1.) Mighty Striker Son Gohan | BT1-034 | !gohan34\n2.) Leader Son Gohan | BT1-058 | !gohan58\n3.)' +
      ' Friend-Summoning Son Gohan | BT1-061 | !gohan61\n4.) Son Gohan, Family of Justice | BT1-062 | !gohan62```')
      break
    case 'gohan34':
      message.channel.send('http://imgur.com/WfIMpLt')
      break
    case 'gohan58':
      message.channel.send('http://imgur.com/xKEonYl')
      break
    case 'gohan58awakened':
      message.channel.send('http://imgur.com/jPGc0xK')
      break
    case 'gohan61':
      message.channel.send('http://imgur.com/jEDYkwP')
      break
    case 'gohan62':
      message.channel.send('http://imgur.com/9mr0V8J')
      break
    case 'goten':
      message.channel.send('Card Name | Card ID | Card Command```1.) Son Goten | BT1-035 | !gohan35\n2.) Son Goten, Family of Justice | BT1-063 | !gohan63```')
      break
    case 'goten35':
      message.channel.send('http://imgur.com/WIHomZj')
      break
    case 'goten63':
      message.channel.send('http://imgur.com/lxWEzzD')
      break
    case 'trunks':
      message.channel.send('Card Name | Card ID | Card Command```1.) Trunks | BT1-039 | !trunks39\n2.) Implacable Trunks | BT1-067 | !trunks67\n3.)' +
      ' Slasher Trunks | BT1-068 | !trunks68\n4.) Trunks, Protector of Children | BT1-069 | !trunks69\n5.) Energy Attack Trunks | P-004 | !trunksp4\n6.) ' +
      'Light of Hope Trunks | P-005 | !trunksp5```')
      break
    case 'trunks39':
      message.channel.send('http://imgur.com/2NWCWZB')
      break
    case 'trunks67':
      message.channel.send('http://imgur.com/pepaMzl')
      break
    case 'trunks68':
      message.channel.send('http://imgur.com/IJzPjY3')
      break
    case 'trunks69':
      message.channel.send('http://imgur.com/5p4Cmzo')
      break
    case 'trunksp4':
      message.channel.send('http://imgur.com/PX1H0Ep')
      break
    case 'trunksp5':
      message.channel.send('http://imgur.com/MnrknCg')
      break
    case 'bulma':
      message.channel.send('http://imgur.com/5P0b6ZJ')
      break
    case 'whis':
      message.channel.send('Card Name | Card ID | Card Command```1.) Whis, Judge of the Gods | BT1-043 | !whis43\n2.) Whis, The Resting Attendant | BT1-044 | !whis44\n3.)' +
      ' Whis\'s Coercion | BT1-055 | !whis55```')
      break
    case 'whis43':
      message.channel.send('http://imgur.com/psw6RTQ')
      break
    case 'whis44':
      message.channel.send('http://imgur.com/bCnB1vn')
      break
    case 'whis55':
      message.channel.send('http://imgur.com/YUyMzez')
      break
    case 'piccolo':
      message.channel.send('Card Name | Card ID | Card Command```1.) Boost Attack Piccolo | BT1-045 | !piccolo45\n2.) Taunting Piccolo | BT1-046 | !piccolo46```')
      break
    case 'piccolo45':
      message.channel.send('http://imgur.com/VKYRGrl')
      break
    case 'piccolo46':
      message.channel.send('http://imgur.com/5jnvdKX')
      break
    case 'majinbuu':
      message.channel.send('http://imgur.com/NoADlYc')
      break
    case 'jaco':
      message.channel.send('http://imgur.com/lkKXh0R')
      break
    case 'monaka':
      message.channel.send('Card Name | Card ID | Card Command```1.) Mysterious Presence Monaka | BT1-049 | !monaka49\n2.) Encouraging Presence Monaka | BT1-054 | !monaka54```')
      break
    case 'monaka49':
      message.channel.send('http://imgur.com/6UZZakX')
      break
    case 'monaka54':
      message.channel.send('http://imgur.com/gYRgLH5')
      break
    case 'resultoftraining':
      message.channel.send('http://imgur.com/OCAMFfi')
      break
    case 'objection':
      message.channel.send('http://imgur.com/YgMi1G8')
      break
    case 'senzubean':
      message.channel.send('http://imgur.com/GuUU7ET')
      break
    case 'broly':
      message.channel.send('Card Name | Card ID | Card Command```1.) Leader Broly | BT1-057 | !broly57 or !broly57awakened\n2.) Broly, The Rampaging Horror | BT1-073 | !broly73\n' +
      '3.) Rampaging Lifeform Bio-Broly | BT1-074 | !broly74\n4.) Rampaging Super Saiyan Broly | BT1-075 | !broly75\n5.) Broly, Dawn of the Rampage | BT1-076 | !broly76\n' +
      '6.) Broly, The Unstoppable Horror | P-006 | !brolyp6```')
      break
    case 'broly57':
      message.channel.send('http://imgur.com/JvAMAjD')
      break
    case 'broly57awakened':
      message.channel.send('http://imgur.com/rVHGLh3')
      break
    case 'broly73':
      message.channel.send('http://imgur.com/Pbalk1Z')
      break
    case 'broly74':
      message.channel.send('http://imgur.com/hrp43nx')
      break
    case 'broly75':
      message.channel.send('http://imgur.com/MQbeNzJ')
      break
    case 'broly76':
      message.channel.send('http://imgur.com/AUomNSU')
      break
    case 'brolyp6':
      message.channel.send('http://imgur.com/7dJh5ol')
      break
    case 'gotenks':
      message.channel.send('Card Name | Card ID | Card Command```1.) Super Saiyan Gotenks | BT1-070 | !gotenks70\n2.) Energy Power Gotenks | BT1-071 | !gotenks71```')
      break
    case 'gotenks70':
      message.channel.send('http://imgur.com/LOM3Wxt')
      break
    case 'gotenks71':
      message.channel.send('http://imgur.com/0tRMTTg')
      break
    case 'krillin':
      message.channel.send('http://imgur.com/MNREtHU')
      break
    case 'paragus':
      message.channel.send('http://imgur.com/BFqa7Lq')
      break
    case 'overflowingbiowarriorarmy':
      message.channel.send('http://imgur.com/scVvHkv')
      break
    case 'kingvegeta':
      message.channel.send('http://imgur.com/xdsu5II')
      break
    case 'fullpowerenergy':
      message.channel.send('http://imgur.com/Pp2DZRS')
      break
    case 'brolysring':
      message.channel.send('http://imgur.com/536Hysv')
      break
    case 'familykamehameha':
      message.channel.send('http://imgur.com/KHVvkL0')
      break
    case 'frieza':
      message.channel.send('Card Name | Card ID | Card Command```1.) Leader Frieza | BT1-083 | !frieza83 or !frieza83awakened\n2.) Leader Frieza | BT1-084 | !frieza84 or ' +
      '!frieza84awakened\n3.) Golden Frieza, The Resurrrected Terror | BT1-086 | !frieza86\n4.) Full-Power Frieza | BT1-087 | !frieza87\n5.) Frieza, Hellish Terror | BT1-088 | ' +
      '!frieza88\n6.) Avenging Frieza | BT1-089 | !frieza89\n7.) Mecha-Frieza, The Returning Terror | BT1-090 | !frieza90\n8.) Clan of Terror Mecha Frieza | P-008 | !friezap8```')
      break
    case 'frieza83':
      message.channel.send('http://imgur.com/gQLTvOj')
      break
    case 'frieza83awakened':
      message.channel.send('http://imgur.com/RD8yI8E')
      break
    case 'frieza84':
      message.channel.send('http://imgur.com/Ql2Zop1')
      break
    case 'frieza84awakened':
      message.channel.send('http://imgur.com/Zo2Uklp')
      break
    case 'frieza86':
      message.channel.send('http://imgur.com/Cyj3XyR')
      break
    case 'frieza87':
      message.channel.send('http://imgur.com/d2w6oT6')
      break
    case 'frieza88':
      message.channel.send('http://imgur.com/mCmyNa3')
      break
    case 'frieza89':
      message.channel.send('http://imgur.com/5RscbXa')
      break
    case 'frieza90':
      message.channel.send('http://imgur.com/PwlefQ7')
      break
    case 'friezap8':
      message.channel.send('http://imgur.com/G9vamBw')
      break
    case 'ginyu':
      message.channel.send('Card Name | Card ID | Card Command```1.) Leader Ginyu | BT1-085 | !ginyu85\n2.) Elite Force Captain Ginyu | BT1-095 | !ginyu95```')
      break
    case 'ginyu85':
      message.channel.send('http://imgur.com/iWVnt5V')
      break
    case 'ginyu85awakened':
      message.channel.send('http://imgur.com/nZWjORF')
      break
    case 'ginyu95':
      message.channel.send('http://imgur.com/Q66xjWQ')
      break
    case 'kingcold':
      message.channel.send('http://imgur.com/wCIYccQ')
      break
    case 'sorbet':
      message.channel.send('http://imgur.com/wYXl8x3')
      break
    case 'tagoma':
      message.channel.send('http://imgur.com/tdgyMHJ')
      break
    case 'shisami':
      message.channel.send('http://imgur.com/rcIzar0')
      break
    case 'recoome':
      message.channel.send('Card Name | Card ID | Card Command```1.) Ginyu Force Recoome | BT1-096 | !recoome96\n2.) Recoome Eraser Gun | BT1-0106 | !recoome106```')
      break
    case 'recoome96':
      message.channel.send('http://imgur.com/ECFOKeQ')
      break
    case 'recoome106':
      message.channel.send('http://imgur.com/5aaf1k1')
      break
    case 'burter':
      message.channel.send('http://imgur.com/ZXrJi77')
      break
    case 'jeice':
      message.channel.send('http://imgur.com/EMRK6y2')
      break
    case 'guldo':
      message.channel.send('http://imgur.com/Wz6VikT')
      break
    case 'dodoria':
      message.channel.send('http://imgur.com/XdxXKvT')
      break
    case 'zarbon':
      message.channel.send('http://imgur.com/CXUtZ2b')
      break
    case 'appule':
      message.channel.send('http://imgur.com/l9yrksT')
      break
    case 'sui':
      message.channel.send('http://imgur.com/lbt77ue')
      break
    case 'banan':
      message.channel.send('http://imgur.com/jIgYSAU')
      break
    case 'cui':
      message.channel.send('http://imgur.com/aZLZUc2')
      break
    case 'coldbloodlust':
      message.channel.send('http://imgur.com/8Dip6Ay')
      break
    case 'badringlaser':
      message.channel.send('http://imgur.com/zvdkWRW')
      break
    case 'friezascall':
      message.channel.send('http://imgur.com/Q1k217i')
      break
    case 'crusherball':
      message.channel.send('http://imgur.com/7eb3tZt')
      break
    case 'cell':
      message.channel.send('http://imgur.com/7LZgxcz')
      break
    case 'cooler':
      message.channel.send('http://imgur.com/ubBVuQR')
      break
  }
})
