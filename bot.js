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
    	message.reply('We do not have a list of commands right now, sorry!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
