/* eslint-disable no-unused-vars */
/*
Author: zF4ke
Youtube: https://www.youtube.com/c/JokarxDyt
Discord: zF4ke#8556
github: https://github.com/zF4ke
Twitter: @zFaked
*/

require('dotenv').config();

const Discord = require("discord.js");
const client = new Discord.Client();

const requireAll = require('require-all'); // Don't forget to install!

const mongoose = require('mongoose');
const db = require('./database/database');

const { red, green, blue, yellow, cyan } = require('chalk');

const registerCommand = require('./services/commands/registerCommand');

db.then(() => console.log(cyan('Connected to MongoDB (summitdb)'))).catch(err => console.error(err));

function eventHandler() {
    const files = requireAll({ // Require all the files within your
        dirname: `${__dirname}/events`, // event directory which have a name
        filter: /^(?!-)(.+)\.js$/ // ending in '.js' NOT starting
    }); // with '-' (a way to disable files).

    client.removeAllListeners(); // Prevent duplicate listeners on reload.
    // CAUTION: THIS REMOVES LISTENERS
    // ATTACHED BY DISCORD.JS!

    for (const name in files) { // Iterate through the files object
        const event = files[name]; // and attach listeners to each
        // event, passing 'client' as the
        client.on(name, event.bind(null, client)); // first parameter, and the rest
        // of the expected parameters
    }
}

function commandHandler() {
    const files = requireAll({ // Require all the files within your
        dirname: `${__dirname}/commands`, // command directory which have a name
        filter: /^(?!-)(.+)\.js$/ // ending in '.js' NOT starting
    }); // with '-' (a way to disable files).

    client.commands = new Map(); // Create new Maps for the corresponding
    client.aliases = new Map(); // command names/commands, and aliases.

    for (const name in files) { // Iterate through the files object
        const cmd = files[name]; // and set up the 'commands' and
        // 'aliases' Maps. Then, log the
        client.commands.set(cmd.config.name, cmd); // successful load to the console.
        for (const a of cmd.config.aliases) client.aliases.set(a, cmd.config.name);

        registerCommand(cmd.config);
    }
}

eventHandler();
commandHandler();

try {
    client.login(process.env.CLIENT_TOKEN);
} catch (err) {
    console.log(err);
}