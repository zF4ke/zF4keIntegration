module.exports = async (client, message) => {

	const allowedIDs = (process.env.LOG_SERVER_IDS);

	if (!message.channel || !message.channel.guild || !message.channel.guild.id) return;		
	try {
		if (allowedIDs.indexOf(message.channel.guild.id) > -1) {
			console.log(`[${message.channel.guild.name}] $ (${message.channel.name}) # ${message.author.username} : [Editada] ${message.author.lastMessage.content}`);
		}
	} catch (err) {
		//null
	}
};