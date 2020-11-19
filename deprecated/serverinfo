
const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {

    const { red, green, blue, yellow, cyan } = require('chalk');

    var emojis = msg.member.guild.emojis.map(r => r.id).join(" ")
    var bots = msg.member.guild.members.filter(member => member.user.bot).size
    var cargos = msg.member.guild.roles.size
    var cargosv2 = msg.member.guild.roles.map(r => r).join(" ")

if(args[0] !== "2" && args[0] !== "3" && args[0] !== "4") {

if (msg.author.id === "676156690395037713" || msg.author.id === "111591984245780480")  {//zF4ke main comandos
    msg.channel.send(`zF/serverinfo`);
    msg.channel.send(`zF/serverinfo 2`);
    msg.channel.send(`zF/serverinfo 3`);
    msg.channel.send(`zF/serverinfo 4`);
    msg.channel.fetchMessages({ limit: 4 }).then(msgs=>msgs.filter(m => m.author.id === bot.user.id).map(r => r.delete()))
    console.log(cyan(`[COMMAND RAN] :: Ping (zF4ke)`));
}

if (msg.author.id === "650411898096844820") {//zF4ke²
   

    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
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
        var emojis = "Não tem."
    }
    if(bots === "") {
        var bots = "0"
    }
    if(cargos === "") {
        var cargos = "Não tem."
    }
    if(cargosv2 === "") {
        var cargosv2 = "Não tem."
    }

    const embed = new Discord.RichEmbed()
        .addField("Nome", msg.member.guild.name, true)
        .addField("ID", msg.member.guild.id, true)
        .addField("Dono", `${msg.member.guild.ownerID}`, true)
        .addField("Região", region[msg.member.guild.region], true)
        .addField("Total | Usuários | Bots", `${msg.member.guild.members.size} | ${msg.member.guild.members.filter(member => !member.user.bot).size} | ${bots}`, true)
        .addField("Verificação", verifLevels[msg.member.guild.verificationLevel], true)
        .addField("Canais", msg.member.guild.channels.size, true)
        .addField("Cargos", cargos, true)
        .addField("Presenças (Beta)", msg.member.guild.presences.map(r => r).join(" "), true)
        .addField("Emojis (Beta)", emojis, true)
        .addField("Data de criação", `${msg.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(msg.channel.guild.createdAt)})`, true)
        .setTimestamp()
        msg.channel.send({embed});

        /*msg.channel.send(`
            Cargos: ${cargos}
            Canais: ${msg.member.guild.channels.size}
            CanaisV2: ${msg.member.guild.channels.map(r => r).join(" ")}
        
        `)*/
        /*console.log(`
        Cargos: ${cargos}
        Canais: ${msg.member.guild.channels.size}
        CargosV2: ${cargosv2}*/
       
        

}
}

if(args[0] == "2") {

    if (msg.author.id === "676156690395037713" || msg.author.id === "111591984245780480")  {//zF4ke main comandos
        console.log(cyan(`[COMMAND RAN] :: Ping (zF4ke)`));
    }
    
    if (msg.author.id === "650411898096844820") {//zF4ke²
       
    
        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        };
        let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
        let region = {
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

        var membros = msg.member.guild.members.map(r => r).join(" ")
    
        if(msg.channel.permissionOverwrites.map(r => r).join(" ") === "") {
            
            var perms = "---"
        } else {
            var perms = msg.channel.permissionOverwrites.map(r => r).join(" ")
        }

        if(membros === "") {
            var membros = '0'
        }


    
        const embed = new Discord.RichEmbed()
            .addField("Permissões", perms, true)
            .addField("Membros", membros)
            .setTimestamp()
            msg.channel.send({embed});



    
    }



}
if(args[0] == "3") {

    if (msg.author.id === "676156690395037713" || msg.author.id === "111591984245780480")  {//zF4ke main comandos
        console.log(cyan(`[COMMAND RAN] :: Ping (zF4ke)`));
    }
    
    if (msg.author.id === "650411898096844820") {//zF4ke²
       
    
        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        };
        let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
        let region = {
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
    
    
        const embed = new Discord.RichEmbed()
            .addField("CargosV2 (Beta)", cargosv2, true)
            .setTimestamp()
            msg.channel.send({embed});



    
    }



}

if(args[0] == "4") {

    if (msg.author.id === "676156690395037713" || msg.author.id === "111591984245780480")  {//zF4ke main comandos
        console.log(cyan(`[COMMAND RAN] :: Ping (zF4ke)`));
    }
    
    if (msg.author.id === "650411898096844820") {//zF4ke²
       
    
        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        };
        let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
        let region = {
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
    
        const embed = new Discord.RichEmbed()
            .addField("CanaisV2 (Beta)", msg.member.guild.channels.map(r => r).join(" "), true)
            .setTimestamp()
            msg.channel.send({embed});

    
    }



}


module.exports.help = {
  name:"serverinfo"
} 

}