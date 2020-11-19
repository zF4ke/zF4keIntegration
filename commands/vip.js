module.exports.run = async (client, msg, args) => {

    const { red, green, blue, yellow, cyan } = require('chalk');
    const { Client, RichEmbed } = require('discord.js');
    const settings = require('../settings.json');

    /*var zf4ke = client.users.cache.get('676156690395037713');
    var oneperson = client.users.cache.get('111591984245780480');
    var zf4ke2 = client.users.cache.get('650411898096844820');*/
    console.log(msg.author.avatar)
if (msg.author.id === "111591984245780480") {//one
    msg.channel.send("", {
        embed: new RichEmbed().setColor(`#FED450`).setTitle(`HEY`).setDescription("🔱 **O Deus One Person chegou!** \n Sword Art Online simplesmente é o melhor anime já feito, é uma verdadeira obra de arte. Nós somos sortudos por viver na mesma época que o lançamento dessa obra. \n Salve xet! 😉 ").setFooter('One Person#5049  - 111591984245780480').setTimestamp()
        .setThumbnail(`https://cdn.discordapp.com/avatars/111591984245780480/${msg.author.avatar}.gif
        `)
    });
    console.log(cyan(`[COMMAND RAN] :: Vip (OnePerson)`));
}

if (msg.author.id === "676156690395037713") {//zF4ke main
    msg.channel.send("", {
        embed: new RichEmbed().setColor(`#AE27FF`).setTitle(`HEY`).setDescription("🔱 **O Deus zF4ke chegou!** \n Sword Art Online simplesmente é o melhor anime já feito, é uma verdadeira obra de arte. Nós somos sortudos por viver na mesma época que o lançamento dessa obra. \n Salve xet! 😉 ").setFooter('zF4ke#8556  - 676156690395037713').setTimestamp()
        .setThumbnail(`https://cdn.discordapp.com/avatars/676156690395037713/${msg.author.avatar}.gif
        `)
    });
    console.log(cyan(`[COMMAND RAN] :: Vip (zF4ke)`));
}

if (msg.author.id === "650411898096844820") {//zF4ke²
    msg.channel.send("", {
        embed: new RichEmbed().setColor(`${settings.color}`).setTitle(`HEY`).setDescription("🔱 **O Deus zF4ke chegou!** \n Sword Art Online simplesmente é o melhor anime já feito, é uma verdadeira obra de arte. Nós somos sortudos por viver na mesma época que o lançamento dessa obra. \n Salve xet! 😉 ").setFooter('zF4ke#8556 - 650411898096844820').setTimestamp()
        .setThumbnail(`https://cdn.discordapp.com/avatars/650411898096844820/${msg.author.avatar}.png
        `)
    });
    console.log(cyan(`[COMMAND RAN] :: Vip (zF4ke²)`));
}

if (msg.author.id === "555047107917250570") {//Eu
    msg.channel.send("", {
        embed: new RichEmbed().setColor(`#FFF`).setTitle(`HEY`).setDescription('🔱 **O Deus Eu chegou!** \n Para ser justo, você precisa ter um QI muito alto para entender Steins; Gate.  O humor é extremamente sutil e, sem um conhecimento sólido da física teórica, a maioria das piadas passa pela cabeça de um espectador típico.  Há também a perspectiva niilista de Okarin, que é habilmente tecida em sua caracterização - sua filosofia pessoal baseia-se fortemente na literatura do Narodnaya Volya, por exemplo.  Os fãs entendem essas coisas;  eles têm a capacidade intelectual de realmente apreciar a profundidade dessas piadas, de perceber que elas não são apenas engraçadas - elas dizem algo profundo sobre a VIDA.  Como consequência, as pessoas que não gostam de Steins; Gate SÃO realmente idiotas - é claro que não apreciariam, por exemplo, o humor na frase de efeito existencial de Okarin "Bwahahahaha", que por si só é uma referência enigmática à megamente da Dreamworks.  Estou sorrindo agora, apenas imaginando um daqueles idiotas confusos coçando a cabeça em confusão enquanto a genialidade de Hiroshi Hamasaki se desdobra em suas telas de televisão.  Que tolos .. como tenho pena deles. ').setFooter('Eu#2840 - 555047107917250570').setTimestamp()
        .setThumbnail(`https://cdn.discordapp.com/avatars/555047107917250570/${msg.author.avatar}.png
        `)
    });
    console.log(cyan(`[COMMAND RAN] :: Vip (Eu)`));
}
}

module.exports.config = {
    name: 'vip',
    aliases: ['perfil'], // Even if you don't want an alias, leave this as an array.
};