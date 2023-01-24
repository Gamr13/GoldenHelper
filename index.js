const fs = require('fs');
const {
	REST
} = require('@discordjs/rest');
const {
	Routes
} = require('discord-api-types/v9');
// Require the necessary discord.js classes
const {
	Client,
	Events,
	GatewayIntentBits,
	Collection,
	EmbedBuilder,
	AuditLogEvent
	
} = require('discord.js');

// Create a new client instance
const client = new Client({
	intents: [GatewayIntentBits.Guilds]
});

// Loading commands from the commands folder
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Loading the token from .env file
const dotenv = require('dotenv');
const envFILE = dotenv.config();
const TOKEN = process.env['TOKEN'];

// Creating a collection for commands in client
client.commands = new Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
	client.commands.set(command.data.name, command);
}

// Edit your TEST_GUILD_ID here in the env file for development
const TEST_GUILD_ID = envFILE.parsed['TEST_GUILD_ID'];

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
	// Registering the commands in the client
	const CLIENT_ID = client.user.id;
	const rest = new REST({
		version: '9'
	}).setToken(TOKEN);
	(async () => {
		try {
			if (!TEST_GUILD_ID) {
				await rest.put(
					Routes.applicationCommands(CLIENT_ID), {
						body: commands
					},
				);
				console.log('Successfully registered application commands globally');
			} else {
				await rest.put(
					Routes.applicationGuildCommands(CLIENT_ID, TEST_GUILD_ID), {
						body: commands
					},
				);
				console.log('Successfully registered application commands for development guild');
			}
		} catch (error) {
			if (error) console.error(error);
		}
	})();
});

//Moderation Logging System
client.on(Events.GuildBanAdd, async member => {

    member.guild.fetchAuditLogs({
        type: AuditLogEvent.GuildBanAdd,
    })
    .then(async audit => {
        const { executor } = audit.entries.first()

        const name = member.user.username;
        const id = member.user.id;

        const channelID = '1007583776949403720';
        const mChannel = await member.guild.channels.cache.get(channelID);

        const embed = new EmbedBuilder()
        .setColor("Red")
        .setTitle("Member Banned")
        .addFields({ name: "Member Name", value: `${name} (<@${id}>)`, inline: false})
        .addFields({ name: "Member ID", value: `${id}`, inline: false})
        .addFields({ name: "Banned By", value: `${executor.tag}`, inline: false})
        .setTimestamp()
        mChannel.send({ embeds: [embed] })
    })
})


client.on(Events.GuildBanRemove, async member => {

    member.guild.fetchAuditLogs({
        type: AuditLogEvent.GuildBanRemove,
    })
    .then(async audit => {
        const { executor } = audit.entries.first()

        const name = member.user.username;
        const id = member.user.id;

        const channelID = '1007583776949403720';
        const mChannel = await member.guild.channels.cache.get(channelID);

        const embed = new EmbedBuilder()
        .setColor("Red")
        .setTitle("Member Unbanned")
        .addFields({ name: "Member Name", value: `${name} (<@${id}>)`, inline: false})
        .addFields({ name: "Member ID", value: `${id}`, inline: false})
        .addFields({ name: "Unbanned By", value: `${executor.tag}`, inline: false})
        .setTimestamp()
        mChannel.send({ embeds: [embed] })
    })
})


client.on(Events.MessageDelete, async message => {
	//if (!message.guild) return;
	message.guild.fetchAuditLogs({
		type: AuditLogEvent.MessageDelete,
	})
	.then(async audit => {
		const { executor } = audit.entries.first()
		
		const mes = message.content;
		
		if(!mes) return;
		
		const channelID = '1007583776949403720';
		const mChannel = await message.guild.channels.cache.get(channelID);
		
		const embed = new EmbedBuilder()
			.setColor('#bd0009')
			.setTitle('Message Deleted')
			.addFields({name: 'Message: ', value: `${mes}`, inline: false})
			.addFields({name: 'Channel: ', value: `${message.channel})`, inline: false})
			.addFields({name: 'Deleted by: ', value: `${executor.tag})`, inline: false})
			.setTimestamp()
			
			mChannel.send({ embeds: [embed] })
	})
});


