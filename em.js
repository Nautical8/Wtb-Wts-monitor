const Discord = require('discord.js');
const client = new Discord.Client();

client.login('NzcyODI5Mjk4MDA4MTI5NTQ5.X6AXkw.IXLDcddPu43kNiB8UY8hOCr6HJI')
client.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

 const BalkoEmbed = new Discord.MessageEmbed()
    
.setColor('##f9475d')
.setTitle('Balko Listing Found')
.setAuthor('Footsites Restock')
.setDescription(' 5 checkouts on **Eastbay**')
.addFields(
    { name: 'Price', value:'700' },
    


    

)

.setTimestamp()
.setFooter('Footsites • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



client.channels.cache.get('772833340327329812').send(BalkoEmbed)