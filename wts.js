const Discord = require('discord.js');
const user = new Discord.Client();
const client = new Discord.Client();


// Replace BOT_TOKEN with your bot account's token


var wtsChannelId = '750508273790353450' //change this channel ID for each group where the wts will be posted
var wtbChannelId = '750508444397862984' //change this channel ID for each group where the wtb will be posted


var userId = null
var messageId = null
var channelId = null
var serverId = null

var balkoPriceWts = null
var f3PriceWts = null
var rushPriceWts = null
var mercuryPriceWts = null
var solePriceWts = null
var wrathWTsPrice = null
var veloxWtsPrice = null
var mekWtsPrice = null
var prismWtsPrice = null
var polarisWtsPrice = null
var splashForceWtsPrice = null
var pdWtsPrice = null
var dasheWtsPrice = null
var tohruWtsPrice = null
var phantomWtsPrice = null
var adeptWtsPrice = null
var burstWtsPrice = null
var cyberWtsPrice = null
var estockWtsPrice = null
var eveWtsPrice = null
var galaxsioWtsPrice = null
var hawkWtsPrice = null
var ganeshWtsPrice = null
var hayhaWtsPrice = null
var kiloWtsPrice = null
var flareWtsPrice = null
var fleekWtsPrice = null
var nebulaWtsPrice = null
var customWtsPrice = null
var customBotWtsPrice = null

var balkoPriceWtsmin = null
var f3PriceWtsmin = null
var rushPriceWtsmin = null
var mercuryPriceWtsmin = null
var solePriceWtsmin = null
var wrathWTsPricemin = null
var veloxWtsPricemin = null
var mekWtsPricemin = null
var prismWtsPricemin = null
var polarisWtsPricemin = null
var splashForceWtsPricemin = null
var pdWtsPricemin = null
var dasheWtsPricemin = null
var tohruWtsPricemin = null
var phantomWtsPricemin = null
var adeptWtsPricemin = null
var burstWtsPricemin = null
var cyberWtsPricemin = null
var estockWtsPricemin = null
var eveWtsPricemin = null
var galaxsioWtsPricemin = null
var hawkWtsPricemin = null
var ganeshWtsPricemin = null
var hayhaWtsPricemin = null
var kiloWtsPricemin = null
var flareWtsPricemin = null
var fleekWtsPricemin = null
var nebulaWtsPricemin = null

//split for wtb vars

var balkoPriceWtb = null
var f3PriceWtb = null
var rushPriceWtb = null
var mercuryPriceWtb = null
var solePriceWtb = null
var wrathWtbPrice = null
var veloxWtbPrice = null
var mekWtbPrice = null
var prismWtbPrice = null
var polarisWtbPrice = null
var splashForceWtbPrice = null
var pdWtbPrice = null
var dasheWtbPrice = null
var tohruWtbPrice = null
var phantomWtbPrice = null
var adeptWtbPrice = null
var burstWtbPrice = null
var cyberWtbPrice = null
var estockWtbPrice = null
var eveWtbPrice = null
var galaxsioWtbPrice = null
var hawkWtbPrice = null
var ganeshWtbPrice = null
var hayhaWtbPrice = null
var kiloWtbPrice = null
var flareWtbPrice = null
var fleekWtbPrice = null
var nebulaWtbPrice = null
var customWtbPrice = null
var customBotWtbPrice = null


var balkoPriceWtbmin = null
var f3PriceWtbmin = null
var rushPriceWtbmin = null
var mercuryPriceWtbmin = null
var solePriceWtbmin = null
var wrathWtbPricemin = null
var veloxWtbPricemin = null
var mekWtbPricemin = null
var prismWtbPricemin = null
var polarisWtbPricemin = null
var splashForceWtbPricemin = null
var pdWtbPricemin = null
var dasheWtbPricemin = null
var tohruWtbPricemin = null
var phantomWtbPricemin = null
var adeptWtbPricemin = null
var burstWtbPricemin = null
var cyberWtbPricemin = null
var estockWtbPricemin = null
var eveWtbPricemin = null
var galaxsioWtbPricemin = null
var hawkWtbPricemin = null
var ganeshWtbPricemin = null
var hayhaWtbPricemin = null
var kiloWtbPricemin = null
var flareWtbPricemin = null
var fleekWtbPricemin = null
var nebulaWtbPricemin = null
var customWtbPricemin = null
var customBotWtbPricemin = null



user.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

