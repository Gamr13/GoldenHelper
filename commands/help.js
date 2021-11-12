const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Show the support channels'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('Help section')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription('See below for a list of support topics. \nYou can also do /retroarch, /whitelist, etc with links to both the retail and dev mode guides respectively.')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Retail Mode', value: '[Click Here](https://discord.com/channels/538519561230745605/870657621554782208/870666359774789652)', inline: true },
		{ name: 'Dev Mode', value: '[Click Here](https://discord.com/channels/538519561230745605/862055623302053948/870410821933625414)', inline: true },
		{ name: 'Commands List:', value: '- /Backup \t-- List of files and folders to backup / copy to new app releases\n- /bios \t-- Learn where to place BIOS files\n- /crash \t-- Lists known crashes and fixes\n- /donate \t-- Provides donation links\n- /duckstation \t-- Links to the DuckStation guide for retail & dev mode\n- /ftp \t-- links to the retail & dev FTP mode guide\n- /logs \t-- Teaches you how to enable logs and send them to us.\n- /mfe \t-- Links to Doms video guide on My Files Explorer\n- /ppsspp \t-- links to the PPSSPP guide for retail & dev mode\n- /retroarch \t-- Links to the RetroArch guide for retail & dev mode\n- /support \t-- Get answers to all your general and common questions\n- /videos \t-- Get a list of helpful and verified video guides!\n- /whitelist \t-- Get a link to the whitelist link', inline: false },
	)
	.setTimestamp()
	.setFooter('© GoldenSky#6969 | 2021', 'https://i.imgur.com/I2LsE5o.png');