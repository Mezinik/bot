const Discord = require('discord.js');
const client = new Discord.Client();

function commandIs(str, msg){
return msg.content.toLowerCase().startsWith("$" + str);
}

 function pluck (array) {
     return array.map(function(item) { return item["name"]; });
 }

function pluck (array) {
     return array.map(function(item) { return item["name"]; });
 }
 
function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }
}
    client.on('ready', () => {
    console.log('the bot is ready noob https://discordapp.com/oauth2/authorize?client_id=316564310128066560&scope=bot');
    client.user.setGame('Playing hi');
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/);
    if(commandIs("uh", message)){
        message.channel.sendMessage('OOOOOOOOOOOOOOOOOOF' + message.author.username);
}
if(commandIs("info", message)){
if(args.length === 1){
    message.channel.sendMessage('You did not define a argument. `Usage:$info  [info number] `'); 
      } else if(args.length === 2 ){
          message.channel.sendMessage ('no stop' + args[1]);
      } else {
   message.channel.sendMessage('You defined to many arguments `Usage:info  [info number] `');
        } 
}

if(commandIs("say", message)){
        if(hasRole(message.member, "Members") || hasRole(message.member, "Owners") || hasRole(message.member, "Bots"));
    if(args.length === 1){
        message.channel.sendMessage('You did not define a argument `usage: $say');
    } else {
        message.channel.sendMessage(args.join(" ").substring(5));
    }
}
 if(commandIs("kick", message)){
    if(hasRole(message.member, "Admin") || hasRole(message.member, "Owner")){
        if (args.length === 1){ 
      message.channel.sendMessage('You did not define an argument. Usage:`$kick [persontokick]`');  
    } else {
    message.guild.member(message.mentions.users.first()).kick();
        }
        } 
    }
    });

    client.login('MzE2NTY0MzEwMTI4MDY2NTYw.DAXHOw.-uxNNaTqMXQEGo1Jg_hVuCPpB94');