client.on('message', (receivedMessage) => {


    if(receivedMessage.author == user.user) { // Prevent bot from responding to its own messages
        return
    }

    if(receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }




    function processCommand(receivedMessage) {
        let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
        let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
        let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
        let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

        console.log("Command received: " + primaryCommand)
        console.log("Arguments: " + arguments) // There may not be any arguments



        if(receivedMessage.member.roles.some(role => role.name === 'Owner' || 'Administrator' || 'Support')) { //This is used so only certian roles can use the bot change it for every group, use the name of the role



            if(primaryCommand == "commands") {



                commandEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('KubeIO Bot Marketplace Wts/Wtb Monitor')
                    .setDescription('Commands:')
                    .addField('!custombotwts (Bot Name Here)', 'This will add a custom monitor for a bot WTS name add a space after custombotwts , you will also have to add the price in another command or this wont work.')
                    .addField('!custombotwtsprice (Price Here)', 'This will add a custom monitor for a bot WTS name add a space after custombotwtsprice.')
                    .addField('!(Bot Name Here)wts (Price Here)', 'This will set a WTS monitor max make sure the price is more than the min.')
                    .addField('!(Bot Name Here)wtb (Price Here)', 'This will set a WTB monitor for make sure the price is more than the min.')
                    .addField('!(Bot Name Here)wtsmin (Price Here)', 'This will set a WTS monitor min price make sure it is less than the max price')
                    .addField('!(Bot Name Here)wtbmin (Price Here)', 'This will set a WTB monitor min price make sure it is less than the max price')
                    .addField('!custombotwts (Bot Name Here)', 'This will add a custom monitor for a bot WTS name add a space after custombotwts , you will also have to add the price in another command or this wont work.')
                    .addField('!custombotwtsprice (Price Here)', 'This will add a custom monitor for a bot WTS name add a space after custombotwtsprice.')
                    .addField('!clearallwts', 'This command will clear all wts monitors')
                    .addField('!clearallwtb', 'This command will clear all wtb monitors')
                    .addField('!clearall', 'This command will clear all monitors')
                    .addField('!current,!current2,!current3', 'This command will show all current bots values')
                    .addField('Replacing A Monitor', 'To replace a monitor simply do the setting commands above and use a different price')

                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(commandEmbed)

            } else if(primaryCommand == "balkowts") {
                balkoWts(arguments, receivedMessage)
                balkoPriceWts = arguments
                BalkoEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Balko WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(BalkoEmbed)



            } else if(primaryCommand == "balkowtsmin") {
                balkoWts(arguments, receivedMessage)

                BalkoEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Balko WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(BalkoEmbed)




            } else if(primaryCommand == "f3wtsmin") {
                f3Wts(arguments, receivedMessage)

                f3Sucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('F3 WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(f3Sucess)
            } else if(primaryCommand == "current2") {

                Current2 = new Discord.RichEmbed()

                    .setColor('#f9475d')

                    .setTitle('Current monitor')

                    .addField('GaneshWts', 'max ' + ganeshWtsPrice + ' min ' + ganeshWtsPricemin)
                    .addField('GaneshWtb', 'max ' + ganeshWtbPrice + ' min ' + ganeshWtbPricemin)
                    .addField('HayhaWts', 'max ' + tohruWtbPrice + ' min ' + tohruWtbPricemin)
                    .addField('HayhaWtb', 'max ' + hayhaWtbPrice + ' min ' + tohruWtbPricemin)
                    .addField('KiloWts', 'max ' + kiloWtsPrice + ' min ' + kiloWtsPricemin)
                    .addField('KiloWtb', 'max ' + kiloWtbPrice + ' min ' + kiloWtbPricemin)
                    .addField('FlareWts', 'max ' + flareWtsPrice + ' min ' + flareWtsPricemin)
                    .addField('FlareWtb', 'max ' + flareWtbPrice + ' min ' + flareWtbPricemin)
                    .addField('FleekWts', 'max ' + fleekWtsPrice + ' min ' + fleekWtsPricemin)
                    .addField('FleekWtb', 'max ' + fleekWtbPrice + ' min ' + fleekWtbPricemin)
                    .addField('NebulaWts', 'max ' + nebulaWtsPrice + ' min ' + nebulaWtsPricemin)
                    .addField('NebulaWtb', 'max ' + nebulaWtbPrice + ' min ' + nebulaWtbPricemin)
                    .addField('SFWts', 'max ' + splashForceWtsPrice + ' min ' + splashForceWtsPricemin)
                    .addField('SFWtb', 'max ' + splashForceWtbPrice + ' min ' + splashForceWtbPricemin)
                    .addField('pdWts', 'max ' + pdWtsPrice + ' min ' + pdWtsPricemin)
                    .addField('pdWtb', 'max ' + pdWtbPrice + ' min ' + pdWtbPricemin)
                    .addField('PolarisWts', 'max ' + polarisWtsPrice + ' min ' + polarisWtsPrice)
                    .addField('PolarisWtb', 'max ' + polarisWtbPrice + ' min ' + polarisWtbPricemin)
                    .addField('PrismWts', 'max ' + prismWtsPrice + ' min ' + prismWtsPricemin)
                    .addField('PrismWtb', 'max ' + prismWtbPrice + ' min ' + prismWtbPricemin)


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(Current2)



            } else if(primaryCommand == "current") {


                Current = new Discord.RichEmbed()

                    .setColor('#f9475d')

                    .setTitle('Current monitor')
                    .addField('DasheWts', 'max ' + dasheWtsPrice + ' min ' + dasheWtsPricemin)
                    .addField('DasheWtb', 'max ' + dasheWtbPrice + ' min ' + dasheWtbPricemin)
                    .addField('TohruWts', 'max ' + tohruWtsPrice + ' min ' + tohruWtsPricemin)
                    .addField('TohruWtb', 'max ' + tohruWtbPrice + ' min ' + tohruWtbPricemin)
                    .addField('PhantomWts', 'max ' + phantomWtsPrice + ' min ' + phantomWtsPricemin)
                    .addField('PhantomWtb', 'max ' + phantomWtbPrice + ' min ' + phantomWtbPricemin)
                    .addField('AdeptWts', 'max ' + adeptWtsPrice + ' min ' + adeptWtsPrice)
                    .addField('AdeptWtb', 'max ' + adeptWtbPrice + ' min ' + adeptWtbPricemin)
                    .addField('BurstWts', 'max ' + burstWtsPrice + ' min ' + burstWtsPricemin)
                    .addField('BurstWtb', 'max ' + burstWtbPrice + ' min ' + burstWtbPricemin)
                    .addField('CyberWts', 'max ' + cyberWtsPrice + ' min ' + cyberWtsPricemin)
                    .addField('CyberWtb', 'max ' + cyberWtbPrice + ' min ' + cyberWtbPricemin)
                    .addField('EstockWts', 'max ' + estockWtsPrice + ' min ' + estockWtsPricemin)
                    .addField('EstockWtb', 'max ' + estockWtbPrice + ' min ' + estockWtbPricemin)
                    .addField('EveWts', 'max ' + eveWtsPrice + ' min ' + eveWtsPricemin)
                    .addField('EveWtb', 'max ' + eveWtbPrice + ' min ' + eveWtbPricemin)
                    .addField('GalaxsioWts', 'max ' + galaxsioWtsPrice + ' min ' + galaxsioWtsPricemin)
                    .addField('GalaxsioWtb', 'max ' + galaxioWtb + ' min ' + galaxsioWtbPricemin)
                    .addField('HawkWts', 'max ' + hawkWtsPrice + ' min ' + hawkWtsPricemin)
                    .addField('HawkWtb', 'max ' + hawkWtbPrice + ' min ' + hawkWtbPricemin)




                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(Current)



            } else if(primaryCommand == "mercurywtsmin") {
                mercuryWts(arguments, receivedMessage)

                mercurySucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mercury WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mercurySucess)
            } else if(primaryCommand == "current3") {

                Current3 = new Discord.RichEmbed()

                    .setColor('#f9475d')

                    .setTitle('Current monitor')

                    .addField('BalkoWts', 'max ' + balkoPriceWts + ' min ' + balkoPriceWtsmin)
                    .addField('BalkoWtb', 'max ' + balkoPriceWtb + ' min ' + balkoPriceWtbmin)
                    .addField('f3Wts', 'max ' + f3PriceWts + ' min ' + f3PriceWtsmin)
                    .addField('f3Wtb', 'max ' + f3PriceWtb + ' min ' + f3PriceWtbmin)
                    .addField('RushWts', 'max ' + rushPriceWts + ' min ' + rushPriceWtsmin)
                    .addField('RushWtb', 'max ' + rushPriceWtb + ' min ' + rushPriceWtbmin)
                    .addField('MercuryWts', 'max ' + mercuryPriceWts + ' min ' + mercuryPriceWtsmin)
                    .addField('MercuryWtb', 'max ' + mercuryPriceWtb + ' min ' + mercuryPriceWtbmin)
                    .addField('SoleWts', 'max ' + solePriceWts + ' min ' + solePriceWtbmin)
                    .addField('SoleWtb', 'max ' + solePriceWtb + ' min ' + solePriceWtbmin)
                    .addField('WrathWts', 'max ' + wrathWTsPrice + ' min ' + wrathWTsPricemin)
                    .addField('WrathWtb', 'max ' + wrathWtbPrice + ' min ' + wrathWtbPricemin)
                    .addField('VeloxWts', 'max ' + veloxWtsPrice + ' min ' + veloxWtsPricemin)
                    .addField('VeloxWtb', 'max ' + veloxWtbPrice + ' min ' + veloxWtbPricemin)
                    .addField('MekWts', 'max ' + mekWtsPrice + ' min ' + mekWtbPricemin)
                    .addField('MekWtb', 'max ' + mekWtbPrice + ' min ' + mekWtbPricemin)

                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(Current3)



            } else if(primaryCommand == "clearallwts") {
                clearAllWts(arguments, receivedMessage)


                clearAllWts = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('All WTS Monitors Cleared')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(clearAllWts)

            } else if(primaryCommand == "f3wts") {
                f3Wts(arguments, receivedMessage)
                f3PriceWts = arguments
                f3Sucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('F3 WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(f3Sucess)

            } else if(primaryCommand == "rushwtsmin") {
                rushWts(arguments, receivedMessage)

                rushSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Rush WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(rushSucess)



            } else if(primaryCommand == "solewtsmin") {
                soleWts(arguments, receivedMessage)

                soleSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Sole WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(soleSucess)

            } else if(primaryCommand == "wrathwtsmin") {
                wrathWts(arguments, receivedMessage)

                wrathSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Wrath WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(wrathSucess)
            } else if(primaryCommand == "veloxwtsmin") {
                veloxWts(arguments, receivedMessage)

                veloxSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Velox WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(veloxSucess)

            } else if(primaryCommand == "mekwtsmin") {
                mekWts(arguments, receivedMessage)

                mekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mek WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mekSucess)

            } else if(primaryCommand == "prismwtsmin") {
                prismWts(arguments, receivedMessage)

                prismSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prism WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(prismSucess)
            } else if(primaryCommand == "polariswtsmin") {
                polarisWts(arguments, receivedMessage)
                polarisSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Polaris WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(polarisSucess)
            } else if(primaryCommand == "sfwtsmin") {
                splashForceWts(arguments, receivedMessage)

                sfsucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Splash Force WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(sfsucess)
            } else if(primaryCommand == "pdwtsmin") {
                pdWts(arguments, receivedMessage)

                pdSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prodject Destroyer WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(pdSucess)
            } else if(primaryCommand == "dashewtsmin") {
                dasheWts(arguments, receivedMessage)

                DasheSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Dashe WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(DasheSucess)
            } else if(primaryCommand == "tohruwtsmin") {
                tohruWts(arguments, receivedMessage)

                tohruSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Tohru WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(tohruSucess)
            } else if(primaryCommand == "phantomwtsmin") {
                phantomWts(arguments, receivedMessage)

                phantomSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Phantom WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(phantomSucess)
            } else if(primaryCommand == "adeptwtsmin") {


                adeptWts(arguments, receivedMessage)
                adeptSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Adept WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(adeptSucess)

            } else if(primaryCommand == "burstwtsmin") {
                burstWts(arguments, receivedMessage)

                burstSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Burst WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(burstSucess)
            } else if(primaryCommand == "cyberwtsmin") {
                cyberWts(arguments, receivedMessage)

                cyberSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Cyber WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(cyberSucess)
            } else if(primaryCommand == "estockwtsmin") {
                estockWts(arguments, receivedMessage)

                estockSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Estock WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(estockSucess)
            } else if(primaryCommand == "galaxsiowtsmin") {
                galaxioWts(arguments, receivedMessage)

                galaxsioSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Galaxsio WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(galaxsioSucess)
            } else if(primaryCommand == "evewtsmin") {
                eveWts(arguments, receivedMessage)

                eveSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Eve WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(eveSucess)
            } else if(primaryCommand == "hawkmeshwtsmin") {
                hawkWts(arguments, receivedMessage)

                hawkSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hawk Mesh WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hawkSucess)
            } else if(primaryCommand == "ganeshwtsmin") {
                ganeshWts(arguments, receivedMessage)

                ganeshSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Ganesh WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(ganeshSucess)


            } else if(primaryCommand == "hayhawtsmin") {
                hayhaWts(arguments, receivedMessage)

                hayhaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hayha WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hayhaSucess)

            } else if(primaryCommand == "kilowtsmin") {
                kiloWts(arguments, receivedMessage)

                kilSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Kilo WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(kilSucess)
            } else if(primaryCommand == "flarewtsmin") {
                flareWts(arguments, receivedMessage)

                flareSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Flare WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(flareSucess)

            } else if(primaryCommand == "fleekwtsmin") {
                fleekWts(arguments, receivedMessage)

                fleekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Fleek WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(fleekSucess)

            } else if(primaryCommand == "nebulawtsmin") {
                nebulaWts(arguments, receivedMessage)

                nebulaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Nebula WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(nebulaSucess)

            } else if(primaryCommand == "rushwts") {
                rushWts(arguments, receivedMessage)
                rushPriceWts = arguments
                rushSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Rush WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(rushSucess)


            } else if(primaryCommand == "mercurywts") {
                mercuryWts(arguments, receivedMessage)
                mercuryPriceWts = arguments
                mercurySucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mercury WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mercurySucess)


            } else if(primaryCommand == "solewts") {
                soleWts(arguments, receivedMessage)
                solePriceWts = arguments

                soleSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Sole WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(soleSucess)


            } else if(primaryCommand == "wrathwts") {
                wrathWts(arguments, receivedMessage)
                wrathWTsPrice = arguments
                wrathSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Wrath WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(wrathSucess)

            } else if(primaryCommand == "veloxwts") {
                veloxWts(arguments, receivedMessage)
                veloxWtsPrice = arguments
                veloxSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Velox WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(veloxSucess)

            } else if(primaryCommand == "mekwts") {
                mekWts(arguments, receivedMessage)
                mekWtsPrice = arguments
                mekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mek WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mekSucess)

            } else if(primaryCommand == "prismwts") {
                prismWts(arguments, receivedMessage)
                prismWtsPrice = arguments
                prismSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prism WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(prismSucess)
            } else if(primaryCommand == "polariswts") {
                polarisWts(arguments, receivedMessage)
                polarisWtsPrice = arguments
                polarisSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Polaris WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(polarisSucess)
            } else if(primaryCommand == "sfwts") {
                splashForceWts(arguments, receivedMessage)
                splashForceWtsPrice = arguments
                sfsucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Splash Force WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(sfsucess)
            } else if(primaryCommand == "pdwts") {
                pdWts(arguments, receivedMessage)
                pdWtsPrice = arguments
                pdSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prodject Destroyer WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(pdSucess)
            } else if(primaryCommand == "dashewts") {
                dasheWts(arguments, receivedMessage)
                dasheWtsPrice = arguments
                DasheSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Dashe WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(DasheSucess)
            } else if(primaryCommand == "tohruwts") {
                tohruWts(arguments, receivedMessage)
                tohruWtsPrice = arguments
                tohruSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Tohru WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(tohruSucess)
            } else if(primaryCommand == "phantomwts") {
                phantomWts(arguments, receivedMessage)
                phantomWtsPrice = arguments
                phantomSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Phantom WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(phantomSucess)
            } else if(primaryCommand == "adeptwts") {
                adeptWts(arguments, receivedMessage)
                adeptWtsPrice = arguments
                adeptSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Adept WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(adeptSucess)
            } else if(primaryCommand == "burstwts") {
                burstWts(arguments, receivedMessage)
                burstWtsPrice = arguments
                burstSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Burst WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(burstSucess)
            } else if(primaryCommand == "cyberwts") {
                cyberWts(arguments, receivedMessage)
                cyberWtsPrice = arguments
                cyberSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Cyber WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(cyberSucess)
            } else if(primaryCommand == "estockwts") {
                estockWts(arguments, receivedMessage)
                estockWtsPrice = arguments
                estockSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Estock WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(estockSucess)
            } else if(primaryCommand == "evewts") {
                eveWts(arguments, receivedMessage)
                eveWtsPrice = arguments
                eveSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Eve WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(eveSucess)
            } else if(primaryCommand == "galaxsiowts") {
                galaxioWts(arguments, receivedMessage)
                galaxsioWtsPrice = arguments
                galaxsioSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Galaxsio WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(galaxsioSucess)
            } else if(primaryCommand == "hawkmeshwts") {
                hawkWts(arguments, receivedMessage)
                hawkWtsPrice = arguments
                hawkSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hawk Mesh WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hawkSucess)
            } else if(primaryCommand == "ganeshwts") {
                ganeshWts(arguments, receivedMessage)
                ganeshWts = arguments
                ganeshSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Ganesh WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(ganeshSucess)
            } else if(primaryCommand == "hayhawts") {
                hayhaWts(arguments, receivedMessage)
                hayhaWtsPrice = arguments
                hayhaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hayha WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hayhaSucess)

            } else if(primaryCommand == "kilowts") {
                kiloWts(arguments, receivedMessage)
                kiloWtsPrice = arguments
                kilSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Kilo WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(kilSucess)

            } else if(primaryCommand == "flarewts") {
                flareWts(arguments, receivedMessage)
                flareWtsPrice = arguments
                flareSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Flare WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(flareSucess)

            } else if(primaryCommand == "fleekwts") {
                fleekWts(arguments, receivedMessage)
                fleekWtsPrice = arguments
                fleekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Fleek WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(fleekSucess)

            } else if(primaryCommand == "nebulawts") {
                nebulaWts(arguments, receivedMessage)
                nebulaWtsPrice = arguments
                nebulaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Nebula WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(nebulaSucess)

            } else if(primaryCommand == "custombotwts") {

                customBotWtsPrice = arguments
                customAdded = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtsPrice) + ' Sucessfully Added, Add WTS Also')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(customAdded)

            } else if(primaryCommand == "customwtsprice") {




                CustomWts(arguments, receivedMessage)

                customWtsPrice = arguments

                customWtsEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtsPrice) + ' ' + (customWtsPrice) + ' WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(customWtsEmbed)



                //split wtbs under here

            }


            //split for wtb
            else if(primaryCommand == "balkowtbmin") {
                balkoWtb(arguments, receivedMessage)

                BalkoEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Balko WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(BalkoEmbed)



            } else if(primaryCommand == "f3wtbmin") {
                f3Wtb(arguments, receivedMessage)

                f3Sucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('F3 WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(f3Sucess)

            } else if(primaryCommand == "rushwtbmin") {
                rushWtb(arguments, receivedMessage)

                rushSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Rush WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(rushSucess)


            } else if(primaryCommand == "mercurywtbmin") {
                mercuryWtb(arguments, receivedMessage)

                mercurySucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mercury WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mercurySucess)


            } else if(primaryCommand == "solewtbmin") {
                soleWtb(arguments, receivedMessage)

                soleSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Sole WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(soleSucess)


            } else if(primaryCommand == "wrathwtbmin") {
                wrathWtb(arguments, receivedMessage)

                wrathSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Wrath WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(wrathSucess)

            } else if(primaryCommand == "veloxwtbmin") {
                veloxWtb(arguments, receivedMessage)

                veloxSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Velox WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(veloxSucess)

            } else if(primaryCommand == "mekwtbmin") {
                mekWtb(arguments, receivedMessage)

                mekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mek WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mekSucess)

            } else if(primaryCommand == "prismwtbmin") {
                prismWtb(arguments, receivedMessage)

                prismSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prism WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(prismSucess)

            } else if(primaryCommand == "polariswtbmin") {
                polarisWtb(arguments, receivedMessage)

                polarisSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Polaris WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(polarisSucess)

            } else if(primaryCommand == "sfwtbmin") {
                splashForceWtb(arguments, receivedMessage)

                sfsucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Splash Force WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(sfsucess)

            } else if(primaryCommand == "pdwtbmin") {
                pdWtb(arguments, receivedMessage)

                pdSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prodject Destroyer WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(pdSucess)

            } else if(primaryCommand == "dashewtbmin") {
                dasheWtb(arguments, receivedMessage)

                DasheSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Dashe WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(DasheSucess)
            } else if(primaryCommand == "tohruwtbmin") {
                tohruWtb(arguments, receivedMessage)
                tohruSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Tohru WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(tohruSucess)
            } else if(primaryCommand == "phantomwtb") {
                phantomWtb(arguments, receivedMessage)

                phantomSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Phantom WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(phantomSucess)
            } else if(primaryCommand == "adeptwtb") {
                adeptWtb(arguments, receivedMessage)

                adeptSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Adept WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(adeptSucess)
            } else if(primaryCommand == "burstwtb") {
                burstWtb(arguments, receivedMessage)

                burstSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Burst WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(burstSucess)
            } else if(primaryCommand == "cyberwtbmin") {
                cyberWtb(arguments, receivedMessage)

                cyberSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Cyber WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(cyberSucess)
            } else if(primaryCommand == "estockwtbmin") {
                estockWtb(arguments, receivedMessage)

                estockSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Estock WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(estockSucess)
            } else if(primaryCommand == "evewtbmin") {
                eveWtb(arguments, receivedMessage)

                eveSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Eve WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(eveSucess)
            } else if(primaryCommand == "galaxsiowtbmin") {
                galaxioWtb(arguments, receivedMessage)

                galaxsioSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Galaxsio WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(galaxsioSucess)
            } else if(primaryCommand == "hawkmeshwtbmin") {
                hawkWtb(arguments, receivedMessage)

                hawkSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hawk Mesh WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hawkSucess)
            } else if(primaryCommand == "ganeshwtbmin") {
                ganeshWtb(arguments, receivedMessage)

                ganeshSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Ganesh WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(ganeshSucess)
            } else if(primaryCommand == "hayhawtbmin") {
                hayhaWtb(arguments, receivedMessage)

                hayhaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hayha WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hayhaSucess)

            } else if(primaryCommand == "kilowtbmin") {
                kiloWtb(arguments, receivedMessage)

                kilSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Kilo WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(kilSucess)

            } else if(primaryCommand == "flarewtbmin") {
                flareWtb(arguments, receivedMessage)

                flareSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Flare WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(flareSucess)

            } else if(primaryCommand == "fleekwtbmin") {
                fleekWtb(arguments, receivedMessage)

                fleekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Fleek WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(fleekSucess)

            } else if(primaryCommand == "nebulawtbmin") {
                nebulaWtb(arguments, receivedMessage)

                nebulaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Nebula WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(nebulaSucess)

            } else if(primaryCommand == "balkowtb") {
                balkoWtb(arguments, receivedMessage)
                balkoPriceWtb = arguments
                BalkoEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Balko WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(BalkoEmbed)



            } else if(primaryCommand == "clearallwtb") {
                clearAllWtb(arguments, receivedMessage)


                clearAllWtb = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('All WTB Monitors Cleared')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(clearAllWtb)

            } else if(primaryCommand == "f3wtb") {
                f3Wtb(arguments, receivedMessage)
                f3PriceWtb = arguments
                f3Sucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('F3 WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(f3Sucess)

            } else if(primaryCommand == "rushwtb") {
                rushWtb(arguments, receivedMessage)

                rushPriceWtb = arguments
                rushSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Rush WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(rushSucess)


            } else if(primaryCommand == "mercurywtb") {
                mercuryWtb(arguments, receivedMessage)
                mercuryPriceWtb = arguments

                mercurySucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mercury WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mercurySucess)


            } else if(primaryCommand == "solewtb") {
                soleWtb(arguments, receivedMessage)
                solePriceWtb = arguments
                soleSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Sole WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(soleSucess)


            } else if(primaryCommand == "wrathwtb") {
                wrathWtb(arguments, receivedMessage)
                wrathWtbPrice = arguments
                wrathSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Wrath WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(wrathSucess)

            } else if(primaryCommand == "veloxwtb") {
                veloxWtb(arguments, receivedMessage)
                veloxWtbPrice = arguments
                veloxSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Velox WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(veloxSucess)

            } else if(primaryCommand == "mekwtb") {
                mekWtb(arguments, receivedMessage)
                mekWtbPrice = arguments
                mekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mek WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mekSucess)

            } else if(primaryCommand == "prismwtb") {
                prismWtb(arguments, receivedMessage)

                prismWtbPrice = arguments
                prismSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prism WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(prismSucess)
            } else if(primaryCommand == "polariswtb") {
                polarisWtb(arguments, receivedMessage)
                polarisWtbPrice = arguments
                polarisSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Polaris WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(polarisSucess)
            } else if(primaryCommand == "sfwtb") {
                splashForceWtb(arguments, receivedMessage)
                splashForceWtbPrice = arguments
                sfsucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Splash Force WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(sfsucess)
            } else if(primaryCommand == "pdwtb") {
                pdWtb(arguments, receivedMessage)
                pdWtbPrice = arguments
                pdSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prodject Destroyer WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(pdSucess)
            } else if(primaryCommand == "dashewtb") {
                dasheWtb(arguments, receivedMessage)
                dasheWtbPrice = arguments
                DasheSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Dashe WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(DasheSucess)
            } else if(primaryCommand == "tohruwtb") {
                tohruWtb(arguments, receivedMessage)
                tohruWtbPrice = arguments

                tohruSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Tohru WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(tohruSucess)
            } else if(primaryCommand == "phantomwtb") {
                phantomWtb(arguments, receivedMessage)
                phantomWtbPrice = arguments
                phantomSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Phantom WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(phantomSucess)
            } else if(primaryCommand == "adeptwtb") {
                adeptWtb(arguments, receivedMessage)
                adeptWtbPrice = arguments
                adeptSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Adept WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(adeptSucess)
            } else if(primaryCommand == "burstwtb") {
                burstWtb(arguments, receivedMessage)
                burstWtbPrice = arguments
                burstSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Burst WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(burstSucess)
            } else if(primaryCommand == "cyberwtb") {
                cyberWtb(arguments, receivedMessage)
                cyberWtbPrice = arguments
                cyberSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Cyber WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(cyberSucess)
            } else if(primaryCommand == "estockwtb") {
                estockWtb(arguments, receivedMessage)
                estockWtbPrice = arguments
                estockSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Estock WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(estockSucess)
            } else if(primaryCommand == "evewtb") {
                eveWtb(arguments, receivedMessage)
                eveWtbPrice = arguments
                eveSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Eve WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(eveSucess)
            } else if(primaryCommand == "galaxsiowtb") {
                galaxioWtb(arguments, receivedMessage)
                galaxsioWtbPrice = arguments
                galaxsioSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Galaxsio WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(galaxsioSucess)
            } else if(primaryCommand == "hawkmeshwtb") {
                hawkWtb(arguments, receivedMessage)
                hawkWtbPrice = arguments
                hawkSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hawk Mesh WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hawkSucess)
            } else if(primaryCommand == "ganeshwtb") {
                ganeshWtb(arguments, receivedMessage)
                ganeshWtbPrice = arguments
                ganeshSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Ganesh WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(ganeshSucess)
            } else if(primaryCommand == "hayhawtb") {
                hayhaWtb(arguments, receivedMessage)
                hayhaWtbPrice = arguments
                hayhaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hayha WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hayhaSucess)

            } else if(primaryCommand == "kilowtb") {
                kiloWtb(arguments, receivedMessage)
                kiloWtbPrice = arguments
                kilSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Kilo WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(kilSucess)

            } else if(primaryCommand == "flarewtb") {
                flareWtb(arguments, receivedMessage)
                flareWtbPrice = arguments
                flareSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Flare WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(flareSucess)

            } else if(primaryCommand == "fleekwtb") {
                fleekWtb(arguments, receivedMessage)
                fleekWtbPrice = arguments
                fleekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Fleek WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(fleekSucess)

            } else if(primaryCommand == "nebulawtb") {
                nebulaWtb(arguments, receivedMessage)
                nebulaWtbPrice = arguments
                nebulaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Nebula WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(nebulaSucess)

            } else if(primaryCommand == "custombotwtb") {

                customBotWtbPrice = arguments
                customAdded = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtbPrice) + ' Sucessfully Added, Add WTB Also')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(customAdded)

            } else if(primaryCommand == "customwtbprice") {


                CustomWtb(arguments, receivedMessage)

                customWtbPrice = arguments

                customWtbEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtbPrice) + ' ' + (customWtbPrice) + ' WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(customWtbEmbed)

            } else if(primaryCommand == "clearall") {


                clearAll(arguments, receivedMessage)


                clearAll = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('All Monitors Cleared')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(clearAll)

            }


        } else {
            error = new Discord.RichEmbed()

                .setColor('#f9475d')
                .setTitle('You Cannot Use This Command')


                .setTimestamp()
                .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




            receivedMessage.channel.send(error)

        }

    }

    function balkoWts(arguments, receivedMessage) {


        balkoPriceWtsmin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '772833340327329812' || '773625024779124776' || '750080118684254328') {


                for(; balkoPriceWtsmin <= balkoPriceWts; balkoPriceWtsmin++) {

                    if(message.content.toString().toLowerCase().includes(balkoPriceWtsmin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        BalkoEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Balko WTS Listing Found')
                            .addField('Price', '$' + balkoPriceWtsmin + ' - ' + '€' + balkoPriceWtsmin * .86 + ' - ' + '¥' + balkoPriceWtsmin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtsChannelId).send('<@&774503052530155560>')
                        client.channels.get(wtsChannelId).send(BalkoEmbed)

                    }
                }
            }
        });


    }

    function f3Wts(arguments, receivedMessage) {


        f3PriceWtsmin = arguments
        user.on('message', message => { // When a message is created
            if(message.channel.id == '626993314427568168' || '750079728328900718' || '710921760303742976') {

                for(; f3PriceWtsmin <= f3PriceWts; f3PriceWtsmin++) {
                    if(message.content.toString().toLowerCase().includes(f3PriceWtsmin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        f3embed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('F3 WTS Listing Found')
                            .addField('Price', '$' + f3PriceWtsmin + ' - ' + '€' + f3PriceWtsmin * .86 + ' - ' + '¥' + f3PriceWtsmin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtsChannelId).send('<@&774503521709457459>')

                        client.channels.get(wtsChannelId).send(f3embed)



                    }
                }
            }
        });

    }

    function rushWts(arguments, receivedMessage) {

        rushPriceWtsmin = arguments
        user.on('message', message => { // When a message is created
            if(message.channel.id == '715325254100320309' || '752600540252209152' || '736704514756968558') {
                for(; rushPriceWtsmin <= rushPriceWts; rushPriceWtsmin++) {
                    if(message.content.toString().toLowerCase().includes(rushPriceWtsmin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        rushEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Rush WTS Listing Found')
                            .addField('Price', '$' + rushPriceWtsmin + ' - ' + '€' + rushPriceWtsmin * .86 + ' - ' + '¥' + rushPriceWtsmin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtsChannelId).send('<@&774503635903053875>')
                        client.channels.get(wtsChannelId).send(rushEmbed)



                    }
                }
            }
        });

    }

    function mercuryWts(arguments, receivedMessage) {

        user.on('message', message => { // When a message is created

            mercuryPriceWtsmin = arguments


            for(; mercuryPriceWtsmin <= mercuryPriceWts; mercuryPriceWtsmin++) {

                if(message.content.toString().toLowerCase() === 'wts mercury ' + (mercuryPriceWtsmin)) {


                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id
                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    mercuryEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Mercury WTS Listing Found')
                        .addField('Price', '$' + mercuryPriceWtsmin + ' - ' + '€' + mercuryPriceWtsmin * .86 + ' - ' + '¥' + mercuryPriceWtsmin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                    client.channels.get(wtsChannelId).send('<@&774803234971451452>')
                    client.channels.get(wtsChannelId).send(mercuryEmbed)


                } else if(message.content.toString().toLowerCase() === 'wts mercury aio $' + (mercuryPriceWtsmin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id
                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    mercuryEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Mercury WTS Listing Found')
                        .addField('Price', '$' + mercuryPriceWtsmin + ' - ' + '€' + mercuryPriceWtsmin * .86 + ' - ' + '¥' + mercuryPriceWtsmin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtsChannelId).send('<@&774803234971451452>')
                    client.channels.get(wtsChannelId).send(mercuryEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts mercury aio ' + (mercuryPriceWtsmin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id
                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    mercuryEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Mercury WTS Listing Found')
                        .addField('Price', '$' + mercuryPriceWtsmin + ' - ' + '€' + mercuryPriceWtsmin * .86 + ' - ' + '¥' + mercuryPriceWtsmin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtsChannelId).send('<@&774803234971451452>')
                    client.channels.get(wtsChannelId).send(mercuryEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts mercury aio ' + (mercuryPriceWtsmin) + '$') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id
                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    mercuryEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Mercury WTS Listing Found')
                        .addField('Price', '$' + mercuryPriceWtsmin + ' - ' + '€' + mercuryPriceWtsmin * .86 + ' - ' + '¥' + mercuryPriceWtsmin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtsChannelId).send('<@&774803234971451452>')
                    client.channels.get(wtsChannelId).send(mercuryEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts mercury ' + (mercuryPriceWtsmin / 1000) + 'k') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id
                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    mercuryEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Mercury WTS Listing Found')
                        .addField('Price', '$' + mercuryPriceWtsmin + ' - ' + '€' + mercuryPriceWtsmin * .86 + ' - ' + '¥' + mercuryPriceWtsmin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtsChannelId).send('<@&774803234971451452>')
                    client.channels.get(wtsChannelId).send(mercuryEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts mercury ' + (mercuryPriceWtsmin / 1000) + 'k$') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id
                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    mercuryEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Mercury WTS Listing Found')
                        .addField('Price', '$' + mercuryPriceWtsmin + ' - ' + '€' + mercuryPriceWtsmin * .86 + ' - ' + '¥' + mercuryPriceWtsmin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774803234971451452>')

                    client.channels.get(wtsChannelId).send(mercuryEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts mercury $' + (mercuryPriceWtsmin / 1000) + 'k') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id
                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    mercuryEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Mercury WTS Listing Found')
                        .addField('Price', '$' + mercuryPriceWtsmin + ' - ' + '€' + mercuryPriceWtsmin * .86 + ' - ' + '¥' + mercuryPriceWtsmin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774803234971451452>')

                    client.channels.get(wtsChannelId).send(mercuryEmbed)



                }


            }


        });

    }

    function soleWts(arguments, receivedMessage) {

        solePriceWtsmin = arguments
        user.on('message', message => { // When a message is created
            if(message.channel.id == '626997679377088562' || '751572267905056859' || '700486817496957000') {

                for(; solePriceWtsmin <= solePriceWts; solePriceWtsmin++) {
                    if(message.content.toString().toLowerCase().includes(solePriceWtsmin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        soleEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Sole WTS Listing Found')
                            .addField('Price', '$' + solePriceWtsmin + ' - ' + '€' + solePriceWtsmin * .86 + ' - ' + '¥' + solePriceWtsmin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtsChannelId).send('<@&774803407533506562>')
                        client.channels.get(wtsChannelId).send(soleEmbed)


                    }
                }
            }
        });

    }

    function wrathWts(arguments, receivedMessage) {

        wrathWTsPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '626997441392017428' || '743950855069368461' || '710921120542359582') {


                for(; wrathWTsPricemin <= wrathWTsPrice; wrathWTsPricemin++) {
                    if(message.content.toString().toLowerCase().includes(wrathWTsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        wrathEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Wrath WTS Listing Found')
                            .addField('Price', '$' + wrathWTsPricemin + ' - ' + '€' + wrathWTsPricemin * .86 + ' - ' + '¥' + wrathWTsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774803488193511475>')


                        client.channels.get(wtsChannelId).send(wrathEmbed)



                    }
                }
            }
        });

    }

    function veloxWts(arguments, receivedMessage) {

        veloxWtsPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '634518877748854814' || '750079237591007243' || '710921145146408972') {

                for(; veloxWtsPricemin <= veloxWtsPrice; veloxWtsPricemin++) {

                    if(message.content.toString().toLowerCase().includes(veloxWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                        veloxEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Velox WTS Listing Found')
                            .addField('Price', '$' + veloxWtsPricemin + ' - ' + '€' + veloxWtsPricemin * .86 + ' - ' + '¥' + veloxWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');




                        client.channels.get(wtsChannelId).send(veloxEmbed)



                    }
                }

            }
        });

    }

    function mekWts(arguments, receivedMessage) {

        mekWtsPricemin = arguments
        user.on('message', message => { // When a message is created


            if(message.channel.id == '627003393461977108' || '750079650264252508' || '710921442967158872') {

                for(; mekWtsPricemin <= mekWtbPrice; mekWtsPricemin++) {
                    if(message.content.toString().toLowerCase().includes(mekWtsPrice)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        mekEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Mek WTS Listing Found')
                            .addField('Price', '$' + mekWtsPrice + ' - ' + '€' + mekWtsPrice * .86 + ' - ' + '¥' + mekWtsPrice * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtsChannelId).send('<@&774803745346289684>')

                        client.channels.get(wtsChannelId).send(mekEmbed)



                    }

                }
            }

        });

    }

    function prismWts(arguments, receivedMessage) {

        prismWtsPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '626997179378171925' || '750079394831401040' || '710921405935517697') {

                for(; prismWtsPricemin <= prismWtsPrice; prismWtsPricemin++) {
                    if(message.content.toString().toLowerCase().includes(prismWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        prismEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Prism WTS Listing Found')
                            .addField('Price', '$' + prismWtsPricemin + ' - ' + '€' + prismWtsPricemin * .86 + ' - ' + '¥' + prismWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774803748018454559>')


                        client.channels.get(wtsChannelId).send(prismEmbed)



                    }
                }
            }

        });

    }

    function polarisWts(arguments, receivedMessage) {

        polarisWtsPricemin = arguments
        user.on('message', message => { // When a message is created
            if(message.channel.id == '713875826319294544' || '750079394831401040' || '710921405935517697') {

                for(; polarisWtsPricemin <= polarisWtsPrice; polarisWtsPricemin++) {
                    if(message.content.toString().toLowerCase().includes(polarisWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        poalrisEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Polaris WTS Listing Found')
                            .addField('Price', '$' + polarisWtsPricemin + ' - ' + '€' + polarisWtsPricemin * .86 + ' - ' + '¥' + polarisWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774803951438659594>')



                        client.channels.get(wtsChannelId).send(poalrisEmbed)



                    }

                }


            }
        });

    }

    function splashForceWts(arguments, receivedMessage) {

        splashForceWtsPricemin = arguments
        user.on('message', message => { // When a message is created

            for(; splashForceWtsPricemin <= splashForceWtsPrice; splashForceWtsPricemin++) {
                if(message.content.toString().toLowerCase() === 'wts splash force ' + (splashForceWtsPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    sfEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Splash Force WTS Listing Found')
                        .addField('Price', '$' + splashForceWtsPricemin + ' - ' + '€' + splashForceWtsPricemin * .86 + ' - ' + '¥' + splashForceWtsPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774803954713231366>')


                    client.channels.get(wtsChannelId).send(sfEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts splash force/sf ' + (splashForceWtsPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    sfEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Splash Force WTS Listing Found')
                        .addField('Price', '$' + splashForceWtsPricemin + ' - ' + '€' + splashForceWtsPricemin * .86 + ' - ' + '¥' + splashForceWtsPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774803954713231366>')


                    client.channels.get(wtsChannelId).send(sfEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts splash force/sf $' + (splashForceWtsPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    sfEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Splash Force WTS Listing Found')
                        .addField('Price', '$' + splashForceWtsPricemin + ' - ' + '€' + splashForceWtsPricemin * .86 + ' - ' + '¥' + splashForceWtsPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtsChannelId).send('<@&774803954713231366>')



                    client.channels.get(wtsChannelId).send(sfEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts splash force $' + (splashForceWtsPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    sfEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Splash Force WTS Listing Found')
                        .addField('Price', '$' + splashForceWtsPricemin + ' - ' + '€' + splashForceWtsPricemin * .86 + ' - ' + '¥' + splashForceWtsPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtsChannelId).send('<@&774803954713231366>')



                    client.channels.get(wtsChannelId).send(sfEmbed)



                }

            }
        });

    }

    function pdWts(arguments, receivedMessage) {

        pdWtsPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '626996548009721886' || '750079568433512538' || '710921389552566303') {
                for(; pdWtsPricemin <= pdWtsPrice; pdWtsPricemin++) {

                    if(message.content.toString().toLowerCase().includes(pdWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        pdEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Project Destroyer WTS Listing Found')
                            .addField('Price', '$' + pdWtsPricemin + ' - ' + '€' + pdWtsPricemin * .86 + ' - ' + '¥' + pdWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774803955078266890>')


                        client.channels.get(wtsChannelId).send(pdEmbed)



                    }
                }
            }
        });

    }

    function dasheWts(arguments, receivedMessage) {

        dasheWtsPricemin = arguments
        user.on('message', message => { // When a message is created




            for(; dasheWtsPricemin <= dasheWtsPrice; dasheWtsPricemin++) {


                if(message.channel.id == '710921806243954770') {
                    if(message.content.toString().toLowerCase().includes(dasheWtsPricemin)) {


                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                        dasheEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Dashe WTS Listing Found')
                            .addField('Price', '$' + dasheWtsPricemin + ' - ' + '€' + dasheWtsPricemin * .86 + ' - ' + '¥' + dasheWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774500633020989512>')


                        client.channels.get(wtsChannelId).send(dasheEmbed)



                    }

                } else if(message.content.toString().toLowerCase() === 'wts dashe renewal $' + (dasheWtsPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    dasheEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Dashe WTS Listing Found')
                        .addField('Price', '$' + dasheWtsPricemin + ' - ' + '€' + dasheWtsPricemin * .86 + ' - ' + '¥' + dasheWtsPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtsChannelId).send('<@&774500633020989512>')



                    client.channels.get(wtsChannelId).send(dasheEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts dashe lt $' + (dasheWtsPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    dasheEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Dashe WTS Listing Found')
                        .addField('Price', '$' + dasheWtsPricemin + ' - ' + '€' + dasheWtsPricemin * .86 + ' - ' + '¥' + dasheWtsPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774500633020989512>')


                    client.channels.get(wtsChannelId).send(dasheEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts dashe $' + (dasheWtsPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    dasheEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Dashe WTS Listing Found')
                        .addField('Price', '$' + dasheWtsPricemin + ' - ' + '€' + dasheWtsPricemin * .86 + ' - ' + '¥' + dasheWtsPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtsChannelId).send('<@&774500633020989512>')

                    client.channels.get(wtsChannelId).send(dasheEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts dashe lifetime $' + (dasheWtsPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    dasheEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Dashe WTS Listing Found')
                        .addField('Price', '$' + dasheWtsPricemin + ' - ' + '€' + dasheWtsPricemin * .86 + ' - ' + '¥' + dasheWtsPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774500633020989512>')


                    client.channels.get(wtsChannelId).send(dasheEmbed)



                } else if(message.content.toString().toLowerCase() === ':dashe:wts dashe lifetime $' + (dasheWtsPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    dasheEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Dashe WTS Listing Found')
                        .addField('Price', '$' + dasheWtsPricemin + ' - ' + '€' + dasheWtsPricemin * .86 + ' - ' + '¥' + dasheWtsPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtsChannelId).send('<@&774500633020989512>')



                    client.channels.get(wtsChannelId).send(dasheEmbed)



                }
            }
        });

    }

    function tohruWts(arguments, receivedMessage) {

        tohruWtsPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '734522747580841985' || '750079269912444978' || '733784476546498651') {

                for(; tohruWtsPricemin <= tohruWtsPrice; tohruWtsPricemin++) {

                    if(message.content.toString().toLowerCase().includes(tohruWtsPricemin)) {



                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        tohruEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Tohru WTS Listing Found')
                            .addField('Price', '$' + tohruWtsPricemin + ' - ' + '€' + tohruWtsPricemin * .86 + ' - ' + '¥' + tohruWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804317387096134>')


                        client.channels.get(wtsChannelId).send(tohruEmbed)

                    }

                }
            }
        });

    }

    function phantomWts(arguments, receivedMessage) {

        phantomWtsPricemin = arguments
        user.on('message', message => { // When a message is created


            if(message.channel.id == '627359696335929365' || '750079496211922944' || '710921653739323402') {
                for(; phantomWtsPricemin <= phantomWtsPrice; phantomWtsPricemin++) {

                    if(message.content.toString().toLowerCase().includes(phantomWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        phatnomEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Phantom WTS Listing Found')
                            .addField('Price', '$' + phantomWtsPricemin + ' - ' + '€' + phantomWtsPricemin * .86 + ' - ' + '¥' + phantomWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804319785975839>')


                        client.channels.get(wtsChannelId).send(PhantomEmbed)


                    }
                }
            }
        });

    }

    function adeptWts(arguments, receivedMessage) {

        adeptWtsPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '627359696335929365' || '750079939973480488' || '710921903249948802') {

                for(; adeptWtsPricemin <= adeptWtsPrice; adeptWtsPricemin++) {

                    if(message.content.toString().toLowerCase().includes(adeptWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        adeptEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Adept WTS Listing Found')
                            .addField('Price', '$' + adeptWtsPricemin + ' - ' + '€' + adeptWtsPricemin * .86 + ' - ' + '¥' + adeptWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804319819792395>')


                        client.channels.get(wtsChannelId).send(adeptEmbed)



                    }
                }
            }

        });

    }

    function burstWts(arguments, receivedMessage) {

        burstWtsPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '762401756437020703') {

                for(; burstWtsPricemin <= burstWtbPrice; burstWtsPricemin++) {

                    if(message.content.toString().toLowerCase().includes(burstWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        burstEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Burst WTS Listing Found')
                            .addField('Price', '$' + burstWtsPricemin + ' - ' + '€' + burstWtsPricemin * .86 + ' - ' + '¥' + burstWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804320490225674>')


                        client.channels.get(wtsChannelId).send(burstEmbed)



                    }
                }
            }
        });

    }

    function cyberWts(arguments, receivedMessage) {

        cyberWtsPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '626930445774487563' || '750080029278339203' || '710921830558335087') {

                for(; cyberWtsPricemin <= cyberWtsPrice; cyberWtsPricemin++) {

                    if(message.content.toString().toLowerCase().includes(cyberWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        cyberEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Cyber WTS Listing Found')
                            .addField('Price', '$' + cyberWtsPricemin + ' - ' + '€' + cyberWtsPricemin * .86 + ' - ' + '¥' + cyberWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtsChannelId).send('<@&774804321362640906>')

                        client.channels.get(wtsChannelId).send(cyberEmbed)



                    }

                }
            }
        });

    }

    function estockWts(arguments, receivedMessage) {

        estockWtsPricemin = arguments
        user.on('message', message => { // When a message is created
            if(message.channel.id == '761090509858406400') {
                for(; estockWtsPricemin <= estockWtsPrice; estockWtsPrice++) {
                    if(message.content.toString().toLowerCase().includes(estockWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        estockEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Estock WTS Listing Found')
                            .addField('Price', '$' + estockWtsPricemin + ' - ' + '€' + estockWtsPricemin * .86 + ' - ' + '¥' + estockWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804939720753172>')


                        client.channels.get(wtsChannelId).send(estockEmbed)



                    }

                }
            }
        });

    }

    function eveWts(arguments, receivedMessage) {

        eveWtsPricemin = arguments
        user.on('message', message => { // When a message is created
            if(message.channel.id == '626997994927161377' || '750079789196509294' || '710921786321141911') {


                for(; eveWtsPricemin <= eveWtsPrice; eveWtsPricemin++) {
                    if(message.content.toString().toLowerCase().includes(eveWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        eveEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Eve WTS Listing Found')
                            .addField('Price', '$' + eveWtsPricemin + ' - ' + '€' + eveWtsPricemin * .86 + ' - ' + '¥' + eveWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804941478821888>')

                        client.channels.get(wtsChannelId).send(eveEmbed)



                    }
                }
            }
        });

    }

    function galaxioWts(arguments, receivedMessage) {

        galaxsioWtsPricemin = arguments
        user.on('message', message => { // When a message is created
            if(message.channel.id == '692817365561376788') {


                for(; galaxsioWtsPricemin <= galaxsioWtsPrice; galaxsioWtsPricemin++) {
                    if(message.content.toString().toLowerCase().includes(galaxsioWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        glaxsioEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Galaxsio WTS Listing Found')
                            .addField('Price', '$' + galaxsioWtsPricemin + ' - ' + '€' + galaxsioWtsPricemin * .86 + ' - ' + '¥' + galaxsioWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtsChannelId).send('<@&774804944536076318>')

                        client.channels.get(wtsChannelId).send(glaxsioEmbed)



                    }
                }
            }
        });

    }

    function hawkWts(arguments, receivedMessage) {

        hawkWtsPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '626998862145650698' || '710921635976446002') {

                for(; hawkWtsPricemin <= hawkWtsPrice; hawkWtsPricemin++) {
                    if(message.content.toString().toLowerCase().includes(hawkWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        hawkEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Hawk Mesh WTS Listing Found')
                            .addField('Price', '$' + hawkWtsPricemin + ' - ' + '€' + hawkWtsPricemin * .86 + ' - ' + '¥' + hawkWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804946059132938>')


                        client.channels.get(wtsChannelId).send(hawkEmbed)

                    }

                }
            }
        });

    }

    function ganeshWts(arguments, receivedMessage) {

        ganeshWtsPricemin = arguments
        user.on('message', message => { // When a message is created


            if(message.channel.id == '626998427040874496' || '764754241113161728' || '710921675998494770') {

                for(; ganeshWtsPricemin <= ganeshWtsPrice; ganeshWtsPricemin++) {

                    if(message.content.toString().toLowerCase().includes(ganeshWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        ganeshEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Ganesh WTS Listing Found')
                            .addField('Price', '$' + ganeshWtsPricemin + ' - ' + '€' + ganeshWtsPricemin * .86 + ' - ' + '¥' + ganeshWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804947967410176>')


                        client.channels.get(wtsChannelId).send(ganeshEmbed)



                    }
                }
            }
        });

    }

    function hayhaWts(arguments, receivedMessage) {

        hayhaWtsPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '699454441354428516' || '752600588537167955' || '710921620025376769') {

                for(; hayhaWtsPricemin <= hayhaWtsPrice; hayhaWtsPricemin++) {

                    if(message.content.toString().toLowerCase().includes(hayhaWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        hayhaEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Hayha WTS Listing Found')
                            .addField('Price', '$' + hayhaWtsPricemin + ' - ' + '€' + hayhaWtsPricemin * .86 + ' - ' + '¥' + hayhaWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774805427098746950>')


                        client.channels.get(wtsChannelId).send(hayhaEmbed)


                    }
                }
            }
        });

    }

    function kiloWts(arguments, receivedMessage) {

        kiloWtsPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '734523471542878349' || '733784066284978307') {

                for(; kiloWtsPricemin <= kiloWtsPrice; kiloWtsPricemin++) {

                    if(message.content.toString().toLowerCase().includes(kiloWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        kiloEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Kilo WTS Listing Found')
                            .addField('Price', '$' + kiloWtsPricemin + ' - ' + '€' + kiloWtsPricemin * .86 + ' - ' + '¥' + kiloWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774805429858467841>')


                        client.channels.get(wtsChannelId).send(kiloEmbed)


                    }
                }
            }
        });

    }

    function flareWts(arguments, receivedMessage) {

        flareWtsPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '692632524609945660' || '710921725759455253') {

                for(; flareWtsPricemin <= flareWtsPrice; flareWtsPricemin++) {

                    if(message.content.toString().toLowerCase().includes(flareWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        FlareEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Flare WTS Listing Found')
                            .addField('Price', '$' + flareWtsPricemin + ' - ' + '€' + flareWtsPricemin * .86 + ' - ' + '¥' + flareWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774805432521981972>')


                        client.channels.get(wtsChannelId).send(FlareEmbed)


                    }
                }
            }
        });

    }

    function fleekWts(arguments, receivedMessage) {

        fleekWtsPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '626999432881242152' || '759444386257305620' || '700487250483478560') {

                for(; fleekWtsPricemin <= fleekWtsPrice; fleekWtsPricemin++) {

                    if(message.content.toString().toLowerCase().includes(fleekWtsPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        fleekEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Fleek WTS Listing Found')
                            .addField('Price', '$' + fleekWtsPricemin + ' - ' + '€' + fleekWtsPricemin * .86 + ' - ' + '¥' + fleekWtsPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774805437714923620>')


                        client.channels.get(wtsChannelId).send(fleekEmbed)



                    }

                }
            }
        });

    }

    function nebulaWts(arguments, receivedMessage) {

        nebulaWtsPricemin = arguments
        user.on('message', message => { // When a message is created

            for(; nebulaWtsPricemin <= nebulaWtsPrice; nebulaWtsPricemin++) {

                if(message.content.toString().toLowerCase() === 'wts nebula ' + (nebulaWtsPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    nebulaEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Nebula WTS Listing Found')
                        .addField('Price', '$' + nebulaWtsPricemin + ' - ' + '€' + nebulaWtsPricemin * .86 + ' - ' + '¥' + nebulaWtsPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774805952116686848>')


                    client.channels.get(wtsChannelId).send(nebulaEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts nebula $' + (nebulaWtsPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    nebulaEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Nebula WTS Listing Found')
                        .addField('Price', '$' + nebulaWtsPricemin + ' - ' + '€' + nebulaWtsPricemin * .86 + ' - ' + '¥' + nebulaWtsPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774805952116686848>')


                    client.channels.get(wtsChannelId).send(nebulaEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts nebula ' + (nebulaWtsPricemin / 1000) + 'k') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    nebulaEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Nebula WTS Listing Found')
                        .addField('Price', '$' + nebulaWtsPricemin + ' - ' + '€' + nebulaWtsPricemin * .86 + ' - ' + '¥' + nebulaWtsPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774805952116686848>')


                    client.channels.get(wtsChannelId).send(nebulaEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts nebula $' + (nebulaWtsPricemin / 1000) + 'k') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    nebulaEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Nebula WTS Listing Found')
                        .addField('Price', '$' + nebulaWtsPricemin + ' - ' + '€' + nebulaWtsPricemin * .86 + ' - ' + '¥' + nebulaWtsPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774805952116686848>')


                    client.channels.get(wtsChannelId).send(nebulaEmbed)



                }
            }

        });

    }

    function CustomWts(arguments, receivedMessage) {


        customWtsPrice = arguments
        user.on('message', message => { // When a message is created


            if(message.content.toString().toLowerCase() === 'wts ' + (customBotWtsPrice) + ' ' + (customWtsPrice)) {

                userId = message.author.id
                messageId = message.id
                channelId = message.channel.id
                serverId = message.guild.id

                var hyperSeller = 'https://discordapp.com/users/' + userId
                var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                customEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtsPrice) + ' WTS Listing Found')
                    .addField('Price', '$' + customWtsPrice + ' - ' + '€' + customWtsPrice * .86 + ' - ' + '¥' + customWtsPrice * 6.67, true)
                    .addField('Seller', message.author.tag, true)

                    .addField('Link To Seller', hyperSeller2)

                    .addField('Link To Listing', hyperListing2)



                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');

                client.channels.get(wtsChannelId).send('<@&774805980637823036>')


                user.channels.get(wtsChannelId).send(customEmbed)



            } else if(message.content.toString().toLowerCase() === 'wts ' + (customBotWtsPrice) + ' $' + (customWtsPrice)) {

                userId = message.author.id
                messageId = message.id
                channelId = message.channel.id
                serverId = message.guild.id

                var hyperSeller = 'https://discordapp.com/users/' + userId
                var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                customEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtsPrice) + ' WTS Listing Found')
                    .addField('Price', '$' + customWtsPrice + ' - ' + '€' + customWtsPrice * .86 + ' - ' + '¥' + customWtsPrice * 6.67, true)
                    .addField('Seller', message.author.tag, true)

                    .addField('Link To Seller', hyperSeller2)

                    .addField('Link To Listing', hyperListing2)



                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                client.channels.get(wtsChannelId).send('<@&774805980637823036>')


                user.channels.get(wtsChannelId).send(customEmbed)



            } else if(message.content.toString().toLowerCase() === 'wts ' + (customBotWtsPrice) + ' $' + (customWtsPrice / 1000) + 'k') {

                userId = message.author.id
                messageId = message.id
                channelId = message.channel.id
                serverId = message.guild.id

                var hyperSeller = 'https://discordapp.com/users/' + userId
                var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                customEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtsPrice) + ' WTS Listing Found')
                    .addField('Price', '$' + customWtsPrice + ' - ' + '€' + customWtsPrice * .86 + ' - ' + '¥' + customWtsPrice * 6.67, true)
                    .addField('Seller', message.author.tag, true)

                    .addField('Link To Seller', hyperSeller2)

                    .addField('Link To Listing', hyperListing2)



                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                client.channels.get(wtsChannelId).send('<@&774805980637823036>')

                user.channels.get(wtsChannelId).send(customEmbed)



            } else if(message.content.toString().toLowerCase() === 'wts ' + (customBotWtsPrice) + ' ' + (customWtsPrice / 1000) + 'k') {

                userId = message.author.id
                messageId = message.id
                channelId = message.channel.id
                serverId = message.guild.id

                var hyperSeller = 'https://discordapp.com/users/' + userId
                var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                customEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtsPrice) + ' WTS Listing Found')
                    .addField('Price', '$' + customWtsPrice + ' - ' + '€' + customWtsPrice * .86 + ' - ' + '¥' + customWtsPrice * 6.67, true)
                    .addField('Seller', message.author.tag, true)

                    .addField('Link To Seller', hyperSeller2)

                    .addField('Link To Listing', hyperListing2)



                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                client.channels.get(wtsChannelId).send('<@&774805980637823036>')


                user.channels.get(wtsChannelId).send(customEmbed)



            }


        });

    }

    function clearAllWts(arguments, receivedMessage) {


        f3PriceWts = null
        rushPriceWts = null
        mercuryPriceWts = null
        solePriceWts = null
        wrathWTsPrice = null
        veloxWtsPrice = null
        mekWtsPrice = null
        prismWtsPrice = null
        polarisWtsPrice = null
        splashForceWtsPrice = null
        pdWtsPrice = null
        dasheWtsPrice = null
        tohruWtsPrice = null
        phantomWtsPrice = null
        adeptWtsPrice = null
        burstWtsPrice = null
        cyberWtsPrice = null
        estockWtsPrice = null
        eveWtsPrice = null
        galaxsioWtsPrice = null
        hawkWtsPrice = null
        ganeshWtsPrice = null
        hayhaWtsPrice = null
        kiloWtsPrice = null
        flareWtsPrice = null
        fleekWtsPrice = null
        nebulaWtsPrice = null
        customWtsPrice = null
        customBotWtsPrice = null

        balkoPriceWtsmin = null
        f3PriceWtsmin = null
        rushPriceWtsmin = null
        mercuryPriceWtsmin = null
        solePriceWtsmin = null
        wrathWTsPricemin = null
        veloxWtsPricemin = null
        mekWtsPricemin = null
        prismWtsPricemin = null
        polarisWtsPricemin = null
        splashForceWtsPricemin = null
        pdWtsPricemin = null
        dasheWtsPricemin = null
        tohruWtsPricemin = null
        phantomWtsPricemin = null
        adeptWtsPricemin = null
        burstWtsPricemin = null
        cyberWtsPricemin = null
        estockWtsPricemin = null
        eveWtsPricemin = null
        galaxsioWtsPricemin = null
        hawkWtsPricemin = null
        ganeshWtsPricemin = null
        hayhaWtsPricemin = null
        kiloWtsPricemin = null
        flareWtsPricemin = null
        fleekWtsPricemin = null
        nebulaWtsPricemin = null


    }

    //split wtbs under here

    function balkoWtb(arguments, receivedMessage) {

        balkoPriceWtbmin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '626996366433976330' || '750080130038235218' || '710921862888161440') {

                for(; balkoPriceWtbmin <= balkoPriceWtb; balkoPriceWtbmin++) {


                    if(message.content.toString().toLowerCase().includes(balkoPriceWtbminPriceWtb)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        BalkoEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Balko WTB Listing Found')
                            .addField('Price', '$' + balkoPriceWtbmin + ' - ' + '€' + balkoPriceWtbmin * .86 + ' - ' + '¥' + balkoPriceWtbmin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774503052530155560>')


                        client.channels.get(wtbChannelId).send(BalkoEmbed)



                    }
                }
            }
        });
    }

    function f3Wtb(arguments, receivedMessage) {

        f3PriceWtbmin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '626994422105636874' || '750079739414183946' || '710921740297044008') {


                for(; f3PriceWtbmin <= f3PriceWts; f3PriceWtbmin++) {

                    if(message.content.toString().toLowerCase().includes(f3PriceWtbmin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        f3embed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('F3 WTB Listing Found')
                            .addField('Price', '$' + f3PriceWtbmin + ' - ' + '€' + f3PriceWtbmin * .86 + ' - ' + '¥' + f3PriceWtbmin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtbChannelId).send('<@&774503521709457459>')

                        client.channels.get(wtbChannelId).send(f3embed)



                    }
                }
            }
        });

    }

    function rushWtb(arguments, receivedMessage) {

        rushPriceWtbmin = arguments
        user.on('message', message => { // When a message is created


            if(message.channel.id == '715325456924147845' || '752600558270939256' || '736704547434790954') {


                for(; rushPriceWtbmin <= rushPriceWtb; rushPriceWtbmin++) {


                    if(message.content.toString().toLowerCase().includes(rushPriceWtbmin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        rushEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Rush WTB Listing Found')
                            .addField('Price', '$' + rushPriceWtbmin + ' - ' + '€' + rushPriceWtbmin * .86 + ' - ' + '¥' + rushPriceWtbmin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774503635903053875>')


                        client.channels.get(wtbChannelId).send(rushEmbed)



                    }
                }
            }
        });

    }

    function mercuryWtb(arguments, receivedMessage) {

        mercuryPriceWtbmin = arguments
        user.on('message', message => { // When a message is created

            for(; mercuryPriceWtbmin <= mercuryPriceWtb; mercuryPriceWtbmin++) {

                if(message.content.toString().toLowerCase() === 'wtb mercury ' + (mercuryPriceWtbmin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id
                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    mercuryEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Mercury WTB Listing Found')
                        .addField('Price', '$' + mercuryPriceWtbmin + ' - ' + '€' + mercuryPriceWtbmin * .86 + ' - ' + '¥' + mercuryPriceWtbmin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtbChannelId).send('<@&774803234971451452>')

                    client.channels.get(wtbChannelId).send(mercuryEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb mercury aio $' + (mercuryPriceWtbmin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id
                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    mercuryEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Mercury WTB Listing Found')
                        .addField('Price', '$' + mercuryPriceWtbmin + ' - ' + '€' + mercuryPriceWtbmin * .86 + ' - ' + '¥' + mercuryPriceWtbmin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774803234971451452>')


                    client.channels.get(wtbChannelId).send(mercuryEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb mercury aio ' + (mercuryPriceWtbmin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id
                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    mercuryEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Mercury WTB Listing Found')
                        .addField('Price', '$' + mercuryPriceWtbmin + ' - ' + '€' + mercuryPriceWtbmin * .86 + ' - ' + '¥' + mercuryPriceWtbmin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774803234971451452>')


                    client.channels.get(wtbChannelId).send(mercuryEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb mercury aio ' + (mercuryPriceWtbmin) + '$') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id
                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    mercuryEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Mercury WTB Listing Found')
                        .addField('Price', '$' + mercuryPriceWtbmin + ' - ' + '€' + mercuryPriceWtbmin * .86 + ' - ' + '¥' + mercuryPriceWtbmin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774803234971451452>')


                    client.channels.get(wtbChannelId).send(mercuryEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb mercury ' + (mercuryPriceWtbmin / 1000) + 'k') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id
                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    mercuryEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Mercury WTB Listing Found')
                        .addField('Price', '$' + mercuryPriceWtbmin + ' - ' + '€' + mercuryPriceWtbmin * .86 + ' - ' + '¥' + mercuryPriceWtbmin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtbChannelId).send('<@&774803234971451452>')

                    client.channels.get(wtbChannelId).send(mercuryEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb mercury ' + (mercuryPriceWtbmin / 1000) + 'k$') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id
                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    mercuryEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Mercury WTB Listing Found')
                        .addField('Price', '$' + mercuryPriceWtbmin + ' - ' + '€' + mercuryPriceWtbmin * .86 + ' - ' + '¥' + mercuryPriceWtbmin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774803234971451452>')


                    client.channels.get(wtbChannelId).send(mercuryEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb mercury $' + (mercuryPriceWtbmin / 1000) + 'k') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id
                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    mercuryEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Mercury WTB Listing Found')
                        .addField('Price', '$' + mercuryPriceWtbmin + ' - ' + '€' + mercuryPriceWtbmin * .86 + ' - ' + '¥' + mercuryPriceWtbmin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774803234971451452>')


                    client.channels.get(wtbChannelId).send(mercuryEmbed)



                }



            }

        });

    }

    function soleWtb(arguments, receivedMessage) {

        solePriceWtbmin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '626997728915881993' || '751572280307482734' || '710921331872366644') {

                for(; solePriceWtbmin <= solePriceWtb; solePriceWtbmin++) {

                    if(message.content.toString().toLowerCase().includes(solePriceWtbmin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        soleEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Sole WTB Listing Found')
                            .addField('Price', '$' + solePriceWtbmin + ' - ' + '€' + solePriceWtbmin * .86 + ' - ' + '¥' + solePriceWtbmin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774803407533506562>')



                        client.channels.get(wtbChannelId).send(soleEmbed)


                    }
                }
            }
        });

    }

    function wrathWtb(arguments, receivedMessage) {

        wrathWtbPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '626997507205103617' || '743950898501517322' || '733784514769191013') {

                for(; wrathWtbPricemin <= wrathWtbPrice; wrathWtbPricemin++) {

                    if(message.content.toString().toLowerCase().includes(wrathWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        wrathEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Wrath WTB Listing Found')
                            .addField('Price', '$' + wrathWtbPricemin + ' - ' + '€' + wrathWtbPricemin * .86 + ' - ' + '¥' + wrathWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774803488193511475>')


                        client.channels.get(wtbChannelId).send(wrathEmbed)



                    }
                }
            }
        });

    }

    function veloxWtb(arguments, receivedMessage) {

        veloxWtbPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '710921136078192723' || '750079086541668462' || '634518624677396501') {

                for(; veloxWtbPricemin <= veloxWtbPrice; veloxWtbPricemin++) {

                    if(message.content.toString().toLowerCase().includes(veloxWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                        veloxEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Velox WTB Listing Found')
                            .addField('Price', '$' + veloxWtbPricemin + ' - ' + '€' + veloxWtbPricemin * .86 + ' - ' + '¥' + veloxWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774803645416996914>')



                        client.channels.get(wtbChannelId).send(veloxEmbed)



                    }

                }

            }
        });

    }

    function mekWtb(arguments, receivedMessage) {

        mekWtbPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '627003458817359873' || '750079662675198053' || '710921433987022878') {

                for(; mekWtbPricemin <= mekWtbPrice; mekWtbPricemin++) {

                    if(message.content.toString().toLowerCase().includes(mekWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        mekEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Mek WTB Listing Found')
                            .addField('Price', '$' + mekWtbPricemin + ' - ' + '€' + mekWtbPricemin * .86 + ' - ' + '¥' + mekWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774803745346289684>')


                        client.channels.get(wtbChannelId).send(mekEmbed)



                    }

                }
            }
        });

    }

    function prismWtb(arguments, receivedMessage) {

        prismWtbPricemin = arguments
        user.on('message', message => { // When a message is created


            if(message.channel.id == '626997238513795079' || '750079349167882462' || '710921411757211689') {

                for(; prismWtbPricemin <= prismWtbPrice; prismWtbPricemin++) {

                    if(message.content.toString().toLowerCase().includes(prismWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        prismEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Prism WTB Listing Found')
                            .addField('Price', '$' + prismWtbPricemin + ' - ' + '€' + prismWtbPricemin * .86 + ' - ' + '¥' + prismWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774803748018454559>')


                        client.channels.get(wtbChannelId).send(prismEmbed)



                    }
                }
            }

        });

    }

    function polarisWtb(arguments, receivedMessage) {

        polarisWtbPricemin = arguments
        user.on('message', message => { // When a message is created


            if(message.channel.id == '710921396859175081' || '750079408445980717' || '713875954224726228') {

                for(; polarisWtbPricemin <= polarisWtbPrice; polarisWtbPricemin++) {


                    if(message.content.toString().toLowerCase().includes(polarisWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        poalrisEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Polaris WTB Listing Found')
                            .addField('Price', '$' + polarisWtbPricemin + ' - ' + '€' + polarisWtbPricemin * .86 + ' - ' + '¥' + polarisWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774803951438659594>')


                        client.channels.get(wtbChannelId).send(poalrisEmbed)



                    }
                }

            }
        });

    }

    function splashForceWtb(arguments, receivedMessage) {

        splashForceWtbPricemin = arguments
        user.on('message', message => { // When a message is created

            for(; splashForceWtbPricemin <= splashForceWtbPrice; splashForceWtbPricemin++) {

                if(message.content.toString().toLowerCase() === 'wtb splash force ' + (splashForceWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    sfEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Splash Force WTB Listing Found')
                        .addField('Price', '$' + splashForceWtbPricemin + ' - ' + '€' + splashForceWtbPricemin * .86 + ' - ' + '¥' + splashForceWtbPrice * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtbChannelId).send('<@&774803954713231366>')

                    client.channels.get(wtbChannelId).send(sfEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb splash force/sf ' + (splashForceWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    sfEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Splash Force WTB Listing Found')
                        .addField('Price', '$' + splashForceWtbPricemin + ' - ' + '€' + splashForceWtbPricemin * .86 + ' - ' + '¥' + splashForceWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtbChannelId).send('<@&774803954713231366>')

                    client.channels.get(wtbChannelId).send(sfEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb splash force/sf $' + (splashForceWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    sfEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Splash Force WTB Listing Found')
                        .addField('Price', '$' + splashForceWtbPricemin + ' - ' + '€' + splashForceWtbPricemin * .86 + ' - ' + '¥' + splashForceWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtbChannelId).send('<@&774803954713231366>')



                    client.channels.get(wtbChannelId).send(sfEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb splash force $' + (splashForceWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    sfEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Splash Force WTB Listing Found')
                        .addField('Price', '$' + splashForceWtbPricemin + ' - ' + '€' + splashForceWtbPricemin * .86 + ' - ' + '¥' + splashForceWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774803954713231366>')


                    client.channels.get(wtbChannelId).send(sfEmbed)



                }

            }
        });

    }

    function pdWtb(arguments, receivedMessage) {

        pdWtbPricemin = arguments
        user.on('message', message => { // When a message is created


            if(message.channel.id == '626996604603465738' || '750079582606196826' || '710921374939742298') {
                for(; pdWtbPricemin <= pdWtbPrice; pdWtbPricemin++) {

                    if(message.content.toString().toLowerCase(), includes(pdWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id
                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        pdEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Project Destroyer WTB Listing Found')
                            .addField('Price', '$' + pdWtbPricemin + ' - ' + '€' + pdWtbPricemin * .86 + ' - ' + '¥' + pdWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774803955078266890>')



                        client.channels.get(wtbChannelId).send(pdEmbed)


                    }
                }
            }
        });

    }

    function dasheWtb(arguments, receivedMessage) {

        dasheWtbPricemin = arguments
        user.on('message', message => { // When a message is created

            for(; dasheWtbPricemin <= dasheWtbPrice; dasheWtbPricemin++) {

                if(message.content.toString().toLowerCase() === 'wtb dashe ' + (dasheWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    dasheEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Dashe WTB Listing Found')
                        .addField('Price', '$' + dasheWtbPricemin + ' - ' + '€' + dasheWtbPricemin * .86 + ' - ' + '¥' + dasheWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtbChannelId).send('<@&774500633020989512>')

                    client.channels.get(wtbChannelId).send(dasheEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb dashe renewal $' + (dasheWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    dasheEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Dashe WTB Listing Found')
                        .addField('Price', '$' + dasheWtbPricemin + ' - ' + '€' + dasheWtbPricemin * .86 + ' - ' + '¥' + dasheWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtbChannelId).send('<@&774500633020989512>')

                    client.channels.get(wtbChannelId).send(dasheEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb dashe lt $' + (dasheWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    dasheEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Dashe WTB Listing Found')
                        .addField('Price', '$' + dasheWtbPricemin + ' - ' + '€' + dasheWtbPricemin * .86 + ' - ' + '¥' + dasheWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774500633020989512>')


                    client.channels.get(wtbChannelId).send(dasheEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb dashe $' + (dasheWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    dasheEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Dashe WTB Listing Found')
                        .addField('Price', '$' + dasheWtbPricemin + ' - ' + '€' + dasheWtbPricemin * .86 + ' - ' + '¥' + dasheWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774500633020989512>')


                    client.channels.get(wtbChannelId).send(dasheEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb dashe lifetime $' + (dasheWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    dasheEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Dashe WTB Listing Found')
                        .addField('Price', '$' + dasheWtbPricemin + ' - ' + '€' + dasheWtbPricemin * .86 + ' - ' + '¥' + dasheWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtbChannelId).send('<@&774500633020989512>')



                    client.channels.get(wtbChannelId).send(dasheEmbed)



                } else if(message.content.toString().toLowerCase() === ':dashe:wtb dashe lifetime $' + (dasheWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'
                    dasheEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Dashe WTB Listing Found')
                        .addField('Price', '$' + dasheWtbPricemin + ' - ' + '€' + dasheWtbPricemin * .86 + ' - ' + '¥' + dasheWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774500633020989512>')


                    client.channels.get(wtbChannelId).send(dasheEmbed)



                }
            }
        });

    }

    function tohruWtb(arguments, receivedMessage) {

        tohruWtbPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '733784514769191013' || '750079302409781380' || '734522776559419503') {

                for(; tohruWtbPricemin <= tohruWtbPrice; tohruWtbPricemin++) {

                    if(message.content.toString().toLowerCase().includes(tohruWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        tohruEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Tohru WTB Listing Found')
                            .addField('Price', '$' + tohruWtbPricemin + ' - ' + '€' + tohruWtbPricemin * .86 + ' - ' + '¥' + tohruWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804317387096134>')


                        client.channels.get(wtbChannelId).send(tohruEmbed)



                    }
                }
            }
        });

    }

    function phantomWtb(arguments, receivedMessage) {

        phantomWtbPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '627359748051697674' || '750079509361066107' || '710921644104876042') {

                for(; phantomWtbPricemin <= phantomWtbPrice; phantomWtbPricemin++) {

                    if(message.content.toString().toLowerCase().includes(phantomWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        phatnomEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Phantom WTB Listing Found')
                            .addField('Price', '$' + phantomWtbPricemin + ' - ' + '€' + phantomWtbPricemin * .86 + ' - ' + '¥' + phantomWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtbChannelId).send('<@&774804319785975839>')

                        client.channels.get(wtbChannelId).send(PhantomEmbed)



                    }
                }
            }
        });

    }

    function adeptWtb(arguments, receivedMessage) {

        adeptWtbPricemin = arguments
        user.on('message', message => { // When a message is created
            if(message.channel.id == '626999229210165268' || '750079951725920346' || '700487424937295877') {

                for(; adeptWtbPricemin <= adeptWtbPrice; adeptWtbPricemin++) {

                    if(message.content.toString().toLowerCase().includes(adeptWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        adeptEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Adept WTB Listing Found')
                            .addField('Price', '$' + adeptWtbPricemin + ' - ' + '€' + adeptWtbPricemin * .86 + ' - ' + '¥' + adeptWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804319819792395>')


                        client.channels.get(wtbChannelId).send(adeptEmbed)



                    }
                }
            }
        });

    }

    function burstWtb(arguments, receivedMessage) {

        burstWtbPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '762401858710667264') {

                for(; burstWtbPricemin <= burstWtbPrice; burstWtbPricemin++) {

                    if(message.content.toString().toLowerCase().includes(burstWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        burstEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Burst WTB Listing Found')
                            .addField('Price', '$' + burstWtbPricemin + ' - ' + '€' + burstWtbPricemin * .86 + ' - ' + '¥' + burstWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804320490225674>')


                        client.channels.get(wtbChannelId).send(burstEmbed)



                    }
                }

            }
        });

    }

    function cyberWtb(arguments, receivedMessage) {

        cyberWtbPricemin = arguments
        user.on('message', message => { // When a message is created
            if(message.channel.id == '750080045221019778' || '710921814204874782' || '626930513768087552') {

                for(; cyberWtbPricemin <= cyberWtbPrice; cyberWtbPricemin++) {

                    if(message.content.toString().toLowerCase().includes(cyberWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        cyberEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Cyber WTB Listing Found')
                            .addField('Price', '$' + cyberWtbPricemin + ' - ' + '€' + cyberWtbPricemin * .86 + ' - ' + '¥' + cyberWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804321362640906>')


                        client.channels.get(wtbChannelId).send(cyberEmbed)



                    }
                }

            }
        });

    }

    function estockWtb(arguments, receivedMessage) {

        estockWtbPricemin = arguments
        user.on('message', message => { // When a message is created
            if(message.channel.id == '761090584420810782') {

                for(; estockWtbPricemin <= estockWtbPrice; estockWtbPricemin++) {

                    if(message.content.toString().toLowerCase().includes(estockWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        estockEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Estock WTB Listing Found')
                            .addField('Price', '$' + estockWtbPricemin + ' - ' + '€' + estockWtbPricemin * .86 + ' - ' + '¥' + estockWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804939720753172>')


                        client.channels.get(wtbChannelId).send(estockEmbed)



                    }
                }
            }

        });

    }

    function eveWtb(arguments, receivedMessage) {

        eveWtbPrice = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '626998019023175700' || '750079801586352320' || '710921775554494547') {

                for(; eveWtbPricemin <= eveWtbPrice; eveWtbPricemin++) {

                    if(message.content.toString().toLowerCase().includes(eveWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        eveEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Eve WTB Listing Found')
                            .addField('Price', '$' + eveWtbPricemin + ' - ' + '€' + eveWtbPricemin * .86 + ' - ' + '¥' + eveWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtbChannelId).send('<@&774804941478821888>')

                        client.channels.get(wtbChannelId).send(eveEmbed)



                    }

                }
            }
        });

    }

    function galaxioWtb(arguments, receivedMessage) {

        galaxsioWtbPricemin = arguments
        user.on('message', message => { // When a message is created

            for(; galaxsioWtbPricemin <= galaxsioWtbPrice; galaxsioWtbPricemin++) {

                if(message.content.toString().toLowerCase() === 'wtb galaxsio ' + (galaxsioWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    glaxsioEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Galaxsio WTB Listing Found')
                        .addField('Price', '$' + galaxsioWtbPricemin + ' - ' + '€' + galaxsioWtbPricemin * .86 + ' - ' + '¥' + galaxsioWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774804944536076318>')


                    client.channels.get(wtbChannelId).send(glaxsioEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb galaxsio $' + (galaxsioWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    glaxsioEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Galaxsio WTB Listing Found')
                        .addField('Price', '$' + galaxsioWtbPricemin + ' - ' + '€' + galaxsioWtbPricemin * .86 + ' - ' + '¥' + galaxsioWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtbChannelId).send('<@&774804944536076318>')

                    client.channels.get(wtbChannelId).send(glaxsioEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb galaxsio lifetime $' + (galaxsioWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    glaxsioEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Galaxsio WTB Listing Found')
                        .addField('Price', '$' + galaxsioWtbPricemin + ' - ' + '€' + galaxsioWtbPricemin * .86 + ' - ' + '¥' + galaxsioWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774804944536076318>')


                    client.channels.get(wtbChannelId).send(glaxsioEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb galaxsio lifetime $' + (galaxsioWtbPricemin / 1000) + 'k') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    glaxsioEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Galaxsio WTB Listing Found')
                        .addField('Price', '$' + galaxsioWtbPricemin + ' - ' + '€' + galaxsioWtbPricemin * .86 + ' - ' + '¥' + galaxsioWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtbChannelId).send('<@&774804944536076318>')

                    client.channels.get(wtbChannelId).send(glaxsioEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb galaxsio lt $' + (galaxsioWtbPricemin / 1000) + 'k') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    glaxsioEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Galaxsio WTB Listing Found')
                        .addField('Price', '$' + galaxsioWtbPricemin + ' - ' + '€' + galaxsioWtbPricemin * .86 + ' - ' + '¥' + galaxsioWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774804944536076318>')


                    client.channels.get(wtbChannelId).send(glaxsioEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb galaxsio $' + (galaxsioWtbPricemin / 1000) + 'k') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    glaxsioEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Galaxsio WTB Listing Found')
                        .addField('Price', '$' + galaxsioWtbPricemin + ' - ' + '€' + galaxsioWtbPricemin * .86 + ' - ' + '¥' + galaxsioWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774804944536076318>')


                    client.channels.get(wtbChannelId).send(glaxsioEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb galaxsio $' + (galaxsioWtbPricemin / 1000) + 'k') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    glaxsioEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Galaxsio WTB Listing Found')
                        .addField('Price', '$' + galaxsioWtbPricemin + ' - ' + '€' + galaxsioWtbPricemin * .86 + ' - ' + '¥' + galaxsioWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtbChannelId).send('<@&774804944536076318>')

                    client.channels.get(wtbChannelId).send(glaxsioEmbed)



                }
            }
        });

    }

    function hawkWtb(arguments, receivedMessage) {

        hawkWtbPricemin = arguments
        user.on('message', message => { // When a message is created


            if(message.channel.id == '710921626534805575' || '626998937009782784') {

                for(; hawkWtbPricemin <= hawkWtbPrice; hawkWtbPricemin++) {


                    if(message.content.toString().toLowerCase().includes(hawkWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        hawkEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Hawk Mesh WTB Listing Found')
                            .addField('Price', '$' + hawkWtbPricemin + ' - ' + '€' + hawkWtbPricemin * .86 + ' - ' + '¥' + hawkWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804946059132938>')


                        client.channels.get(wtbChannelId).send(hawkEmbed)

                    }

                }
            }
        });

    }

    function ganeshWtb(arguments, receivedMessage) {

        ganeshWtbPricemin = arguments
        user.on('message', message => { // When a message is created
            if(message.channel.id == '626998513175363594' || '764754256087089172' || '700487206904528948') {

                for(; ganeshWtbPricemin <= ganeshWtbPrice; ganeshWtbPricemin++) {


                    if(message.content.toString().toLowerCase().includes(ganeshWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        ganeshEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Ganesh WTB Listing Found')
                            .addField('Price', '$' + ganeshWtbPricemin + ' - ' + '€' + ganeshWtbPricemin * .86 + ' - ' + '¥' + ganeshWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtbChannelId).send('<@&774804947967410176>')

                        client.channels.get(wtbChannelId).send(ganeshEmbed)



                    }
                }
            }
        });

    }

    function hayhaWtb(arguments, receivedMessage) {

        hayhaWtbPricemin = arguments
        user.on('message', message => { // When a message is created
            if(message.channel.id == '699454406235521034' || '752600603938652300' || '710921584302620712') {

                for(; hayhaWtbPricemin <= hayhaWtbPrice; hayhaWtbPricemin++) {


                    if(message.content.toString().toLowerCase().includes(hayhaWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        hayhaEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Hayha WTB Listing Found')
                            .addField('Price', '$' + hayhaWtbPricemin + ' - ' + '€' + hayhaWtbPricemin * .86 + ' - ' + '¥' + hayhaWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774805427098746950>')


                        client.channels.get(wtbChannelId).send(hayhaEmbed)



                    }
                }
            }
        });

    }

    function kiloWtb(arguments, receivedMessage) {

        kiloWtbPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '734523543588569139') {

                for(; kiloWtbPricemin <= kiloWtbPrice; kiloWtbPricemin++) {


                    if(message.content.toString().toLowerCase().includes(kiloWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        kiloEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Kilo WTB Listing Found')
                            .addField('Price', '$' + kiloWtbPricemin + ' - ' + '€' + kiloWtbPricemin * .86 + ' - ' + '¥' + kiloWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774805429858467841>')


                        client.channels.get(wtbChannelId).send(kiloEmbed)



                    }
                }
            }
        });

    }

    function flareWtb(arguments, receivedMessage) {

        flareWtbPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '692632554792288286' || '700487256477138964') {

                for(; flareWtbPricemin <= flareWtbPrice; flareWtbPricemin++) {



                    if(message.content.toString().toLowerCase().includes(flareWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        FlareEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Flare WTB Listing Found')
                            .addField('Price', '$' + flareWtbPricemin + ' - ' + '€' + flareWtbPricemin * .86 + ' - ' + '¥' + flareWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtbChannelId).send('<@&774805432521981972>')

                        client.channels.get(wtbChannelId).send(FlareEmbed)



                    }
                }
            }
        });

    }

    function fleekWtb(arguments, receivedMessage) {

        fleekWtbPricemin = arguments
        user.on('message', message => { // When a message is created

            if(message.channel.id == '626999475918864404' || '759444409158467604' || '710921712178430073') {

                for(; fleekWtbPricemin <= fleekWtbPrice; flareWtbPricemin++) {


                    if(message.content.toString().toLowerCase(), includes(flareWtbPricemin)) {

                        userId = message.author.id
                        messageId = message.id
                        channelId = message.channel.id
                        serverId = message.guild.id

                        var hyperSeller = 'https://discordapp.com/users/' + userId
                        var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                        var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                        var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                        fleekEmbed = new Discord.RichEmbed()

                            .setColor('#f9475d')
                            .setTitle('Fleek WTB Listing Found')
                            .addField('Price', '$' + flareWtbPricemin + ' - ' + '€' + flareWtbPricemin * .86 + ' - ' + '¥' + flareWtbPricemin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774805437714923620>')


                        client.channels.get(wtbChannelId).send(fleekEmbed)



                    }

                }
            }

        });

    }

    function nebulaWtb(arguments, receivedMessage) {

        nebulaWtbPricemin = arguments
        user.on('message', message => { // When a message is created

            for(; nebulaWtbPricemin <= nebulaWtbPrice; nebulaWtbPricemin++) {

                if(message.content.toString().toLowerCase() === 'wtb nebula ' + (nebulaWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    nebulaEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Nebula WTB Listing Found')
                        .addField('Price', '$' + nebulaWtbPricemin + ' - ' + '€' + nebulaWtbPricemin * .86 + ' - ' + '¥' + nebulaWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774805952116686848>')


                    client.channels.get(wtbChannelId).send(nebulaEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb nebula $' + (nebulaWtbPricemin)) {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    nebulaEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Nebula WTB Listing Found')
                        .addField('Price', '$' + nebulaWtbPricemin + ' - ' + '€' + nebulaWtbPricemin * .86 + ' - ' + '¥' + nebulaWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774805952116686848>')


                    client.channels.get(wtbChannelId).send(nebulaEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb nebula ' + (nebulaWtbPricemin / 1000) + 'k') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    nebulaEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Nebula WTB Listing Found')
                        .addField('Price', '$' + nebulaWtbPricemin + ' - ' + '€' + nebulaWtbPricemin * .86 + ' - ' + '¥' + nebulaWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774805952116686848>')


                    client.channels.get(wtbChannelId).send(nebulaEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb nebula $' + (nebulaWtbPricemin / 1000) + 'k') {

                    userId = message.author.id
                    messageId = message.id
                    channelId = message.channel.id
                    serverId = message.guild.id

                    var hyperSeller = 'https://discordapp.com/users/' + userId
                    var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                    var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                    var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                    nebulaEmbed = new Discord.RichEmbed()

                        .setColor('#f9475d')
                        .setTitle('Nebula WTB Listing Found')
                        .addField('Price', '$' + nebulaWtbPricemin + ' - ' + '€' + nebulaWtbPricemin * .86 + ' - ' + '¥' + nebulaWtbPricemin * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtbChannelId).send('<@&774805952116686848>')

                    client.channels.get(wtbChannelId).send(nebulaEmbed)



                }

            }
        });

    }

    function CustomWtb(arguments, receivedMessage) {


        customWtbPrice = arguments
        user.on('message', message => { // When a message is created


            if(message.content.toString().toLowerCase() === 'wtb ' + (customBotWtbPrice) + ' ' + (customWtbPrice)) {

                userId = message.author.id
                messageId = message.id
                channelId = message.channel.id
                serverId = message.guild.id

                var hyperSeller = 'https://discordapp.com/users/' + userId
                var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                customEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtbPrice) + ' WTB Listing Found')
                    .addField('Price', '$' + customWtbPrice + ' - ' + '€' + customWtbPrice * .86 + ' - ' + '¥' + customWtbPrice * 6.67, true)
                    .addField('Seller', message.author.tag, true)

                    .addField('Link To Seller', hyperSeller2)

                    .addField('Link To Listing', hyperListing2)



                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                client.channels.get(wtbChannelId).send('<@&774805980637823036>')


                user.channels.get(wtbChannelId).send(customEmbed)



            } else if(message.content.toString().toLowerCase() === 'wtb ' + (customBotWtbPrice) + ' $' + (customWtbPrice)) {

                userId = message.author.id
                messageId = message.id
                channelId = message.channel.id
                serverId = message.guild.id

                var hyperSeller = 'https://discordapp.com/users/' + userId
                var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                customEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtbPrice) + ' WTB Listing Found')
                    .addField('Price', '$' + customWtbPrice + ' - ' + '€' + customWtbPrice * .86 + ' - ' + '¥' + customWtbPrice * 6.67, true)
                    .addField('Seller', message.author.tag, true)

                    .addField('Link To Seller', hyperSeller2)

                    .addField('Link To Listing', hyperListing2)



                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');



                client.channels.get(wtbChannelId).send('<@&774805980637823036>')

                user.channels.get(wtbChannelId).send(customEmbed)



            } else if(message.content.toString().toLowerCase() === 'wtb ' + (customBotWtbPrice) + ' $' + (customWtbPrice / 1000) + 'k') {

                userId = message.author.id
                messageId = message.id
                channelId = message.channel.id
                serverId = message.guild.id

                var hyperSeller = 'https://discordapp.com/users/' + userId
                var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                customEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtbPrice) + ' WTB Listing Found')
                    .addField('Price', '$' + customWtbPrice + ' - ' + '€' + customWtbPrice * .86 + ' - ' + '¥' + customWtbPrice * 6.67, true)
                    .addField('Seller', message.author.tag, true)

                    .addField('Link To Seller', hyperSeller2)

                    .addField('Link To Listing', hyperListing2)



                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                client.channels.get(wtbChannelId).send('<@&774805980637823036>')


                user.channels.get(wtbChannelId).send(customEmbed)



            } else if(message.content.toString().toLowerCase() === 'wtb ' + (customBotWtbPrice) + ' ' + (customWtbPrice / 1000) + 'k') {

                userId = message.author.id
                messageId = message.id
                channelId = message.channel.id
                serverId = message.guild.id

                var hyperSeller = 'https://discordapp.com/users/' + userId
                var hyperListing = ' https://discordapp.com/channels/' + serverId + '/' + channelId + '/' + messageId + '/'

                var hyperListing2 = '[Click Here]' + '(' + hyperListing + ')'
                var hyperSeller2 = '[Click Here]' + '(' + hyperSeller + ')'

                customEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtbPrice) + ' WTB Listing Found')
                    .addField('Price', '$' + customWtbPrice + ' - ' + '€' + customWtbPrice * .86 + ' - ' + '¥' + customWtbPrice * 6.67, true)
                    .addField('Seller', message.author.tag, true)

                    .addField('Link To Seller', hyperSeller2)

                    .addField('Link To Listing', hyperListing2)



                    .setTimestamp()
                    .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');


                client.channels.get(wtbChannelId).send('<@&774805980637823036>')


                user.channels.get(wtbChannelId).send(customEmbed)



            }


        });

    }

    function clearAllWtb(arguments, receivedMessage) {

        balkoPriceWtb = null
        f3PriceWtb = null
        rushPriceWtb = null
        mercuryPriceWtb = null
        solePriceWtb = null
        veloxWtbPrice = null
        mekWtbPrice = null
        prismWtbPrice = null
        polarisWtbPrice = null
        splashForceWtbPrice = null
        pdWtbPrice = null
        dasheWtbPrice = null
        tohruWtbPrice = null
        phantomWtbPrice = null
        adeptWtbPrice = null
        burstWtbPrice = null
        cyberWtbPrice = null
        estockWtbPrice = null
        eveWtbPrice = null
        galaxsioWtbPrice = null
        hawkWtbPrice = null
        ganeshWtbPrice = null
        hayhaWtbPrice = null
        kiloWtbPrice = null
        flareWtbPrice = null
        fleekWtbPrice = null
        nebulaWtbPrice = null
        customWtbPrice = null
        customBotWtbPrice = null



    }

    function clearAll(arguments, receivedMessage) {

        balkoPriceWts = null
        f3PriceWts = null
        rushPriceWts = null
        mercuryPriceWts = null
        solePriceWts = null
        wrathWTsPrice = null
        veloxWtsPrice = null
        mekWtsPrice = null
        prismWtsPrice = null
        polarisWtsPrice = null
        splashForceWtsPrice = null
        pdWtsPrice = null
        dasheWtsPrice = null
        tohruWtsPrice = null
        phantomWtsPrice = null
        adeptWtsPrice = null
        burstWtsPrice = null
        cyberWtsPrice = null
        estockWtsPrice = null
        eveWtsPrice = null
        galaxsioWtsPrice = null
        hawkWtsPrice = null
        ganeshWtsPrice = null
        hayhaWtsPrice = null
        kiloWtsPrice = null
        flareWtsPrice = null
        fleekWtsPrice = null
        nebulaWtsPrice = null
        customWtsPrice = null
        customBotWtsPrice = null

        //split for wtb vars

        balkoPriceWtb = null
        f3PriceWtb = null
        rushPriceWtb = null
        mercuryPriceWtb = null
        solePriceWtb = null
        wrathWTsPrice = null
        veloxWtbPrice = null
        mekWtbPrice = null
        prismWtbPrice = null
        polarisWtbPrice = null
        splashForceWtbPrice = null
        pdWtbPrice = null
        dasheWtbPrice = null
        tohruWtbPrice = null
        phantomWtbPrice = null
        adeptWtbPrice = null
        burstWtbPrice = null
        cyberWtbPrice = null
        estockWtbPrice = null
        eveWtbPrice = null
        galaxsioWtbPrice = null
        hawkWtbPrice = null
        ganeshWtbPrice = null
        hayhaWtbPrice = null
        kiloWtbPrice = null
        flareWtbPrice = null
        fleekWtbPrice = null
        nebulaWtbPrice = null
        customWtbPrice = null
        customBotWtbPrice = null

    }


});




user.login('NzcyODI5Mjk4MDA4MTI5NTQ5.X6AXkw.IXLDcddPu43kNiB8UY8hOCr6HJI') //User token
client.login('NzcyODI1NzAxNDk3MTc2MDg0.X6AUBQ.z5OXfGz2O-_xwxBR7eV9beQh1Sw') //bot token