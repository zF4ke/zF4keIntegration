/* eslint-disable no-case-declarations */
module.exports.run = async (client, message, args) => {
    const DiscordUser = require('../database/models/DiscordUser');

    const action = args[0];

    if (!action || action.length === 0 || (action.toLowerCase() != "add" && action.toLowerCase() != "remove" && action.toLowerCase() != "find")) return message.channel.send({
        embed: {
            title: "👤 User -> Error",
            color: 16069684,
            description: 'O subcomando indicado não existe.\nEscolha entre `find`, `add` ou `remove` para executar uma ação.',
            timestamp: new Date()
        }
    }).then((msg) => setTimeout(() => msg.delete(), 10000));

    switch (action.toLowerCase()) {
        case "add":
            const member = message.mentions.members.first();
            const member_level = args[2];
            const member_roles = args.slice(3);

            if (!member_level || Number.isInteger(Number(member_level)) === false || !member || Number(member_level) < 0) return message.channel.send({
                embed: {
                    title: "👤 User -> Add -> Error",
                    color: 16069684,
                    description: 'Syntax incorreta.\nUse: ' + process.env.PREFIX + `user ${action} @membro nivel (cargos)`,
                    timestamp: new Date()
                }
            }).then((msg) => setTimeout(() => msg.delete(), 10000));

            try {
                const response_member = await DiscordUser.findOne({
                    id: member.id
                });
                if (response_member) {
                    return message.channel.send({
                        embed: {
                            title: "👤 User -> Add -> Error",
                            color: 16069684,
                            description: 'O usuário indicado já existe.',
                            timestamp: new Date()
                        }
                    }).then((msg) => setTimeout(() => msg.delete(), 10000));
                } else {
                    const newUser = await DiscordUser.create({
                        id: member.id,
                        name: member.user.tag,
                        roles: member_roles,
                        permissionLevel: member_level
                    });
                    // eslint-disable-next-line no-unused-vars
                    const savedUser = await newUser.save();

                    return message.channel.send({
                        embed: {
                            title: "👤 User -> Add -> Success",
                            color: 1757534,
                            description: 'O usuário foi adicionado com sucesso.',
                            timestamp: new Date()
                        }
                    });
                }
            } catch (err) {
                console.log(err);
            }
            break;
        case "remove":
            try {
                const member = message.mentions.members.first();

                if (!member) return message.channel.send({
                    embed: {
                        title: "👤 User -> Remove -> Error",
                        color: 16069684,
                        description: 'O usuário não existe?\nUse: ' + process.env.PREFIX + `user ${action} @membro`,
                        timestamp: new Date()
                    }
                }).then((msg) => setTimeout(() => msg.delete(), 10000));

                const response_member = await DiscordUser.findOne({
                    id: member.id
                });
                if (!response_member) {
                    return message.channel.send({
                        embed: {
                            title: "👤 User -> Remove -> Error",
                            color: 16069684,
                            description: 'O usuário indicado não existe.',
                            timestamp: new Date()
                        }
                    }).then((msg) => setTimeout(() => msg.delete(), 10000));
                } else {
                    const member_data = {
                        member_id: Number(member.id),
                    };

                    // eslint-disable-next-line no-unused-vars                
                    const removeUser = await DiscordUser.findOneAndDelete({
                        id: member_data.member_id
                    });

                    return message.channel.send({
                        embed: {
                            title: "👤 User -> Remove -> Success",
                            color: 1757534,
                            description: 'O usuário foi removido com sucesso.',
                            timestamp: new Date()
                        }
                    });
                }
            } catch (err) {
                console.log(err);
            }
            break;
        case "find":
            try {
                const member = message.mentions.members.first();

                if (!member) return message.channel.send({
                    embed: {
                        title: "👤 User -> Find -> Error",
                        color: 16069684,
                        description: 'O usuário não foi indicado?\nUse: ' + process.env.PREFIX + `user ${action} @membro`,
                        timestamp: new Date()
                    }
                }).then((msg) => setTimeout(() => msg.delete(), 10000));

                const response_member = await DiscordUser.findOne({
                    id: member.id
                });
                
                if (!response_member) {
                    return message.channel.send({
                        embed: {
                            title: "👤 User -> Find -> Error",
                            color: 16069684,
                            description: 'O usuário indicado não existe.',
                            timestamp: new Date()
                        }
                    }).then((msg) => setTimeout(() => msg.delete(), 10000));
                } else {
                    const user = client.users.find(user => user.id === member.id);

                    var roles = response_member.roles.join(',');

                    if(!roles) roles = 'Não tem.';

                    return message.channel.send({
                        embed: {
                            title: `👤 ${member.user.username}`,
                            color: 1757534,
                            thumbnail: { 
                                url: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp` 
                            },
                            fields: [
                                
                                {
                                    name: "Nome:",
                                    value: response_member.name || '',
                                    inline: true
                                },
                                {
                                    name: "ID:",
                                    value: response_member.id || '',
                                    inline: true
                                },
                                {
                                    name: "Cargos",
                                    value: roles,
                                    inline: true
                                },
                                {
                                    name: "Nível",
                                    value: response_member.permissionLevel || 0,
                                    inline: true
                                }
                            ],
                            timestamp: new Date()
                        }
                    });
                }
            } catch (err) {
                console.log(err);
            }
            break;
    }
};

module.exports.config = {
    name: 'user',
    aliases: ['users', 'account', 'accounts'], // Even if you don't want an alias, leave this as an array.
    permissionLevel: 7
};