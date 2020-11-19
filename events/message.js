const Discord = require("discord.js");
const { Client } = require('discord.js');

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('dbstatus.json')
const db = low(adapter)

const { red, green, blue, yellow, cyan } = require('chalk');

module.exports = async (client, msg) => {
    if(msg.content == "!sao" && msg.author.id == "676156690395037713") {
      msg.channel.send("https://www.crunchyroll.com/pt-br/sword-art-online")
    }
  
    if(msg.content == "!userinfo" /* && msg.channel.guild.id == "686745288777662467" */ && msg.author.id == "676156690395037713") {
      let Embed = new Discord.MessageEmbed()
      .setTitle()
      .setAuthor()
      .setColor()
      .addField()
      .setDescription()
      .setThumbnail()

      msg.channel.send({embed: {
        "title": "<:wumpus_basic:770394783382110258> <:hypesquad_brilliance:770394783118000178> -zF4ke Ser Acima de Tudo",
        "color": 16023551,
        "thumbnail": {
          "url": "https://images-ext-1.discordapp.net/external/96Y7pitmVjBMJQPk0uIkD64IGNPZoRK9qYf-CovajWA/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/676156690395037713/a_139e8262d6467c7010de35691acca87a.gif"
        },
        "fields": [
          {
            "name": ":bookmark: Tag do Discord",
            "value": "`zF4ke#8556`",
            "inline": true
          },
          {
            "name": ":computer: ID do Discord",
            "value": "`676156690395037713`",
            "inline": true
          },
          {
            "name": ":date: Conta criada há",
            "value": "8 meses 17 dias 1 hora",
            "inline": true
          },
          {
            "name": ":star2: Entrou há",
            "value": "3 anos 4 meses 12 dias 3 horas",
            "inline": true
          },
          {
            "name": "<:lori_boost:588421112786976791> Impulsionando desde",
            "value": "14 dias 1 hora 53 minutos",
            "inline": true
          }
        ]
      }})
    }

    var allowedIDs = ["656092927101239299", "731276952882642944", "700811140355064139", "525892850601295904", "732806528414777436", "738228853503426661"]

    if(!msg.channel.guild.id) return;

	  if(allowedIDs.indexOf(msg.channel.guild.id) > -1) {
      if(msg.attachments.array().length > 0) {
        for(const file in msg.attachments.array()) {
          console.log(`[${msg.channel.guild.name}] $ (${msg.channel.name}) # ${msg.author.username} : ${msg.content}`)
          console.log(msg.attachments.array()[file].proxyURL)
        }
      } else {
        console.log(`[${msg.channel.guild.name}] $ (${msg.channel.name}) # ${msg.author.username} : ${msg.content}`)
      }
    }
  
    var sniperStatus = db.get("sniper-status").find({"id": "status"}).value().status
    if(sniperStatus == "on") {
      console.log(`${msg.author.username}: ${msg.content}`)
    }
  
    if(msg.content.includes("<@650411898096844820>") || msg.content.includes("<@676156690395037713>")) {
      if(msg.content.includes("transferir") || msg.content.includes("transfer")) {
        if(msg.content.includes("1")) {
          msg.react("✅")
        }
      }
    }
  
    if(msg.content.includes("<@!650411898096844820>") || msg.content.includes("<@!676156690395037713>")) {
      if(msg.content.includes("transferir") || msg.content.includes("transfer")) {
        if(msg.content.includes("1")) {
          msg.react("✅")
        }
      }
    }
    
    //O client não responde caso
    if (!msg.content.startsWith(process.env.PREFIX)) return; //caso não comece com o seu prefixo
    if (
      msg.content.startsWith(`<@!${client.user.id}>`) ||
      msg.content.startsWith(`<@${client.user.id}>`)
    )
    if(msg.author.id !== "111591984245780480" || msg.author.id !== "676156690395037713" || msg.author.id !== "650411898096844820") return

    const prefix = process.env.PREFIX
    //formata os comandos
    const [cmd, ...args] = msg.content.trim().slice(prefix.length).split(/\s+/g);

    const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if (command && (msg.author.id == "676156690395037713" || msg.author.id == "111591984245780480" || msg.author.id == "555047107917250570" || msg.author.id == "766008132513431682")) {
      command.run(client, msg, args);
    } 
}