
const Discord = require('discord.js');



const bot = new Discord.Client();



bot.login('Nzc0NTAzODE3ODQzODM0OTAw.X6Yu4w.uuWYiHjHx5sX9ED9liAdi6n5EIU')//bot token


bot.on('guildMemberAdd', member => {
    member.guild.channels.get('channelID').send("Welcome"); 

    console.log('hi')
});