const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('crash')
        .setDescription('Find out a list of known RetroArch crashes and fixes!'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('RetroArch Crashes.')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription("**- Crash when trying to navigate to the playlists**:\n Solution: Settings > User Interface > Menu Item Visibility, disable the Expore tab.\n\n**- Scan Directory and Scan File don't work**:\nSolution: Use Manual Scan.\n\n**- ANGLE cores crashing on Close Content**:\nSolution: None yet.\n\n**- Online Updater freezes / crashes RetroArch**:\nSolution: Keep restarting RetroArch and retrying, there's no fix for this currently.")
    //.addField("") 	//Just to remind me this exists and can be used.
	.setTimestamp()
	.setFooter('GoldenSky#4649 | 2022', 'https://i.imgur.com/I2LsE5o.png');

