const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
	console.log('Startting Up');
})

client.on('message', message => {
	console.log(message.content);

	
	if(message.content.startsWith('.gnome')) {
		message.channel.send("https://cdn.discordapp.com/attachments/595148527034695680/595148802898395137/Smallvideo_3.webm")
	}
	
	if(message.content.startsWith('.info')) {
		message.channel.send("This is a bot by wahid")
		message.channel.send("Version 0.0.3")
		message.channel.send("Website: https://internationalweb.000webhostapp.com")
		message.channel.send("Programming Language : JavaScript")
		message.channel.send("This is created using Discord.js")
		message.channel.send("If You Want To create bot like me then follow this link https://discordjs.guide")
	}
	
	if(message.content.startsWith('.count')) {
		message.channel.send("1")
		message.channel.send("2")
		message.channel.send("3")
		message.channel.send("4")
		message.channel.send("5")
		message.channel.send("6")
		message.channel.send("7")
		message.channel.send("8")
		message.channel.send("9")
		message.channel.send("10")
		message.channel.send("11")
		message.channel.send("12")
		message.channel.send("13")
		message.channel.send("14")
		message.channel.send("15")
		message.channel.send("16")
		message.channel.send("17")
		message.channel.send("18")
		message.channel.send("19")
		message.channel.send("20")
		message.channel.send("21")
		message.channel.send("22")
		message.channel.send("23")
		message.channel.send("24")
		message.channel.send("25")
		message.channel.send("26")
		message.channel.send("27")
		message.channel.send("28")
		message.channel.send("29")
		message.channel.send("30")
		message.channel.send("I've Counted to 30")
	}
	
	if(message.content.startsWith('.help')) {
		message.channel.send("Heres are list of command")
		message.channel.send("| .count - count to 30 |")
		message.channel.send("| .info - all the info |")
		message.channel.send("| .gnome - gnome a member |")
		message.channel.send("| .please - make the bot say WAT |")
		message.channel.send("| .isit - unknown |")
	}
	
	if(message.content.startsWith('.please')) {
		message.channel.send("WAT")
	}
	
	if(message.content.startsWith('.isit')) {
		message.channel.send("Development bot")
	}
})

client.login("NTk4NzgyMjE4Njc2MDc2NTQ2.XTxRDQ.tMQbK4uMVK-Bd97jasVwaot_THE");
