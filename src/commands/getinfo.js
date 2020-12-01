/* eslint-disable no-redeclare */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

    var subcmd = args[0];
    var user = args[1];
    if(!subcmd) subcmd = "-h";

    if (msg.author.id !== "676156690395037713") {
        if(msg.author.id !== "650411898096844820" ) {
        msg.channel.send("```arm\nbash \n  user@undefined: getinfo \n  insufficient permissions: access denied```");
        console.log(cyan(`[COMMAND RAN] :: GetInfo (${msg.author.username})`));
        return;
        }
    }

    if(subcmd == "-help" || subcmd == "-h") {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: getinfo "+subcmd+" \n  Help:\n  -h (Display this list)\n  -s (Message server)\n  -u [mention] (User)\n  -chat```")));
    }

    if((subcmd == "-u") && !user)  {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: getinfo "+subcmd+" "+user+"\n  Invalid arguments\n  "+user+" is not valid.```")));
        return;
    }

    if((subcmd == "-s"))  {
        console.log(msg.guild.presences);
        var emojis = msg.member.guild.emojis.map(r => r).join(" ");
        var clients = msg.member.guild.members.filter(member => member.user.client).size;
        var cargos = msg.member.guild.roles.size;
        var cargosv2 = msg.member.guild.roles.map(r => r).join(" ");

        function checkDays(date) {
            var now = new Date();
            var diff = now.getTime() - date.getTime();
            var days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        }
        
        var verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
        var region = {
            "brazil": ":flag_br: Brazil",
            "eu-central": ":flag_eu: Central Europe",
            "singapore": ":flag_sg: Singapore",
            "us-central": ":flag_us: U.S. Central",
            "sydney": ":flag_au: Sydney",
            "us-east": ":flag_us: U.S. East",
            "us-south": ":flag_us: U.S. South",
            "us-west": ":flag_us: U.S. West",
            "eu-west": ":flag_eu: Western Europe",
            "vip-us-east": ":flag_us: VIP U.S. East",
            "london": ":flag_gb: London",
            "amsterdam": ":flag_nl: Amsterdam",
            "hongkong": ":flag_hk: Hong Kong",
            "russia": ":flag_ru: Russia",
            "southafrica": ":flag_za:  South Africa"
        };
    
        
    
        if(emojis === "") {
            var emojis = "Não tem.";
        }
        if(clients === "") {
            var clients = "0";
        }
        if(cargos === "") {
            var cargos = "Não tem.";
        }
        if(cargosv2 === "") {
            var cargosv2 = "Não tem.";
        }

        var membros = msg.member.guild.members.map(r => r).join(" ");

        if(msg.channel.permissionOverwrites.map(r => r).join(" ") === "") {
            
            var perms = "---";
        } else {
            var perms = msg.channel.permissionOverwrites.map(r => r).join(" ");
        }

        if(membros === "") {
            var membros = '0';
        }

        if(msg.content.includes("-chat")) {
        msg.channel.send("```Nome: "+msg.member.guild.name+"\nID: "+msg.member.guild.id+"\nDono: "+msg.member.guild.ownerID+"\nRegião: "+region[msg.member.guild.region]+"\nTotal | Usuários | clients: "+msg.member.guild.members.size+" | "+msg.member.guild.members.filter(member => !member.user.client).size+" | "+clients+"\nVerificação: "+verifLevels[msg.member.guild.verificationLevel]+"```");

        msg.channel.send("```Canais: "+msg.member.guild.channels.size+"\nCargos: "+cargos+"\nPresenças (Beta): "+msg.member.guild.presences.map(r => r).join(" ")+"\nEmojis (Beta): "+emojis+"\nData de criação: "+msg.channel.guild.createdAt.toUTCString().substr(0, 16)+" "+checkDays(msg.channel.guild.createdAt)+"```");
    
        msg.channel.send("```Permissões: "+perms+"\nMembros: "+membros+"```");

        msg.channel.send("```CargosV2 (Beta): "+cargosv2+"```");

        msg.channel.send("```CanaisV2 (Beta): "+msg.member.guild.channels.map(r => r).join(" ")+"```");



        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: getinfo "+subcmd+" -chat\n  Done```")));
        return;
        } else {

        console.log(`Nome:${ msg.member.guild.name}
        ID: ${msg.member.guild.id, true}
        Dono: ${msg.member.guild.ownerID}
        Região: ${region[msg.member.guild.region]}
        Total | Usuários | clients: ${msg.member.guild.members.size} | ${msg.member.guild.members.filter(member => !member.user.client).size} | ${clients}
        Verificação: ${verifLevels[msg.member.guild.verificationLevel]}
        Canais: ${msg.member.guild.channels.size}
        Cargos: ${cargos}
        Presenças (Beta): ${msg.member.guild.presences.map(r => r).join(" ")}
        Emojis (Beta): ${emojis}
        Data de criação: ${msg.channel.guild.createdAt.toUTCString().substr(0, 16)} ${checkDays(msg.channel.guild.createdAt)}`);
    
        console.log(`
        Permissões: ${perms}
        Membros: ${membros}`);

        console.log(`
            CargosV2 (Beta): ${cargosv2}`);

        console.log(`
        CanaisV2 (Beta): ${msg.member.guild.channels.map(r => r).join(" ")}`);



        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: getinfo "+subcmd+"\n  Done\n  Check console log.```")));
        return;
        }
    }
    if((subcmd == "-u"))  {
        var member = client.users.get(user);
        console.log(member);
    }
    
};

module.exports.config = {
    name: 'getinfo',
    aliases: ['info','who','what','whois','whatis'], // Even if you don't want an alias, leave this as an array.
    permissionLevel: 7
};