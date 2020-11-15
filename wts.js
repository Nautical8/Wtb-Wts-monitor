const Discord = require('discord.js');
const user = new Discord.Client();
const client = new Discord.Client();

require('events').EventEmitter.defaultMaxListeners = 10000;


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



user.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

client.on('message', receivedMessage => {

    user.on("ready", () => { // When the bot is ready
        console.log("Ready!"); // Log "Ready!"
    });

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


            if(primaryCommand == "current") {
                Current(arguments, receivedMessage)



                let pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5', 'page 6', 'page 7'];
                let page = 0;

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
                    .addField('VeloxWts', 'max ' + veloxWtsPrice + ' min ' + veloxWtsPricemin)
                    .addField('VeloxWtb', 'max ' + veloxWtbPrice + ' min ' + veloxWtbPricemin)

                    .setDescription('Page 1')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                receivedMessage.channel.send(Current2).then(receivedMessage => {

                    receivedMessage.react('⏪').then(r => {
                        receivedMessage.react('⏩')

                        const reactionControls = {
                            NEXT: '⏩',
                            PREV: '⏪'
                        }

                        const collector = new Discord.ReactionCollector(receivedMessage, (reaction, user) => Object.values(reactionControls).includes(reaction.emoji.name), {
                            time: 60000,
                        });

                        collector.on('collect', (reaction, user) => {
                            switch (reaction.emoji.name) {
                                case reactionControls.PREV: {
                                    page = 0

                                    receivedMessage.edit(Current2)
                                    break;
                                }
                                case reactionControls.NEXT: {
                                    page++
                                }
                                if(page == 2) {

                                    Current3 = new Discord.RichEmbed()
                                        .setColor('#f9475d')

                                        .setTitle('Current monitor')


                                        .setTitle('Current monitor')
                                        .addField('DasheWts', 'max ' + dasheWtsPrice + ' min ' + dasheWtsPricemin)
                                        .addField('DasheWtb', 'max ' + dasheWtbPrice + ' min ' + dasheWtbPricemin)
                                        .addField('TohruWts', 'max ' + tohruWtsPrice + ' min ' + tohruWtsPricemin)
                                        .addField('TohruWtb', 'max ' + tohruWtbPrice + ' min ' + tohruWtbPricemin)
                                        .addField('PhantomWts', 'max ' + phantomWtsPrice + ' min ' + phantomWtsPricemin)
                                        .addField('PhantomWtb', 'max ' + phantomWtbPrice + ' min ' + phantomWtbPricemin)
                                        .addField('AdeptWts', 'max ' + adeptWtsPrice + ' min ' + adeptWtsPrice)
                                        .addField('AdeptWtb', 'max ' + adeptWtbPrice + ' min ' + adeptWtbPricemin)
                                        .addField('BalkoWts', 'max ' + balkoPriceWts + ' min ' + balkoPriceWtsmin)
                                        .addField('BalkoWtb', 'max ' + balkoPriceWtb + ' min ' + balkoPriceWtbmin)

                                        .setDescription(pages[page - 1])

                                        .setTimestamp()
                                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                                    receivedMessage.edit(Current3)

                                } else if(page == 3) {


                                    Current4 = new Discord.RichEmbed()

                                        .setColor('#f9475d')

                                        .setTitle('Current monitor')


                                        .addField('f3Wts', 'max ' + f3PriceWts + ' min ' + f3PriceWtsmin)
                                        .addField('f3Wtb', 'max ' + f3PriceWtb + ' min ' + f3PriceWtbmin)
                                        .addField('RushWts', 'max ' + rushPriceWts + ' min ' + rushPriceWtsmin)
                                        .addField('RushWtb', 'max ' + rushPriceWtb + ' min ' + rushPriceWtbmin)
                                        .addField('MercuryWts', 'max ' + mercuryPriceWts + ' min ' + mercuryPriceWtsmin)
                                        .addField('MercuryWtb', 'max ' + mercuryPriceWtb + ' min ' + mercuryPriceWtbmin)
                                        .addField('SoleWts', 'max ' + solePriceWts + ' min ' + solePriceWtbmin)
                                        .addField('SoleWtb', 'max ' + solePriceWtb + ' min ' + solePriceWtbmin)
                                        .addField('NebulaWts', 'max ' + nebulaWtsPrice + ' min ' + nebulaWtsPricemin)
                                        .addField('NebulaWtb', 'max ' + nebulaWtbPrice + ' min ' + nebulaWtbPricemin)
                                        .addField('MekWts', 'max ' + mekWtsPrice + ' min ' + mekWtbPricemin)
                                        .addField('MekWtb', 'max ' + mekWtbPrice + ' min ' + mekWtbPricemin)


                                        .setDescription(pages[page - 1])

                                        .setTimestamp()
                                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                                    receivedMessage.edit(Current4)

                                } else if(page == 4) {


                                    Current5 = new Discord.RichEmbed()

                                        .setColor('#f9475d')

                                        .setTitle('Current monitor')

                                        .addField('SFWts', 'max ' + splashForceWtsPrice + ' min ' + splashForceWtsPricemin)
                                        .addField('SFWtb', 'max ' + splashForceWtbPrice + ' min ' + splashForceWtbPricemin)
                                        .addField('pdWts', 'max ' + pdWtsPrice + ' min ' + pdWtsPricemin)
                                        .addField('pdWtb', 'max ' + pdWtbPrice + ' min ' + pdWtbPricemin)
                                        .addField('PolarisWts', 'max ' + polarisWtsPrice + ' min ' + polarisWtsPrice)
                                        .addField('PolarisWtb', 'max ' + polarisWtbPrice + ' min ' + polarisWtbPricemin)
                                        .addField('PrismWts', 'max ' + prismWtsPrice + ' min ' + prismWtsPricemin)
                                        .addField('PrismWtb', 'max ' + prismWtbPrice + ' min ' + prismWtbPricemin)
                                        .addField('WrathWts', 'max ' + wrathWTsPrice + ' min ' + wrathWTsPricemin)
                                        .addField('WrathWtb', 'max ' + wrathWtbPrice + ' min ' + wrathWtbPricemin)
                                        .addField('GalaxsioWts', 'max ' + galaxsioWtsPrice + ' min ' + galaxsioWtsPricemin)




                                        .setDescription(pages[page - 1])

                                        .setTimestamp()
                                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                                    receivedMessage.edit(Current5)

                                } else if(page == 5) {


                                    Current6 = new Discord.RichEmbed()

                                        .setColor('#f9475d')

                                        .setTitle('Current monitor')


                                        .addField('CyberWts', 'max ' + cyberWtsPrice + ' min ' + cyberWtsPricemin)
                                        .addField('CyberWtb', 'max ' + cyberWtbPrice + ' min ' + cyberWtbPricemin)
                                        .addField('EveWts', 'max ' + eveWtsPrice + ' min ' + eveWtsPricemin)
                                        .addField('EveWtb', 'max ' + eveWtbPrice + ' min ' + eveWtbPricemin)
                                        .addField('BurstWts', 'max ' + burstWtsPrice + ' min ' + burstWtsPricemin)
                                        .addField('BurstWtb', 'max ' + burstWtbPrice + ' min ' + burstWtbPricemin)
                                        .addField('EstockWts', 'max ' + estockWtsPrice + ' min ' + estockWtsPricemin)
                                        .addField('EstockWtb', 'max ' + estockWtbPrice + ' min ' + estockWtbPricemin)
                                        .addField('HawkWts', 'max ' + hawkWtsPrice + ' min ' + hawkWtsPricemin)
                                        .addField('HawkWtb', 'max ' + hawkWtbPrice + ' min ' + hawkWtbPricemin)

                                        .setDescription(pages[page - 1])

                                        .setTimestamp()
                                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                                    receivedMessage.edit(Current6)
                        break;      
                                }


                            }


                        });
                    });

                });




            } else if(primaryCommand == "commands") {



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
                    .addField('!current', 'This command will show all current bots values')
                    .addField('Replacing A Monitor', 'To replace a monitor simply do the setting commands above and use a different price')

                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(commandEmbed)

            } else if(primaryCommand == "balkowts") {
                balkoPriceWts = arguments
                BalkoEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Balko WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(BalkoEmbed)



            } else if(primaryCommand == "balkowtsmin") {
                balkoWts(arguments, receivedMessage)

                BalkoEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Balko WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(BalkoEmbed)




            } else if(primaryCommand == "f3wtsmin") {
                f3Wts(arguments, receivedMessage)

                f3Sucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('F3 WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(f3Sucess)


            } else if(primaryCommand == "mercurywtsmin") {
                mercuryWts(arguments, receivedMessage)

                mercurySucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mercury WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mercurySucess)



            } else if(primaryCommand == "clearallwts") {
                clearAllWts(arguments, receivedMessage)


                clearAllWts = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('All WTS Monitors Cleared')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(clearAllWts)

            } else if(primaryCommand == "f3wts") {
                f3PriceWts = arguments
                f3Sucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('F3 WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(f3Sucess)

            } else if(primaryCommand == "rushwtsmin") {
                rushWts(arguments, receivedMessage)

                rushSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Rush WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(rushSucess)



            } else if(primaryCommand == "solewtsmin") {
                soleWts(arguments, receivedMessage)

                soleSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Sole WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(soleSucess)

            } else if(primaryCommand == "wrathwtsmin") {
                wrathWts(arguments, receivedMessage)

                wrathSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Wrath WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(wrathSucess)
            } else if(primaryCommand == "veloxwtsmin") {
                veloxWts(arguments, receivedMessage)

                veloxSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Velox WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(veloxSucess)

            } else if(primaryCommand == "mekwtsmin") {
                mekWts(arguments, receivedMessage)

                mekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mek WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mekSucess)

            } else if(primaryCommand == "prismwtsmin") {
                prismWts(arguments, receivedMessage)

                prismSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prism WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(prismSucess)
            } else if(primaryCommand == "polariswtsmin") {
                polarisWts(arguments, receivedMessage)
                polarisSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Polaris WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(polarisSucess)
            } else if(primaryCommand == "sfwtsmin") {
                splashForceWts(arguments, receivedMessage)

                sfsucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Splash Force WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(sfsucess)
            } else if(primaryCommand == "pdwtsmin") {
                pdWts(arguments, receivedMessage)

                pdSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prodject Destroyer WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(pdSucess)
            } else if(primaryCommand == "dashewtsmin") {
                dasheWts(arguments, receivedMessage)

                DasheSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Dashe WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(DasheSucess)
            } else if(primaryCommand == "tohruwtsmin") {
                tohruWts(arguments, receivedMessage)

                tohruSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Tohru WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(tohruSucess)
            } else if(primaryCommand == "phantomwtsmin") {
                phantomWts(arguments, receivedMessage)

                phantomSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Phantom WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(phantomSucess)
            } else if(primaryCommand == "adeptwtsmin") {


                adeptWts(arguments, receivedMessage)
                adeptSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Adept WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(adeptSucess)

            } else if(primaryCommand == "burstwtsmin") {
                burstWts(arguments, receivedMessage)

                burstSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Burst WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(burstSucess)
            } else if(primaryCommand == "cyberwtsmin") {
                cyberWts(arguments, receivedMessage)

                cyberSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Cyber WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(cyberSucess)
            } else if(primaryCommand == "estockwtsmin") {
                estockWts(arguments, receivedMessage)

                estockSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Estock WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(estockSucess)
            } else if(primaryCommand == "galaxsiowtsmin") {
                galaxioWts(arguments, receivedMessage)

                galaxsioSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Galaxsio WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(galaxsioSucess)
            } else if(primaryCommand == "evewtsmin") {
                eveWts(arguments, receivedMessage)

                eveSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Eve WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(eveSucess)
            } else if(primaryCommand == "hawkmeshwtsmin") {
                hawkWts(arguments, receivedMessage)

                hawkSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hawk Mesh WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hawkSucess)
            } else if(primaryCommand == "ganeshwtsmin") {
                ganeshWts(arguments, receivedMessage)

                ganeshSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Ganesh WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(ganeshSucess)


            } else if(primaryCommand == "hayhawtsmin") {
                hayhaWts(arguments, receivedMessage)

                hayhaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hayha WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hayhaSucess)

            } else if(primaryCommand == "kilowtsmin") {
                kiloWts(arguments, receivedMessage)

                kilSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Kilo WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(kilSucess)
            } else if(primaryCommand == "flarewtsmin") {
                flareWts(arguments, receivedMessage)

                flareSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Flare WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(flareSucess)

            } else if(primaryCommand == "fleekwtsmin") {
                fleekWts(arguments, receivedMessage)

                fleekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Fleek WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(fleekSucess)

            } else if(primaryCommand == "nebulawtsmin") {


                nebulaWts(arguments, receivedMessage)

                nebulaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Nebula WTS Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(nebulaSucess)

            } 
            
            else if(primaryCommand == "rushwts") {
                rushPriceWts = arguments
                rushSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Rush WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(rushSucess)


            } else if(primaryCommand == "mercurywts") {
                mercuryPriceWts = arguments
                mercurySucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mercury WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mercurySucess)


            } else if(primaryCommand == "solewts") {
                solePriceWts = arguments

                soleSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Sole WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(soleSucess)


            } else if(primaryCommand == "wrathwts") {
                wrathWTsPrice = arguments
                wrathSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Wrath WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(wrathSucess)

            } else if(primaryCommand == "veloxwts") {
                veloxWtsPrice = arguments
                veloxSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Velox WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(veloxSucess)

            } else if(primaryCommand == "mekwts") {
                mekWtsPrice = arguments
                mekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mek WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mekSucess)

            } else if(primaryCommand == "prismwts") {
                prismWtsPrice = arguments
                prismSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prism WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(prismSucess)
            } else if(primaryCommand == "polariswts") {
                polarisWtsPrice = arguments
                polarisSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Polaris WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(polarisSucess)
            } else if(primaryCommand == "sfwts") {
                splashForceWtsPrice = arguments
                sfsucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Splash Force WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(sfsucess)
            } else if(primaryCommand == "pdwts") {
                pdWtsPrice = arguments
                pdSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prodject Destroyer WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(pdSucess)
            } else if(primaryCommand == "dashewts") {
                dasheWtsPrice = arguments
                DasheSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Dashe WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(DasheSucess)
            } else if(primaryCommand == "tohruwts") {
                tohruWtsPrice = arguments
                tohruSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Tohru WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(tohruSucess)
            } else if(primaryCommand == "phantomwts") {
                phantomWtsPrice = arguments
                phantomSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Phantom WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(phantomSucess)
            } else if(primaryCommand == "adeptwts") {
                adeptWtsPrice = arguments
                adeptSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Adept WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(adeptSucess)
            } else if(primaryCommand == "burstwts") {
                burstWtsPrice = arguments
                burstSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Burst WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(burstSucess)
            } else if(primaryCommand == "cyberwts") {
                cyberWtsPrice = arguments
                cyberSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Cyber WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(cyberSucess)
            } else if(primaryCommand == "estockwts") {
                estockWtsPrice = arguments
                estockSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Estock WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(estockSucess)
            } else if(primaryCommand == "evewts") {
                eveWtsPrice = arguments
                eveSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Eve WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(eveSucess)
            } else if(primaryCommand == "galaxsiowts") {
                galaxsioWtsPrice = arguments
                galaxsioSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Galaxsio WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(galaxsioSucess)
            } else if(primaryCommand == "hawkmeshwts") {
                hawkWtsPrice = arguments
                hawkSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hawk Mesh WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hawkSucess)
            } else if(primaryCommand == "ganeshwts") {
                ganeshWtsPrice = arguments

                ganeshSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Ganesh WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(ganeshSucess)
            } else if(primaryCommand == "hayhawts") {
                hayhaWtsPrice = arguments
                hayhaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hayha WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hayhaSucess)

            } else if(primaryCommand == "kilowts") {
                kiloWtsPrice = arguments
                kilSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Kilo WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(kilSucess)

            } else if(primaryCommand == "flarewts") {
                flareWtsPrice = arguments
                flareSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Flare WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(flareSucess)

            } else if(primaryCommand == "fleekwts") {
                fleekWtsPrice = arguments
                fleekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Fleek WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(fleekSucess)

            } else if(primaryCommand == "nebulawts") {
                nebulaWtsPrice = arguments
                nebulaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Nebula WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(nebulaSucess)

            } else if(primaryCommand == "custombotwts") {

                customBotWtsPrice = arguments
                customAdded = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtsPrice) + ' Sucessfully Added, Add WTS Also')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(customAdded)

            } else if(primaryCommand == "customwtsprice") {




                CustomWts(arguments, receivedMessage)

                customWtsPrice = arguments

                customWtsEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtsPrice) + ' ' + (customWtsPrice) + ' WTS Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




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
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(BalkoEmbed)



            } else if(primaryCommand == "f3wtbmin") {
                f3Wtb(arguments, receivedMessage)

                f3Sucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('F3 WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(f3Sucess)

            } else if(primaryCommand == "rushwtbmin") {
                rushWtb(arguments, receivedMessage)

                rushSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Rush WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(rushSucess)


            } else if(primaryCommand == "mercurywtbmin") {
                mercuryWtb(arguments, receivedMessage)

                mercurySucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mercury WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mercurySucess)


            } else if(primaryCommand == "solewtbmin") {
                soleWtb(arguments, receivedMessage)

                soleSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Sole WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(soleSucess)


            } else if(primaryCommand == "wrathwtbmin") {
                wrathWtb(arguments, receivedMessage)

                wrathSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Wrath WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(wrathSucess)

            } else if(primaryCommand == "veloxwtbmin") {
                veloxWtb(arguments, receivedMessage)

                veloxSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Velox WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(veloxSucess)

            } else if(primaryCommand == "mekwtbmin") {
                mekWtb(arguments, receivedMessage)

                mekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mek WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mekSucess)

            } else if(primaryCommand == "prismwtbmin") {
                prismWtb(arguments, receivedMessage)

                prismSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prism WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(prismSucess)

            } else if(primaryCommand == "polariswtbmin") {
                polarisWtb(arguments, receivedMessage)

                polarisSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Polaris WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(polarisSucess)

            } else if(primaryCommand == "sfwtbmin") {
                splashForceWtb(arguments, receivedMessage)

                sfsucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Splash Force WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(sfsucess)

            } else if(primaryCommand == "pdwtbmin") {
                pdWtb(arguments, receivedMessage)

                pdSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prodject Destroyer WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(pdSucess)

            } else if(primaryCommand == "dashewtbmin") {
                dasheWtb(arguments, receivedMessage)

                DasheSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Dashe WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(DasheSucess)
            } else if(primaryCommand == "tohruwtbmin") {
                tohruWtb(arguments, receivedMessage)
                tohruSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Tohru WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(tohruSucess)
            } else if(primaryCommand == "phantomwtbmin") {
                phantomWtb(arguments, receivedMessage)

                phantomSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Phantom WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(phantomSucess)
            } else if(primaryCommand == "adeptwtbmin") {
                adeptWtb(arguments, receivedMessage)

                adeptSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Adept WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(adeptSucess)
            } else if(primaryCommand == "burstwtbmin") {
                burstWtb(arguments, receivedMessage)

                burstSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Burst WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(burstSucess)
            } else if(primaryCommand == "cyberwtbmin") {
                cyberWtb(arguments, receivedMessage)

                cyberSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Cyber WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(cyberSucess)
            } else if(primaryCommand == "estockwtbmin") {
                estockWtb(arguments, receivedMessage)

                estockSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Estock WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(estockSucess)
            } else if(primaryCommand == "evewtbmin") {
                eveWtb(arguments, receivedMessage)

                eveSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Eve WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(eveSucess)
            } else if(primaryCommand == "galaxsiowtbmin") {
                galaxioWtb(arguments, receivedMessage)

                galaxsioSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Galaxsio WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(galaxsioSucess)
            } else if(primaryCommand == "hawkmeshwtbmin") {
                hawkWtb(arguments, receivedMessage)

                hawkSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hawk Mesh WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hawkSucess)
            } else if(primaryCommand == "ganeshwtbmin") {
                ganeshWtb(arguments, receivedMessage)

                ganeshSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Ganesh WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(ganeshSucess)
            } else if(primaryCommand == "hayhawtbmin") {
                hayhaWtb(arguments, receivedMessage)

                hayhaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hayha WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hayhaSucess)

            } else if(primaryCommand == "kilowtbmin") {
                kiloWtb(arguments, receivedMessage)

                kilSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Kilo WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(kilSucess)

            } else if(primaryCommand == "flarewtbmin") {
                flareWtb(arguments, receivedMessage)

                flareSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Flare WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(flareSucess)

            } else if(primaryCommand == "fleekwtbmin") {
                fleekWtb(arguments, receivedMessage)

                fleekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Fleek WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(fleekSucess)

            } else if(primaryCommand == "nebulawtbmin") {
                nebulaWtb(arguments, receivedMessage)

                nebulaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Nebula WTB Min Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(nebulaSucess)

            } 
            
            else if(primaryCommand == "balkowtb") {
                balkoPriceWtb = arguments
                BalkoEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Balko WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(BalkoEmbed)



            } else if(primaryCommand == "clearallwtb") {
                clearAllWtb(arguments, receivedMessage)


                clearAllWtb = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('All WTB Monitors Cleared')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(clearAllWtb)

            } else if(primaryCommand == "f3wtb") {
                f3PriceWtb = arguments
                f3Sucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('F3 WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(f3Sucess)

            } else if(primaryCommand == "rushwtb") {

                rushPriceWtb = arguments
                rushSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Rush WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(rushSucess)


            } else if(primaryCommand == "mercurywtb") {
                mercuryPriceWtb = arguments

                mercurySucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mercury WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mercurySucess)


            } else if(primaryCommand == "solewtb") {
                solePriceWtb = arguments
                soleSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Sole WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(soleSucess)


            } else if(primaryCommand == "wrathwtb") {
                wrathWtb(arguments, receivedMessage)
                wrathWtbPrice = arguments
                wrathSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Wrath WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(wrathSucess)

            } else if(primaryCommand == "veloxwtb") {
                veloxWtbPrice = arguments
                veloxSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Velox WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(veloxSucess)

            } else if(primaryCommand == "mekwtb") {
                mekWtbPrice = arguments
                mekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Mek WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(mekSucess)

            } else if(primaryCommand == "prismwtb") {

                prismWtbPrice = arguments
                prismSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prism WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(prismSucess)
            } else if(primaryCommand == "polariswtb") {
                polarisWtbPrice = arguments
                polarisSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Polaris WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(polarisSucess)
            } else if(primaryCommand == "sfwtb") {
                splashForceWtbPrice = arguments
                sfsucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Splash Force WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(sfsucess)
            } else if(primaryCommand == "pdwtb") {
                pdWtbPrice = arguments
                pdSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Prodject Destroyer WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(pdSucess)
            } else if(primaryCommand == "dashewtb") {
                dasheWtbPrice = arguments
                DasheSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Dashe WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(DasheSucess)
            } else if(primaryCommand == "tohruwtb") {
                tohruWtbPrice = arguments

                tohruSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Tohru WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(tohruSucess)
            } else if(primaryCommand == "phantomwtb") {
                phantomWtbPrice = arguments
                phantomSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Phantom WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(phantomSucess)
            } else if(primaryCommand == "adeptwtb") {
                adeptWtbPrice = arguments
                adeptSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Adept WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(adeptSucess)
            } else if(primaryCommand == "burstwtb") {
                burstWtbPrice = arguments
                burstSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Burst WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(burstSucess)
            } else if(primaryCommand == "cyberwtb") {
                cyberWtbPrice = arguments
                cyberSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Cyber WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(cyberSucess)
            } else if(primaryCommand == "estockwtb") {
                estockWtbPrice = arguments
                estockSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Estock WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(estockSucess)
            } else if(primaryCommand == "evewtb") {
                eveWtbPrice = arguments
                eveSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Eve WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(eveSucess)
            } else if(primaryCommand == "galaxsiowtb") {
                galaxsioWtbPrice = arguments
                galaxsioSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Galaxsio WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(galaxsioSucess)
            } else if(primaryCommand == "hawkmeshwtb") {
                hawkWtbPrice = arguments
                hawkSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hawk Mesh WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hawkSucess)
            } else if(primaryCommand == "ganeshwtb") {
                ganeshWtbPrice = arguments
                ganeshSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Ganesh WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(ganeshSucess)
            } else if(primaryCommand == "hayhawtb") {
                hayhaWtbPrice = arguments
                hayhaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Hayha WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(hayhaSucess)

            } else if(primaryCommand == "kilowtb") {
                kiloWtbPrice = arguments
                kilSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Kilo WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(kilSucess)

            } else if(primaryCommand == "flarewtb") {
                flareWtbPrice = arguments
                flareSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Flare WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(flareSucess)

            } else if(primaryCommand == "fleekwtb") {
                fleekWtbPrice = arguments
                fleekSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Fleek WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(fleekSucess)

            } else if(primaryCommand == "nebulawtb") {
                nebulaWtbPrice = arguments
                nebulaSucess = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('Nebula WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(nebulaSucess)

            } else if(primaryCommand == "custombotwtb") {

                customBotWtbPrice = arguments
                customAdded = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtbPrice) + ' Sucessfully Added, Add WTB Also')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(customAdded)

            } else if(primaryCommand == "customwtbprice") {


                CustomWtb(arguments, receivedMessage)

                customWtbPrice = arguments

                customWtbEmbed = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle((customBotWtbPrice) + ' ' + (customWtbPrice) + ' WTB Sucessfully Added')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(customWtbEmbed)

            } else if(primaryCommand == "clearall") {


                clearAll(arguments, receivedMessage)


                clearAll = new Discord.RichEmbed()

                    .setColor('#f9475d')
                    .setTitle('All Monitors Cleared')


                    .setTimestamp()
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                receivedMessage.channel.send(clearAll)

            }


        } else {
            error = new Discord.RichEmbed()

                .setColor('#f9475d')
                .setTitle('You Cannot Use This Command')


                .setTimestamp()
                .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




            receivedMessage.channel.send(error)

        }

    }

    function balkoWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            balkoPriceWtsmin = arguments
        min=balkoPriceWtsmin   

            for(; min < balkoPriceWts; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '772833340327329812') {




                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774503052530155560>')
                        client.channels.get(wtsChannelId).send(BalkoEmbed)

                    }
                } else if(message.channel.id == '773625024779124776') {

                    if(message.content.toString().includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774503052530155560>')
                        client.channels.get(wtsChannelId).send(BalkoEmbed)

                    }

                } else if(message.channel.id == '750080118684254328') {

                    if(message.content.toString().includes(min)) {

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
                                .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                                .addField('Seller', message.author.tag, true)
    
                                .addField('Link To Seller', hyperSeller2)
    
                                .addField('Link To Listing', hyperListing2)
    
    
    
                                .setTimestamp()
                                .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
    
    
                            client.channels.get(wtsChannelId).send('<@&774503052530155560>')
                            client.channels.get(wtsChannelId).send(BalkoEmbed)
    
                        }
                      
                    }
                }
            
        });


    }

    function f3Wts(arguments, receivedMessage) {



        user.on('message', message => { // When a message is created

            f3PriceWtsmin = arguments
            min=f3PriceWtsmin

            for(; min < f3PriceWts; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '710921760303742976') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774503521709457459>')

                        client.channels.get(wtsChannelId).send(f3embed)



                    }
                } else if(message.channel.id == '626993314427568168') {
                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774503521709457459>')

                        client.channels.get(wtsChannelId).send(f3embed)



                    }
                } else if(message.channel.id == '750079728328900718') {
                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + f3PminiceWtsmin * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774503521709457459>')

                        client.channels.get(wtsChannelId).send(f3embed)



                    }
                }
            }
        });

    }

    function rushWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created


            rushPriceWtsmin = arguments
                min=rushPriceWtsmin
            for(; min < rushPriceWts; min++) {


              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '752600540252209152') {




                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774503635903053875>')
                        client.channels.get(wtsChannelId).send(rushEmbed)



                    }

                } else if(message.channel.id == '715325254100320309') {
                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                    
                        client.channels.get(wtsChannelId).send('<@&774503635903053875>')
                        client.channels.get(wtsChannelId).send(rushEmbed)
                    }

                } else if(message.channel.id == '736704514756968558') {
                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


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
                min=mercuryPriceWtsmin

            for(; min < mercuryPriceWts; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.content.toString() === 'wts mercury ' + (min)) {


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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                    client.channels.get(wtsChannelId).send('<@&774803234971451452>')
                    client.channels.get(wtsChannelId).send(mercuryEmbed)


                } else if(message.content.toString() === 'wts mercury aio $' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtsChannelId).send('<@&774803234971451452>')
                    client.channels.get(wtsChannelId).send(mercuryEmbed)



                } else if(message.content.toString() === 'wts mercury aio ' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtsChannelId).send('<@&774803234971451452>')
                    client.channels.get(wtsChannelId).send(mercuryEmbed)



                } else if(message.content.toString() === 'wts mercury aio ' + (min) + '$') {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtsChannelId).send('<@&774803234971451452>')
                    client.channels.get(wtsChannelId).send(mercuryEmbed)



                } else if(message.content.toString() === 'wts mercury ' + (min / 1000) + 'k') {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtsChannelId).send('<@&774803234971451452>')
                    client.channels.get(wtsChannelId).send(mercuryEmbed)



                } else if(message.content.toString() === 'wts mercury ' + (min / 1000) + 'k$') {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774803234971451452>')

                    client.channels.get(wtsChannelId).send(mercuryEmbed)



                } else if(message.content.toString() === 'wts mercury $' + (min / 1000) + 'k') {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774803234971451452>')

                    client.channels.get(wtsChannelId).send(mercuryEmbed)



                }


            }


        });

    }

    function soleWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created

            solePriceWtsmin = arguments
            min=solePriceWtsmin
            for(; min < solePriceWts; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '700486817496957000') {


                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774803407533506562>')
                        client.channels.get(wtsChannelId).send(soleEmbed)


                    }
                } else if(message.channel.id == '626997679377088562') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774803407533506562>')
                        client.channels.get(wtsChannelId).send(soleEmbed)


                    }


                } else if(message.channel.id == '751572267905056859') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774803407533506562>')
                        client.channels.get(wtsChannelId).send(soleEmbed)


                    }

                }
            }
        });

    }

    function wrathWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            wrathWTsPricemin = arguments
           min= wrathWTsPricemin
            for(; min < wrathWTsPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }


                if(message.channel.id == '710921120542359582') {



                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                        client.channels.get(wtsChannelId).send('<@&774803488193511475>')


                        client.channels.get(wtsChannelId).send(wrathEmbed)



                    }
                } else if(message.channel.id == '626997441392017428') {
                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                        client.channels.get(wtsChannelId).send('<@&774803488193511475>')


                        client.channels.get(wtsChannelId).send(wrathEmbed)



                    }

                } else if(message.channel.id == '743950855069368461') {
                    if(message.content.toString().includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774803488193511475>')


                        client.channels.get(wtsChannelId).send(wrathEmbed)



                    }
                }
            }
        });

    }

    function veloxWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            veloxWtsPricemin = arguments
            min=veloxWtsPricemin
            for(; min < veloxWtsPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921145146408972') {



                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtsChannelId).send('<@&774803645416996914>')


                        client.channels.get(wtsChannelId).send(veloxEmbed)



                    }
                } else if(message.channel.id == '634518877748854814') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtsChannelId).send('<@&774803645416996914>')


                        client.channels.get(wtsChannelId).send(veloxEmbed)



                    }



                } else if(message.channel.id == '750079237591007243') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtsChannelId).send('<@&774803645416996914>')


                        client.channels.get(wtsChannelId).send(veloxEmbed)



                    }




                }
            }
        });

    }

    function mekWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created

            mekWtsPricemin = arguments
            min=mekWtsPricemin
            for(; min < mekWtbPrice; min++) {


              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '710921442967158872') {


                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtsChannelId).send('<@&774803745346289684>')

                        client.channels.get(wtsChannelId).send(mekEmbed)



                    }

                } else if(message.channel.id == '627003393461977108') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtsChannelId).send('<@&774803745346289684>')

                        client.channels.get(wtsChannelId).send(mekEmbed)



                    }

                } else if(message.channel.id == '750079650264252508') {

                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774803745346289684>')

                        client.channels.get(wtsChannelId).send(mekEmbed)



                    }

                }
            }

        });

    }

    function prismWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            prismWtsPricemin = arguments
            min=prismWtsPricemin
            for(; min < prismWtsPrice; min++) {



              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '710921405935517697') {


                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774803748018454559>')


                        client.channels.get(wtsChannelId).send(prismEmbed)



                    }
                } else if(message.channel.id == '626997179378171925') {


                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774803748018454559>')


                        client.channels.get(wtsChannelId).send(prismEmbed)



                    }
                } else if(message.channel.id == '750079394831401040') {


                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774803748018454559>')


                        client.channels.get(wtsChannelId).send(prismEmbed)



                    }
                }
            }

        });

    }

    function polarisWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created

            polarisWtsPricemin = arguments
            min=polarisWtsPricemin
            for(; min < polarisWtsPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '710921405935517697') {


                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774803951438659594>')



                        client.channels.get(wtsChannelId).send(poalrisEmbed)



                    }

                } else if(message.channel.id == '713875826319294544') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774803951438659594>')



                        client.channels.get(wtsChannelId).send(poalrisEmbed)



                    }

                } else if(message.channel.id == '750079394831401040') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774803951438659594>')



                        client.channels.get(wtsChannelId).send(poalrisEmbed)



                    }

                }
            }
        });

    }

    function splashForceWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            splashForceWtsPricemin = arguments
            min=splashForceWtsPricemin
            for(; min < splashForceWtsPrice; min++) {

             
              

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.content.toString().toLowerCase() === 'wts splash force ' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774803954713231366>')


                    client.channels.get(wtsChannelId).send(sfEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts splash force/sf ' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774803954713231366>')


                    client.channels.get(wtsChannelId).send(sfEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts splash force/sf $' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtsChannelId).send('<@&774803954713231366>')



                    client.channels.get(wtsChannelId).send(sfEmbed)



                } else if(message.content.toString().toLowerCase() === 'wts splash force $' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtsChannelId).send('<@&774803954713231366>')



                    client.channels.get(wtsChannelId).send(sfEmbed)



                }

            }
        });

    }

    function pdWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            pdWtsPricemin = arguments
            min=pdWtsPricemin
            for(; min < pdWtsPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921389552566303') {


                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774803955078266890>')


                        client.channels.get(wtsChannelId).send(pdEmbed)



                    }
                } else if(message.channel.id == '626996548009721886') {

                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774803955078266890>')


                        client.channels.get(wtsChannelId).send(pdEmbed)



                    }
                } else if(message.channel.id == '750079568433512538') {

                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774803955078266890>')


                        client.channels.get(wtsChannelId).send(pdEmbed)



                    }
                }
            }
        });

    }

    function dasheWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created


            dasheWtsPricemin = arguments
            min=dasheWtsPricemin

            for(; min < dasheWtsPrice; min++) {


              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921806243954770') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774500633020989512>')

                        client.channels.get(wtsChannelId).send(dasheEmbed)



                    }

                }
            }
        });

    }

    function tohruWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            tohruWtsPricemin = arguments
            min=tohruWtsPricemin
            for(; min < tohruWtsPrice; min++) {


              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '733784476546498651') {



                    if(message.content.toString().includes(min )) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774804317387096134>')


                        client.channels.get(wtsChannelId).send(tohruEmbed)

                    }

                } else if(message.channel.id == '734522747580841985') {
                    if(message.content.toString().includes(min )) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804317387096134>')


                        client.channels.get(wtsChannelId).send(tohruEmbed)

                    }


                } else if(message.channel.id == '750079269912444978') {
                    if(message.content.toString().includes(min )) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804317387096134>')


                        client.channels.get(wtsChannelId).send(tohruEmbed)

                    }


                }
            }
        });

    }

    function phantomWts(arguments, receivedMessage) {

        user.on('message', message => { // When a message is created


            phantomWtsPricemin = arguments
            min=phantomWtsPricemin
            for(; min < phantomWtsPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921653739323402') {


                    if(message.content.toString().includes(min )) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804319785975839>')


                        client.channels.get(wtsChannelId).send(PhantomEmbed)


                    }
                } else if(message.channel.id == '627359696335929365') {


                    if(message.content.toString().includes(min )) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774804319785975839>')


                        client.channels.get(wtsChannelId).send(PhantomEmbed)


                    }
                } else if(message.channel.id == '750079496211922944') {


                    if(message.content.toString().includes(min) ) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804319785975839>')


                        client.channels.get(wtsChannelId).send(PhantomEmbed)


                    }
                }
            }
        });

    }

    function adeptWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            adeptWtsPricemin = arguments

            min=adeptWtsPricemin

            for(; min < adeptWtsPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921903249948802') {


                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774804319819792395>')


                        client.channels.get(wtsChannelId).send(adeptEmbed)



                    }
                } else if(message.channel.id == '627359696335929365') {


                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774804319819792395>')


                        client.channels.get(wtsChannelId).send(adeptEmbed)



                    }

                } else if(message.channel.id == '750079939973480488') {


                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774804319819792395>')


                        client.channels.get(wtsChannelId).send(adeptEmbed)



                    }
                }
            }

        });

    }

    function burstWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            burstWtsPricemin = arguments
            min=burstWtsPricemin
            for(; min < burstWtbPrice; min++) {


              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '762401756437020703') {



                    if(message.content.toString().includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774804320490225674>')


                        client.channels.get(wtsChannelId).send(burstEmbed)



                    }
                }
            }
        });

    }

    function cyberWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            cyberWtsPricemin = arguments

            for(; min < cyberWtsPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921830558335087') {



                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804321362640906>')

                        client.channels.get(wtsChannelId).send(cyberEmbed)



                    }

                } else if(message.channel.id == '626930445774487563') {


                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804321362640906>')

                        client.channels.get(wtsChannelId).send(cyberEmbed)



                    }


                } else if(message.channel.id == '750080029278339203') {


                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804321362640906>')

                        client.channels.get(wtsChannelId).send(cyberEmbed)



                    }

                }
            }
        });

    }

    function estockWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created

            estockWtsPricemin = arguments
            min=estockWtsPricemin
            for(; min < estockWtsPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '761090509858406400') {



                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804939720753172>')


                        client.channels.get(wtsChannelId).send(estockEmbed)



                    }

                }
            }
        });

    }

    function eveWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            eveWtsPricemin = arguments
            min=eveWtsPricemin
            for(; min < eveWtsPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '710921786321141911') {



                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804941478821888>')

                        client.channels.get(wtsChannelId).send(eveEmbed)



                    }
                } else if(message.channel.id == '626997994927161377') {

                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774804941478821888>')

                        client.channels.get(wtsChannelId).send(eveEmbed)



                    }

                } else if(message.channel.id == '750079789196509294') {

                    if(message.content.toString().includes(min)) {



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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774804941478821888>')

                        client.channels.get(wtsChannelId).send(eveEmbed)



                    }

                }
            }
        });

    }

    function galaxioWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created

            galaxsioWtsPricemin = arguments
            min=galaxsioWtsPricemin


            for(; min < galaxsioWtsPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '692817365561376788') {



                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774804944536076318>')

                        client.channels.get(wtsChannelId).send(glaxsioEmbed)



                    }
                }
            }
        });

    }

    function hawkWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            hawkWtsPricemin = arguments
            min=hawkWtsPricemin
            for(; min < hawkWtsPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921635976446002') {


                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                        client.channels.get(wtsChannelId).send('<@&774804946059132938>')


                        client.channels.get(wtsChannelId).send(hawkEmbed)

                    }

                } else if(message.channel.id == '626998862145650698') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774804946059132938>')


                        client.channels.get(wtsChannelId).send(hawkEmbed)

                    }


                }
            }
        });

    }

    function ganeshWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created

            ganeshWtsPricemin = arguments
            min=ganeshWtsPricemin

            for(; min < ganeshWtsPrice; min++) {


              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921675998494770') {



                    if(message.content.toString().includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774804947967410176>')


                        client.channels.get(wtsChannelId).send(ganeshEmbed)



                    }
                } else if(message.channel.id == '772833340327329812') {


                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774804947967410176>')


                        client.channels.get(wtsChannelId).send(ganeshEmbed)



                    }


                } else if(message.channel.id == '764754241113161728') {


                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774804947967410176>')


                        client.channels.get(wtsChannelId).send(ganeshEmbed)



                    }

                }
            }
        });

    }

    function hayhaWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            hayhaWtsPricemin = arguments
            min=hayhaWtsPricemin
            for(; min < hayhaWtsPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921620025376769') {



                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774805427098746950>')


                        client.channels.get(wtsChannelId).send(hayhaEmbed)


                    }
                } else if(message.channel.id == '699454441354428516') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774805427098746950>')


                        client.channels.get(wtsChannelId).send(hayhaEmbed)


                    }

                } else if(message.channel.id == '752600588537167955') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774805427098746950>')


                        client.channels.get(wtsChannelId).send(hayhaEmbed)


                    }

                }
            }
        });

    }

    function kiloWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            kiloWtsPricemin = arguments
            min=kiloWtsPricemin
            for(; min < kiloWtsPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '733784066284978307') {



                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774805429858467841>')


                        client.channels.get(wtsChannelId).send(kiloEmbed)


                    }
                } else if(message.channel.id == '734523471542878349') {
                    if(message.content.toString().includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774805429858467841>')


                        client.channels.get(wtsChannelId).send(kiloEmbed)


                    }

                }
            }
        });

    }

    function flareWts(arguments, receivedMessage) {

        user.on('message', message => { // When a message is created

            flareWtsPricemin = arguments
            min=flareWtsPricemin
            for(; min < flareWtsPrice; min++) {


              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '710921725759455253') {



                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtsChannelId).send('<@&774805432521981972>')


                        client.channels.get(wtsChannelId).send(FlareEmbed)


                    }

                } else if(message.channel.id == '692632524609945660') {


                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtsChannelId).send('<@&774805432521981972>')


                        client.channels.get(wtsChannelId).send(FlareEmbed)


                    }

                }
            }
        });

    }

    function fleekWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            fleekWtsPricemin = arguments
            min=fleekWtsPricemin
            for(; min < fleekWtsPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }


                if(message.channel.id == '700487250483478560') {



                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774805437714923620>')


                        client.channels.get(wtsChannelId).send(fleekEmbed)



                    }

                } else if(message.channel.id == '626999432881242152') {
                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtsChannelId).send('<@&774805437714923620>')


                        client.channels.get(wtsChannelId).send(fleekEmbed)



                    }

                } else if(message.channel.id == '759444386257305620') {
                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtsChannelId).send('<@&774805437714923620>')


                        client.channels.get(wtsChannelId).send(fleekEmbed)



                    }

                }
            }
        });

    }

    function nebulaWts(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            nebulaWtsPricemin = arguments
            min=nebulaWtsPricemin
            for(; min < nebulaWtsPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.content.toString() === 'wts nebula ' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtsChannelId).send('<@&774805952116686848>')


                    client.channels.get(wtsChannelId).send(nebulaEmbed)



                } else if(message.content.toString() === 'wts nebula $' + (min)) {

                    userId = message.author.id



                    client.channels.get(wtsChannelId).send('<@&774805952116686848>')


                    client.channels.get(wtsChannelId).send(nebulaEmbed)



                } else if(message.content.toString() === 'wts nebula ' + (min / 1000) + 'k') {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtsChannelId).send('<@&774805952116686848>')


                    client.channels.get(wtsChannelId).send(nebulaEmbed)



                } else if(message.content.toString() === 'wts nebula $' + (min / 1000) + 'k') {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtsChannelId).send('<@&774805952116686848>')


                    client.channels.get(wtsChannelId).send(nebulaEmbed)



                }
            }

        });

    }

    function CustomWts(arguments, receivedMessage) {



        user.on('message', message => { // When a message is created

            customWtsPrice = arguments

            if (message.content.includes("<:" )) {
                return
            }
            if(message.content.toString() === 'wts ' + (customBotWtsPrice) + ' ' + (customWtsPrice)) {

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
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                client.channels.get(wtsChannelId).send('<@&774805980637823036>')


                user.channels.get(wtsChannelId).send(customEmbed)



            } else if(message.content.toString() === 'wts ' + (customBotWtsPrice) + ' $' + (customWtsPrice)) {

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
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                client.channels.get(wtsChannelId).send('<@&774805980637823036>')


                user.channels.get(wtsChannelId).send(customEmbed)



            } else if(message.content.toString() === 'wts ' + (customBotWtsPrice) + ' $' + (customWtsPrice / 1000) + 'k') {

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
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                client.channels.get(wtsChannelId).send('<@&774805980637823036>')

                user.channels.get(wtsChannelId).send(customEmbed)



            } else if(message.content.toString() === 'wts ' + (customBotWtsPrice) + ' ' + (customWtsPrice / 1000) + 'k') {

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
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


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


        user.on('message', message => { // When a message is created
            balkoPriceWtbmin = arguments
            min=balkoPriceWtbmin
            for(; min < min; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '710921862888161440') {




                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                        client.channels.get(wtbChannelId).send('<@&774503052530155560>')


                        client.channels.get(wtbChannelId).send(BalkoEmbed)



                    }
                } else if(message.channel.id == '626996366433976330') {
                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                        client.channels.get(wtbChannelId).send('<@&774503052530155560>')


                        client.channels.get(wtbChannelId).send(BalkoEmbed)



                    }


                } else if(message.channel.id == '750080130038235218') {
                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                        client.channels.get(wtbChannelId).send('<@&774503052530155560>')


                        client.channels.get(wtbChannelId).send(BalkoEmbed)



                    }


                }
            }
        });
    }

    function f3Wtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            f3PriceWtbmin = arguments
            min=f3PriceWtbmin
            for(; min < f3PriceWts; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921740297044008') {




                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774503521709457459>')

                        client.channels.get(wtbChannelId).send(f3embed)



                    }
                } else if(message.channel.id == '626994422105636874') {
                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774503521709457459>')

                        client.channels.get(wtbChannelId).send(f3embed)



                    }

                } else if(message.channel.id == '750079739414183946') {
                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtbChannelId).send('<@&774503521709457459>')

                        client.channels.get(wtbChannelId).send(f3embed)



                    }

                }
            }
        });

    }

    function rushWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created

            rushPriceWtbmin = arguments
            min=rushPriceWtbmin
            for(; min < rushPriceWtb; min++) {


              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '736704547434790954') {




                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                        client.channels.get(wtbChannelId).send('<@&774503635903053875>')


                        client.channels.get(wtbChannelId).send(rushEmbed)


                    }
                } else if(message.channel.id == '715325456924147845') {

                    if(message.content.toString().includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774503635903053875>')


                        client.channels.get(wtbChannelId).send(rushEmbed)


                    }

                } else if(message.channel.id == '752600558270939256') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                        client.channels.get(wtbChannelId).send('<@&774503635903053875>')


                        client.channels.get(wtbChannelId).send(rushEmbed)


                    }

                }
            }
        });

    }

    function mercuryWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            mercuryPriceWtbmin = arguments
            min=mercuryPriceWtbmin
            for(; min < mercuryPriceWtb; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.content.toString() === 'wtb mercury ' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtbChannelId).send('<@&774803234971451452>')

                    client.channels.get(wtbChannelId).send(mercuryEmbed)



                } else if(message.content.toString() === 'wtb mercury aio $' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774803234971451452>')


                    client.channels.get(wtbChannelId).send(mercuryEmbed)



                } else if(message.content.toString() === 'wtb mercury aio ' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774803234971451452>')


                    client.channels.get(wtbChannelId).send(mercuryEmbed)



                } else if(message.content.toString() === 'wtb mercury aio ' + (min) + '$') {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774803234971451452>')


                    client.channels.get(wtbChannelId).send(mercuryEmbed)



                } else if(message.content.toString() === 'wtb mercury ' + (min / 1000) + 'k') {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                    client.channels.get(wtbChannelId).send('<@&774803234971451452>')

                    client.channels.get(wtbChannelId).send(mercuryEmbed)



                } else if(message.content.toString() === 'wtb mercury ' + (min / 1000) + 'k$') {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774803234971451452>')


                    client.channels.get(wtbChannelId).send(mercuryEmbed)



                } else if(message.content.toString() === 'wtb mercury $' + (min / 1000) + 'k') {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)


                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774803234971451452>')


                    client.channels.get(wtbChannelId).send(mercuryEmbed)



                }



            }

        });

    }

    function soleWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            solePriceWtbmin = arguments
            min=solePriceWtbmin
            for(; min < solePriceWtb; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921331872366644') {



                    if(message.content.toString().includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774803407533506562>')



                        client.channels.get(wtbChannelId).send(soleEmbed)


                    }
                } else if(message.channel.id == '626997728915881993') {

                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                        client.channels.get(wtbChannelId).send('<@&774803407533506562>')



                        client.channels.get(wtbChannelId).send(soleEmbed)


                    }


                } else if(message.channel.id == '751572280307482734') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)

                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774803407533506562>')



                        client.channels.get(wtbChannelId).send(soleEmbed)


                    }

                }
            }
        });

    }

    function wrathWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            wrathWtbPricemin = arguments
            min=wrathWtbPricemin
            for(; min < wrathWtbPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '733784514769191013') {



                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774803488193511475>')


                        client.channels.get(wtbChannelId).send(wrathEmbed)



                    }
                } else if(message.channel.id == '626997507205103617') {
                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774803488193511475>')


                        client.channels.get(wtbChannelId).send(wrathEmbed)



                    }

                } else if(message.channel.id == '743950898501517322') {
                    if(message.content.toString().includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774803488193511475>')


                        client.channels.get(wtbChannelId).send(wrathEmbed)



                    }

                }
            }
        });

    }

    function veloxWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            veloxWtbPricemin = arguments
            min=veloxWtbPricemin
            for(; min < veloxWtbPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }


                if(message.channel.id == '634518624677396501') {


                    if(message.content.toString().includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774803645416996914>')



                        client.channels.get(wtbChannelId).send(veloxEmbed)



                    }

                } else if(message.channel.id == '710921136078192723') {

                    if(message.content.toString().includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774803645416996914>')



                        client.channels.get(wtbChannelId).send(veloxEmbed)



                    }

                } else if(message.channel.id == '750079086541668462') {

                    if(message.content.toString().includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774803645416996914>')



                        client.channels.get(wtbChannelId).send(veloxEmbed)



                    }

                }

            }
        });

    }

    function mekWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            mekWtbPricemin = arguments
            min=mekWtbPricemin
            for(; min < mekWtbPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921433987022878') {



                    if(message.content.toString().includes(min)) {



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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                        client.channels.get(wtbChannelId).send('<@&774803745346289684>')


                        client.channels.get(wtbChannelId).send(mekEmbed)



                    }

                } else if(message.channel.id == '627003458817359873') {

                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774803745346289684>')


                        client.channels.get(wtbChannelId).send(mekEmbed)



                    }
                } else if(message.channel.id == '750079662675198053') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)


                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774803745346289684>')


                        client.channels.get(wtbChannelId).send(mekEmbed)



                    }
                }
            }
        });

    }

    function prismWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created

            prismWtbPricemin = arguments
            min=prismWtbPricemin
            for(; min < prismWtbPrice; min++) {


              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '710921411757211689') {



                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774803748018454559>')


                        client.channels.get(wtbChannelId).send(prismEmbed)



                    }
                } else if(message.channel.id == '626997238513795079') {

                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774803748018454559>')


                        client.channels.get(wtbChannelId).send(prismEmbed)



                    }

                } else if(message.channel.id == '750079349167882462') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774803748018454559>')


                        client.channels.get(wtbChannelId).send(prismEmbed)



                    }

                }
            }
        });

    }

    function polarisWtb(arguments, receivedMessage) {

        user.on('message', message => { // When a message is created


            polarisWtbPricemin = arguments
            min=polarisWtbPricemin
            for(; min < polarisWtbPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }


                if(message.channel.id == '713875954224726228') {




                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                        client.channels.get(wtbChannelId).send('<@&774803951438659594>')


                        client.channels.get(wtbChannelId).send(poalrisEmbed)



                    }
                } else if(message.channel.id == '710921396859175081') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774803951438659594>')


                        client.channels.get(wtbChannelId).send(poalrisEmbed)



                    }

                } else if(message.channel.id == '750079408445980717') {

                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min  * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                        client.channels.get(wtbChannelId).send('<@&774803951438659594>')


                        client.channels.get(wtbChannelId).send(poalrisEmbed)



                    }

                }

            }
        });

    }

    function splashForceWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            splashForceWtbPricemin = arguments
            min=splashForceWtbPricemin

            for(; min < splashForceWtbPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.content.toString().toLowerCase() === 'wtb splash force ' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtbChannelId).send('<@&774803954713231366>')

                    client.channels.get(wtbChannelId).send(sfEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb splash force/sf ' + (min)) {


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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtbChannelId).send('<@&774803954713231366>')

                    client.channels.get(wtbChannelId).send(sfEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb splash force/sf $' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtbChannelId).send('<@&774803954713231366>')



                    client.channels.get(wtbChannelId).send(sfEmbed)



                } else if(message.content.toString().toLowerCase() === 'wtb splash force $' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtbChannelId).send('<@&774803954713231366>')


                    client.channels.get(wtbChannelId).send(sfEmbed)



                }

            }
        });

    }

    function pdWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created

            pdWtbPricemin = arguments
            min=pdWtbPricemin
            for(; min < pdWtbPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921374939742298') {


                    if(message.content.toString(), includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send(pdEmbed)


                    }
                } else if(message.channel.id == '626996604603465738') {

                    if(message.content.toString(), includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send(pdEmbed)


                    }

                } else if(message.channel.id == '750079582606196826') {

                    if(message.content.toString(), includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)
                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send(pdEmbed)


                    }

                }
            }
        });

    }

    function dasheWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            dasheWtbPricemin = arguments
            min=dasheWtbPricemin
            for(; min < dasheWtbPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921801102000199') {

                    if(message.content.toString(), includes(min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                    client.channels.get(wtbChannelId).send('<@&774500633020989512>')

                    client.channels.get(wtbChannelId).send(dasheEmbed)

                }
            }

            }
        });

    }

    function tohruWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            tohruWtbPricemin = arguments
            min=tohruWtbPricemin
            for(; min < tohruWtbPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '734522776559419503') {



                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804317387096134>')


                        client.channels.get(wtbChannelId).send(tohruEmbed)



                    }

                } else if(message.channel.id == '733784514769191013') {

                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774804317387096134>')


                        client.channels.get(wtbChannelId).send(tohruEmbed)



                    }

                } else if(message.channel.id == '750079302409781380') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804317387096134>')


                        client.channels.get(wtbChannelId).send(tohruEmbed)



                    }

                }
            }
        });

    }

    function phantomWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            phantomWtbPricemin = arguments
            min=phantomWtbPricemin
            for(; min < phantomWtbPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }


                if(message.channel.id == '710921644104876042') {



                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804319785975839>')

                        client.channels.get(wtbChannelId).send(PhantomEmbed)



                    }
                } else if(message.channel.id == '627359748051697674') {
                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774804319785975839>')

                        client.channels.get(wtbChannelId).send(PhantomEmbed)



                    }

                } else if(message.channel.id == '750079509361066107') {
                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774804319785975839>')

                        client.channels.get(wtbChannelId).send(PhantomEmbed)



                    }
                }
            }
        });

    }

    function adeptWtb(arguments, receivedMessage) {

        user.on('message', message => { // When a message is created

            adeptWtbPricemin = arguments
            min=adeptWtbPricemin


            for(; min < adeptWtbPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '700487424937295877') {



                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                        client.channels.get(wtbChannelId).send('<@&774804319819792395>')


                        client.channels.get(wtbChannelId).send(adeptEmbed)



                    }
                } else if(message.channel.id == '626999229210165268') {

                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774804319819792395>')


                        client.channels.get(wtbChannelId).send(adeptEmbed)



                    }
                } else if(message.channel.id == '750079951725920346') {

                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');
                        client.channels.get(wtbChannelId).send('<@&774804319819792395>')


                        client.channels.get(wtbChannelId).send(adeptEmbed)



                    }
                }
            }
        });

    }

    function burstWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            burstWtbPricemin = arguments
            min=burstWtbPricemin
            for(; min < burstWtbPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }


                if(message.channel.id == '762401858710667264') {



                    if(message.content.toString().includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774804320490225674>')


                        client.channels.get(wtbChannelId).send(burstEmbed)



                    }
                }

            }
        });

    }

    function cyberWtb(arguments, receivedMessage) {

        user.on('message', message => { // When a message is created
            cyberWtbPricemin = arguments
            min=cyberWtbPricemin
            for(; min < cyberWtbPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '626930513768087552') {


                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774804321362640906>')


                        client.channels.get(wtbChannelId).send(cyberEmbed)



                    }
                } else if(message.channel.id == '750080045221019778') {

                    if(message.content.toString().includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804321362640906>')


                        client.channels.get(wtbChannelId).send(cyberEmbed)



                    }

                } else if(message.channel.id == '710921814204874782') {

                    if(message.content.toString().includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804321362640906>')


                        client.channels.get(wtbChannelId).send(cyberEmbed)



                    }
                }
            }
        });

    }

    function estockWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created

            estockWtbPricemin = arguments
            min=estockWtbPricemin
            for(; min < estockWtbPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '761090584420810782') {



                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774804939720753172>')


                        client.channels.get(wtbChannelId).send(estockEmbed)



                    }
                }
            }

        });

    }

    function eveWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            eveWtbPricemin = arguments
            min=eveWtbPricemin
            for(; min < eveWtbPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '710921775554494547') {



                    if(message.content.toString().includes(min)) {



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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774804941478821888>')

                        client.channels.get(wtbChannelId).send(eveEmbed)



                    }

                } else if(message.channel.id == '626998019023175700') {
                    if(message.content.toString().includes(min)) {



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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774804941478821888>')

                        client.channels.get(wtbChannelId).send(eveEmbed)



                    }

                } else if(message.channel.id == '750079801586352320') {
                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804941478821888>')

                        client.channels.get(wtbChannelId).send(eveEmbed)



                    }

                }
            }
        });

    }

    function galaxioWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            galaxsioWtbPricemin = arguments
            min=galaxsioWtbPricemin

            for(; min < galaxsioWtbPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.content.toString() === 'wtb galaxsio ' + (min)) {


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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtbChannelId).send('<@&774804944536076318>')


                    client.channels.get(wtbChannelId).send(glaxsioEmbed)



                } else if(message.content.toString() === 'wtb galaxsio $' + (min)) {


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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774804944536076318>')

                    client.channels.get(wtbChannelId).send(glaxsioEmbed)



                } else if(message.content.toString() === 'wtb galaxsio lifetime $' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtbChannelId).send('<@&774804944536076318>')


                    client.channels.get(wtbChannelId).send(glaxsioEmbed)



                } else if(message.content.toString() === 'wtb galaxsio lifetime $' + (min / 1000) + 'k') {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774804944536076318>')

                    client.channels.get(wtbChannelId).send(glaxsioEmbed)



                } else if(message.content.toString() === 'wtb galaxsio lt $' + (min / 1000) + 'k') {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774804944536076318>')


                    client.channels.get(wtbChannelId).send(glaxsioEmbed)



                } else if(message.content.toString() === 'wtb galaxsio $' + (min / 1000) + 'k') {


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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtbChannelId).send('<@&774804944536076318>')


                    client.channels.get(wtbChannelId).send(glaxsioEmbed)



                } else if(message.content.toString() === 'wtb galaxsio $' + (min / 1000) + 'k') {


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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774804944536076318>')

                    client.channels.get(wtbChannelId).send(glaxsioEmbed)



                }
            }
        });

    }

    function hawkWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created

            hawkWtbPricemin = arguments
            min=hawkWtbPricemin
            for(; min < hawkWtbPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '626998937009782784') {




                    if(message.content.toString().includes(min)) {



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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774804946059132938>')


                        client.channels.get(wtbChannelId).send(hawkEmbed)

                    }

                } else if(message.channel.id == '710921626534805575') {

                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804946059132938>')


                        client.channels.get(wtbChannelId).send(hawkEmbed)

                    }

                }
            }
        });

    }

    function ganeshWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created

            ganeshWtbPricemin = arguments
            min=ganeshWtbPricemin
            for(; min < ganeshWtbPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '700487206904528948') {




                    if(message.content.toString().includes(min)) {



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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774804947967410176>')

                        client.channels.get(wtbChannelId).send(ganeshEmbed)



                    }
                } else if(message.channel.id == '626998513175363594') {
                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804947967410176>')

                        client.channels.get(wtbChannelId).send(ganeshEmbed)



                    }
                } else if(message.channel.id == '764754256087089172') {
                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774804947967410176>')

                        client.channels.get(wtbChannelId).send(ganeshEmbed)



                    }
                }
            }
        });

    }

    function hayhaWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created

            hayhaWtbPricemin = arguments
            min=hayhaWtbPricemin
            for(; min < hayhaWtbPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '710921584302620712') {




                    if(message.content.toString().includes(min)) {



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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774805427098746950>')


                        client.channels.get(wtbChannelId).send(hayhaEmbed)



                    }
                } else if(message.channel.id == '699454406235521034') {
                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774805427098746950>')


                        client.channels.get(wtbChannelId).send(hayhaEmbed)



                    }


                } else if(message.channel.id == '752600603938652300') {
                    if(message.content.toString().includes(min)) {



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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                        client.channels.get(wtbChannelId).send('<@&774805427098746950>')


                        client.channels.get(wtbChannelId).send(hayhaEmbed)



                    }


                }
            }
        });

    }

    function kiloWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            kiloWtbPricemin = arguments
            min=kiloWtbPricemin
            for(; min < kiloWtbPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }


                if(message.channel.id == '734523543588569139') {




                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774805429858467841>')


                        client.channels.get(wtbChannelId).send(kiloEmbed)



                    }
                }
            }
        });

    }

    function flareWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            flareWtbPricemin = arguments
            min=flareWtbPricemin
            for(; min < flareWtbPrice; min++) {

              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }

                if(message.channel.id == '700487256477138964') {




                    if(message.content.toString().includes(min)) {


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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                        client.channels.get(wtbChannelId).send('<@&774805432521981972>')

                        client.channels.get(wtbChannelId).send(FlareEmbed)



                    }
                } else if(message.channel.id == '692632554792288286') {
                    if(message.content.toString().includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtbChannelId).send('<@&774805432521981972>')

                        client.channels.get(wtbChannelId).send(FlareEmbed)



                    }

                }
            }
        });

    }

    function fleekWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            fleekWtbPricemin = arguments
            min=fleekWtbPricemin
            for(; min < fleekWtbPrice; min++) {
              if (message.content.includes("<" )||(message.content.includes(">" ))) {
                    return
                }
                if(message.channel.id == '710921712178430073') {




                    if(message.content.toString(), includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                        client.channels.get(wtbChannelId).send('<@&774805437714923620>')


                        client.channels.get(wtbChannelId).send(fleekEmbed)



                    }

                } else if(message.channel.id == '626999475918864404') {

                    if(message.content.toString(), includes(min)) {
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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');




                        client.channels.get(wtbChannelId).send('<@&774805437714923620>')


                        client.channels.get(wtbChannelId).send(fleekEmbed)



                    }
                } else if(message.channel.id == '759444409158467604') {

                    if(message.content.toString(), includes(min)) {

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
                            .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                            .addField('Seller', message.author.tag, true)

                            .addField('Link To Seller', hyperSeller2)

                            .addField('Link To Listing', hyperListing2)



                            .setTimestamp()
                            .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                        client.channels.get(wtbChannelId).send('<@&774805437714923620>')


                        client.channels.get(wtbChannelId).send(fleekEmbed)



                    }
                }
            }

        });

    }

    function nebulaWtb(arguments, receivedMessage) {


        user.on('message', message => { // When a message is created
            nebulaWtbPricemin = arguments
            min=nebulaWtbPricemin
            if (message.content.includes("<:" )) {
                return
            }
            for(; min < nebulaWtbPrice; min++) {




                if(message.content.toString() === 'wtb nebula ' + (min)) {


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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtbChannelId).send('<@&774805952116686848>')


                    client.channels.get(wtbChannelId).send(nebulaEmbed)



                } else if(message.content.toString() === 'wtb nebula $' + (min)) {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774805952116686848>')


                    client.channels.get(wtbChannelId).send(nebulaEmbed)



                } else if(message.content.toString() === 'wtb nebula ' + (min / 1000) + 'k') {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');

                    client.channels.get(wtbChannelId).send('<@&774805952116686848>')


                    client.channels.get(wtbChannelId).send(nebulaEmbed)



                } else if(message.content.toString() === 'wtb nebula $' + (min / 1000) + 'k') {

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
                        .addField('Price', '$' + min + ' - ' + '€' + min * .86 + ' - ' + '¥' + min * 6.67, true)
                        .addField('Seller', message.author.tag, true)

                        .addField('Link To Seller', hyperSeller2)

                        .addField('Link To Listing', hyperListing2)



                        .setTimestamp()
                        .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                    client.channels.get(wtbChannelId).send('<@&774805952116686848>')

                    client.channels.get(wtbChannelId).send(nebulaEmbed)



                }

            }
        });

    }

    function CustomWtb(arguments, receivedMessage) {


        customWtbPrice = arguments
        user.on('message', message => { // When a message is created
            if (message.content.includes("<:" )) {
                return
            }

            if(message.content.toString() === 'wtb ' + (customBotWtbPrice) + ' ' + (customWtbPrice)) {

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
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                client.channels.get(wtbChannelId).send('<@&774805980637823036>')


                user.channels.get(wtbChannelId).send(customEmbed)



            } else if(message.content.toString() === 'wtb ' + (customBotWtbPrice) + ' $' + (customWtbPrice)) {

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
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');



                client.channels.get(wtbChannelId).send('<@&774805980637823036>')

                user.channels.get(wtbChannelId).send(customEmbed)



            } else if(message.content.toString() === 'wtb ' + (customBotWtbPrice) + ' $' + (customWtbPrice / 1000) + 'k') {

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
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


                client.channels.get(wtbChannelId).send('<@&774805980637823036>')


                user.channels.get(wtbChannelId).send(customEmbed)



            } else if(message.content.toString() === 'wtb ' + (customBotWtbPrice) + ' ' + (customWtbPrice / 1000) + 'k') {

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
                    .setFooter('KubeIO Monitor • ', 'https://i.imgur.com/qMKnaDQ.jpg');


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

    function Current() {

    
    }

});




user.login('NzcyODI5Mjk4MDA4MTI5NTQ5.X6AXkw.IXLDcddPu43kNiB8UY8hOCr6HJI') //User token
client.login('NzcyODI1NzAxNDk3MTc2MDg0.X6AUBQ.z5OXfGz2O-_xwxBR7eV9beQh1Sw') //bot token