const Discord = require('discord.js');
const user = new Discord.Client();
const client = new Discord.Client();


// Replace BOT_TOKEN with your bot account's token


var wtsChannelId='772833340327329812' //change this channel ID for each group where the wts will be posted
var wtbChannelId='773625024779124776'//change this channel ID for each group where the wtb will be posted


var userId=''
var messageId=''
var channelId=''
var serverId=''
var balkoPriceWts=''
var f3PriceWts=''
var rushPriceWts=''
var mercuryPriceWts=''
var solePriceWts=''
var wrathWTsPrice=''
var veloxWtsPrice=''
var mekWtsPrice=''
var prismWtsPrice=''
var polarisWtsPrice=''
var splashForceWtsPrice=''
var pdWtsPrice=''
var dasheWtsPrice=''
var tohruWtsPrice=''
var phantomWtsPrice=''
var adeptWtsPrice=''
var burstWtsPrice=''
var cyberWtsPrice=''
var estockWtsPrice=''
var eveWtsPrice=''
var galaxsioWtsPrice=''
var hawkWtsPrice=''
var ganeshWtsPrice=''
var hayhaWtsPrice=''
var kiloWtsPrice=''
var flareWtsPrice=''
var fleekWtsPrice=''
var nebulaWtsPrice=''
var customWtsPrice=''
var customBotWtsPrice=''

//split for wtb vars

var balkoPriceWtb=''
var f3PriceWtb=''
var rushPriceWtb=''
var mercuryPriceWtb=''
var solePriceWtb=''
var wrathWtbPrice=''
var veloxWtbPrice=''
var mekWtbPrice=''
var prismWtbPrice=''
var polarisWtbPrice=''
var splashForceWtbPrice=''
var pdWtbPrice=''
var dasheWtbPrice=''
var tohruWtbPrice=''
var phantomWtbPrice=''
var adeptWtbPrice=''
var burstWtbPrice=''
var cyberWtbPrice=''
var estockWtbPrice=''
var eveWtbPrice=''
var galaxsioWtbPrice=''
var hawkWtbPrice=''
var ganeshWtbPrice=''
var hayhaWtbPrice=''
var kiloWtbPrice=''
var flareWtbPrice=''
var fleekWtbPrice=''
var nebulaWtbPrice=''
var customWtbPrice=''
var customBotWtbPrice=''

user.login('NzcyODI5Mjk4MDA4MTI5NTQ5.X6AXkw.IXLDcddPu43kNiB8UY8hOCr6HJI')//User token
client.login('NzcyODI1NzAxNDk3MTc2MDg0.X6AUBQ.z5OXfGz2O-_xwxBR7eV9beQh1Sw')//bot token

user.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

