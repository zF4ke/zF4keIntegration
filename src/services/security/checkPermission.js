module.exports = async (user, command_name) => {
    const DiscordUser = require('../../database/models/DiscordUser');
    const SummitCommand = require('../../database/models/SummitCommand');

    const registerUser = require('../users/registerUser');

    var response_member = await DiscordUser.findOne({
        id: user.id
    });

    const response_command = await SummitCommand.findOne({
        name: command_name
    });

    if(!response_member) {
        await registerUser(user);

        response_member = await DiscordUser.findOne({
            id: user.id
        });
    }

    if(response_member.permissionLevel >= response_command.permissionLevel) {
        return {
            status: 1,
            user: response_member
        };
    } else {
        return {
            status: 0,
            user: response_member
        };
    }
};