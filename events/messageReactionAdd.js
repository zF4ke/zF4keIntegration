module.exports = async (client, reaction, user) => {
    if(user.id == "432610292342587392") {
        if(reaction.message.author.id == "432610292342587392") {
          if(reaction.message.embeds.length > 0) {
            for(var i = 0; i < reaction.message.embeds.length; i++) {
              if(reaction.message.embeds[i].author.name.toLowerCase().includes("mai sakurajima")) {
                reaction.message.react(reaction.emoji)
              }
            } 
          }
        }
      }
    
      if(user.id != "676156690395037713") return;
      if (reaction.emoji.name === 'Pog'){
        await reaction.message.react("402867853906280450")
        await reaction.message.react("697476535417831544")
        await reaction.message.react("😎")
        await reaction.message.react("605225075175718912")
        await reaction.message.react("403295297159299083")
        await reaction.message.react("749987134831722576")
        await reaction.message.react("745826490834223144")
        await reaction.message.react("758007674444054549")
        await reaction.message.react("714199392017580043")
        await reaction.message.react("733008000167444501")
        await reaction.message.react("733310338430271528")
        await reaction.message.react("739575015716159631")
        await reaction.message.react("735573502723358811")
        await reaction.message.react("758447732188119105")
        await reaction.message.react("739268137299476511")
      }
    
      if (reaction.partial) {
            // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
            try {
                await reaction.fetch();
            } catch (error) {
                //undefined/null
                return;
            }
        }
}