client.on('message', (receivedMessage) => {

        
        if (receivedMessage.author == user.user) { // Prevent bot from responding to its own messages
            return
        }
        
        if (receivedMessage.content.startsWith("!")) {
            processCommand(receivedMessage)
        }

      
            
  
function processCommand(receivedMessage) {
let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

console.log("Command received: " + primaryCommand)
console.log("Arguments: " + arguments) // There may not be any arguments


 
if (receivedMessage.member.roles.some(role => role.name === 'best' )){ //This is used so only certian roles can use the bot change it for every group, use the name of the role


    
 if(primaryCommand == "commands") {

   

    commandEmbed = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('KubeIO Bot Marketplace Wts/Wtb Monitor')
    .setDescription('Commands:')
    .addField('!(Bot Name Here)wts (Pice Here)','This will set a WTS monitor for a bot make sure there are no spaces in between the bot name and wtb.')
    .addField('!(Bot Name Here)wtb (Pice Here)','This will set a WTB monitor for a bot make sure there are no spaces in between the bot name and wtb.')
    .addField('!custombotwts (Bot Name Here)','This will add a custom monitor for a bot WTS name add a space after custombotwts , you will also have to add the price in another command or this wont work.')
    .addField('!custombotwtsprice (Price Here)','This will add a custom monitor for a bot WTS name add a space after custombotwtsprice.')
    .addField('!(Bot Name Here)wts (Pice Here)','This will set a WTS monitor for a bot make sure there are no spaces in between the bot wts.')
    .addField('!(Bot Name Here)wtb (Pice Here)','This will set a WTB monitor for a bot make sure there are no spaces in between the bot wts.')
    .addField('!custombotwts (Bot Name Here)','This will add a custom monitor for a bot WTS name add a space after custombotwts , you will also have to add the price in another command or this wont work.')
    .addField('!custombotwtsprice (Price Here)','This will add a custom monitor for a bot WTS name add a space after custombotwtsprice.')
    .addField('!clearallwts','This command will clear all wts monitors')
    .addField('!clearallwtb','This command will clear all wtb monitors')
    .addField('!clearall','This command will clear all monitors')
    .addField('Replacing A Monitor','To replace a monitor simply do the setting commands above and use a different price')

    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


   

    receivedMessage.channel.send(commandEmbed)

}else if (primaryCommand == "balkowts") {
    balkoWts(arguments, receivedMessage)
    
    BalkoEmbed = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Balko WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(BalkoEmbed)
    
    

}else if(primaryCommand == "clearallwts") {
    clearAllWts(arguments, receivedMessage)
    

    clearAllWts = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('All WTS Monitors Cleared')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(clearAllWts)

}else if(primaryCommand == "f3wts") {
f3Wts(arguments, receivedMessage)

f3Sucess = new Discord.RichEmbed()

.setColor('#f9475d')
.setTitle('F3 WTS Sucessfully Added')


.setTimestamp()
.setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




receivedMessage.channel.send(f3Sucess)

}else if(primaryCommand == "rushwts") {
    rushWts(arguments, receivedMessage)
    
    rushSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Rush WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(rushSucess)
    
    
}else if(primaryCommand == "mercurywts") {
    mercuryWts(arguments, receivedMessage)
    
    mercurySucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Mercury WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(rushSucess)
    
    
}else if(primaryCommand == "solewts") {
    soleWts(arguments, receivedMessage)
    
    soleSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Sole WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(soleSucess)
    
    
}else if(primaryCommand == "wrathwts") {
    wrathWts(arguments, receivedMessage)
    
    wrathSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Wrath WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(wrathSucess)

}else if(primaryCommand == "veloxwts") {
    veloxWts(arguments, receivedMessage)
    
    veloxSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Velox WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(veloxSucess)

}else if(primaryCommand == "mekwts") {
    mekWts(arguments, receivedMessage)
    
    mekSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Mek WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(mekSucess)

}else if(primaryCommand == "prismwts") {
    prismWts(arguments, receivedMessage)
    
    prismSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Prism WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(prismSucess)
}else if(primaryCommand == "polariswts") {
    polarisWts(arguments, receivedMessage)
    
    polarisSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Polaris WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(polarisSucess)
}else if(primaryCommand == "sfwts") {
    splashForceWts(arguments, receivedMessage)
    
    sfsucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Splash Force WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(sfsucess)
}else if(primaryCommand == "pdwts") {
    pdWts(arguments, receivedMessage)
    
    pdSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Prodject Destroyer WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(pdSucess)
}else if(primaryCommand == "dashewts") {
    dasheWts(arguments, receivedMessage)
    
    DasheSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Dashe WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(DasheSucess)
}else if(primaryCommand == "tohruwts") {
    tohruWts(arguments, receivedMessage)
    
    tohruSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Tohru WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(tohruSucess)
}else if(primaryCommand == "phantomwts") {
    phantomWts(arguments, receivedMessage)
    
    phantomSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Phantom WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(phantomSucess)
}else if(primaryCommand == "adeptwts") {
    adeptWts(arguments, receivedMessage)
    
    adeptSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Adept WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(adeptSucess)
}else if(primaryCommand == "burstwts") {
    burstWts(arguments, receivedMessage)
    
    burstSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Burst WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(burstSucess)
}else if(primaryCommand == "cyberwts") {
    cyberWts(arguments, receivedMessage)
    
    cyberSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Cyber WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(cyberSucess)
}else if(primaryCommand == "estockwts") {
    estockWts(arguments, receivedMessage)
    
    estockSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Estock WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(estockSucess)
}else if(primaryCommand == "estockwts") {
    eveWts(arguments, receivedMessage)
    
    eveSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Eve WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(eveSucess)
}else if(primaryCommand == "galaxsiowts") {
    galaxioWts(arguments, receivedMessage)
    
    galaxsioSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Galaxsio WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(galaxsioSucess)
}else if(primaryCommand == "hawkmeshwts") {
    hawkWts(arguments, receivedMessage)
    
    hawkSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Hawk Mesh WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(hawkSucess)
}else if(primaryCommand == "ganeshwts") {
    ganeshWts(arguments, receivedMessage)
    
    ganeshSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Ganesh WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(ganeshSucess)
}else if(primaryCommand == "hayhawts") {
    hayhaWts(arguments, receivedMessage)
    
    hayhaSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Hayha WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(hayhaSucess)

}else if(primaryCommand == "kilowts") {
    kiloWts(arguments, receivedMessage)
    
    kilSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Kilo WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(kilSucess)

}else if(primaryCommand == "flarewts") {
    flareWts(arguments, receivedMessage)
    
    flareSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Flare WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(flareSucess)

}else if(primaryCommand == "fleekwts") {
    fleekWts(arguments, receivedMessage)
    
    fleekSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Fleek WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(fleekSucess)

}else if(primaryCommand == "nebulawts") {
    nebulaWts(arguments, receivedMessage)
    
    nebulaSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Nebula WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(nebulaSucess)

}else if(primaryCommand == "custombotwts") {
    
    customBotWtsPrice=arguments
    customAdded = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle((customBotWtsPrice)+' Sucessfully Added, Add WTS Also')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(customAdded)

}else if(primaryCommand == "customwtsprice") {







    CustomWts(arguments, receivedMessage)
    
    customWtsPrice=arguments

    customWtsEmbed = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle((customBotWtsPrice)+' '+(customWtsPrice)+' WTS Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(customWtsEmbed)



//split wtbs under here

}


//split for wtb


else if (primaryCommand == "balkowtb") {
    balkoWtb(arguments, receivedMessage)
    
    BalkoEmbed = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Balko Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(BalkoEmbed)
    
    

}else if(primaryCommand == "clearallwtb") {
    clearAllWtb(arguments, receivedMessage)
    

    clearAllWtb = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('All WTB Monitors Cleared')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(clearAllWtb)

}else if(primaryCommand == "f3wtb") {
f3Wtb(arguments, receivedMessage)

f3Sucess = new Discord.RichEmbed()

.setColor('#f9475d')
.setTitle('F3 WTB Sucessfully Added')


.setTimestamp()
.setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




receivedMessage.channel.send(f3Sucess)

}else if(primaryCommand == "rushwtb") {
    rushWtb(arguments, receivedMessage)
    
    rushSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Rush WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(rushSucess)
    
    
}else if(primaryCommand == "mercurywtb") {
    mercuryWtb(arguments, receivedMessage)
    
    mercurySucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Mercury WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(rushSucess)
    
    
}else if(primaryCommand == "solewtb") {
    soleWtb(arguments, receivedMessage)
    
    soleSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Sole WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(soleSucess)
    
    
}else if(primaryCommand == "wrathwtb") {
    wrathWtb(arguments, receivedMessage)
    
    wrathSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Wrath WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(wrathSucess)

}else if(primaryCommand == "veloxwtb") {
    veloxWtb(arguments, receivedMessage)
    
    veloxSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Velox WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(veloxSucess)

}else if(primaryCommand == "mekwtb") {
    mekWtb(arguments, receivedMessage)
    
    mekSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Mek WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(mekSucess)

}else if(primaryCommand == "prismwtb") {
    prismWtb(arguments, receivedMessage)
    
    prismSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Prism WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(prismSucess)
}else if(primaryCommand == "polariswtb") {
    polarisWtb(arguments, receivedMessage)
    
    polarisSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Polaris WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(polarisSucess)
}else if(primaryCommand == "sfwtb") {
    splashForceWtb(arguments, receivedMessage)
    
    sfsucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Splash Force WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(sfsucess)
}else if(primaryCommand == "pdwtb") {
    pdWtb(arguments, receivedMessage)
    
    pdSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Prodject Destroyer WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(pdSucess)
}else if(primaryCommand == "dashewtb") {
    dasheWtb(arguments, receivedMessage)
    
    DasheSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Dashe WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(DasheSucess)
}else if(primaryCommand == "tohruwtb") {
    tohruWtb(arguments, receivedMessage)
    
    tohruSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Tohru WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(tohruSucess)
}else if(primaryCommand == "phantomwtb") {
    phantomWtb(arguments, receivedMessage)
    
    phantomSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Phantom WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(phantomSucess)
}else if(primaryCommand == "adeptwtb") {
    adeptWtb(arguments, receivedMessage)
    
    adeptSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Adept WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(adeptSucess)
}else if(primaryCommand == "burstwtb") {
    burstWtb(arguments, receivedMessage)
    
    burstSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Burst WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(burstSucess)
}else if(primaryCommand == "cyberwtb") {
    cyberWtb(arguments, receivedMessage)
    
    cyberSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Cyber WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(cyberSucess)
}else if(primaryCommand == "estockwtb") {
    estockWtb(arguments, receivedMessage)
    
    estockSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Estock WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(estockSucess)
}else if(primaryCommand == "estockwtb") {
    eveWtb(arguments, receivedMessage)
    
    eveSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Eve WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(eveSucess)
}else if(primaryCommand == "galaxsiowtb") {
    galaxioWtb(arguments, receivedMessage)
    
    galaxsioSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Galaxsio WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(galaxsioSucess)
}else if(primaryCommand == "hawkmeshwtb") {
    hawkWtb(arguments, receivedMessage)
    
    hawkSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Hawk Mesh WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(hawkSucess)
}else if(primaryCommand == "ganeshwtb") {
    ganeshWtb(arguments, receivedMessage)
    
    ganeshSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Ganesh WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(ganeshSucess)
}else if(primaryCommand == "hayhawtb") {
    hayhaWtb(arguments, receivedMessage)
    
    hayhaSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Hayha WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(hayhaSucess)

}else if(primaryCommand == "kilowtb") {
    kiloWtb(arguments, receivedMessage)
    
    kilSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Kilo WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(kilSucess)

}else if(primaryCommand == "flarewtb") {
    flareWtb(arguments, receivedMessage)
    
    flareSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Flare WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(flareSucess)

}else if(primaryCommand == "fleekwtb") {
    fleekWtb(arguments, receivedMessage)
    
    fleekSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Fleek WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(fleekSucess)

}else if(primaryCommand == "nebulawtb") {
    nebulaWtb(arguments, receivedMessage)
    
    nebulaSucess = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Nebula WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(nebulaSucess)

}else if(primaryCommand == "custombotwtb") {
    
    customBotWtbPrice=arguments
    customAdded = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle((customBotWtbPrice)+' Sucessfully Added, Add WTB Also')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(customAdded)

}else if(primaryCommand == "customwtbprice") {


    CustomWtb(arguments, receivedMessage)
    
    customWtbPrice=arguments

    customWtbEmbed = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle((customBotWtbPrice)+' '+(customWtbPrice)+' WTB Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(customWtbEmbed)

}
else if(primaryCommand == "clearall") {


    clearAll(arguments, receivedMessage)
    

    clearAll = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('All Monitors Cleared')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(clearAll)

}


}else{
    error = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('You Cannot Use This Command')
    

    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


   

    receivedMessage.channel.send(error)

}

}

function balkoWts(arguments, receivedMessage) {
  

  balkoPriceWts=arguments
  user.on('message', message => { // When a message is created

    if(message.channel.id==('626996132278435850'||'710921872098852905'||'750080118684254328')){
        
    if(message.content.toString().toLowerCase().includes(balkoPriceWts)){

   userId= message.author.id
   messageId= message.id
   channelId=message.channel.id
    serverId= message.guild.id

  var  hyperSeller= 'https://discordapp.com/users/'+ userId
   var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'

   var hyperListing2='[Click Here]'+'('+hyperListing+')'
   var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

    BalkoEmbed = new Discord.RichEmbed()
    
        .setColor('#f9475d')
        .setTitle('Balko WTS Listing Found')
        .addField('Price','$'+balkoPriceWts+' - '+'€'+balkoPriceWts *.86 +' - '+'¥' +balkoPriceWts*6.67,true )
        .addField('Seller', message.author.tag,true )

        .addField('Link To Seller', hyperSeller2)

        .addField('Link To Listing',hyperListing2 )



        .setTimestamp()
        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
       

       client.channels.get(wtsChannelId).send(BalkoEmbed)

    }
    }
});

    
}
function f3Wts(arguments, receivedMessage) {
    

    f3PriceWts=arguments
    user.on('message', message => { // When a message is created
  if(message.channel.id==('626993314427568168'||'750079728328900718'||'710921760303742976')){
      
      if(message.content.toString().toLowerCase().includes(f3PriceWts)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
    var  hyperSeller= 'https://discordapp.com/users/'+ userId
   var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'

   var hyperListing2='[Click Here]'+'('+hyperListing+')'
   var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
      f3embed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('F3 WTS Listing Found')
          .addField('Price','$'+f3PriceWts+' - '+'€'+f3PriceWts *.86 +' - '+'¥' +f3PriceWts*6.67,true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(f3embed)
  
          
         
      }
    }
    
  });

}
function rushWts(arguments, receivedMessage) {

    rushPriceWts=arguments
    user.on('message', message => { // When a message is created
        if(message.channel.id==('715325254100320309'||'752600540252209152'||'736704514756968558')){
      
      if(message.content.toString().toLowerCase().includes(rushPriceWts)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
      rushEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Rush WTS Listing Found')
          .addField('Price','$'+rushPriceWts+' - '+'€'+rushPriceWts *.86 +' - '+'¥' +rushPriceWts*6.67,true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(rushEmbed)
  
          
         
      }
    }
        });
  
}
function mercuryWts(arguments, receivedMessage) {

    mercuryPriceWts=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts mercury '+(mercuryPriceWts)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
      mercuryEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Mercury WTS Listing Found')
          .addField('Price','$'+mercuryPriceWts+' - '+'€'+mercuryPriceWts *.86 +' - '+'¥' +mercuryPriceWts*6.67,true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(mercuryEmbed)
  
          
         
      }
     else if(message.content.toString().toLowerCase()==='wts mercury aio $'+(mercuryPriceWts)){
  
        userId= message.author.id
        messageId= message.id
        channelId=message.channel.id
         serverId= message.guild.id
         var  hyperSeller= 'https://discordapp.com/users/'+ userId
         var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
      
         var hyperListing2='[Click Here]'+'('+hyperListing+')'
         var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
     
         mercuryEmbed = new Discord.RichEmbed()
         
             .setColor('#f9475d')
             .setTitle('Mercury WTS Listing Found')
             .addField('Price','$'+mercuryPriceWts+' - '+'€'+mercuryPriceWts *.86 +' - '+'¥' +mercuryPriceWts*6.67,true )
             .addField('Seller', message.author.tag,true )
     
             .addField('Link To Seller', hyperSeller2)
   
             .addField('Link To Listing',hyperListing2 )
     
     
             .setTimestamp()
             .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
         
         
            
     
         client.channels.get(wtsChannelId).send(mercuryEmbed)
     
             
            
         }
     else if(message.content.toString().toLowerCase()==='wts mercury aio '+(mercuryPriceWts)){
  
            userId= message.author.id
            messageId= message.id
            channelId=message.channel.id
             serverId= message.guild.id
             var  hyperSeller= 'https://discordapp.com/users/'+ userId
             var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
          
             var hyperListing2='[Click Here]'+'('+hyperListing+')'
             var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
         
             mercuryEmbed = new Discord.RichEmbed()
             
                 .setColor('#f9475d')
                 .setTitle('Mercury WTS Listing Found')
                 .addField('Price','$'+mercuryPriceWts+' - '+'€'+mercuryPriceWts *.86 +' - '+'¥' +mercuryPriceWts*6.67,true )
                 .addField('Seller', message.author.tag,true )
         
                 .addField('Link To Seller', hyperSeller2)
       
                 .addField('Link To Listing',hyperListing2 )
         
         
                 .setTimestamp()
                 .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
             
             
                
         
             client.channels.get(wtsChannelId).send(mercuryEmbed)
         
                 
                
             }
          else if(message.content.toString().toLowerCase()==='wts mercury aio '+(mercuryPriceWts)+'$'){
  
                userId= message.author.id
                messageId= message.id
                channelId=message.channel.id
                 serverId= message.guild.id
                 var  hyperSeller= 'https://discordapp.com/users/'+ userId
                 var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
              
                 var hyperListing2='[Click Here]'+'('+hyperListing+')'
                 var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
             
                 mercuryEmbed = new Discord.RichEmbed()
                 
                     .setColor('#f9475d')
                     .setTitle('Mercury WTS Listing Found')
                     .addField('Price','$'+mercuryPriceWts+' - '+'€'+mercuryPriceWts *.86 +' - '+'¥' +mercuryPriceWts*6.67,true )
                     .addField('Seller', message.author.tag,true )
             
                     .addField('Link To Seller', hyperSeller2)
           
                     .addField('Link To Listing',hyperListing2 )
             
             
                     .setTimestamp()
                     .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                 
                 
                    
             
                 client.channels.get(wtsChannelId).send(mercuryEmbed)
             
                     
                    
                 }

                else if(message.content.toString().toLowerCase()==='wts mercury '+(mercuryPriceWts/1000)+'k'){
  
                    userId= message.author.id
                    messageId= message.id
                    channelId=message.channel.id
                     serverId= message.guild.id
                     var  hyperSeller= 'https://discordapp.com/users/'+ userId
                     var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                  
                     var hyperListing2='[Click Here]'+'('+hyperListing+')'
                     var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                 
                     mercuryEmbed = new Discord.RichEmbed()
                     
                         .setColor('#f9475d')
                         .setTitle('Mercury WTS Listing Found')
                         .addField('Price','$'+mercuryPriceWts+' - '+'€'+mercuryPriceWts *.86 +' - '+'¥' +mercuryPriceWts*6.67,true )
                         .addField('Seller', message.author.tag,true )
                 
                         .addField('Link To Seller', hyperSeller2)
               
                         .addField('Link To Listing',hyperListing2 )
                 
                 
                         .setTimestamp()
                         .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                     
                     
                        
                 
                     client.channels.get(wtsChannelId).send(mercuryEmbed)
                 
                         
                        
                     }

                     else if(message.content.toString().toLowerCase()==='wts mercury '+(mercuryPriceWts/1000)+'k$'){
  
                        userId= message.author.id
                        messageId= message.id
                        channelId=message.channel.id
                         serverId= message.guild.id
                         var  hyperSeller= 'https://discordapp.com/users/'+ userId
                         var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                      
                         var hyperListing2='[Click Here]'+'('+hyperListing+')'
                         var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                     
                         mercuryEmbed = new Discord.RichEmbed()
                         
                             .setColor('#f9475d')
                             .setTitle('Mercury WTS Listing Found')
                             .addField('Price','$'+mercuryPriceWts+' - '+'€'+mercuryPriceWts *.86 +' - '+'¥' +mercuryPriceWts*6.67,true )
                             .addField('Seller', message.author.tag,true )
                     
                             .addField('Link To Seller', hyperSeller2)
                   
                             .addField('Link To Listing',hyperListing2 )
                     
                     
                             .setTimestamp()
                             .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                         
                         
                            
                     
                         client.channels.get(wtsChannelId).send(mercuryEmbed)
                     
                             
                            
                         }
                         else if(message.content.toString().toLowerCase()==='wts mercury $'+(mercuryPriceWts/1000)+'k'){
  
                            userId= message.author.id
                            messageId= message.id
                            channelId=message.channel.id
                             serverId= message.guild.id
                             var  hyperSeller= 'https://discordapp.com/users/'+ userId
                             var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                          
                             var hyperListing2='[Click Here]'+'('+hyperListing+')'
                             var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                         
                             mercuryEmbed = new Discord.RichEmbed()
                             
                                 .setColor('#f9475d')
                                 .setTitle('Mercury WTS Listing Found')
                                 .addField('Price','$'+mercuryPriceWts+' - '+'€'+mercuryPriceWts *.86 +' - '+'¥' +mercuryPriceWts*6.67,true )
                                 .addField('Seller', message.author.tag,true )
                         
                                 .addField('Link To Seller', hyperSeller2)
                       
                                 .addField('Link To Listing',hyperListing2 )
                         
                         
                                 .setTimestamp()
                                 .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                             
                             
                                
                         
                             client.channels.get(wtsChannelId).send(mercuryEmbed)
                         
                                 
                                
                             }
                 
             
     
  
    
  });
  
}
function soleWts(arguments, receivedMessage) {

    solePriceWts=arguments
    user.on('message', message => { // When a message is created
        if(message.channel.id==('626997679377088562'||'751572267905056859'||'700486817496957000')){
      
      if(message.content.toString().toLowerCase().includes(solePriceWts)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
      soleEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Sole WTS Listing Found')
          .addField('Price','$'+solePriceWts+' - '+'€'+solePriceWts *.86 +' - '+'¥' +solePriceWts*6.67,true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

        .addField('Link To Listing',hyperListing2 )

          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(soleEmbed)
  
          
      }
      }
   
  });
  
}
function wrathWts(arguments, receivedMessage) {

    wrathWTsPrice=arguments
    user.on('message', message => { // When a message is created
  
        if(message.channel.id==('626997441392017428'||'743950855069368461'||'710921120542359582')){


      if(message.content.toString().toLowerCase().includes(wrathWTsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
      wrathEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Wrath WTS Listing Found')
          .addField('Price','$'+veloxWtsPrice+' - '+'€'+veloxWtsPrice *.86 +' - '+'¥' +veloxWtsPrice*6.67,true )
          .addField('Seller', message.author.tag,true )
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(wrathEmbed)
  
          
         
      }
    }
  });
  
}
function veloxWts(arguments, receivedMessage) {

    veloxWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
        if(message.channel.id==('634518877748854814'||'750079237591007243'||'710921145146408972')){
      if(message.content.toString().toLowerCase().includes(veloxWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
      veloxEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Velox WTS Listing Found')
          .addField('Price','$'+veloxWtsPrice+' - '+'€'+veloxWtsPrice *.86 +' - '+'¥' +veloxWtsPrice*6.67,true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(veloxEmbed)
  
          
         
      }
    }
      
    
  });
  
}
function mekWts(arguments, receivedMessage) {

    mekWtsPrice=arguments
    user.on('message', message => { // When a message is created


        if(message.channel.id==('627003393461977108'||'750079650264252508'||'710921442967158872')){
      
      if(message.content.toString().toLowerCase().includes(mekWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
      mekEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Mek WTS Listing Found')
          .addField('Price','$'+mekWtsPrice+' - '+'€'+mekWtsPrice *.86 +' - '+'¥' +mekWtsPrice*6.67,true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

        .addField('Link To Listing',hyperListing2 )

  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(mekEmbed)
  
          
         
      }

    
    }
    
  });
  
}
function prismWts(arguments, receivedMessage) {

    prismWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
        if(message.channel.id==('626997179378171925'||'750079394831401040'||'710921405935517697')){

      if(message.content.toString().toLowerCase().includes(prismWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
      prismEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Prism WTS Listing Found')
          .addField('Price','$'+prismWtsPrice+' - '+'€'+prismWtsPrice *.86 +' - '+'¥' +prismWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(prismEmbed)
  
          
         
      }

        }
    
  });
  
}
function polarisWts(arguments, receivedMessage) {

    polarisWtsPrice=arguments
    user.on('message', message => { // When a message is created
        if(message.channel.id==('713875826319294544'||'750079394831401040'||'710921405935517697')){
      
      if(message.content.toString().toLowerCase().includes(polarisWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
      poalrisEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Polaris WTS Listing Found')
          .addField('Price','$'+polarisWtsPrice+' - '+'€'+polarisWtsPrice *.86 +' - '+'¥' +polarisWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(poalrisEmbed)
  
          
         
      }
   
    }          
      
  
    
  });
  
}
function splashForceWts(arguments, receivedMessage) {

    splashForceWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts splash force '+(splashForceWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
      sfEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Splash Force WTS Listing Found')
          .addField('Price','$'+splashForceWtsPrice+' - '+'€'+splashForceWtsPrice *.86 +' - '+'¥' +splashForceWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

        .addField('Link To Listing',hyperListing2 )

  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(sfEmbed)
  
          
         
      }

      else if(message.content.toString().toLowerCase()==='wts splash force/sf '+(splashForceWtsPrice)){
  
        userId= message.author.id
        messageId= message.id
        channelId=message.channel.id
         serverId= message.guild.id
     
         var  hyperSeller= 'https://discordapp.com/users/'+ userId
         var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
      
         var hyperListing2='[Click Here]'+'('+hyperListing+')'
         var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
         sfEmbed = new Discord.RichEmbed()
         
             .setColor('#f9475d')
             .setTitle('Splash Force WTS Listing Found')
             .addField('Price','$'+splashForceWtsPrice+' - '+'€'+splashForceWtsPrice *.86 +' - '+'¥' +splashForceWtsPrice*6.67, true )
             .addField('Seller', message.author.tag,true )
     
             .addField('Link To Seller', hyperSeller2)
   
           .addField('Link To Listing',hyperListing2 )
   
     
     
             .setTimestamp()
             .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
         
         
            
     
         client.channels.get(wtsChannelId).send(sfEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts splash force/sf $'+(splashForceWtsPrice)){
  
            userId= message.author.id
            messageId= message.id
            channelId=message.channel.id
             serverId= message.guild.id
         
             var  hyperSeller= 'https://discordapp.com/users/'+ userId
             var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
          
             var hyperListing2='[Click Here]'+'('+hyperListing+')'
             var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
             sfEmbed = new Discord.RichEmbed()
             
                 .setColor('#f9475d')
                 .setTitle('Splash Force WTS Listing Found')
                 .addField('Price','$'+splashForceWtsPrice+' - '+'€'+splashForceWtsPrice *.86 +' - '+'¥' +splashForceWtsPrice*6.67, true )
                 .addField('Seller', message.author.tag,true )
         
                 .addField('Link To Seller', hyperSeller2)
       
               .addField('Link To Listing',hyperListing2 )
       
         
         
                 .setTimestamp()
                 .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
             
             
                
         
             client.channels.get(wtsChannelId).send(sfEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts splash force $'+(splashForceWtsPrice)){
  
                userId= message.author.id
                messageId= message.id
                channelId=message.channel.id
                 serverId= message.guild.id
             
                 var  hyperSeller= 'https://discordapp.com/users/'+ userId
                 var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
              
                 var hyperListing2='[Click Here]'+'('+hyperListing+')'
                 var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                 sfEmbed = new Discord.RichEmbed()
                 
                     .setColor('#f9475d')
                     .setTitle('Splash Force WTS Listing Found')
                     .addField('Price','$'+splashForceWtsPrice+' - '+'€'+splashForceWtsPrice *.86 +' - '+'¥' +splashForceWtsPrice*6.67, true )
                     .addField('Seller', message.author.tag,true )
             
                     .addField('Link To Seller', hyperSeller2)
           
                   .addField('Link To Listing',hyperListing2 )
           
             
             
                     .setTimestamp()
                     .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                 
                 
                    
             
                 client.channels.get(wtsChannelId).send(sfEmbed)
             
                     
                    
                 }
  
    
  });
  
}
function pdWts(arguments, receivedMessage) {

    pdWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
        if(message.channel.id==('626996548009721886'||'750079568433512538'||'710921389552566303')){

      if(message.content.toString().toLowerCase().includes(pdWtsPrice)) {
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
      pdEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Project Destroyer WTS Listing Found')
          .addField('Price','$'+pdWtsPrice+' - '+'€'+pdWtsPrice *.86 +' - '+'¥' +pdWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(pdEmbed)
  
          
         
      } 
        }
  });
  
}
function dasheWts(arguments, receivedMessage) {

    dasheWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      

            if(message.channel.id==('710921806243954770')){
      

                if(message.content.toString().toLowerCase().includes(dasheWtsPrice)){


         userId= message.author.id
         messageId= message.id
         channelId=message.channel.id
          serverId= message.guild.id
      
          var  hyperSeller= 'https://discordapp.com/users/'+ userId
          var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
       
          var hyperListing2='[Click Here]'+'('+hyperListing+')'
          var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
          dasheEmbed = new Discord.RichEmbed()
          
              .setColor('#f9475d')
              .setTitle('Dashe WTS Listing Found')
              .addField('Price','$'+dasheWtsPrice+' - '+'€'+dasheWtsPrice *.86 +' - '+'¥' +dasheWtsPrice*6.67, true )
              .addField('Seller', message.author.tag,true )
      
              .addField('Link To Seller', hyperSeller2)
    
              .addField('Link To Listing',hyperListing2 )
      
      
      
              .setTimestamp()
              .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
          
          
             
      
             client.channels.get(wtsChannelId).send(dasheEmbed)
      
              
             
          }

        }


      else if(message.content.toString().toLowerCase()==='wts dashe renewal $'+(dasheWtsPrice)){
  
        userId= message.author.id
        messageId= message.id
        channelId=message.channel.id
         serverId= message.guild.id
     
         var  hyperSeller= 'https://discordapp.com/users/'+ userId
         var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
      
         var hyperListing2='[Click Here]'+'('+hyperListing+')'
         var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
         dasheEmbed = new Discord.RichEmbed()
         
             .setColor('#f9475d')
             .setTitle('Dashe WTS Listing Found')
             .addField('Price','$'+dasheWtsPrice+' - '+'€'+dasheWtsPrice *.86 +' - '+'¥' +dasheWtsPrice*6.67, true )
             .addField('Seller', message.author.tag,true )
     
             .addField('Link To Seller', hyperSeller2)
   
             .addField('Link To Listing',hyperListing2 )
     
     
     
             .setTimestamp()
             .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
         
         
            
     
         client.channels.get(wtsChannelId).send(dasheEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts dashe lt $'+(dasheWtsPrice)){
  
            userId= message.author.id
            messageId= message.id
            channelId=message.channel.id
             serverId= message.guild.id
         
             var  hyperSeller= 'https://discordapp.com/users/'+ userId
             var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
          
             var hyperListing2='[Click Here]'+'('+hyperListing+')'
             var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
             dasheEmbed = new Discord.RichEmbed()
             
                 .setColor('#f9475d')
                 .setTitle('Dashe WTS Listing Found')
                 .addField('Price','$'+dasheWtsPrice+' - '+'€'+dasheWtsPrice *.86 +' - '+'¥' +dasheWtsPrice*6.67, true )
                 .addField('Seller', message.author.tag,true )
         
                 .addField('Link To Seller', hyperSeller2)
       
                 .addField('Link To Listing',hyperListing2 )
         
         
         
                 .setTimestamp()
                 .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
             
             
                
         
             client.channels.get(wtsChannelId).send(dasheEmbed)
         
                 
                
             }
      else if(message.content.toString().toLowerCase()==='wts dashe $'+(dasheWtsPrice)){
  
            userId= message.author.id
            messageId= message.id
            channelId=message.channel.id
             serverId= message.guild.id
         
             var  hyperSeller= 'https://discordapp.com/users/'+ userId
             var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
          
             var hyperListing2='[Click Here]'+'('+hyperListing+')'
             var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
             dasheEmbed = new Discord.RichEmbed()
             
                 .setColor('#f9475d')
                 .setTitle('Dashe WTS Listing Found')
                 .addField('Price','$'+dasheWtsPrice+' - '+'€'+dasheWtsPrice *.86 +' - '+'¥' +dasheWtsPrice*6.67, true )
                 .addField('Seller', message.author.tag,true )
         
                 .addField('Link To Seller', hyperSeller2)
       
                 .addField('Link To Listing',hyperListing2 )
         
         
         
                 .setTimestamp()
                 .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
             
             
                
         
             client.channels.get(wtsChannelId).send(dasheEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts dashe lifetime $'+(dasheWtsPrice)){
  
                userId= message.author.id
                messageId= message.id
                channelId=message.channel.id
                 serverId= message.guild.id
             
                 var  hyperSeller= 'https://discordapp.com/users/'+ userId
                 var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
              
                 var hyperListing2='[Click Here]'+'('+hyperListing+')'
                 var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                 dasheEmbed = new Discord.RichEmbed()
                 
                     .setColor('#f9475d')
                     .setTitle('Dashe WTS Listing Found')
                     .addField('Price','$'+dasheWtsPrice+' - '+'€'+dasheWtsPrice *.86 +' - '+'¥' +dasheWtsPrice*6.67, true )
                     .addField('Seller', message.author.tag,true )
             
                     .addField('Link To Seller', hyperSeller2)
           
                     .addField('Link To Listing',hyperListing2 )
             
             
             
                     .setTimestamp()
                     .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                 
                 
                    
             
                 client.channels.get(wtsChannelId).send(dasheEmbed)
             
                     
                    
                 }
                 else if(message.content.toString().toLowerCase()===':dashe:wts dashe lifetime $'+(dasheWtsPrice)){
  
                    userId= message.author.id
                    messageId= message.id
                    channelId=message.channel.id
                     serverId= message.guild.id
                 
                     var  hyperSeller= 'https://discordapp.com/users/'+ userId
                     var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                  
                     var hyperListing2='[Click Here]'+'('+hyperListing+')'
                     var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                     dasheEmbed = new Discord.RichEmbed()
                     
                         .setColor('#f9475d')
                         .setTitle('Dashe WTS Listing Found')
                         .addField('Price','$'+dasheWtsPrice+' - '+'€'+dasheWtsPrice *.86 +' - '+'¥' +dasheWtsPrice*6.67, true )
                         .addField('Seller', message.author.tag,true )
                 
                         .addField('Link To Seller', hyperSeller2)
               
                         .addField('Link To Listing',hyperListing2 )
                 
                 
                 
                         .setTimestamp()
                         .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                     
                     
                        
                 
                     client.channels.get(wtsChannelId).send(dasheEmbed)
                 
                         
                        
                     }
    
  });
  
}
function tohruWts(arguments, receivedMessage) {

    tohruWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
       if(message.channel.id==('734522747580841985'||'750079269912444978'||'733784476546498651')){

      if(message.content.toString().toLowerCase().includes(tohruWtsPrice)){
  
       

     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      tohruEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Tohru WTS Listing Found')
          .addField('Price','$'+tohruWtsPrice+' - '+'€'+tohruWtsPrice *.86 +' - '+'¥' +tohruWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(tohruEmbed)
  
        }
         
      }

  });
  
}
function phantomWts(arguments, receivedMessage) {

    phantomWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
        if(message.channel.id==('627359696335929365'||'750079496211922944'||'710921653739323402')){

      if(message.content.toString().toLowerCase().includes(phantomWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      phatnomEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Phantom WTS Listing Found')
          .addField('Price','$'+phantomWtsPrice+' - '+'€'+phantomWtsPrice *.86 +' - '+'¥' +phantomWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(PhantomEmbed)
  
          
      }
      }
    
  });
  
}
function adeptWts(arguments, receivedMessage) {

    adeptWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
        if(message.channel.id==('627359696335929365'||'750079939973480488'||'710921903249948802')){


      if(message.content.toString().toLowerCase().includes(adeptWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      adeptEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Adept WTS Listing Found')
          .addField('Price','$'+adeptWtsPrice+' - '+'€'+adeptWtsPrice *.86 +' - '+'¥' +adeptWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(adeptEmbed)
  
          
         
      }
    }
    
});
  
}
function burstWts(arguments, receivedMessage) {

    burstWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
        if(message.channel.id==('762401756437020703')){
      
      if(message.content.toString().toLowerCase().includes(burstWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      burstEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Burst WTS Listing Found')
          .addField('Price','$'+burstWtsPrice+' - '+'€'+burstWtsPrice *.86 +' - '+'¥' +burstWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(burstEmbed)
  
          
         
      }
    }
  });
  
}
function cyberWts(arguments, receivedMessage) {

    cyberWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
        if(message.channel.id==('626930445774487563'||'750080029278339203'||'710921830558335087')){
      if(message.content.toString().toLowerCase().includes(cyberWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      cyberEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Cyber WTS Listing Found')
          .addField('Price','$'+cyberWtsPrice+' - '+'€'+cyberWtsPrice *.86 +' - '+'¥' +cyberWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(cyberEmbed)
  
          
         
      }

    }
  });
  
}
function estockWts(arguments, receivedMessage) {

    estockWtsPrice=arguments
    user.on('message', message => { // When a message is created
        if(message.channel.id==('761090509858406400')){
      
      if(message.content.toString().toLowerCase().includes(estockWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      estockEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Estock WTS Listing Found')
          .addField('Price','$'+estockWtsPrice+' - '+'€'+estockWtsPrice *.86 +' - '+'¥' +estockWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(estockEmbed)
  
          
         
      }
   
    }
    
  });
  
}
function eveWts(arguments, receivedMessage) {

    estockWtsPrice=arguments
    user.on('message', message => { // When a message is created
        if(message.channel.id==('626997994927161377'||'750079789196509294'||'710921786321141911')){
      
      if(message.content.toString().toLowerCase().includes(eveWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      eveEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Eve WTS Listing Found')
          .addField('Price','$'+eveWtsPrice+' - '+'€'+eveWtsPrice *.86 +' - '+'¥' +eveWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(eveEmbed)
  
          
         
      }

        }
  });
  
}
function galaxioWts(arguments, receivedMessage) {

    galaxsioWtsPrice=arguments
    user.on('message', message => { // When a message is created
        if(message.channel.id==('692817365561376788')){
      
      if(message.content.toString().toLowerCase().includes(galaxsioWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      glaxsioEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Galaxsio WTS Listing Found')
          .addField('Price','$'+galaxsioWtsPrice+' - '+'€'+galaxsioWtsPrice *.86 +' - '+'¥' +galaxsioWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(glaxsioEmbed)
  
          
         
      }
    }
  });
  
}
function hawkWts(arguments, receivedMessage) {

    hawkWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
        if(message.channel.id==('626998862145650698'||'710921635976446002')){
      
      if(message.content.toString().toLowerCase().includes(hawkWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      hawkEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Hawk Mesh WTS Listing Found')
          .addField('Price','$'+hawkWtsPrice+' - '+'€'+hawkWtsPrice *.86 +' - '+'¥' +hawkWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(hawkEmbed)
  
      }
     
    }
  });
  
}
function ganeshWts(arguments, receivedMessage) {

    ganeshWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
        if(message.channel.id==('626998427040874496'||'764754241113161728'||'710921675998494770')){

      if(message.content.toString().toLowerCase().includes(ganeshWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      ganeshEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Ganesh WTS Listing Found')
          .addField('Price','$'+ganeshWtsPrice+' - '+'€'+ganeshWtsPrice *.86 +' - '+'¥' +ganeshWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(ganeshEmbed)
  
          
         
      }
     
        }
  });
  
}
function hayhaWts(arguments, receivedMessage) {

    hayhaWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
        if(message.channel.id==('699454441354428516'||'752600588537167955'||'710921620025376769')){

      if(message.content.toString().toLowerCase().includes(hayhaWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      hayhaEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Hayha WTS Listing Found')
          .addField('Price','$'+hayhaWtsPrice+' - '+'€'+hayhaWtsPrice *.86 +' - '+'¥' +hayhaWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(hayhaEmbed)
  
          
         
      }
    }
  });
  
}
function kiloWts(arguments, receivedMessage) { 

    kiloWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
        if(message.channel.id==('734523471542878349'||'733784066284978307')){

      if(message.content.toString().toLowerCase().includes(kiloWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      kiloEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Kilo WTS Listing Found')
          .addField('Price','$'+kiloWtsPrice+' - '+'€'+kiloWtsPrice *.86 +' - '+'¥' +kiloWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(kiloEmbed)
  
          
         
      }
        }
  });
  
}
function flareWts(arguments, receivedMessage) {

    flareWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
        if(message.channel.id==('692632524609945660'||'710921725759455253')){


      if(message.content.toString().toLowerCase().includes(flareWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      FlareEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Flare WTS Listing Found')
          .addField('Price','$'+flareWtsPrice+' - '+'€'+flareWtsPrice *.86 +' - '+'¥' +flareWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
            client.channels.get(wtsChannelId).send(FlareEmbed)
  
          
         
      }
    }
  });
  
}
function fleekWts(arguments, receivedMessage) {

    fleekWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
        if(message.channel.id==('626999432881242152'||'759444386257305620'||'700487250483478560')){


      if(message.content.toString().toLowerCase().includes(fleekWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      fleekEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Fleek WTS Listing Found')
          .addField('Price','$'+fleekWtsPrice+' - '+'€'+fleekWtsPrice *.86 +' - '+'¥' +fleekWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(fleekEmbed)
  
          
         
      }
   
    }
    
  });
  
}
function nebulaWts (arguments, receivedMessage) {

    nebulaWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts nebula '+(nebulaWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      nebulaEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Nebula WTS Listing Found')
          .addField('Price','$'+nebulaWtsPrice+' - '+'€'+nebulaWtsPrice *.86 +' - '+'¥' +nebulaWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtsChannelId).send(nebulaEmbed)
  
          
         
      }
      else if(message.content.toString().toLowerCase()==='wts nebula $'+(nebulaWtsPrice)){
  
        userId= message.author.id
        messageId= message.id
        channelId=message.channel.id
         serverId= message.guild.id
     
         var hyperSeller= 'https://discordapp.com/users/'+ userId
         var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
      
         var hyperListing2='[Click Here]'+'('+hyperListing+')'
         var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
   
         nebulaEmbed = new Discord.RichEmbed()
         
             .setColor('#f9475d')
             .setTitle('Nebula WTS Listing Found')
             .addField('Price','$'+nebulaWtsPrice+' - '+'€'+nebulaWtsPrice *.86 +' - '+'¥' +nebulaWtsPrice*6.67, true )
             .addField('Seller', message.author.tag,true )
     
             .addField('Link To Seller', hyperSeller2)
   
             .addField('Link To Listing',hyperListing2 )
     
     
     
             .setTimestamp()
             .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
         
         
            
     
            client.channels.get(wtsChannelId).send(nebulaEmbed)
     
             
            
         }
        else if(message.content.toString().toLowerCase()==='wts nebula '+(nebulaWtsPrice/1000)+'k'){
  
            userId= message.author.id
            messageId= message.id
            channelId=message.channel.id
             serverId= message.guild.id
         
             var hyperSeller= 'https://discordapp.com/users/'+ userId
             var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
          
             var hyperListing2='[Click Here]'+'('+hyperListing+')'
             var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
       
             nebulaEmbed = new Discord.RichEmbed()
             
                 .setColor('#f9475d')
                 .setTitle('Nebula WTS Listing Found')
                 .addField('Price','$'+nebulaWtsPrice+' - '+'€'+nebulaWtsPrice *.86 +' - '+'¥' +nebulaWtsPrice*6.67, true )
                 .addField('Seller', message.author.tag,true )
         
                 .addField('Link To Seller', hyperSeller2)
       
                 .addField('Link To Listing',hyperListing2 )
         
         
         
                 .setTimestamp()
                 .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
             
             
                
         
                client.channels.get(wtsChannelId).send(nebulaEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts nebula $'+(nebulaWtsPrice/1000)+'k'){
  
                userId= message.author.id
                messageId= message.id
                channelId=message.channel.id
                 serverId= message.guild.id
             
                 var hyperSeller= 'https://discordapp.com/users/'+ userId
                 var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
              
                 var hyperListing2='[Click Here]'+'('+hyperListing+')'
                 var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
           
                 nebulaEmbed = new Discord.RichEmbed()
                 
                     .setColor('#f9475d')
                     .setTitle('Nebula WTS Listing Found')
                     .addField('Price','$'+nebulaWtsPrice+' - '+'€'+nebulaWtsPrice *.86 +' - '+'¥' +nebulaWtsPrice*6.67, true )
                     .addField('Seller', message.author.tag,true )
             
                     .addField('Link To Seller', hyperSeller2)
           
                     .addField('Link To Listing',hyperListing2 )
             
             
             
                     .setTimestamp()
                     .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                 
                 
                    
             
                    client.channels.get(wtsChannelId).send(nebulaEmbed)
             
                     
                    
                 }
  
    
  });
  
}
function CustomWts (arguments, receivedMessage) {


    customWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts '+(customBotWtsPrice)+' '+(customWtsPrice)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
      var hyperSeller= 'https://discordapp.com/users/'+ userId
      var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
   
      var hyperListing2='[Click Here]'+'('+hyperListing+')'
      var hyperSeller2='[Click Here]'+'('+hyperSeller+')'

      customEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle((customBotWtsPrice)+' WTS Listing Found')
          .addField('Price','$'+customWtsPrice+' - '+'€'+customWtsPrice *.86 +' - '+'¥' +customWtsPrice*6.67, true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)

          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         user.channels.get(wtsChannelId).send(customEmbed)
  
          
         
      }
     else if(message.content.toString().toLowerCase()==='wts '+(customBotWtsPrice)+' $'+(customWtsPrice)){
  
        userId= message.author.id
        messageId= message.id
        channelId=message.channel.id
         serverId= message.guild.id
     
         var hyperSeller= 'https://discordapp.com/users/'+ userId
         var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
      
         var hyperListing2='[Click Here]'+'('+hyperListing+')'
         var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
   
         customEmbed = new Discord.RichEmbed()
         
             .setColor('#f9475d')
             .setTitle((customBotWtsPrice)+' WTS Listing Found')
             .addField('Price','$'+customWtsPrice+' - '+'€'+customWtsPrice *.86 +' - '+'¥' +customWtsPrice*6.67, true )
             .addField('Seller', message.author.tag,true )
     
             .addField('Link To Seller', hyperSeller2)
   
             .addField('Link To Listing',hyperListing2 )
     
     
     
             .setTimestamp()
             .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
         
         
            
     
            user.channels.get(wtsChannelId).send(customEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts '+(customBotWtsPrice)+' $'+(customWtsPrice/1000)+'k'){
  
            userId= message.author.id
            messageId= message.id
            channelId=message.channel.id
             serverId= message.guild.id
         
             var hyperSeller= 'https://discordapp.com/users/'+ userId
             var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
          
             var hyperListing2='[Click Here]'+'('+hyperListing+')'
             var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
       
             customEmbed = new Discord.RichEmbed()
             
                 .setColor('#f9475d')
                 .setTitle((customBotWtsPrice)+' WTS Listing Found')
                 .addField('Price','$'+customWtsPrice+' - '+'€'+customWtsPrice *.86 +' - '+'¥' +customWtsPrice*6.67, true )
                 .addField('Seller', message.author.tag,true )
         
                 .addField('Link To Seller', hyperSeller2)
       
                 .addField('Link To Listing',hyperListing2 )
         
         
         
                 .setTimestamp()
                 .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
             
             
                
         
                user.channels.get(wtsChannelId).send(customEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts '+(customBotWtsPrice)+' '+(customWtsPrice/1000)+'k'){
  
                userId= message.author.id
                messageId= message.id
                channelId=message.channel.id
                 serverId= message.guild.id
             
                 var hyperSeller= 'https://discordapp.com/users/'+ userId
                 var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
              
                 var hyperListing2='[Click Here]'+'('+hyperListing+')'
                 var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
           
                 customEmbed = new Discord.RichEmbed()
                 
                     .setColor('#f9475d')
                     .setTitle((customBotWtsPrice)+' WTS Listing Found')
                     .addField('Price','$'+customWtsPrice+' - '+'€'+customWtsPrice *.86 +' - '+'¥' +customWtsPrice*6.67, true )
                     .addField('Seller', message.author.tag,true )
             
                     .addField('Link To Seller', hyperSeller2)
           
                     .addField('Link To Listing',hyperListing2 )
             
             
             
                     .setTimestamp()
                     .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                 
                 
                    
             
                    user.channels.get(wtsChannelId).send(customEmbed)
             
                     
                    
                 }
     
    
  });
  
}
function  clearAllWts(arguments, receivedMessage) {

   
 f3PriceWts=''
 rushPriceWts=''
 mercuryPriceWts=''
 solePriceWts=''
 wrathWTsPrice=''
 veloxWtsPrice=''
 mekWtsPrice=''
 prismWtsPrice=''
 polarisWtsPrice=''
 splashForceWtsPrice=''
 pdWtsPrice=''
 dasheWtsPrice=''
 tohruWtsPrice=''
 phantomWtsPrice=''
 adeptWtsPrice=''
 burstWtsPrice=''
 cyberWtsPrice=''
 estockWtsPrice=''
 eveWtsPrice=''
 galaxsioWtsPrice=''
 hawkWtsPrice=''
 ganeshWtsPrice=''
 hayhaWtsPrice=''
 kiloWtsPrice=''
 flareWtsPrice=''
 fleekWtsPrice=''
 nebulaWtsPrice=''
 customWtsPrice=''
 customBotWtsPrice=''
  
  
}

//split wtbs under here

function balkoWtb(arguments, receivedMessage) {

    balkoPriceWtb=arguments
    user.on('message', message => { // When a message is created
  
        if(message.channel.id==('626996366433976330'||'750080130038235218'||'710921862888161440')){


      if(message.content.toString().toLowerCase().includes(balkoPriceWtb)){
  
     userId= message.author.id
     messageId= message.id
     channelId=message.channel.id
      serverId= message.guild.id
  
    var  hyperSeller= 'https://discordapp.com/users/'+ userId
     var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
  
     var hyperListing2='[Click Here]'+'('+hyperListing+')'
     var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
      BalkoEmbed = new Discord.RichEmbed()
      
          .setColor('#f9475d')
          .setTitle('Balko WTB Listing Found')
          .addField('Price','$'+balkoPriceWtb+' - '+'€'+balkoPriceWtb *.86 +' - '+'¥' +balkoPriceWtb*6.67,true )
          .addField('Seller', message.author.tag,true )
  
          .addField('Link To Seller', hyperSeller2)
  
          .addField('Link To Listing',hyperListing2 )
  
  
  
          .setTimestamp()
          .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
      
      
         
  
         client.channels.get(wtbChannelId).send(BalkoEmbed)
  
          
         
      }
    }
  });
  }
  function f3Wtb(arguments, receivedMessage) {
  
      f3PriceWtb=arguments
      user.on('message', message => { // When a message is created
    
        if(message.channel.id==('626994422105636874'||'750079739414183946'||'710921740297044008')){

        if(message.content.toString().toLowerCase().includes(f3PriceWtb)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
      var  hyperSeller= 'https://discordapp.com/users/'+ userId
     var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
  
     var hyperListing2='[Click Here]'+'('+hyperListing+')'
     var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
    
        f3embed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('F3 WTB Listing Found')
            .addField('Price','$'+f3PriceWtb+' - '+'€'+f3PriceWtb *.86 +' - '+'¥' +f3PriceWtb*6.67,true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(f3embed)
    
            
           
        }
    }
      
    });
    
  }
  function rushWtb(arguments, receivedMessage) {
  
      rushPriceWtb=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.channel.id==('715325456924147845'||'752600558270939256'||'736704547434790954')){

        if(message.content.toString().toLowerCase().includes(rushPriceWtb)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
    
        rushEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Rush WTB Listing Found')
            .addField('Price','$'+rushPriceWtb+' - '+'€'+rushPriceWtb *.86 +' - '+'¥' +rushPriceWtb*6.67,true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(rushEmbed)
    
            
           
        }
    }
      
    });
    
  }
  function mercuryWtb(arguments, receivedMessage) {
  
      mercuryPriceWtb=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb mercury '+(mercuryPriceWtb)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
    
        mercuryEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Mercury WTB Listing Found')
            .addField('Price','$'+mercuryPriceWtb+' - '+'€'+mercuryPriceWtb *.86 +' - '+'¥' +mercuryPriceWtb*6.67,true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(mercuryEmbed)
    
            
           
        }
       else if(message.content.toString().toLowerCase()==='wtb mercury aio $'+(mercuryPriceWtb)){
    
          userId= message.author.id
          messageId= message.id
          channelId=message.channel.id
           serverId= message.guild.id
           var  hyperSeller= 'https://discordapp.com/users/'+ userId
           var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
        
           var hyperListing2='[Click Here]'+'('+hyperListing+')'
           var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
       
           mercuryEmbed = new Discord.RichEmbed()
           
               .setColor('#f9475d')
               .setTitle('Mercury WTB Listing Found')
               .addField('Price','$'+mercuryPriceWtb+' - '+'€'+mercuryPriceWtb *.86 +' - '+'¥' +mercuryPriceWtb*6.67,true )
               .addField('Seller', message.author.tag,true )
       
               .addField('Link To Seller', hyperSeller2)
     
               .addField('Link To Listing',hyperListing2 )
       
       
               .setTimestamp()
               .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
           
           
              
       
           client.channels.get(wtbChannelId).send(mercuryEmbed)
       
               
              
           }
       else if(message.content.toString().toLowerCase()==='wtb mercury aio '+(mercuryPriceWtb)){
    
              userId= message.author.id
              messageId= message.id
              channelId=message.channel.id
               serverId= message.guild.id
               var  hyperSeller= 'https://discordapp.com/users/'+ userId
               var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
            
               var hyperListing2='[Click Here]'+'('+hyperListing+')'
               var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
           
               mercuryEmbed = new Discord.RichEmbed()
               
                   .setColor('#f9475d')
                   .setTitle('Mercury WTB Listing Found')
                   .addField('Price','$'+mercuryPriceWtb+' - '+'€'+mercuryPriceWtb *.86 +' - '+'¥' +mercuryPriceWtb*6.67,true )
                   .addField('Seller', message.author.tag,true )
           
                   .addField('Link To Seller', hyperSeller2)
         
                   .addField('Link To Listing',hyperListing2 )
           
           
                   .setTimestamp()
                   .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
               
               
                  
           
               client.channels.get(wtbChannelId).send(mercuryEmbed)
           
                   
                  
               }
            else if(message.content.toString().toLowerCase()==='wtb mercury aio '+(mercuryPriceWtb)+'$'){
    
                  userId= message.author.id
                  messageId= message.id
                  channelId=message.channel.id
                   serverId= message.guild.id
                   var  hyperSeller= 'https://discordapp.com/users/'+ userId
                   var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                
                   var hyperListing2='[Click Here]'+'('+hyperListing+')'
                   var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
               
                   mercuryEmbed = new Discord.RichEmbed()
                   
                       .setColor('#f9475d')
                       .setTitle('Mercury WTB Listing Found')
                       .addField('Price','$'+mercuryPriceWtb+' - '+'€'+mercuryPriceWtb *.86 +' - '+'¥' +mercuryPriceWtb*6.67,true )
                       .addField('Seller', message.author.tag,true )
               
                       .addField('Link To Seller', hyperSeller2)
             
                       .addField('Link To Listing',hyperListing2 )
               
               
                       .setTimestamp()
                       .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                   
                   
                      
               
                   client.channels.get(wtbChannelId).send(mercuryEmbed)
               
                       
                      
                   }
  
                  else if(message.content.toString().toLowerCase()==='wtb mercury '+(mercuryPriceWtb/1000)+'k'){
    
                      userId= message.author.id
                      messageId= message.id
                      channelId=message.channel.id
                       serverId= message.guild.id
                       var  hyperSeller= 'https://discordapp.com/users/'+ userId
                       var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                    
                       var hyperListing2='[Click Here]'+'('+hyperListing+')'
                       var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                   
                       mercuryEmbed = new Discord.RichEmbed()
                       
                           .setColor('#f9475d')
                           .setTitle('Mercury WTB Listing Found')
                           .addField('Price','$'+mercuryPriceWtb+' - '+'€'+mercuryPriceWtb *.86 +' - '+'¥' +mercuryPriceWtb*6.67,true )
                           .addField('Seller', message.author.tag,true )
                   
                           .addField('Link To Seller', hyperSeller2)
                 
                           .addField('Link To Listing',hyperListing2 )
                   
                   
                           .setTimestamp()
                           .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                       
                       
                          
                   
                       client.channels.get(wtbChannelId).send(mercuryEmbed)
                   
                           
                          
                       }
  
                       else if(message.content.toString().toLowerCase()==='wtb mercury '+(mercuryPriceWtb/1000)+'k$'){
    
                          userId= message.author.id
                          messageId= message.id
                          channelId=message.channel.id
                           serverId= message.guild.id
                           var  hyperSeller= 'https://discordapp.com/users/'+ userId
                           var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                        
                           var hyperListing2='[Click Here]'+'('+hyperListing+')'
                           var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                       
                           mercuryEmbed = new Discord.RichEmbed()
                           
                               .setColor('#f9475d')
                               .setTitle('Mercury WTB Listing Found')
                               .addField('Price','$'+mercuryPriceWtb+' - '+'€'+mercuryPriceWtb *.86 +' - '+'¥' +mercuryPriceWtb*6.67,true )
                               .addField('Seller', message.author.tag,true )
                       
                               .addField('Link To Seller', hyperSeller2)
                     
                               .addField('Link To Listing',hyperListing2 )
                       
                       
                               .setTimestamp()
                               .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                           
                           
                              
                       
                           client.channels.get(wtbChannelId).send(mercuryEmbed)
                       
                               
                              
                           }
                           else if(message.content.toString().toLowerCase()==='wtb mercury $'+(mercuryPriceWtb/1000)+'k'){
    
                              userId= message.author.id
                              messageId= message.id
                              channelId=message.channel.id
                               serverId= message.guild.id
                               var  hyperSeller= 'https://discordapp.com/users/'+ userId
                               var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                            
                               var hyperListing2='[Click Here]'+'('+hyperListing+')'
                               var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                           
                               mercuryEmbed = new Discord.RichEmbed()
                               
                                   .setColor('#f9475d')
                                   .setTitle('Mercury WTB Listing Found')
                                   .addField('Price','$'+mercuryPriceWtb+' - '+'€'+mercuryPriceWtb *.86 +' - '+'¥' +mercuryPriceWtb*6.67,true )
                                   .addField('Seller', message.author.tag,true )
                           
                                   .addField('Link To Seller', hyperSeller2)
                         
                                   .addField('Link To Listing',hyperListing2 )
                           
                           
                                   .setTimestamp()
                                   .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                               
                               
                                  
                           
                               client.channels.get(wtbChannelId).send(mercuryEmbed)
                           
                                   
                                  
                               }
                   
               
       
    
      
    });
    
  }
  function soleWtb(arguments, receivedMessage) {
  
      solePriceWtb=arguments
      user.on('message', message => { // When a message is created
    
        if(message.channel.id==('626997728915881993'||'751572280307482734'||'710921331872366644')){

        if(message.content.toString().toLowerCase().includes(solePriceWtb)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
    
        soleEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Sole WTB Listing Found')
            .addField('Price','$'+solePriceWtb+' - '+'€'+solePriceWtb *.86 +' - '+'¥' +solePriceWtb*6.67,true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
          .addField('Link To Listing',hyperListing2 )
  
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(soleEmbed)
    
            
           
        }
    }
    });
    
  }
  function wrathWtb(arguments, receivedMessage) {
  
      wrathWtbPrice=arguments
      user.on('message', message => { // When a message is created

        if(message.channel.id==('626997507205103617'||'743950898501517322'||'733784514769191013')){
        
        if(message.content.toString().toLowerCase().includes(wrathWTsPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
    
        wrathEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Wrath WTB Listing Found')
            .addField('Price','$'+veloxWtbPrice+' - '+'€'+veloxWtbPrice *.86 +' - '+'¥' +veloxWtbPrice*6.67,true )
            .addField('Seller', message.author.tag,true )
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(wrathEmbed)
    
            
           
        }
    }
    });
    
  }
  function veloxWtb(arguments, receivedMessage) {
  
      veloxWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        if(message.channel.id==('710921136078192723'||'750079086541668462'||'634518624677396501')){

        if(message.content.toString().toLowerCase().includes(veloxWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
        veloxEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Velox WTB Listing Found')
            .addField('Price','$'+veloxWtbPrice+' - '+'€'+veloxWtbPrice *.86 +' - '+'¥' +veloxWtbPrice*6.67,true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(veloxEmbed)
    
            
           
        }
  
    }
    
      
    });
    
  }
  function mekWtb(arguments, receivedMessage) {
  
      mekWtbPrice=arguments
      user.on('message', message => { // When a message is created

        if(message.channel.id==('627003458817359873'||'750079662675198053'||'710921433987022878')){
        
        if(message.content.toString().toLowerCase().includes(mekWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
    
        mekEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Mek WTB Listing Found')
            .addField('Price','$'+mekWtbPrice+' - '+'€'+mekWtbPrice *.86 +' - '+'¥' +mekWtbPrice*6.67,true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
          .addField('Link To Listing',hyperListing2 )
  
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(mekEmbed)
    
            
           
        }
  
        }
      
    });
    
  }
  function prismWtb(arguments, receivedMessage) {
  
      prismWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.channel.id==('626997238513795079'||'750079349167882462'||'710921411757211689')){

        if(message.content.toString().toLowerCase().includes(prismWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
    
        prismEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Prism WTB Listing Found')
            .addField('Price','$'+prismWtbPrice+' - '+'€'+prismWtbPrice *.86 +' - '+'¥' +prismWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(prismEmbed)
    
            
           
        }
    }
    
      
    });
    
  }
  function polarisWtb(arguments, receivedMessage) {
  
      polarisWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
         
        if(message.channel.id==('710921396859175081'||'750079408445980717'||'713875954224726228')){


        if(message.content.toString().toLowerCase().includes(polarisWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
    
        poalrisEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Polaris WTB Listing Found')
            .addField('Price','$'+polarisWtbPrice+' - '+'€'+polarisWtbPrice *.86 +' - '+'¥' +polarisWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(poalrisEmbed)
    
            
           
        }
    
          
    }
    });
    
  }
  function splashForceWtb(arguments, receivedMessage) {
  
      splashForceWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb splash force '+(splashForceWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
        sfEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Splash Force WTB Listing Found')
            .addField('Price','$'+splashForceWtbPrice+' - '+'€'+splashForceWtbPrice *.86 +' - '+'¥' +splashForceWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
          .addField('Link To Listing',hyperListing2 )
  
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(sfEmbed)
    
            
           
        }
  
        else if(message.content.toString().toLowerCase()==='wtb splash force/sf '+(splashForceWtbPrice)){
    
          userId= message.author.id
          messageId= message.id
          channelId=message.channel.id
           serverId= message.guild.id
       
           var  hyperSeller= 'https://discordapp.com/users/'+ userId
           var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
        
           var hyperListing2='[Click Here]'+'('+hyperListing+')'
           var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
           sfEmbed = new Discord.RichEmbed()
           
               .setColor('#f9475d')
               .setTitle('Splash Force WTB Listing Found')
               .addField('Price','$'+splashForceWtbPrice+' - '+'€'+splashForceWtbPrice *.86 +' - '+'¥' +splashForceWtbPrice*6.67, true )
               .addField('Seller', message.author.tag,true )
       
               .addField('Link To Seller', hyperSeller2)
     
             .addField('Link To Listing',hyperListing2 )
     
       
       
               .setTimestamp()
               .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
           
           
              
       
           client.channels.get(wtbChannelId).send(sfEmbed)
       
               
              
           }
           else if(message.content.toString().toLowerCase()==='wtb splash force/sf $'+(splashForceWtbPrice)){
    
              userId= message.author.id
              messageId= message.id
              channelId=message.channel.id
               serverId= message.guild.id
           
               var  hyperSeller= 'https://discordapp.com/users/'+ userId
               var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
            
               var hyperListing2='[Click Here]'+'('+hyperListing+')'
               var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
               sfEmbed = new Discord.RichEmbed()
               
                   .setColor('#f9475d')
                   .setTitle('Splash Force WTB Listing Found')
                   .addField('Price','$'+splashForceWtbPrice+' - '+'€'+splashForceWtbPrice *.86 +' - '+'¥' +splashForceWtbPrice*6.67, true )
                   .addField('Seller', message.author.tag,true )
           
                   .addField('Link To Seller', hyperSeller2)
         
                 .addField('Link To Listing',hyperListing2 )
         
           
           
                   .setTimestamp()
                   .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
               
               
                  
           
               client.channels.get(wtbChannelId).send(sfEmbed)
           
                   
                  
               }
               else if(message.content.toString().toLowerCase()==='wtb splash force $'+(splashForceWtbPrice)){
    
                  userId= message.author.id
                  messageId= message.id
                  channelId=message.channel.id
                   serverId= message.guild.id
               
                   var  hyperSeller= 'https://discordapp.com/users/'+ userId
                   var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                
                   var hyperListing2='[Click Here]'+'('+hyperListing+')'
                   var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                   sfEmbed = new Discord.RichEmbed()
                   
                       .setColor('#f9475d')
                       .setTitle('Splash Force WTB Listing Found')
                       .addField('Price','$'+splashForceWtbPrice+' - '+'€'+splashForceWtbPrice *.86 +' - '+'¥' +splashForceWtbPrice*6.67, true )
                       .addField('Seller', message.author.tag,true )
               
                       .addField('Link To Seller', hyperSeller2)
             
                     .addField('Link To Listing',hyperListing2 )
             
               
               
                       .setTimestamp()
                       .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                   
                   
                      
               
                   client.channels.get(wtbChannelId).send(sfEmbed)
               
                       
                      
                   }
    
      
    });
    
  }
  function pdWtb(arguments, receivedMessage) {
  
      pdWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
           
        if(message.channel.id==('626996604603465738'||'750079582606196826'||'710921374939742298')){

        if(message.content.toString().toLowerCase(),includes(pdWtbPrice)) {
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
    
        pdEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Project Destroyer WTB Listing Found')
            .addField('Price','$'+pdWtbPrice+' - '+'€'+pdWtbPrice *.86 +' - '+'¥' +pdWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(pdEmbed)
    
            
        }
    }
    });
    
  }
  function dasheWtb(arguments, receivedMessage) {
  
      dasheWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
            
        if(message.content.toString().toLowerCase()==='wtb dashe '+(dasheWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
        dasheEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Dashe WTB Listing Found')
            .addField('Price','$'+dasheWtbPrice+' - '+'€'+dasheWtbPrice *.86 +' - '+'¥' +dasheWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(dasheEmbed)
    
            
           
        }
        else if(message.content.toString().toLowerCase()==='wtb dashe renewal $'+(dasheWtbPrice)){
    
          userId= message.author.id
          messageId= message.id
          channelId=message.channel.id
           serverId= message.guild.id
       
           var  hyperSeller= 'https://discordapp.com/users/'+ userId
           var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
        
           var hyperListing2='[Click Here]'+'('+hyperListing+')'
           var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
           dasheEmbed = new Discord.RichEmbed()
           
               .setColor('#f9475d')
               .setTitle('Dashe WTB Listing Found')
               .addField('Price','$'+dasheWtbPrice+' - '+'€'+dasheWtbPrice *.86 +' - '+'¥' +dasheWtbPrice*6.67, true )
               .addField('Seller', message.author.tag,true )
       
               .addField('Link To Seller', hyperSeller2)
     
               .addField('Link To Listing',hyperListing2 )
       
       
       
               .setTimestamp()
               .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
           
           
              
       
           client.channels.get(wtbChannelId).send(dasheEmbed)
       
               
              
           }
           else if(message.content.toString().toLowerCase()==='wtb dashe lt $'+(dasheWtbPrice)){
    
              userId= message.author.id
              messageId= message.id
              channelId=message.channel.id
               serverId= message.guild.id
           
               var  hyperSeller= 'https://discordapp.com/users/'+ userId
               var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
            
               var hyperListing2='[Click Here]'+'('+hyperListing+')'
               var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
               dasheEmbed = new Discord.RichEmbed()
               
                   .setColor('#f9475d')
                   .setTitle('Dashe WTB Listing Found')
                   .addField('Price','$'+dasheWtbPrice+' - '+'€'+dasheWtbPrice *.86 +' - '+'¥' +dasheWtbPrice*6.67, true )
                   .addField('Seller', message.author.tag,true )
           
                   .addField('Link To Seller', hyperSeller2)
         
                   .addField('Link To Listing',hyperListing2 )
           
           
           
                   .setTimestamp()
                   .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
               
               
                  
           
               client.channels.get(wtbChannelId).send(dasheEmbed)
           
                   
                  
               }
        else if(message.content.toString().toLowerCase()==='wtb dashe $'+(dasheWtbPrice)){
    
              userId= message.author.id
              messageId= message.id
              channelId=message.channel.id
               serverId= message.guild.id
           
               var  hyperSeller= 'https://discordapp.com/users/'+ userId
               var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
            
               var hyperListing2='[Click Here]'+'('+hyperListing+')'
               var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
               dasheEmbed = new Discord.RichEmbed()
               
                   .setColor('#f9475d')
                   .setTitle('Dashe WTB Listing Found')
                   .addField('Price','$'+dasheWtbPrice+' - '+'€'+dasheWtbPrice *.86 +' - '+'¥' +dasheWtbPrice*6.67, true )
                   .addField('Seller', message.author.tag,true )
           
                   .addField('Link To Seller', hyperSeller2)
         
                   .addField('Link To Listing',hyperListing2 )
           
           
           
                   .setTimestamp()
                   .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
               
               
                  
           
               client.channels.get(wtbChannelId).send(dasheEmbed)
           
                   
                  
               }
               else if(message.content.toString().toLowerCase()==='wtb dashe lifetime $'+(dasheWtbPrice)){
    
                  userId= message.author.id
                  messageId= message.id
                  channelId=message.channel.id
                   serverId= message.guild.id
               
                   var  hyperSeller= 'https://discordapp.com/users/'+ userId
                   var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                
                   var hyperListing2='[Click Here]'+'('+hyperListing+')'
                   var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                   dasheEmbed = new Discord.RichEmbed()
                   
                       .setColor('#f9475d')
                       .setTitle('Dashe WTB Listing Found')
                       .addField('Price','$'+dasheWtbPrice+' - '+'€'+dasheWtbPrice *.86 +' - '+'¥' +dasheWtbPrice*6.67, true )
                       .addField('Seller', message.author.tag,true )
               
                       .addField('Link To Seller', hyperSeller2)
             
                       .addField('Link To Listing',hyperListing2 )
               
               
               
                       .setTimestamp()
                       .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                   
                   
                      
               
                   client.channels.get(wtbChannelId).send(dasheEmbed)
               
                       
                      
                   }
                   else if(message.content.toString().toLowerCase()===':dashe:wtb dashe lifetime $'+(dasheWtbPrice)){
    
                      userId= message.author.id
                      messageId= message.id
                      channelId=message.channel.id
                       serverId= message.guild.id
                   
                       var  hyperSeller= 'https://discordapp.com/users/'+ userId
                       var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                    
                       var hyperListing2='[Click Here]'+'('+hyperListing+')'
                       var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                       dasheEmbed = new Discord.RichEmbed()
                       
                           .setColor('#f9475d')
                           .setTitle('Dashe WTB Listing Found')
                           .addField('Price','$'+dasheWtbPrice+' - '+'€'+dasheWtbPrice *.86 +' - '+'¥' +dasheWtbPrice*6.67, true )
                           .addField('Seller', message.author.tag,true )
                   
                           .addField('Link To Seller', hyperSeller2)
                 
                           .addField('Link To Listing',hyperListing2 )
                   
                   
                   
                           .setTimestamp()
                           .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                       
                       
                          
                   
                       client.channels.get(wtbChannelId).send(dasheEmbed)
                   
                           
                          
                       }
      
    });
    
  }
  function tohruWtb(arguments, receivedMessage) {
  
      tohruWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        if(message.channel.id==('733784514769191013'||'750079302409781380'||'734522776559419503')){

        if(message.content.toString().toLowerCase().includes(tohruWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        tohruEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Tohru WTB Listing Found')
            .addField('Price','$'+tohruWtbPrice+' - '+'€'+tohruWtbPrice *.86 +' - '+'¥' +tohruWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(tohruEmbed)
    
            
           
        }
  
    }
    });
    
  }
  function phantomWtb(arguments, receivedMessage) {
  
      phantomWtbPrice=arguments
      user.on('message', message => { // When a message is created

        if(message.channel.id==('627359748051697674'||'750079509361066107'||'710921644104876042')){
        
        if(message.content.toString().toLowerCase().includes(phantomWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        phatnomEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Phantom WTB Listing Found')
            .addField('Price','$'+phantomWtbPrice+' - '+'€'+phantomWtbPrice *.86 +' - '+'¥' +phantomWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(PhantomEmbed)
    
            
           
        }
        }
    });
    
  }
  function adeptWtb(arguments, receivedMessage) {
  
      adeptWtbPrice=arguments
      user.on('message', message => { // When a message is created
        if(message.channel.id==('626999229210165268'||'750079951725920346'||'700487424937295877')){
        
        if(message.content.toString().toLowerCase().includes(adeptWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        adeptEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Adept WTB Listing Found')
            .addField('Price','$'+adeptWtbPrice+' - '+'€'+adeptWtbPrice *.86 +' - '+'¥' +adeptWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(adeptEmbed)
    
            
           
        }
    }
    });
    
  }
  function burstWtb(arguments, receivedMessage) {
  
      burstWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        if(message.channel.id==('762401858710667264')){
        if(message.content.toString().toLowerCase().includes(burstWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        burstEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Burst WTB Listing Found')
            .addField('Price','$'+burstWtbPrice+' - '+'€'+burstWtbPrice *.86 +' - '+'¥' +burstWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(burstEmbed)
    
            
           
        }
      
                   }
    });
    
  }
  function cyberWtb(arguments, receivedMessage) {
  
      cyberWtbPrice=arguments
      user.on('message', message => { // When a message is created
        if(message.channel.id==('750080045221019778'||'710921814204874782'||'626930513768087552')){
        
        if(message.content.toString().toLowerCase().includes(cyberWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        cyberEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Cyber WTB Listing Found')
            .addField('Price','$'+cyberWtbPrice+' - '+'€'+cyberWtbPrice *.86 +' - '+'¥' +cyberWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(cyberEmbed)
    
            
           
        }
  
            
        }
    });
    
  }
  function estockWtb(arguments, receivedMessage) {
  
      estockWtbPrice=arguments
      user.on('message', message => { // When a message is created
        if(message.channel.id==('761090584420810782')){
        
        if(message.content.toString().toLowerCase().includes(estockWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        estockEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Estock WTB Listing Found')
            .addField('Price','$'+estockWtbPrice+' - '+'€'+estockWtbPrice *.86 +' - '+'¥' +estockWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(estockEmbed)
    
            
           
        }
     
        }
      
    });
    
  }
  function eveWtb(arguments, receivedMessage) {
  
      estockWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        if(message.channel.id==('626998019023175700'||'750079801586352320'||'710921775554494547')){
        if(message.content.toString().toLowerCase().includes(eveWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        eveEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Eve WTB Listing Found')
            .addField('Price','$'+eveWtbPrice+' - '+'€'+eveWtbPrice *.86 +' - '+'¥' +eveWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(eveEmbed)
    
            
           
        }
  
    }
      
    });
    
  }
  function galaxioWtb(arguments, receivedMessage) {
  
      galaxsioWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb galaxsio '+(galaxsioWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        glaxsioEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Galaxsio WTB Listing Found')
            .addField('Price','$'+galaxsioWtbPrice+' - '+'€'+galaxsioWtbPrice *.86 +' - '+'¥' +galaxsioWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(glaxsioEmbed)
    
            
           
        }
        else if(message.content.toString().toLowerCase()==='wtb galaxsio $'+(galaxsioWtbPrice)){
    
          userId= message.author.id
          messageId= message.id
          channelId=message.channel.id
           serverId= message.guild.id
       
           var  hyperSeller= 'https://discordapp.com/users/'+ userId
           var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
        
           var hyperListing2='[Click Here]'+'('+hyperListing+')'
           var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
     
           glaxsioEmbed = new Discord.RichEmbed()
           
               .setColor('#f9475d')
               .setTitle('Galaxsio WTB Listing Found')
               .addField('Price','$'+galaxsioWtbPrice+' - '+'€'+galaxsioWtbPrice *.86 +' - '+'¥' +galaxsioWtbPrice*6.67, true )
               .addField('Seller', message.author.tag,true )
       
               .addField('Link To Seller', hyperSeller2)
     
               .addField('Link To Listing',hyperListing2 )
       
       
       
               .setTimestamp()
               .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
           
           
              
       
           client.channels.get(wtbChannelId).send(glaxsioEmbed)
       
               
              
           }
  
           else if(message.content.toString().toLowerCase()==='wtb galaxsio lifetime $'+(galaxsioWtbPrice)){
    
              userId= message.author.id
              messageId= message.id
              channelId=message.channel.id
               serverId= message.guild.id
           
               var  hyperSeller= 'https://discordapp.com/users/'+ userId
               var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
            
               var hyperListing2='[Click Here]'+'('+hyperListing+')'
               var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
         
               glaxsioEmbed = new Discord.RichEmbed()
               
                   .setColor('#f9475d')
                   .setTitle('Galaxsio WTB Listing Found')
                   .addField('Price','$'+galaxsioWtbPrice+' - '+'€'+galaxsioWtbPrice *.86 +' - '+'¥' +galaxsioWtbPrice*6.67, true )
                   .addField('Seller', message.author.tag,true )
           
                   .addField('Link To Seller', hyperSeller2)
         
                   .addField('Link To Listing',hyperListing2 )
           
           
           
                   .setTimestamp()
                   .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
               
               
                  
           
               client.channels.get(wtbChannelId).send(glaxsioEmbed)
           
                   
                  
               }
           
               else if(message.content.toString().toLowerCase()==='wtb galaxsio lifetime $'+(galaxsioWtbPrice/1000)+'k'){
    
                  userId= message.author.id
                  messageId= message.id
                  channelId=message.channel.id
                   serverId= message.guild.id
               
                   var  hyperSeller= 'https://discordapp.com/users/'+ userId
                   var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                
                   var hyperListing2='[Click Here]'+'('+hyperListing+')'
                   var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
             
                   glaxsioEmbed = new Discord.RichEmbed()
                   
                       .setColor('#f9475d')
                       .setTitle('Galaxsio WTB Listing Found')
                       .addField('Price','$'+galaxsioWtbPrice+' - '+'€'+galaxsioWtbPrice *.86 +' - '+'¥' +galaxsioWtbPrice*6.67, true )
                       .addField('Seller', message.author.tag,true )
               
                       .addField('Link To Seller', hyperSeller2)
             
                       .addField('Link To Listing',hyperListing2 )
               
               
               
                       .setTimestamp()
                       .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                   
                   
                      
               
                   client.channels.get(wtbChannelId).send(glaxsioEmbed)
               
                       
                      
                   }
  
                   else if(message.content.toString().toLowerCase()==='wtb galaxsio lt $'+(galaxsioWtbPrice/1000)+'k'){
    
                      userId= message.author.id
                      messageId= message.id
                      channelId=message.channel.id
                       serverId= message.guild.id
                   
                       var  hyperSeller= 'https://discordapp.com/users/'+ userId
                       var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                    
                       var hyperListing2='[Click Here]'+'('+hyperListing+')'
                       var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                 
                       glaxsioEmbed = new Discord.RichEmbed()
                       
                           .setColor('#f9475d')
                           .setTitle('Galaxsio WTB Listing Found')
                           .addField('Price','$'+galaxsioWtbPrice+' - '+'€'+galaxsioWtbPrice *.86 +' - '+'¥' +galaxsioWtbPrice*6.67, true )
                           .addField('Seller', message.author.tag,true )
                   
                           .addField('Link To Seller', hyperSeller2)
                 
                           .addField('Link To Listing',hyperListing2 )
                   
                   
                   
                           .setTimestamp()
                           .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                       
                       
                          
                   
                       client.channels.get(wtbChannelId).send(glaxsioEmbed)
                   
                           
                          
                       }
  
                       else if(message.content.toString().toLowerCase()==='wtb galaxsio $'+(galaxsioWtbPrice/1000)+'k'){
    
                          userId= message.author.id
                          messageId= message.id
                          channelId=message.channel.id
                           serverId= message.guild.id
                       
                           var  hyperSeller= 'https://discordapp.com/users/'+ userId
                           var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                        
                           var hyperListing2='[Click Here]'+'('+hyperListing+')'
                           var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                     
                           glaxsioEmbed = new Discord.RichEmbed()
                           
                               .setColor('#f9475d')
                               .setTitle('Galaxsio WTB Listing Found')
                               .addField('Price','$'+galaxsioWtbPrice+' - '+'€'+galaxsioWtbPrice *.86 +' - '+'¥' +galaxsioWtbPrice*6.67, true )
                               .addField('Seller', message.author.tag,true )
                       
                               .addField('Link To Seller', hyperSeller2)
                     
                               .addField('Link To Listing',hyperListing2 )
                       
                       
                       
                               .setTimestamp()
                               .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                           
                           
                              
                       
                           client.channels.get(wtbChannelId).send(glaxsioEmbed)
                       
                               
                              
                           }
  
                             else if(message.content.toString().toLowerCase()==='wtb galaxsio $'+(galaxsioWtbPrice/1000)+'k'){
    
                          userId= message.author.id
                          messageId= message.id
                          channelId=message.channel.id
                           serverId= message.guild.id
                       
                           var  hyperSeller= 'https://discordapp.com/users/'+ userId
                           var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                        
                           var hyperListing2='[Click Here]'+'('+hyperListing+')'
                           var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
                     
                           glaxsioEmbed = new Discord.RichEmbed()
                           
                               .setColor('#f9475d')
                               .setTitle('Galaxsio WTB Listing Found')
                               .addField('Price','$'+galaxsioWtbPrice+' - '+'€'+galaxsioWtbPrice *.86 +' - '+'¥' +galaxsioWtbPrice*6.67, true )
                               .addField('Seller', message.author.tag,true )
                       
                               .addField('Link To Seller', hyperSeller2)
                     
                               .addField('Link To Listing',hyperListing2 )
                       
                       
                       
                               .setTimestamp()
                               .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                           
                           
                              
                       
                           client.channels.get(wtbChannelId).send(glaxsioEmbed)
                       
                               
                              
                           }
      
    });
    
  }
  function hawkWtb(arguments, receivedMessage) {
  
      hawkWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.channel.id==('710921626534805575'||'626998937009782784')){
        if(message.content.toString().toLowerCase().includes(hawkWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        hawkEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Hawk Mesh WTB Listing Found')
            .addField('Price','$'+hawkWtbPrice+' - '+'€'+hawkWtbPrice *.86 +' - '+'¥' +hawkWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(hawkEmbed)
    
        }
       
    }
    });
    
  }
  function ganeshWtb(arguments, receivedMessage) {
  
      ganeshWtbPrice=arguments
      user.on('message', message => { // When a message is created
        if(message.channel.id==('626998513175363594'||'764754256087089172'||'700487206904528948')){
        
        if(message.content.toString().toLowerCase().includes(ganeshWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        ganeshEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Ganesh WTB Listing Found')
            .addField('Price','$'+ganeshWtbPrice+' - '+'€'+ganeshWtbPrice *.86 +' - '+'¥' +ganeshWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(ganeshEmbed)
    
            
           
        }
    }
    });
    
  }
  function hayhaWtb(arguments, receivedMessage) {
  
      hayhaWtbPrice=arguments
      user.on('message', message => { // When a message is created
        if(message.channel.id==('699454406235521034'||'752600603938652300'||'710921584302620712')){
        
        if(message.content.toString().toLowerCase().includes(hayhaWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        hayhaEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Hayha WTB Listing Found')
            .addField('Price','$'+hayhaWtbPrice+' - '+'€'+hayhaWtbPrice *.86 +' - '+'¥' +hayhaWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(hayhaEmbed)
    
            
           
        }
    }
    });
    
  }
  function kiloWtb(arguments, receivedMessage) { 
  
      kiloWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        if(message.channel.id==('734523543588569139')){

        if(message.content.toString().toLowerCase().includes(kiloWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        kiloEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Kilo WTB Listing Found')
            .addField('Price','$'+kiloWtbPrice+' - '+'€'+kiloWtbPrice *.86 +' - '+'¥' +kiloWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(kiloEmbed)
    
            
           
        }
      }
    });
    
  }
  function flareWtb(arguments, receivedMessage) {
  
      flareWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        if(message.channel.id==('692632554792288286'||'700487256477138964')){


        if(message.content.toString().toLowerCase().includes(flareWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var  hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        FlareEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Flare WTB Listing Found')
            .addField('Price','$'+flareWtbPrice+' - '+'€'+flareWtbPrice *.86 +' - '+'¥' +flareWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
              client.channels.get(wtbChannelId).send(FlareEmbed)
    
            
           
        }
    }
    });
    
  }
  function fleekWtb(arguments, receivedMessage) {
  
      fleekWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        if(message.channel.id==('626999475918864404'||'759444409158467604'||'710921712178430073')){

        if(message.content.toString().toLowerCase(),includes(fleekWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        fleekEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Fleek WTB Listing Found')
            .addField('Price','$'+fleekWtbPrice+' - '+'€'+fleekWtbPrice *.86 +' - '+'¥' +fleekWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(fleekEmbed)
    
            
           
        }
     
    }
      
    });
    
  }
  function nebulaWtb (arguments, receivedMessage) {
  
      nebulaWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb nebula '+(nebulaWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        nebulaEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle('Nebula WTB Listing Found')
            .addField('Price','$'+nebulaWtbPrice+' - '+'€'+nebulaWtbPrice *.86 +' - '+'¥' +nebulaWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           client.channels.get(wtbChannelId).send(nebulaEmbed)
    
            
           
        }
        else if(message.content.toString().toLowerCase()==='wtb nebula $'+(nebulaWtbPrice)){
    
          userId= message.author.id
          messageId= message.id
          channelId=message.channel.id
           serverId= message.guild.id
       
           var hyperSeller= 'https://discordapp.com/users/'+ userId
           var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
        
           var hyperListing2='[Click Here]'+'('+hyperListing+')'
           var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
     
           nebulaEmbed = new Discord.RichEmbed()
           
               .setColor('#f9475d')
               .setTitle('Nebula WTB Listing Found')
               .addField('Price','$'+nebulaWtbPrice+' - '+'€'+nebulaWtbPrice *.86 +' - '+'¥' +nebulaWtbPrice*6.67, true )
               .addField('Seller', message.author.tag,true )
       
               .addField('Link To Seller', hyperSeller2)
     
               .addField('Link To Listing',hyperListing2 )
       
       
       
               .setTimestamp()
               .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
           
           
              
       
              client.channels.get(wtbChannelId).send(nebulaEmbed)
       
               
              
           }
          else if(message.content.toString().toLowerCase()==='wtb nebula '+(nebulaWtbPrice/1000)+'k'){
    
              userId= message.author.id
              messageId= message.id
              channelId=message.channel.id
               serverId= message.guild.id
           
               var hyperSeller= 'https://discordapp.com/users/'+ userId
               var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
            
               var hyperListing2='[Click Here]'+'('+hyperListing+')'
               var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
         
               nebulaEmbed = new Discord.RichEmbed()
               
                   .setColor('#f9475d')
                   .setTitle('Nebula WTB Listing Found')
                   .addField('Price','$'+nebulaWtbPrice+' - '+'€'+nebulaWtbPrice *.86 +' - '+'¥' +nebulaWtbPrice*6.67, true )
                   .addField('Seller', message.author.tag,true )
           
                   .addField('Link To Seller', hyperSeller2)
         
                   .addField('Link To Listing',hyperListing2 )
           
           
           
                   .setTimestamp()
                   .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
               
               
                  
           
                  client.channels.get(wtbChannelId).send(nebulaEmbed)
           
                   
                  
               }
               else if(message.content.toString().toLowerCase()==='wtb nebula $'+(nebulaWtbPrice/1000)+'k'){
    
                  userId= message.author.id
                  messageId= message.id
                  channelId=message.channel.id
                   serverId= message.guild.id
               
                   var hyperSeller= 'https://discordapp.com/users/'+ userId
                   var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                
                   var hyperListing2='[Click Here]'+'('+hyperListing+')'
                   var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
             
                   nebulaEmbed = new Discord.RichEmbed()
                   
                       .setColor('#f9475d')
                       .setTitle('Nebula WTB Listing Found')
                       .addField('Price','$'+nebulaWtbPrice+' - '+'€'+nebulaWtbPrice *.86 +' - '+'¥' +nebulaWtbPrice*6.67, true )
                       .addField('Seller', message.author.tag,true )
               
                       .addField('Link To Seller', hyperSeller2)
             
                       .addField('Link To Listing',hyperListing2 )
               
               
               
                       .setTimestamp()
                       .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                   
                   
                      
               
                      client.channels.get(wtbChannelId).send(nebulaEmbed)
               
                       
                      
                   }
    
      
    });
    
  }
  function CustomWtb (arguments, receivedMessage) {
  
  
      customWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb '+(customBotWtbPrice)+' '+(customWtbPrice)){
    
       userId= message.author.id
       messageId= message.id
       channelId=message.channel.id
        serverId= message.guild.id
    
        var hyperSeller= 'https://discordapp.com/users/'+ userId
        var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
     
        var hyperListing2='[Click Here]'+'('+hyperListing+')'
        var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
  
        customEmbed = new Discord.RichEmbed()
        
            .setColor('#f9475d')
            .setTitle((customBotWtbPrice)+' WTB Listing Found')
            .addField('Price','$'+customWtbPrice+' - '+'€'+customWtbPrice *.86 +' - '+'¥' +customWtbPrice*6.67, true )
            .addField('Seller', message.author.tag,true )
    
            .addField('Link To Seller', hyperSeller2)
  
            .addField('Link To Listing',hyperListing2 )
    
    
    
            .setTimestamp()
            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
        
        
           
    
           user.channels.get(wtbChannelId).send(customEmbed)
    
            
           
        }
       else if(message.content.toString().toLowerCase()==='wtb '+(customBotWtbPrice)+' $'+(customWtbPrice)){
    
          userId= message.author.id
          messageId= message.id
          channelId=message.channel.id
           serverId= message.guild.id
       
           var hyperSeller= 'https://discordapp.com/users/'+ userId
           var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
        
           var hyperListing2='[Click Here]'+'('+hyperListing+')'
           var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
     
           customEmbed = new Discord.RichEmbed()
           
               .setColor('#f9475d')
               .setTitle((customBotWtbPrice)+' WTB Listing Found')
               .addField('Price','$'+customWtbPrice+' - '+'€'+customWtbPrice *.86 +' - '+'¥' +customWtbPrice*6.67, true )
               .addField('Seller', message.author.tag,true )
       
               .addField('Link To Seller', hyperSeller2)
     
               .addField('Link To Listing',hyperListing2 )
       
       
       
               .setTimestamp()
               .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
           
           
              
       
              user.channels.get(wtbChannelId).send(customEmbed)
       
               
              
           }
           else if(message.content.toString().toLowerCase()==='wtb '+(customBotWtbPrice)+' $'+(customWtbPrice/1000)+'k'){
    
              userId= message.author.id
              messageId= message.id
              channelId=message.channel.id
               serverId= message.guild.id
           
               var hyperSeller= 'https://discordapp.com/users/'+ userId
               var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
            
               var hyperListing2='[Click Here]'+'('+hyperListing+')'
               var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
         
               customEmbed = new Discord.RichEmbed()
               
                   .setColor('#f9475d')
                   .setTitle((customBotWtbPrice)+' WTB Listing Found')
                   .addField('Price','$'+customWtbPrice+' - '+'€'+customWtbPrice *.86 +' - '+'¥' +customWtbPrice*6.67, true )
                   .addField('Seller', message.author.tag,true )
           
                   .addField('Link To Seller', hyperSeller2)
         
                   .addField('Link To Listing',hyperListing2 )
           
           
           
                   .setTimestamp()
                   .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
               
               
                  
           
                  user.channels.get(wtbChannelId).send(customEmbed)
           
                   
                  
               }
               else if(message.content.toString().toLowerCase()==='wtb '+(customBotWtbPrice)+' '+(customWtbPrice/1000)+'k'){
    
                  userId= message.author.id
                  messageId= message.id
                  channelId=message.channel.id
                   serverId= message.guild.id
               
                   var hyperSeller= 'https://discordapp.com/users/'+ userId
                   var hyperListing=' https://discordapp.com/channels/'+serverId+'/'+channelId+'/'+messageId+'/'
                
                   var hyperListing2='[Click Here]'+'('+hyperListing+')'
                   var hyperSeller2='[Click Here]'+'('+hyperSeller+')'
             
                   customEmbed = new Discord.RichEmbed()
                   
                       .setColor('#f9475d')
                       .setTitle((customBotWtbPrice)+' WTB Listing Found')
                       .addField('Price','$'+customWtbPrice+' - '+'€'+customWtbPrice *.86 +' - '+'¥' +customWtbPrice*6.67, true )
                       .addField('Seller', message.author.tag,true )
               
                       .addField('Link To Seller', hyperSeller2)
             
                       .addField('Link To Listing',hyperListing2 )
               
               
               
                       .setTimestamp()
                       .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                   
                   
                      
               
                      user.channels.get(wtbChannelId).send(customEmbed)
               
                       
                      
                   }
       
      
    });
    
  }
  function  clearAllWtb(arguments, receivedMessage) {

     balkoPriceWtb=''
     f3PriceWtb=''
     rushPriceWtb=''
     mercuryPriceWtb=''
     solePriceWtb=''
     veloxWtbPrice=''
     mekWtbPrice=''
     prismWtbPrice=''
     polarisWtbPrice=''
     splashForceWtbPrice=''
     pdWtbPrice=''
     dasheWtbPrice=''
     tohruWtbPrice=''
     phantomWtbPrice=''
     adeptWtbPrice=''
     burstWtbPrice=''
     cyberWtbPrice=''
     estockWtbPrice=''
     eveWtbPrice=''
     galaxsioWtbPrice=''
     hawkWtbPrice=''
     ganeshWtbPrice=''
     hayhaWtbPrice=''
     kiloWtbPrice=''
     flareWtbPrice=''
     fleekWtbPrice=''
     nebulaWtbPrice=''
     customWtbPrice=''
     customBotWtbPrice=''
    
     
     
   }
   function  clearAll(arguments, receivedMessage) {

     balkoPriceWts=''
 f3PriceWts=''
 rushPriceWts=''
 mercuryPriceWts=''
 solePriceWts=''
 wrathWTsPrice=''
 veloxWtsPrice=''
 mekWtsPrice=''
 prismWtsPrice=''
 polarisWtsPrice=''
 splashForceWtsPrice=''
 pdWtsPrice=''
 dasheWtsPrice=''
 tohruWtsPrice=''
 phantomWtsPrice=''
 adeptWtsPrice=''
 burstWtsPrice=''
 cyberWtsPrice=''
 estockWtsPrice=''
 eveWtsPrice=''
 galaxsioWtsPrice=''
 hawkWtsPrice=''
 ganeshWtsPrice=''
 hayhaWtsPrice=''
 kiloWtsPrice=''
 flareWtsPrice=''
 fleekWtsPrice=''
 nebulaWtsPrice=''
 customWtsPrice=''
 customBotWtsPrice=''

//split for wtb vars

 balkoPriceWtb=''
 f3PriceWtb=''
 rushPriceWtb=''
 mercuryPriceWtb=''
 solePriceWtb=''
 wrathWTsPrice=''
 veloxWtbPrice=''
 mekWtbPrice=''
 prismWtbPrice=''
 polarisWtbPrice=''
 splashForceWtbPrice=''
 pdWtbPrice=''
 dasheWtbPrice=''
 tohruWtbPrice=''
 phantomWtbPrice=''
 adeptWtbPrice=''
 burstWtbPrice=''
 cyberWtbPrice=''
 estockWtbPrice=''
 eveWtbPrice=''
 galaxsioWtbPrice=''
 hawkWtbPrice=''
 ganeshWtbPrice=''
 hayhaWtbPrice=''
 kiloWtbPrice=''
 flareWtbPrice=''
 fleekWtbPrice=''
 nebulaWtbPrice=''
 customWtbPrice=''
 customBotWtbPrice=''
    
  }
  

});




