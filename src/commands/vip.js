module.exports.run = async (client, message) => {
    switch(message.author.id) {
        case "111591984245780480":
            return message.channel.send({
                embed: {
                    title: "HEY",
                    color: 16700496,
                    description: '🔱 **O Deus One Person chegou!** \n Sword Art Online simplesmente é o melhor anime já feito, é uma verdadeira obra de arte. Nós somos sortudos por viver na mesma época que o lançamento dessa obra. \n Salve xet! 😉 ',
                    footer: 'One Person#5049  - 111591984245780480',
                    thumbnail: { 
                        url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.webp` 
                    },
                    timestamp: new Date()
                }
            });
        case "555047107917250570":
            return message.channel.send({
                embed: {
                    title: "HEY",
                    color: 16579836,
                    description: '🔱 **O Deus Eu chegou!** \n Para ser justo, você precisa ter um QI muito alto para entender Steins; Gate.  O humor é extremamente sutil e, sem um conhecimento sólido da física teórica, a maioria das piadas passa pela cabeça de um espectador típico. Os fãs entendem essas coisas;  eles têm a capacidade intelectual de realmente apreciar a profundidade dessas piadas, de perceber que elas não são apenas engraçadas - elas dizem algo profundo sobre a VIDA. \n Salve xet! 😉 ',
                    footer: 'Eu#2840  - 555047107917250570',
                    thumbnail: { 
                        url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.webp` 
                    },
                    timestamp: new Date()
                }
            });
        case "676156690395037713":
            return message.channel.send({
                embed: {
                    title: "HEY",
                    color: 11413503,
                    description: '🔱 **O Deus zF4ke chegou!** \n Sword Art Online simplesmente é o melhor anime já feito, é uma verdadeira obra de arte. Nós somos sortudos por viver na mesma época que o lançamento dessa obra. \n Salve xet! 😉 ',
                    footer: 'zF4ke#8556  - 676156690395037713',
                    thumbnail: { 
                        url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.webp` 
                    },
                    timestamp: new Date()
                }
            });
    }
};

module.exports.config = {
    name: 'vip',
    aliases: ['perfil'], // Even if you don't want an alias, leave this as an array.
    permissionLevel: 1
};