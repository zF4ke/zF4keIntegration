/*
Author: zF4ke
Youtube: https://www.youtube.com/c/JokarxDyt
Discord: zF4ke#8556
github: https://github.com/zF4ke
Twitter: @zFaked
*/

require('dotenv').config()

const Discord = require("discord.js");
const client = new Discord.Client();

const { red, green, blue, yellow, cyan } = require('chalk');

const requireAll = require('require-all');   // Don't forget to install!
const path = require('path')

console.log(blue(`[SELF BOT] :: USE ACEITANDO O RISCO DE SER BANIDO`));
console.log(blue(`[SELF BOT] :: OS SELFBOTS SÃO CONTRA AS NORMAS DO DISCORD`));
console.log(yellow('============================================================================'));
console.log(yellow(`[GOD] :: zF4ke joined the game.`));
console.log(cyan(`[COMMANDOS] :: ${process.env.PREFIX}ping :: Mostra o ping na tela.`));
console.log(cyan(`[COMMANDOS] :: ${process.env.PREFIX}purge [5]:: Deleta as ultimas 5 mensagens enviadas.`));
console.log(cyan(`[COMMANDOS] :: ${process.env.PREFIX}embed [content] :: Envia uma mensagem em embed.`));
console.log(cyan(`[COMMANDOS] :: ${process.env.PREFIX}restart :: Reinicia o Bot.`));
console.log(cyan(`[COMMANDOS] :: ${process.env.PREFIX}spam [ID] [content] :: Spamma a DM de um usuário 'o'.`));
console.log(cyan(`[COMMANDOS] :: ${process.env.PREFIX}vip :: zF4ke Deus`))
console.log(cyan(`[COMMANDOS] :: ${process.env.PREFIX}eval [content] :: Evaluate code`));
console.log(cyan(`[COMMANDOS] :: ${process.env.PREFIX}serverinfo :: Ver informações do servidor`));
console.log(cyan(`[COMMANDOS] :: ${process.env.PREFIX}whois :: Ver informações de um usuario`));




function eventHandler() {
  const files = requireAll({                   // Require all the files within your
    dirname: `${__dirname}/events`,            // event directory which have a name
    filter: /^(?!-)(.+)\.js$/                  // ending in '.js' NOT starting
  });                                          // with '-' (a way to disable files).
  
  client.removeAllListeners();                 // Prevent duplicate listeners on reload.
                                               // CAUTION: THIS REMOVES LISTENERS
                                               // ATTACHED BY DISCORD.JS!
  
  for (const name in files) {                  // Iterate through the files object
    const event = files[name];                 // and attach listeners to each
                                               // event, passing 'client' as the
    client.on(name, event.bind(null, client)); // first parameter, and the rest
                                               // of the expected parameters
    console.log(`Event loaded: ${name}`);      // afterwards. Then, log the
  }
}

function commandHandler() {
  const files = requireAll({                   // Require all the files within your
    dirname: `${__dirname}/commands`,          // command directory which have a name
    filter: /^(?!-)(.+)\.js$/                  // ending in '.js' NOT starting
  });                                          // with '-' (a way to disable files).
  
  client.commands = new Map();                 // Create new Maps for the corresponding
  client.aliases = new Map();                  // command names/commands, and aliases.
  
  for (const name in files) {                  // Iterate through the files object
    const cmd = files[name];                   // and set up the 'commands' and
                                              // 'aliases' Maps. Then, log the
    client.commands.set(cmd.config.name, cmd); // successful load to the console.
    for (const a of cmd.config.aliases) client.aliases.set(a, cmd.config.name);
  
    console.log(`Command loaded: ${cmd.config.name}`);
  }
}

eventHandler()
commandHandler()

client.login(process.env.TOKEN);