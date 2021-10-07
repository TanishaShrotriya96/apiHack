require('dotenv').config(); //initialize dotenv
const request = require('request');


// Require the necessary discord.js classes
const Discord = require('discord.js');

// Create a new client instance
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.DIRECT_MESSAGES,Discord.Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
	console.log(`logged in as ${client.user.tag}`);
});
  
//Listen to new messages on the server
client.on("messageCreate", (msg) => {
	if (msg.content.toLowerCase() === "I want to kill myself") {
	  msg.channel.send({content:"Hey! Seems like you're having a hard time. You can call some helpline numbers - 800-273-8255"});
	};
	if(msg.content === "no" || msg.content === "i don't want to call anyone") {
		msg.channel.send({content:"That's okay. May I make the call for you?"});
	}
	
	if(msg.content.toLowerCase() === "alright" || msg.content.toLowerCase() === "yes" || msg.content.toLowerCase() === "ok" ) {
		msg.channel.send({content:"Great, a professional will be on their way to make sure you are okay."});
		msg.channel.send({content: "Please watch this calming video till then.\n https://www.youtube.com/watch?v=O-6f5wQXSu8"})
	}

});


 // Login to Discord with your client's token
client.login(process.env.CLIENT_TOKEN); //login bot using token
