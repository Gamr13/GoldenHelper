const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Show the support channels'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new EmbedBuilder()
	.setColor('#00d696')
	.setTitle('Help section')
	.setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
	.setDescription('See below for a list of support topics. \nYou can also do /retroarch, /support, etc with links to both the retail and dev mode guides respectively.')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Dev Mode', value: '[Click Here](https://discord.com/channels/1007582798598647889/1007584955158773762/1009639583891329104)', inline: true },
		{ name: 'Commands List:', value: '- /backup \t-- List of files and folders to backup / copy to new app releases\n- /bios \t-- Learn where to place BIOS files\n- /crash \t-- Lists known crashes and fixes\n- /donate \t-- Provides donation links\n- /duckstation \t-- Instructions to set up DuckStation\n- /ftp \t-- links to the retail & dev FTP mode guide\n- /logs \t-- Teaches you how to enable logs and send them to us\n- /ppsspp \t-- Instructions to set up PPSSPP\n- /retroarch \t-- Instructions to set up RetroArch\n- /support \t-- Get answers to all your general and common questions\n- /usb \t-- Learn how to set up your USB for ROMs and BIOS files \n- /videos \t-- Get a list of helpful and verified video guides!', inline: false },
	)
	.setTimestamp()