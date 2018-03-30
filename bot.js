const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.glh') {
    	message.channel.send('https://www.roblox.com/My/Groups.aspx?gid=3798936');
  	}
});

client.on('message', message => {
    if (message.content === '.help') {
    	message.reply('We will make the commands soon..');
  	}
});

client.on('message', message => {
    if (message.content === '.credits') {
    	message.channel.send('Bot was made by Sever_al, for Grand Luxe Hotels Discord.');
  	}
});

client.on('message', message => {
    if (message.content === '.w1') {
    	message.reply('Who do you want to give a warning too?.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
