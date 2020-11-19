module.exports = async (client, msg) => {

  var allowedIDs = ["656092927101239299", "731276952882642944", "700811140355064139", "525892850601295904", "732806528414777436", "738228853503426661"]

  if(!msg.channel.guild.id) return;

  try {
    if(allowedIDs.indexOf(msg.channel.guild.id) > -1) {
      console.log(`[${msg.channel.guild.name}] $ (${msg.channel.name}) # ${msg.author.username} : [Editada] ${msg.author.lastMessage.content}`);
    }
  } catch(err) {
    
  }

}