client.on(Events.MessageUpdate, async (message, newMessage) => {
	//if (!message.guild) return;
	message.guild.fetchAuditLogs({
		type: AuditLogEvent.MessageUpdate,
	})
	.then(async audit => {
		const { executor } = audit.entries.first()
		
		const mes = message.content;
		
		if(!mes) return;
		
		const channelID = '1007583776949403720';
		const mChannel = await message.guild.channels.cache.get(channelID);
		
		const embed = new EmbedBuilder()
			.setColor('#bd0009')
			.setTitle('Message Edited')
			.addFields({name: 'Old Message: ', value: `${mes}`, inline: false})
			.addFields({name: 'Edited Message: ', value: `${newMessage})`, inline: false})
			.addFields({name: 'Edited by: ', value: `${executor.tag})`, inline: false})
			.setTimestamp()
			
			mChannel.send({ embeds: [embed] })
	})
});


client.on(Events.ChannelCreate, async channel => {
	channel.guild.fetchAuditLogs({
		type: AuditLogEvent.ChannelCreate,
	})
	.then(async audit => {
		const { executor } = audit.entries.first()
		
		const name = channel.name;
		const id = channel.id;
		let type = channel.type;
		
		if(type == 0) type = 'Text'
		if(type == 2) type = 'Voice'
		if(type == 13) type = 'Stage'
		if(type == 15) type = 'Forum'
		if(type == 5) type = 'Announcement'
		if(type == 4) type = 'Category'
		
		const channelID = '1007583776949403720';
		const mChannel = await channel.guild.channels.cache.get(channelID);
		
		const embed = new EmbedBuilder()
			.setColor('#bd0009')
			.setTitle('Channel Created')
			.addFields({name: 'Channel Name: ', value: `${name} (<#${id}>)`, inline: false})
			.addFields({name: 'Channel Type: ', value: `${type})`, inline: false})
			.addFields({name: 'Channel ID: ', value: `${id})`, inline: false})
			.addFields({name: 'Created by: ', value: `${executor.tag})`, inline: false})
			.setTimestamp()
			
			mChannel.send({ embeds: [embed] })
	})
});


client.on(Events.ChannelDelete, async channel => {
	channel.guild.fetchAuditLogs({
		type: AuditLogEvent.ChannelDelete,
	})
	.then(async audit => {
		const { executor } = audit.entries.first()
		
		const name = channel.name;
		const id = channel.id;
		let type = channel.type;
		
		if(type == 0) type = 'Text'
		if(type == 2) type = 'Voice'
		if(type == 13) type = 'Stage'
		if(type == 15) type = 'Forum'
		if(type == 5) type = 'Announcement'
		if(type == 4) type = 'Category'
		
		const channelID = '1007583776949403720';
		const mChannel = await channel.guild.channels.cache.get(channelID);
		
		const embed = new EmbedBuilder()
			.setColor('#bd0009')
			.setTitle('Channel Deleted')
			.addFields({name: 'Channel Name: ', value: `${name}`, inline: false})
			.addFields({name: 'Channel Type: ', value: `${type}`, inline: false})
			.addFields({name: 'Channel ID: ', value: `${id})`, inline: false})
			.addFields({name: 'Deleted by: ', value: `${executor.tag})`, inline: false})
			.setTimestamp()
			
			mChannel.send({ embeds: [embed] })
	})
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const command = client.commands.get(interaction.commandName);
	if (!command) return;
	try {
		await command.execute(interaction);
	} catch (error) {
		if (error) console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});


// Login to Discord with your client's token
client.login(TOKEN);