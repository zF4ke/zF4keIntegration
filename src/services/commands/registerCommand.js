module.exports = async command_data => {
    const SummitCommand = require('../../database/models/SummitCommand');

    try {
        const response_command = await SummitCommand.findOne({
            name: command_data.name
        });
        if(response_command) {
            return;
        } else {
            const newCommand = await SummitCommand.create({
                name: command_data.name,
                aliases: command_data.aliases,
                permissionLevel: command_data.permissionLevel
            });
            // eslint-disable-next-line no-unused-vars
            const savedCommand = await newCommand.save();

            return console.log(`${command_data.name} command was added to the database.`);
        }
    } catch (err) {
        console.log(err);
    }
};