function balkoWtb(arguments, receivedMessage) {

    balkoPriceWtb=arguments
    user.on('message', message => { // When a message is created
  
      
      if(message.content.toString().toLowerCase()==='wtb balko '+(balkoPriceWtb)){
  
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
  
          
         
      }else if(message.content.toString().toLowerCase()==='wtb balko 40 '+(balkoPriceWtb)){
  
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
    
          else if(message.content.toString().toLowerCase()==='wtb balko 40 $'+(balkoPriceWtb)){
  
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
               else if(message.content.toString().toLowerCase()==='wtb balko lt '+(balkoPriceWtb)){
  
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
                   else if(message.content.toString().toLowerCase()==='wtb balko yearly '+(balkoPriceWtb/1000)+'k'){
  
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
                       else if(message.content.toString().toLowerCase()==='wtb balko lifetime $'+(balkoPriceWtb)){
  
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
                           else if(message.content.toString().toLowerCase()==='wtb balko lifetime '+(balkoPriceWtb)){
  
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
                               else if(message.content.toString().toLowerCase()==='wtb balko lt '+(balkoPriceWtb)+'$'){
  
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
                                   else if(message.content.toString().toLowerCase()==='wtb balko yearly, '+(balkoPriceWtb/1000)+'k'){
  
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
                                       
                                       
                                          
                                   
                                          user.channels.get(wtbChannelId).send(BalkoEmbed)
                                   
                                           
                                          
                                       }
  });
  }
  function f3Wtb(arguments, receivedMessage) {
  
      f3PriceWtb=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb f3 '+(f3PriceWtb)){
    
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
       else if(message.content.toString().toLowerCase()==='wtb f3 '+(f3PriceWtb/1000)+'k'){
    
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
          else if(message.content.toString().toLowerCase()==='wtb f3 $'+(f3PriceWtb)){
    
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
               else if(message.content.toString().toLowerCase()==='wtb f3 - $'+(f3PriceWtb)){
    
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
      
    });
    
  }
  function rushWtb(arguments, receivedMessage) {
  
      rushPriceWtb=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb rush '+(rushPriceWtb)){
    
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
        else if(message.content.toString().toLowerCase()==='wtb rush $'+(rushPriceWtb)){
    
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
           else if(message.content.toString().toLowerCase()==='wtb rush $'+(rushPriceWtb/1000)+'k'){
    
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
  
               else if(message.content.toString().toLowerCase()==='wtb rushaio $'+(rushPriceWtb)){
    
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
  
                    else if(message.content.toString().toLowerCase()==='wtb rush $'+(rushPriceWtb/1000)+'k'){
    
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
               else if(message.content.toString().toLowerCase()==='wtb rushaio $'+(rushPriceWtb/1000)+'k'){
    
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
                   else if(message.content.toString().toLowerCase()==='wtb rush - '+(rushPriceWtb/1000)+'k'){
    
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
    
        
        if(message.content.toString().toLowerCase()==='wtb sole '+(solePriceWtb)){
    
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
       else if(message.content.toString().toLowerCase()==='wtb sole ui upgraded '+(solePriceWtb)){
    
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
  
           else if(message.content.toString().toLowerCase()==='wtb sole ui upgraded $'+(solePriceWtb)){
    
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
               else if(message.content.toString().toLowerCase()==='ui upgraded $'+(solePriceWtb)){
    
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
  
                   else if(message.content.toString().toLowerCase()==='wtb sole ui upgraded '+(solePriceWtb/1000)+'k'){
    
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
       else if(message.content.toString().toLowerCase()==='wtb sole ui upgraded '+(solePriceWtb)){
    
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
  
           else if(message.content.toString().toLowerCase()==='wtb sole ui upgraded $'+(solePriceWtb)){
    
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
               else if(message.content.toString().toLowerCase()==='ui upgraded $'+(solePriceWtb)){
    
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
  
                   else if(message.content.toString().toLowerCase()==='wtb sole ui upgraded '+(solePriceWtb/1000)+'k'){
    
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
                       ///asdsadasd
                       else if(message.content.toString().toLowerCase()==='wtb sole upgraded ui '+(solePriceWtb)){
    
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
                  
                           else if(message.content.toString().toLowerCase()==='wtb sole upgraded ui  $'+(solePriceWtb)){
                    
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
                               else if(message.content.toString().toLowerCase()==='upgraded ui  $'+(solePriceWtb)){
                    
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
                  
                                   else if(message.content.toString().toLowerCase()==='wtb sole upgraded ui '+(solePriceWtb/1000)+'k'){
                    
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
    });
    
  }
  function wrathWtb(arguments, receivedMessage) {
  
      wrathWTsPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb wrath '+(wrathWTsPrice)){
    
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
       else if(message.content.toString().toLowerCase()==='wtb wrath july renewal '+(wrathWTsPrice/1000)+'k'){
    
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
  
           else if(message.content.toString().toLowerCase()==='wtb wrath jan renewal '+(wrathWTsPrice/1000)+'k'){
    
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
               else if(message.content.toString().toLowerCase()==='wtb wrath renew $'+(wrathWTsPrice)){
    
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
                 else if(message.content.toString().toLowerCase()==='wtb wrath $'+(wrathWTsPrice)){
    
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
                       else if(message.content.toString().toLowerCase()==='wtb wrath lt $'+(wrathWTsPrice)){
    
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
                           else if(message.content.toString().toLowerCase()==='wtb wrath lt '+(wrathWTsPrice)){
    
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
                           else if(message.content.toString().toLowerCase()==='wtb wrath lifetime $'+(wrathWTsPrice)){
    
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
                               else if(message.content.toString().toLowerCase()==='wtb wrath lt '+(wrathWTsPrice/1000)+'k'){
    
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
  
                                   else if(message.content.toString().toLowerCase()==='wtb wrath $'+(wrathWTsPrice/1000)+'k'){
    
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
  
                                       else if(message.content.toString().toLowerCase()==='wtb wrath lt $'+(wrathWTsPrice/1000)+'k'){
    
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
  
                                        else if(message.content.toString().toLowerCase()==='wtb wrath '+(wrathWTsPrice/1000)+'k'){
    
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
          
    });
    
  }
  function veloxWtb(arguments, receivedMessage) {
  
      veloxWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb velox '+(veloxWtbPrice)){
    
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
  
        else if(message.content.toString().toLowerCase()==='wtb velox $'+(veloxWtbPrice)){
    
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
           else if(message.content.toString().toLowerCase()==='wtb velox $'+(veloxWtbPrice/1000)+'k'){
    
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
    
      
    });
    
  }
  function mekWtb(arguments, receivedMessage) {
  
      mekWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb mek '+(mekWtbPrice)){
    
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
  
       else if(message.content.toString().toLowerCase()==='wtb mek '+(mekWtbPrice)+'$'){
    
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
  
        
  
     
                   else if(message.content.toString().toLowerCase()==='wtb mek '+(mekWtbPrice)+'k'){
    
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
                       
                   else if(message.content.toString().toLowerCase()==='wtb mek $'+(mekWtbPrice)){
    
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
  
  
                      //sas
                      if(message.content.toString().toLowerCase()==='wtb mekpreme '+(mekWtbPrice)){
    
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
                     
                          else if(message.content.toString().toLowerCase()==='wtb mekpreme '+(mekWtbPrice)+'$'){
                       
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
                     
                           
                     
                        
                                      else if(message.content.toString().toLowerCase()==='wtb mekpreme '+(mekWtbPrice)+'k'){
                       
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
                                          
                                      else if(message.content.toString().toLowerCase()==='wtb mekpreme $'+(mekWtbPrice)){
                       
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
                                           
       
    
      
    });
    
  }
  function prismWtb(arguments, receivedMessage) {
  
      prismWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb prism '+(prismWtbPrice)){
    
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
  
       else if(message.content.toString().toLowerCase()==='wtb prism $'+(prismWtbPrice)){
    
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
  
          else if(message.content.toString().toLowerCase()==='wtb prism '+(prismWtbPrice/1000)+'k'){
    
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
           
              else if(message.content.toString().toLowerCase()==='wtb prism renewal $'+(prismWtbPrice)){
    
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
                   else if(message.content.toString().toLowerCase()==='wtb prism renewal '+(prismWtbPrice)){
    
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
                       else if(message.content.toString().toLowerCase()==='wtb prism renewal '+(prismWtbPrice/1000)+'k'){
    
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
    
      
    });
    
  }
  function polarisWtb(arguments, receivedMessage) {
  
      polarisWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb polaris '+(polarisWtbPrice)){
    
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
       else if(message.content.toString().toLowerCase()==='wtb polaris €80 Renewal $'+(polarisWtbPrice)){
    
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
  
           else if(message.content.toString().toLowerCase()==='wtb polaris €80 Renewal jan $'+(polarisWtbPrice)){
    
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
               else if(message.content.toString().toLowerCase()==='wtb polaris 80 Renewal '+(polarisWtbPrice)){
    
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
                 else if(message.content.toString().toLowerCase()==='wtb polaris $'+(polarisWtbPrice)){
    
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
  
                     else if(message.content.toString().toLowerCase()==='wtb polaris '+(polarisWtbPrice/1000)+'k'){
    
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
  
                           else if(message.content.toString().toLowerCase()==='wtb polaris $'+(polarisWtbPrice/1000)+'k'){
    
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
  
                               else if(message.content.toString().toLowerCase()==='wtb polaris 80/6 $'+(polarisWtbPrice/1000)+'k'){
    
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
                                   else if(message.content.toString().toLowerCase()==='wtb polaris 80/6 '+(polarisWtbPrice/1000)+'k'){
    
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
    
        
        if(message.content.toString().toLowerCase()=== 'wtb pd '+(pdWtbPrice)) {
    
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
    
            
           
        } else if(message.content.toString().toLowerCase()=== 'wtb prodject destroyer '+(pdWtbPrice)) {
            
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
           else if(message.content.toString().toLowerCase()=== 'wtb pd $'+(pdWtbPrice)) {
            
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
                  else if(message.content.toString().toLowerCase()=== 'wtb pd monthly $'+(pdWtbPrice)) {
            
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
                          else if(message.content.toString().toLowerCase()=== 'wtb pd monthly '+(pdWtbPrice)) {
            
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
                                  else if(message.content.toString().toLowerCase()=== 'wtb pd 150/60 $'+(pdWtbPrice)) {
            
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
                                          else if(message.content.toString().toLowerCase()=== 'wtb pd 150/60 '+(pdWtbPrice)) {
            
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
    
        
        if(message.content.toString().toLowerCase()==='wtb tohru '+(tohruWtbPrice)){
    
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
  
       else if(message.content.toString().toLowerCase()==='wtb tohru $'+(tohruWtbPrice)){
    
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
           else if(message.content.toString().toLowerCase()==='wtb tohru '+(tohruWtbPrice/1000)+'k'){
    
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
              else if(message.content.toString().toLowerCase()==='wtb tohru '+(tohruWtbPrice/1000)){
       
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
                  else if(message.content.toString().toLowerCase()==='wtb tohru $'+(tohruWtbPrice/1000)+'k'){
    
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
  
                      else if(message.content.toString().toLowerCase()==='wtb tohru '+(tohruWtbPrice/1000)+'k'){
    
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
    });
    
  }
  function phantomWtb(arguments, receivedMessage) {
  
      phantomWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb phantom '+(phantomWtbPrice)){
    
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
       else if(message.content.toString().toLowerCase()==='wtb phantom $60/6 '+(phantomWtbPrice)){
    
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
           else if(message.content.toString().toLowerCase()==='wtb phantom $60/6 - '+(phantomWtbPrice)){
    
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
  
               else if(message.content.toString().toLowerCase()==='wtb phantom 60/6 $'+(phantomWtbPrice)){
    
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
    });
    
  }
  function adeptWtb(arguments, receivedMessage) {
  
      adeptWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb adept '+(adeptWtbPrice)){
    
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
       else if(message.content.toString().toLowerCase()==='wtb adept $'+(adeptWtbPrice)){
    
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
           else if(message.content.toString().toLowerCase()==='wtb adept renewal $'+(adeptWtbPrice)){
    
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
               else if(message.content.toString().toLowerCase()==='wtb adept lt $'+(adeptWtbPrice)){
    
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
                   else if(message.content.toString().toLowerCase()==='wtb adept lt '+(adeptWtbPrice)+'$'){
    
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
                       else if(message.content.toString().toLowerCase()==='wtb adept renewal - $'+(adeptWtbPrice)){
    
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
    });
    
  }
  function burstWtb(arguments, receivedMessage) {
  
      burstWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb burst '+(burstWtbPrice)){
    
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
       else if(message.content.toString().toLowerCase()==='wtb burst $'+(burstWtbPrice)){
    
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
           else if(message.content.toString().toLowerCase()==='wtb burstaio $'+(burstWtbPrice)){
    
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
               else if(message.content.toString().toLowerCase()==='wtb burst renewal $'+(burstWtbPrice)){
    
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
    });
    
  }
  function cyberWtb(arguments, receivedMessage) {
  
      cyberWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb cyber '+(cyberWtbPrice)){
    
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
  
            
       else if(message.content.toString().toLowerCase()==='wtb cyber $'+(cyberWtbPrice)){
    
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
         
           else if(message.content.toString().toLowerCase()==='wtb cyber renewal $'+(cyberWtbPrice)){
    
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
               else if(message.content.toString().toLowerCase()==='wtb cyber renewal $'+(cyberWtbPrice/100)+'k'){
    
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
  
                   else if(message.content.toString().toLowerCase()==='wtb cyber renewal '+(cyberWtbPrice/100)+'k'){
    
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
  
                       else if(message.content.toString().toLowerCase()==='wtb cyber '+(cyberWtbPrice/100)+'k'){
    
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
    });
    
  }
  function estockWtb(arguments, receivedMessage) {
  
      estockWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb estock '+(estockWtbPrice)){
    
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
     
       else if(message.content.toString().toLowerCase()==='wtb estock $'+(estockWtbPrice)){
    
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
           else if(message.content.toString().toLowerCase()==='wtb estock $'+(estockWtbPrice/1000)+'k'){
    
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
       
      
    });
    
  }
  function eveWtb(arguments, receivedMessage) {
  
      estockWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb eve '+(eveWtbPrice)){
    
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
  
       else if(message.content.toString().toLowerCase()==='wtb eve $'+(eveWtbPrice)){
    
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
  
           else if(message.content.toString().toLowerCase()==='wtb eve lt for $'+(eveWtbPrice)){
    
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
               else if(message.content.toString().toLowerCase()==='wtb eve lifetime with everything $'+(eveWtbPrice)){
    
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
    
        
        if(message.content.toString().toLowerCase()==='wtb hawkmesh '+(hawkWtbPrice)){
    
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
       
       else if(message.content.toString().toLowerCase()==='wtb hawkmesh lifetime '+(hawkWtbPrice)){
    
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
          
           else if(message.content.toString().toLowerCase()==='wtb hawkmesh lifetime $'+(hawkWtbPrice)){
    
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
               else if(message.content.toString().toLowerCase()==='wtb hawkmesh renewal '+(hawkWtbPrice)){
    
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
  
                   else if(message.content.toString().toLowerCase()==='wtb hawkmesh renewal $'+(hawkWtbPrice)){
    
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
  
                       
                   else if(message.content.toString().toLowerCase()==='wtb hawk renewal $'+(hawkWtbPrice)){
    
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
    });
    
  }
  function ganeshWtb(arguments, receivedMessage) {
  
      ganeshWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb ganesh '+(ganeshWtbPrice)){
    
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
        else if(message.content.toString().toLowerCase()==='wtb ganesh $'+(ganeshWtbPrice)){
    
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
           else if(message.content.toString().toLowerCase()==='wtb lifetime $'+(ganeshWtbPrice)){
    
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
               else if(message.content.toString().toLowerCase()==='wtb ganesh renewal $'+(ganeshWtbPrice)){
    
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
                   else if(message.content.toString().toLowerCase()==='wtb ganesh lt $'+(ganeshWtbPrice)){
    
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
                       else if(message.content.toString().toLowerCase()==='wtb ganesh lt '+(ganeshWtbPrice)){
    
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
                       
      
    });
    
  }
  function hayhaWtb(arguments, receivedMessage) {
  
      hayhaWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb hayha '+(hayhaWtbPrice)){
    
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
        else if(message.content.toString().toLowerCase()==='wtb hayha 20/m '+(hayhaWtbPrice)){
    
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
           else if(message.content.toString().toLowerCase()==='wtb hayha $'+(hayhaWtbPrice)){
    
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
               else if(message.content.toString().toLowerCase()==='wtb hayha $'+(hayhaWtbPrice/1000)){
    
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
                   else if(message.content.toString().toLowerCase()==='wtb hayha $'+(hayhaWtbPrice/1000)+'k'){
    
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
               else if(message.content.toString().toLowerCase()==='wtb hayha 20/m $'+(hayhaWtbPrice/1000)+'k'){
    
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
                     else if(message.content.toString().toLowerCase()==='wtb hayha 20/m '+(hayhaWtbPrice)){
    
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
           else if(message.content.toString().toLowerCase()==='wtb hayha 20/m $'+(hayhaWtbPrice)){
    
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
              
                   //asd
                   else if(message.content.toString().toLowerCase()==='wtb hayha 30/m '+(hayhaWtbPrice)){
    
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
                       else if(message.content.toString().toLowerCase()==='wtb hayha 30/m $'+(hayhaWtbPrice)){
                
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
                           else if(message.content.toString().toLowerCase()==='wtb hayha 30/m $'+(hayhaWtbPrice/1000)+'k'){
                
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
    });
    
  }
  function kiloWtb(arguments, receivedMessage) { 
  
      kiloWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb kilo '+(kiloWtbPrice)){
    
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
        else if(message.content.toString().toLowerCase()==='wtb kilo renewal $'+(kiloWtbPrice)){
    
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
           else if(message.content.toString().toLowerCase()==='wtb kilo renewal '+(kiloWtbPrice)+'$'){
    
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
  
               else if(message.content.toString().toLowerCase()==='wtb kilo $'+(kiloWtbPrice)){
    
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
                   else if(message.content.toString().toLowerCase()==='wtb kilo 20/m $'+(kiloWtbPrice)){
    
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
    });
    
  }
  function flareWtb(arguments, receivedMessage) {
  
      flareWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb flare '+(flareWtbPrice)){
    
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
        else if(message.content.toString().toLowerCase()==='wtb flare monthly renewal €'+(flareWtbPrice)){
    
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
               .addField('Price','$'+flareWtbPrice*1.18+' - '+'€'+flareWtbPrice  +' - '+'¥' +flareWtbPrice*7.82, true )
               .addField('Seller', message.author.tag,true )
       
               .addField('Link To Seller', hyperSeller2)
     
               .addField('Link To Listing',hyperListing2 )
       
       
       
               .setTimestamp()
               .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
           
           
              
       
              client.channels.get(wtbChannelId).send(FlareEmbed)
       
               
              
           }
          else if(message.content.toString().toLowerCase()==='wtb flare $'+(flareWtbPrice)){
    
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
              else if(message.content.toString().toLowerCase()==='wtb flare lifetime $'+(flareWtbPrice)){
    
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
                   else if(message.content.toString().toLowerCase()==='wtb flare lifetime €'+(flareWtbPrice)){
    
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
                           .addField('Price','$'+flareWtbPrice*1.18+' - '+'€'+flareWtbPrice  +' - '+'¥' +flareWtbPrice*7.82, true )
                           .addField('Seller', message.author.tag,true )
                   
                           .addField('Link To Seller', hyperSeller2)
                 
                           .addField('Link To Listing',hyperListing2 )
                   
                   
                   
                           .setTimestamp()
                           .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                       
                       
                          
                   
                             client.channels.get(wtbChannelId).send(FlareEmbed)
                   
                           
                          
                       }
                       else if(message.content.toString().toLowerCase()==='wtb flare renewal €'+(flareWtbPrice)){
    
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
                               .addField('Price','$'+flareWtbPrice*1.18+' - '+'€'+flareWtbPrice  +' - '+'¥' +flareWtbPrice*7.82, true )
                               .addField('Seller', message.author.tag,true )
                       
                               .addField('Link To Seller', hyperSeller2)
                     
                               .addField('Link To Listing',hyperListing2 )
                       
                       
                       
                               .setTimestamp()
                               .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                           
                           
                              
                       
                                 client.channels.get(wtbChannelId).send(FlareEmbed)
                       
                               
                              
                           }
    });
    
  }
  function fleekWtb(arguments, receivedMessage) {
  
      fleekWtbPrice=arguments
      user.on('message', message => { // When a message is created
    
        
        if(message.content.toString().toLowerCase()==='wtb fleek '+(fleekWtbPrice)){
    
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
     
       else if(message.content.toString().toLowerCase()==='wtb fleek $'+(fleekWtbPrice)){
    
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
           else if(message.content.toString().toLowerCase()==='wtb fleek renewal $'+(fleekWtbPrice)){
    
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
               else if(message.content.toString().toLowerCase()==='wtb fleek renewal €'+(fleekWtbPrice)){
    
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
                       .addField('Price','$'+fleekWtbPrice*1.18+' - '+'€'+fleekWtbPrice  +' - '+'¥' +fleekWtbPrice*7.82, true )
                       .addField('Seller', message.author.tag,true )
               
                       .addField('Link To Seller', hyperSeller2)
             
                       .addField('Link To Listing',hyperListing2 )
               
               
               
                       .setTimestamp()
                       .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                   
                   
                      
               
                      client.channels.get(wtbChannelId).send(fleekEmbed)
               
                       
                      
                   }
                   else if(message.content.toString().toLowerCase()==='wtb fleek €'+(fleekWtbPrice)){
    
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
                           .addField('Price','$'+fleekWtbPrice*1.18+' - '+'€'+fleekWtbPrice  +' - '+'¥' +fleekWtbPrice*7.82, true )
                           .addField('Seller', message.author.tag,true )
                   
                           .addField('Link To Seller', hyperSeller2)
                 
                           .addField('Link To Listing',hyperListing2 )
                   
                   
                   
                           .setTimestamp()
                           .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                       
                       
                          
                   
                          client.channels.get(wtbChannelId).send(fleekEmbed)
                   
                           
                          
                       }
  
                       else if(message.content.toString().toLowerCase()==='wtb fleek lt €'+(fleekWtbPrice)){
    
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
                               .addField('Price','$'+fleekWtbPrice*1.18+' - '+'€'+fleekWtbPrice  +' - '+'¥' +fleekWtbPrice*7.82, true )
                               .addField('Seller', message.author.tag,true )
                       
                               .addField('Link To Seller', hyperSeller2)
                     
                               .addField('Link To Listing',hyperListing2 )
                       
                       
                       
                               .setTimestamp()
                               .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                           
                           
                              
                       
                              client.channels.get(wtbChannelId).send(fleekEmbed)
                       
                               
                              
                           }
                           else if(message.content.toString().toLowerCase()==='wtb fleek lifetime €'+(fleekWtbPrice)){
    
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
                                   .addField('Price','$'+fleekWtbPrice*1.18+' - '+'€'+fleekWtbPrice  +' - '+'¥' +fleekWtbPrice*7.82, true )
                                   .addField('Seller', message.author.tag,true )
                           
                                   .addField('Link To Seller', hyperSeller2)
                         
                                   .addField('Link To Listing',hyperListing2 )
                           
                           
                           
                                   .setTimestamp()
                                   .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                               
                               
                                  
                           
                                  client.channels.get(wtbChannelId).send(fleekEmbed)
                           
                                   
                                  
                               }
                               else if(message.content.toString().toLowerCase()==='wtb fleek renew €'+(fleekWtbPrice)){
    
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
                                       .addField('Price','$'+fleekWtbPrice*1.18+' - '+'€'+fleekWtbPrice  +' - '+'¥' +fleekWtbPrice*7.82, true )
                                       .addField('Seller', message.author.tag,true )
                               
                                       .addField('Link To Seller', hyperSeller2)
                             
                                       .addField('Link To Listing',hyperListing2 )
                               
                               
                               
                                       .setTimestamp()
                                       .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                                   
                                   
                                      
                               
                                      client.channels.get(wtbChannelId).send(fleekEmbed)
                               
                                       
                                      
                                   }
                                   else if(message.content.toString().toLowerCase()==='wtb fresh fleek €'+(fleekWtbPrice)){
    
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
                                           .addField('Price','$'+fleekWtbPrice*1.18+' - '+'€'+fleekWtbPrice  +' - '+'¥' +fleekWtbPrice*7.82, true )
                                           .addField('Seller', message.author.tag,true )
                                   
                                           .addField('Link To Seller', hyperSeller2)
                                 
                                           .addField('Link To Listing',hyperListing2 )
                                   
                                   
                                   
                                           .setTimestamp()
                                           .setFooter('KubeIO Monitor • Nautical#1010', 'https://i.imgur.com/qMKnaDQ.jpg');
                                       
                                       
                                          
                                   
                                          client.channels.get(wtbChannelId).send(fleekEmbed)
                                   
                                           
                                          
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
