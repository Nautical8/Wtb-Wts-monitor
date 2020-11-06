const Discord = require('discord.js');
const user = new Discord.Client();
const client = new Discord.Client();
// Replace BOT_TOKEN with your bot account's token

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


 
if (receivedMessage.member.roles.some(role => role.name === 'best' )){

if (primaryCommand == "balkowts") {
    balkoWts(arguments, receivedMessage)
    
    BalkoEmbed = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('Balko Sucessfully Added')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(BalkoEmbed)
    
    
    
}else if(primaryCommand == "commands") {
   

    commandEmbed = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('KubeIO Bot Marketplace Wts/Wtb Monitor')
    .setDescription('Commands:')
    .addField('!(Bot Name Here)wts (Pice Here)','This will set a WTS monitor for a bot make sure there are no spaces in between the bot name and the price.')
    .addField('!(Bot Name Here)wtb (Pice Here)','This will set a WTB monitor for a bot make sure there are no spaces in between the bot name and the price.')
    .addField('!custombotwts (Bot Name Here)','This will add a custom monitor for a bot WTS name add a space after custombotwts , you will also have to add the price in another command or this wont work.')
    .addField('!custombotwtsprice (Price Here)','This will add a custom monitor for a bot WTS name add a space after custombotwtsprice.')


    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


   

    receivedMessage.channel.send(commandEmbed)



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

}else if(primaryCommand == "clearallwts") {
    clearAll(arguments, receivedMessage)
    

    clearAllWts = new Discord.RichEmbed()
    
    .setColor('#f9475d')
    .setTitle('All WTS Monitors Cleared')
    
    
    .setTimestamp()
    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
    
    
    receivedMessage.channel.send(clearAllWts)

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

    
    if(message.content.toString().toLowerCase()==='wts balko '+(balkoPriceWts)){

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
    
    
       

       client.channels.get('772833340327329812').send(BalkoEmbed)

        
       
    }else if(message.content.toString().toLowerCase()==='wts balko 40 '+(balkoPriceWts)){

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
         
         
            
     
       client.channels.get('772833340327329812').send(BalkoEmbed)
     
             
            
         }
  
        else if(message.content.toString().toLowerCase()==='wts balko 40 $'+(balkoPriceWts)){

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
             
             
                
         
           client.channels.get('772833340327329812').send(BalkoEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts balko lt '+(balkoPriceWts)){

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
                 
                 
                    
             
               client.channels.get('772833340327329812').send(BalkoEmbed)
             
                     
                    
                 }
                 else if(message.content.toString().toLowerCase()==='wts balko yearly '+(balkoPriceWts/1000)+'k'){

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
                     
                     
                        
                 
                   client.channels.get('772833340327329812').send(BalkoEmbed)
                 
                         
                        
                     }
                     else if(message.content.toString().toLowerCase()==='wts balko lifetime $'+(balkoPriceWts)){

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
                         
                         
                            
                     
                       client.channels.get('772833340327329812').send(BalkoEmbed)
                     
                             
                            
                         }
                         else if(message.content.toString().toLowerCase()==='wts balko lifetime '+(balkoPriceWts)){

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
                             
                             
                                
                         
                           client.channels.get('772833340327329812').send(BalkoEmbed)
                         
                                 
                                
                             }
                             else if(message.content.toString().toLowerCase()==='wts balko lt '+(balkoPriceWts)+'$'){

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
                                 
                                 
                                    
                             
                               client.channels.get('772833340327329812').send(BalkoEmbed)
                             
                                     
                                    
                                 }
                                 else if(message.content.toString().toLowerCase()==='wts balko yearly, '+(balkoPriceWts/1000)+'k'){

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
                                     
                                     
                                        
                                 
                                        user.channels.get('772833340327329812').send(BalkoEmbed)
                                 
                                         
                                        
                                     }
});
}
function f3Wts(arguments, receivedMessage) {

    f3PriceWts=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts f3 '+(f3PriceWts)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(f3embed)
  
          
         
      }
     else if(message.content.toString().toLowerCase()==='wts f3 '+(f3PriceWts/1000)+'k'){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(f3embed)
     
             
            
         }
        else if(message.content.toString().toLowerCase()==='wts f3 $'+(f3PriceWts)){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(f3embed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts f3 - $'+(f3PriceWts)){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(f3embed)
             
                     
                    
                 }
    
  });
  
}
function rushWts(arguments, receivedMessage) {

    rushPriceWts=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts rush '+(rushPriceWts)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(rushEmbed)
  
          
         
      }
      else if(message.content.toString().toLowerCase()==='wts rush $'+(rushPriceWts)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(rushEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts rush $'+(rushPriceWts/1000)+'k'){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(rushEmbed)
         
                 
                
             }

             else if(message.content.toString().toLowerCase()==='wts rushaio $'+(rushPriceWts)){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(rushEmbed)
             
                     
                    
                 }

                  else if(message.content.toString().toLowerCase()==='wts rush $'+(rushPriceWts/1000)+'k'){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(rushEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts rushaio $'+(rushPriceWts/1000)+'k'){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(rushEmbed)
             
                     
                    
                 }
                 else if(message.content.toString().toLowerCase()==='wts rush - '+(rushPriceWts/1000)+'k'){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(rushEmbed)
                 
                         
                        
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
      
      
         
  
         client.channels.get('772833340327329812').send(mercuryEmbed)
  
          
         
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
         
         
            
     
         client.channels.get('772833340327329812').send(mercuryEmbed)
     
             
            
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
             
             
                
         
             client.channels.get('772833340327329812').send(mercuryEmbed)
         
                 
                
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(mercuryEmbed)
             
                     
                    
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(mercuryEmbed)
                 
                         
                        
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
                         
                         
                            
                     
                         client.channels.get('772833340327329812').send(mercuryEmbed)
                     
                             
                            
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
                             
                             
                                
                         
                             client.channels.get('772833340327329812').send(mercuryEmbed)
                         
                                 
                                
                             }
                 
             
     
  
    
  });
  
}
function soleWts(arguments, receivedMessage) {

    solePriceWts=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts sole '+(solePriceWts)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(soleEmbed)
  
          
         
      }
     else if(message.content.toString().toLowerCase()==='wts sole ui upgraded '+(solePriceWts)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(soleEmbed)
     
             
            
         }

         else if(message.content.toString().toLowerCase()==='wts sole ui upgraded $'+(solePriceWts)){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(soleEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='ui upgraded $'+(solePriceWts)){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(soleEmbed)
             
                     
                    
                 }

                 else if(message.content.toString().toLowerCase()==='wts sole ui upgraded '+(solePriceWts/1000)+'k'){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(soleEmbed)
                 
                         
                        
                     }
     else if(message.content.toString().toLowerCase()==='wts sole ui upgraded '+(solePriceWts)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(soleEmbed)
     
             
            
         }

         else if(message.content.toString().toLowerCase()==='wts sole ui upgraded $'+(solePriceWts)){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(soleEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='ui upgraded $'+(solePriceWts)){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(soleEmbed)
             
                     
                    
                 }

                 else if(message.content.toString().toLowerCase()==='wts sole ui upgraded '+(solePriceWts/1000)+'k'){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(soleEmbed)
                 
                         
                        
                     }
                     ///asdsadasd
                     else if(message.content.toString().toLowerCase()==='wts sole upgraded ui '+(solePriceWts)){
  
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
                         
                         
                            
                     
                         client.channels.get('772833340327329812').send(soleEmbed)
                     
                             
                            
                         }
                
                         else if(message.content.toString().toLowerCase()==='wts sole upgraded ui  $'+(solePriceWts)){
                  
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
                             
                             
                                
                         
                             client.channels.get('772833340327329812').send(soleEmbed)
                         
                                 
                                
                             }
                             else if(message.content.toString().toLowerCase()==='upgraded ui  $'+(solePriceWts)){
                  
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
                                 
                                 
                                    
                             
                                 client.channels.get('772833340327329812').send(soleEmbed)
                             
                                     
                                    
                                 }
                
                                 else if(message.content.toString().toLowerCase()==='wts sole upgraded ui '+(solePriceWts/1000)+'k'){
                  
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
                                     
                                     
                                        
                                 
                                     client.channels.get('772833340327329812').send(soleEmbed)
                                 
                                         
                                        
                                     }
  });
  
}
function wrathWts(arguments, receivedMessage) {

    wrathWTsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts wrath '+(wrathWTsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(wrathEmbed)
  
          
         
      }
     else if(message.content.toString().toLowerCase()==='wts wrath july renewal '+(wrathWTsPrice/1000)+'k'){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(wrathEmbed)
     
             
            
         }

         else if(message.content.toString().toLowerCase()==='wts wrath jan renewal '+(wrathWTsPrice/1000)+'k'){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(wrathEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts wrath renew $'+(wrathWTsPrice)){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(wrathEmbed)
             
                     
                    
                 }
               else if(message.content.toString().toLowerCase()==='wts wrath $'+(wrathWTsPrice)){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(wrathEmbed)
                 
                         
                        
                     }
                     else if(message.content.toString().toLowerCase()==='wts wrath lt $'+(wrathWTsPrice)){
  
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
                         
                         
                            
                     
                         client.channels.get('772833340327329812').send(wrathEmbed)
                     
                             
                            
                         }
                         else if(message.content.toString().toLowerCase()==='wts wrath lt '+(wrathWTsPrice)){
  
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
                             
                             
                                
                         
                             client.channels.get('772833340327329812').send(wrathEmbed)
                         
                                 
                                
                             }
                         else if(message.content.toString().toLowerCase()==='wts wrath lifetime $'+(wrathWTsPrice)){
  
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
                             
                             
                                
                         
                             client.channels.get('772833340327329812').send(wrathEmbed)
                         
                                 
                                
                             }
                             else if(message.content.toString().toLowerCase()==='wts wrath lt '+(wrathWTsPrice/1000)+'k'){
  
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
                                 
                                 
                                    
                             
                                 client.channels.get('772833340327329812').send(wrathEmbed)
                             
                                     
                                    
                                 }

                                 else if(message.content.toString().toLowerCase()==='wts wrath $'+(wrathWTsPrice/1000)+'k'){
  
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
                                     
                                     
                                        
                                 
                                     client.channels.get('772833340327329812').send(wrathEmbed)
                                 
                                         
                                        
                                     }

                                     else if(message.content.toString().toLowerCase()==='wts wrath lt $'+(wrathWTsPrice/1000)+'k'){
  
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
                                         
                                         
                                            
                                     
                                         client.channels.get('772833340327329812').send(wrathEmbed)
                                     
                                             
                                            
                                         }

                                      else if(message.content.toString().toLowerCase()==='wts wrath '+(wrathWTsPrice/1000)+'k'){
  
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
                                             
                                             
                                                
                                         
                                             client.channels.get('772833340327329812').send(wrathEmbed)
                                         
                                                 
                                                
                                             }                                        
        
  });
  
}
function veloxWts(arguments, receivedMessage) {

    veloxWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts velox '+(veloxWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(veloxEmbed)
  
          
         
      }

      else if(message.content.toString().toLowerCase()==='wts velox $'+(veloxWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(veloxEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts velox $'+(veloxWtsPrice/1000)+'k'){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(veloxEmbed)
         
                 
                
             }
  
    
  });
  
}
function mekWts(arguments, receivedMessage) {

    mekWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts mek '+(mekWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(mekEmbed)
  
          
         
      }

     else if(message.content.toString().toLowerCase()==='wts mek '+(mekWtsPrice)+'$'){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(mekEmbed)
     
             
            
         }

      

   
                 else if(message.content.toString().toLowerCase()==='wts mek '+(mekWtsPrice)+'k'){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(mekEmbed)
                 
                         
                        
                     }
                     
                 else if(message.content.toString().toLowerCase()==='wts mek $'+(mekWtsPrice)){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(mekEmbed)
                 
                         
                        
                     }


                    //sas
                    if(message.content.toString().toLowerCase()==='wts mekpreme '+(mekWtsPrice)){
  
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
                         
                         
                            
                     
                         client.channels.get('772833340327329812').send(mekEmbed)
                     
                             
                            
                         }
                   
                        else if(message.content.toString().toLowerCase()==='wts mekpreme '+(mekWtsPrice)+'$'){
                     
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
                            
                            
                               
                        
                            client.channels.get('772833340327329812').send(mekEmbed)
                        
                                
                               
                            }
                   
                         
                   
                      
                                    else if(message.content.toString().toLowerCase()==='wts mekpreme '+(mekWtsPrice)+'k'){
                     
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
                                        
                                        
                                           
                                    
                                        client.channels.get('772833340327329812').send(mekEmbed)
                                    
                                            
                                           
                                        }
                                        
                                    else if(message.content.toString().toLowerCase()==='wts mekpreme $'+(mekWtsPrice)){
                     
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
                                        
                                        
                                           
                                    
                                        client.channels.get('772833340327329812').send(mekEmbed)
                                    
                                            
                                           
                                        }
                                         
     
  
    
  });
  
}
function prismWts(arguments, receivedMessage) {

    prismWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts prism '+(prismWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(prismEmbed)
  
          
         
      }

     else if(message.content.toString().toLowerCase()==='wts prism $'+(prismWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(prismEmbed)
     
             
            
         }

        else if(message.content.toString().toLowerCase()==='wts prism '+(prismWtsPrice/1000)+'k'){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(prismEmbed)
         
                 
                
             }
         
            else if(message.content.toString().toLowerCase()==='wts prism renewal $'+(prismWtsPrice)){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(prismEmbed)
             
                     
                    
                 }
                 else if(message.content.toString().toLowerCase()==='wts prism renewal '+(prismWtsPrice)){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(prismEmbed)
                 
                         
                        
                     }
                     else if(message.content.toString().toLowerCase()==='wts prism renewal '+(prismWtsPrice/1000)+'k'){
  
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
                         
                         
                            
                     
                         client.channels.get('772833340327329812').send(prismEmbed)
                     
                             
                            
                         }
  
    
  });
  
}
function polarisWts(arguments, receivedMessage) {

    polarisWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts polaris '+(polarisWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(poalrisEmbed)
  
          
         
      }
     else if(message.content.toString().toLowerCase()==='wts polaris €80 Renewal $'+(polarisWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(poalrisEmbed)
     
             
            
         }

         else if(message.content.toString().toLowerCase()==='wts polaris €80 Renewal jan $'+(polarisWtsPrice)){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(poalrisEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts polaris 80 Renewal '+(polarisWtsPrice)){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(poalrisEmbed)
             
                     
                    
                 }
               else if(message.content.toString().toLowerCase()==='wts polaris $'+(polarisWtsPrice)){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(poalrisEmbed)
                 
                         
                        
                     }

                   else if(message.content.toString().toLowerCase()==='wts polaris '+(polarisWtsPrice/1000)+'k'){
  
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
                         
                         
                            
                     
                         client.channels.get('772833340327329812').send(poalrisEmbed)
                     
                             
                            
                         }

                         else if(message.content.toString().toLowerCase()==='wts polaris $'+(polarisWtsPrice/1000)+'k'){
  
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
                             
                             
                                
                         
                             client.channels.get('772833340327329812').send(poalrisEmbed)
                         
                                 
                                
                             }

                             else if(message.content.toString().toLowerCase()==='wts polaris 80/6 $'+(polarisWtsPrice/1000)+'k'){
  
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
                                 
                                 
                                    
                             
                                 client.channels.get('772833340327329812').send(poalrisEmbed)
                             
                                     
                                    
                                 }
                                 else if(message.content.toString().toLowerCase()==='wts polaris 80/6 '+(polarisWtsPrice/1000)+'k'){
  
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
                                     
                                     
                                        
                                 
                                     client.channels.get('772833340327329812').send(poalrisEmbed)
                                 
                                         
                                        
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
      
      
         
  
         client.channels.get('772833340327329812').send(sfEmbed)
  
          
         
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
         
         
            
     
         client.channels.get('772833340327329812').send(sfEmbed)
     
             
            
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
             
             
                
         
             client.channels.get('772833340327329812').send(sfEmbed)
         
                 
                
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(sfEmbed)
             
                     
                    
                 }
  
    
  });
  
}
function pdWts(arguments, receivedMessage) {

    pdWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()=== 'wts pd '+(pdWtsPrice)) {
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(pdEmbed)
  
          
         
      } else if(message.content.toString().toLowerCase()=== 'wts prodject destroyer '+(pdWtsPrice)) {
          
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
      
      
         
  
         client.channels.get('772833340327329812').send(pdEmbed)
  
  
             
            
         }
         else if(message.content.toString().toLowerCase()=== 'wts pd $'+(pdWtsPrice)) {
          
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
             
             
                
         
                client.channels.get('772833340327329812').send(pdEmbed)
         
         
                    
                   
                }
                else if(message.content.toString().toLowerCase()=== 'wts pd monthly $'+(pdWtsPrice)) {
          
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
                     
                     
                        
                 
                        client.channels.get('772833340327329812').send(pdEmbed)
                 
                 
                            
                           
                        }
                        else if(message.content.toString().toLowerCase()=== 'wts pd monthly '+(pdWtsPrice)) {
          
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
                             
                             
                                
                         
                                client.channels.get('772833340327329812').send(pdEmbed)
                         
                         
                                    
                                   
                                }
                                else if(message.content.toString().toLowerCase()=== 'wts pd 150/60 $'+(pdWtsPrice)) {
          
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
                                     
                                     
                                        
                                 
                                        client.channels.get('772833340327329812').send(pdEmbed)
                                 
                                 
                                            
                                           
                                        }
                                        else if(message.content.toString().toLowerCase()=== 'wts pd 150/60 '+(pdWtsPrice)) {
          
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
                                             
                                             
                                                
                                         
                                                client.channels.get('772833340327329812').send(pdEmbed)
                                         
                                         
                                                    
                                                   
                                                }
    
  });
  
}
function dasheWts(arguments, receivedMessage) {

    dasheWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts dashe '+(dasheWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(dasheEmbed)
  
          
         
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
         
         
            
     
         client.channels.get('772833340327329812').send(dasheEmbed)
     
             
            
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
             
             
                
         
             client.channels.get('772833340327329812').send(dasheEmbed)
         
                 
                
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
             
             
                
         
             client.channels.get('772833340327329812').send(dasheEmbed)
         
                 
                
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(dasheEmbed)
             
                     
                    
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(dasheEmbed)
                 
                         
                        
                     }
    
  });
  
}
function tohruWts(arguments, receivedMessage) {

    tohruWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts tohru '+(tohruWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(tohruEmbed)
  
          
         
      }

     else if(message.content.toString().toLowerCase()==='wts tohru $'+(tohruWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(tohruEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts tohru '+(tohruWtsPrice/1000)+'k'){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(tohruEmbed)
         
                 
                
             
            }
            else if(message.content.toString().toLowerCase()==='wts tohru '+(tohruWtsPrice/1000)){
     
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
                
                
                   
            
                client.channels.get('772833340327329812').send(tohruEmbed)
            
                    
                   
                }
                else if(message.content.toString().toLowerCase()==='wts tohru $'+(tohruWtsPrice/1000)+'k'){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(tohruEmbed)
                 
                         
                        
                     
                    }

                    else if(message.content.toString().toLowerCase()==='wts tohru '+(tohruWtsPrice/1000)+'k'){
  
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
                         
                         
                            
                     
                         client.channels.get('772833340327329812').send(tohruEmbed)
                     
                             
                            
                         
                        }
  });
  
}
function phantomWts(arguments, receivedMessage) {

    phantomWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts phantom '+(phantomWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(PhantomEmbed)
  
          
         
      }
     else if(message.content.toString().toLowerCase()==='wts phantom $60/6 '+(phantomWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(PhantomEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts phantom $60/6 - '+(phantomWtsPrice)){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(PhantomEmbed)
         
                 
                
             }

             else if(message.content.toString().toLowerCase()==='wts phantom 60/6 $'+(phantomWtsPrice)){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(PhantomEmbed)
             
                     
                    
                 }
  });
  
}
function adeptWts(arguments, receivedMessage) {

    adeptWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts adept '+(adeptWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(adeptEmbed)
  
          
         
      }
     else if(message.content.toString().toLowerCase()==='wts adept $'+(adeptWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(adeptEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts adept renewal $'+(adeptWtsPrice)){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(adeptEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts adept lt $'+(adeptWtsPrice)){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(adeptEmbed)
             
                     
                    
                 }
                 else if(message.content.toString().toLowerCase()==='wts adept lt '+(adeptWtsPrice)+'$'){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(adeptEmbed)
                 
                         
                        
                     }
                     else if(message.content.toString().toLowerCase()==='wts adept renewal - $'+(adeptWtsPrice)){
  
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
                         
                         
                            
                     
                         client.channels.get('772833340327329812').send(adeptEmbed)
                     
                             
                            
                         }
  });
  
}
function burstWts(arguments, receivedMessage) {

    burstWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts burst '+(burstWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(burstEmbed)
  
          
         
      }
     else if(message.content.toString().toLowerCase()==='wts burst $'+(burstWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(burstEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts burstaio $'+(burstWtsPrice)){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(burstEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts burst renewal $'+(burstWtsPrice)){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(burstEmbed)
             
                     
                    
                 }
  });
  
}
function cyberWts(arguments, receivedMessage) {

    cyberWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts cyber '+(cyberWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(cyberEmbed)
  
          
         
      }

          
     else if(message.content.toString().toLowerCase()==='wts cyber $'+(cyberWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(cyberEmbed)
     
             
            
         }
       
         else if(message.content.toString().toLowerCase()==='wts cyber renewal $'+(cyberWtsPrice)){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(cyberEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts cyber renewal $'+(cyberWtsPrice/100)+'k'){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(cyberEmbed)
             
                     
                    
                 }

                 else if(message.content.toString().toLowerCase()==='wts cyber renewal '+(cyberWtsPrice/100)+'k'){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(cyberEmbed)
                 
                         
                        
                     }

                     else if(message.content.toString().toLowerCase()==='wts cyber '+(cyberWtsPrice/100)+'k'){
  
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
                         
                         
                            
                     
                         client.channels.get('772833340327329812').send(cyberEmbed)
                     
                             
                            
                         }
  });
  
}
function estockWts(arguments, receivedMessage) {

    estockWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts estock '+(estockWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(estockEmbed)
  
          
         
      }
   
     else if(message.content.toString().toLowerCase()==='wts estock $'+(estockWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(estockEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts estock $'+(estockWtsPrice/1000)+'k'){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(estockEmbed)
         
                 
                
             }
     
    
  });
  
}
function eveWts(arguments, receivedMessage) {

    estockWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts eve '+(eveWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(eveEmbed)
  
          
         
      }

     else if(message.content.toString().toLowerCase()==='wts eve $'+(eveWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(eveEmbed)
     
             
            
         }

         else if(message.content.toString().toLowerCase()==='wts eve lt for $'+(eveWtsPrice)){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(eveEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts eve lifetime with everything $'+(eveWtsPrice)){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(eveEmbed)
             
                     
                    
                 }
    
  });
  
}
function galaxioWts(arguments, receivedMessage) {

    galaxsioWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts galaxsio '+(galaxsioWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(glaxsioEmbed)
  
          
         
      }
      else if(message.content.toString().toLowerCase()==='wts galaxsio $'+(galaxsioWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(glaxsioEmbed)
     
             
            
         }

         else if(message.content.toString().toLowerCase()==='wts galaxsio lifetime $'+(galaxsioWtsPrice)){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(glaxsioEmbed)
         
                 
                
             }
         
             else if(message.content.toString().toLowerCase()==='wts galaxsio lifetime $'+(galaxsioWtsPrice/1000)+'k'){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(glaxsioEmbed)
             
                     
                    
                 }

                 else if(message.content.toString().toLowerCase()==='wts galaxsio lt $'+(galaxsioWtsPrice/1000)+'k'){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(glaxsioEmbed)
                 
                         
                        
                     }

                     else if(message.content.toString().toLowerCase()==='wts galaxsio $'+(galaxsioWtsPrice/1000)+'k'){
  
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
                         
                         
                            
                     
                         client.channels.get('772833340327329812').send(glaxsioEmbed)
                     
                             
                            
                         }

                           else if(message.content.toString().toLowerCase()==='wts galaxsio $'+(galaxsioWtsPrice/1000)+'k'){
  
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
                         
                         
                            
                     
                         client.channels.get('772833340327329812').send(glaxsioEmbed)
                     
                             
                            
                         }
    
  });
  
}
function hawkWts(arguments, receivedMessage) {

    hawkWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts hawkmesh '+(hawkWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(hawkEmbed)
  
      }
     
     else if(message.content.toString().toLowerCase()==='wts hawkmesh lifetime '+(hawkWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(hawkEmbed)
     
         }
        
         else if(message.content.toString().toLowerCase()==='wts hawkmesh lifetime $'+(hawkWtsPrice)){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(hawkEmbed)
         
             }
             else if(message.content.toString().toLowerCase()==='wts hawkmesh renewal '+(hawkWtsPrice)){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(hawkEmbed)
             
                 }

                 else if(message.content.toString().toLowerCase()==='wts hawkmesh renewal $'+(hawkWtsPrice)){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(hawkEmbed)
                 
                     }

                     
                 else if(message.content.toString().toLowerCase()==='wts hawk renewal $'+(hawkWtsPrice)){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(hawkEmbed)
                 
                     }
  });
  
}
function ganeshWts(arguments, receivedMessage) {

    ganeshWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts ganesh '+(ganeshWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(ganeshEmbed)
  
          
         
      }
      else if(message.content.toString().toLowerCase()==='wts ganesh $'+(ganeshWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(ganeshEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts lifetime $'+(ganeshWtsPrice)){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(ganeshEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts ganesh renewal $'+(ganeshWtsPrice)){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(ganeshEmbed)
             
                     
                    
                 }
                 else if(message.content.toString().toLowerCase()==='wts ganesh lt $'+(ganeshWtsPrice)){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(ganeshEmbed)
                 
                         
                        
                     }
                     else if(message.content.toString().toLowerCase()==='wts ganesh lt '+(ganeshWtsPrice)){
  
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
                         
                         
                            
                     
                         client.channels.get('772833340327329812').send(ganeshEmbed)
                     
                             
                            
                         }
                     
    
  });
  
}
function hayhaWts(arguments, receivedMessage) {

    hayhaWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts hayha '+(hayhaWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(hayhaEmbed)
  
          
         
      }
      else if(message.content.toString().toLowerCase()==='wts hayha 20/m '+(hayhaWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(hayhaEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts hayha $'+(hayhaWtsPrice)){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(hayhaEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts hayha $'+(hayhaWtsPrice/1000)){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(hayhaEmbed)
             
                     
                    
                 }
                 else if(message.content.toString().toLowerCase()==='wts hayha $'+(hayhaWtsPrice/1000)+'k'){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(hayhaEmbed)
                 
                         
                        
                     }
             else if(message.content.toString().toLowerCase()==='wts hayha 20/m $'+(hayhaWtsPrice/1000)+'k'){
  
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
                 
                 
                    
             
                 client.channels.get('772833340327329812').send(hayhaEmbed)
             
                     
                    
                 }
                   else if(message.content.toString().toLowerCase()==='wts hayha 20/m '+(hayhaWtsPrice)){
  
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
         
         
            
     
         client.channels.get('772833340327329812').send(hayhaEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts hayha 20/m $'+(hayhaWtsPrice)){
  
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
             
             
                
         
             client.channels.get('772833340327329812').send(hayhaEmbed)
         
                 
                
             }
            
                 //asd
                 else if(message.content.toString().toLowerCase()==='wts hayha 30/m '+(hayhaWtsPrice)){
  
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
                     
                     
                        
                 
                     client.channels.get('772833340327329812').send(hayhaEmbed)
                 
                         
                        
                     }
                     else if(message.content.toString().toLowerCase()==='wts hayha 30/m $'+(hayhaWtsPrice)){
              
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
                         
                         
                            
                     
                         client.channels.get('772833340327329812').send(hayhaEmbed)
                     
                             
                            
                         }
                         else if(message.content.toString().toLowerCase()==='wts hayha 30/m $'+(hayhaWtsPrice/1000)+'k'){
              
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
                             
                             
                                
                         
                             client.channels.get('772833340327329812').send(hayhaEmbed)
                         
                                 
                                
                             }
  });
  
}
function kiloWts(arguments, receivedMessage) { 

    kiloWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts kilo '+(kiloWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(kiloEmbed)
  
          
         
      }
      else if(message.content.toString().toLowerCase()==='wts kilo renewal $'+(kiloWtsPrice)){
  
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
         
         
            
     
            client.channels.get('772833340327329812').send(kiloEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts kilo renewal '+(kiloWtsPrice)+'$'){
  
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
             
             
                
         
                client.channels.get('772833340327329812').send(kiloEmbed)
         
                 
                
             }

             else if(message.content.toString().toLowerCase()==='wts kilo $'+(kiloWtsPrice)){
  
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
                 
                 
                    
             
                    client.channels.get('772833340327329812').send(kiloEmbed)
             
                     
                 }
                 else if(message.content.toString().toLowerCase()==='wts kilo 20/m $'+(kiloWtsPrice)){
  
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
                     
                     
                        
                 
                        client.channels.get('772833340327329812').send(kiloEmbed)
                 
                         
                     }
  });
  
}
function flareWts(arguments, receivedMessage) {

    flareWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts flare '+(flareWtsPrice)){
  
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
      
      
         
  
            client.channels.get('772833340327329812').send(FlareEmbed)
  
          
         
      }
      else if(message.content.toString().toLowerCase()==='wts flare monthly renewal €'+(flareWtsPrice)){
  
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
             .addField('Price','$'+flareWtsPrice*1.18+' - '+'€'+flareWtsPrice  +' - '+'¥' +flareWtsPrice*7.82, true )
             .addField('Seller', message.author.tag,true )
     
             .addField('Link To Seller', hyperSeller2)
   
             .addField('Link To Listing',hyperListing2 )
     
     
     
             .setTimestamp()
             .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
         
         
            
     
            client.channels.get('772833340327329812').send(FlareEmbed)
     
             
            
         }
        else if(message.content.toString().toLowerCase()==='wts flare $'+(flareWtsPrice)){
  
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
             
             
                
         
                   client.channels.get('772833340327329812').send(FlareEmbed)
         
                 
                
             }
            else if(message.content.toString().toLowerCase()==='wts flare lifetime $'+(flareWtsPrice)){
  
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
                 
                 
                    
             
                       client.channels.get('772833340327329812').send(FlareEmbed)
             
                     
                    
                 }
                 else if(message.content.toString().toLowerCase()==='wts flare lifetime €'+(flareWtsPrice)){
  
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
                         .addField('Price','$'+flareWtsPrice*1.18+' - '+'€'+flareWtsPrice  +' - '+'¥' +flareWtsPrice*7.82, true )
                         .addField('Seller', message.author.tag,true )
                 
                         .addField('Link To Seller', hyperSeller2)
               
                         .addField('Link To Listing',hyperListing2 )
                 
                 
                 
                         .setTimestamp()
                         .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                     
                     
                        
                 
                           client.channels.get('772833340327329812').send(FlareEmbed)
                 
                         
                        
                     }
                     else if(message.content.toString().toLowerCase()==='wts flare renewal €'+(flareWtsPrice)){
  
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
                             .addField('Price','$'+flareWtsPrice*1.18+' - '+'€'+flareWtsPrice  +' - '+'¥' +flareWtsPrice*7.82, true )
                             .addField('Seller', message.author.tag,true )
                     
                             .addField('Link To Seller', hyperSeller2)
                   
                             .addField('Link To Listing',hyperListing2 )
                     
                     
                     
                             .setTimestamp()
                             .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                         
                         
                            
                     
                               client.channels.get('772833340327329812').send(FlareEmbed)
                     
                             
                            
                         }
  });
  
}
function fleekWts(arguments, receivedMessage) {

    fleekWtsPrice=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wts fleek '+(fleekWtsPrice)){
  
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
      
      
         
  
         client.channels.get('772833340327329812').send(fleekEmbed)
  
          
         
      }
   
     else if(message.content.toString().toLowerCase()==='wts fleek $'+(fleekWtsPrice)){
  
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
         
         
            
     
            client.channels.get('772833340327329812').send(fleekEmbed)
     
             
            
         }
         else if(message.content.toString().toLowerCase()==='wts fleek renewal $'+(fleekWtsPrice)){
  
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
             
             
                
         
                client.channels.get('772833340327329812').send(fleekEmbed)
         
                 
                
             }
             else if(message.content.toString().toLowerCase()==='wts fleek renewal €'+(fleekWtsPrice)){
  
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
                     .addField('Price','$'+fleekWtsPrice*1.18+' - '+'€'+fleekWtsPrice  +' - '+'¥' +fleekWtsPrice*7.82, true )
                     .addField('Seller', message.author.tag,true )
             
                     .addField('Link To Seller', hyperSeller2)
           
                     .addField('Link To Listing',hyperListing2 )
             
             
             
                     .setTimestamp()
                     .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                 
                 
                    
             
                    client.channels.get('772833340327329812').send(fleekEmbed)
             
                     
                    
                 }
                 else if(message.content.toString().toLowerCase()==='wts fleek €'+(fleekWtsPrice)){
  
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
                         .addField('Price','$'+fleekWtsPrice*1.18+' - '+'€'+fleekWtsPrice  +' - '+'¥' +fleekWtsPrice*7.82, true )
                         .addField('Seller', message.author.tag,true )
                 
                         .addField('Link To Seller', hyperSeller2)
               
                         .addField('Link To Listing',hyperListing2 )
                 
                 
                 
                         .setTimestamp()
                         .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                     
                     
                        
                 
                        client.channels.get('772833340327329812').send(fleekEmbed)
                 
                         
                        
                     }

                     else if(message.content.toString().toLowerCase()==='wts fleek lt €'+(fleekWtsPrice)){
  
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
                             .addField('Price','$'+fleekWtsPrice*1.18+' - '+'€'+fleekWtsPrice  +' - '+'¥' +fleekWtsPrice*7.82, true )
                             .addField('Seller', message.author.tag,true )
                     
                             .addField('Link To Seller', hyperSeller2)
                   
                             .addField('Link To Listing',hyperListing2 )
                     
                     
                     
                             .setTimestamp()
                             .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                         
                         
                            
                     
                            client.channels.get('772833340327329812').send(fleekEmbed)
                     
                             
                            
                         }
                         else if(message.content.toString().toLowerCase()==='wts fleek lifetime €'+(fleekWtsPrice)){
  
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
                                 .addField('Price','$'+fleekWtsPrice*1.18+' - '+'€'+fleekWtsPrice  +' - '+'¥' +fleekWtsPrice*7.82, true )
                                 .addField('Seller', message.author.tag,true )
                         
                                 .addField('Link To Seller', hyperSeller2)
                       
                                 .addField('Link To Listing',hyperListing2 )
                         
                         
                         
                                 .setTimestamp()
                                 .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                             
                             
                                
                         
                                client.channels.get('772833340327329812').send(fleekEmbed)
                         
                                 
                                
                             }
                             else if(message.content.toString().toLowerCase()==='wts fleek renew €'+(fleekWtsPrice)){
  
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
                                     .addField('Price','$'+fleekWtsPrice*1.18+' - '+'€'+fleekWtsPrice  +' - '+'¥' +fleekWtsPrice*7.82, true )
                                     .addField('Seller', message.author.tag,true )
                             
                                     .addField('Link To Seller', hyperSeller2)
                           
                                     .addField('Link To Listing',hyperListing2 )
                             
                             
                             
                                     .setTimestamp()
                                     .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                                 
                                 
                                    
                             
                                    client.channels.get('772833340327329812').send(fleekEmbed)
                             
                                     
                                    
                                 }
                                 else if(message.content.toString().toLowerCase()==='wts fresh fleek €'+(fleekWtsPrice)){
  
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
                                         .addField('Price','$'+fleekWtsPrice*1.18+' - '+'€'+fleekWtsPrice  +' - '+'¥' +fleekWtsPrice*7.82, true )
                                         .addField('Seller', message.author.tag,true )
                                 
                                         .addField('Link To Seller', hyperSeller2)
                               
                                         .addField('Link To Listing',hyperListing2 )
                                 
                                 
                                 
                                         .setTimestamp()
                                         .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                                     
                                     
                                        
                                 
                                        client.channels.get('772833340327329812').send(fleekEmbed)
                                 
                                         
                                        
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
      
      
         
  
         client.channels.get('772833340327329812').send(nebulaEmbed)
  
          
         
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
         
         
            
     
            client.channels.get('772833340327329812').send(nebulaEmbed)
     
             
            
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
             
             
                
         
                client.channels.get('772833340327329812').send(nebulaEmbed)
         
                 
                
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
                 
                 
                    
             
                    client.channels.get('772833340327329812').send(nebulaEmbed)
             
                     
                    
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
      
      
         
  
         user.channels.get('772833340327329812').send(customEmbed)
  
          
         
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
         
         
            
     
            user.channels.get('772833340327329812').send(customEmbed)
     
             
            
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
             
             
                
         
                user.channels.get('772833340327329812').send(customEmbed)
         
                 
                
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
                 
                 
                    
             
                    user.channels.get('772833340327329812').send(customEmbed)
             
                     
                    
                 }
     
    
  });
  
}
function  clearAll(arguments, receivedMessage) {

   
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
});




