const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjI4NzY4MzU2MTAyNzAxMDY3.XZQAOA.WypZEHtili9yorBaDafQZ8NtQu0';

const PREFIX = 'Supreme Leader Asuna ';

const fs = require('fs');

const ytdl = require("ytdl-core");

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content.toLowerCase() === "hail asuna"){
        msg.channel.send('All hail Asuna!!!');
    }
})

bot.on('message', msg=>{
    if(msg.content.toLowerCase() === "asuna test"){
        msg.channel.send('#');
    }
})

bot.on('message', msg=>{
    if(msg.content.toLowerCase() === "asuna is bad"){
        msg.channel.send('Ok retard');
    }
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'test':
            message.channel.send('test succesful comrade');
            break;
        case 'help':
            if(args[1] === 'pls'){
                message.channel.sendMessage('I dont talk to dumdums')
            }else if(args[1] === 'please'){
                message.channel.sendMessage('OMG SHUT UP DIPSHIN')
            }else{
                message.channel.sendMessage('HAHA DUMMIE U NEED HELP HAHA')
            }
            break;
        case 'Clear':
            if(!args[1]) return message.reply('U did not say how many you wanted to delete, try again stupid')
            message.channel.bulkDelete(args[1]);
            break;
        case 'music':
            if(message.member.voiceChannel)
            {
                    message.member.voiceChannel.join()
                    .then(connection =>{
                        message.channel.send('succesfully joined');
                        let dispatcher = connection.playStream(ytdl('https://www.youtube.com/watch?v=jPtXKkQUeXM', { filter: 'audioonly'}));
                        })
                }
            else
            {
                if(!message.member.voiceChannel)
                {
                    message.channel.send('join vc idiot');
                }
            }
            break;
        case 'leave':
            if(message.guild.voiceConnection);
            {
                message.guild.voiceConnection.disconnect();
                message.channel.send('Later Loser')
            }
            break;
        case 'march':
            if(message.member.voiceChannel){
                message.member.voiceChannel.join()
                .then(connection =>{
                    message.channel.send('ONWARD COMRADES!!!');
                    let dispatcher = connection.playStream(ytdl('https://www.youtube.com/watch?v=7Yl-DvkX0hY', {filter: 'audioonly'}));
                })
            }
            else{
                if(!message.member.voiceChannel){
                    message.channel.send('Man the tank comrade!!!')
                }
            }
            break;
    }
})



bot.login(token);
