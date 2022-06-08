const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('logs')
        .setDescription('How to enable logging in RetroArch and send us the log.'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('Help section')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription('Here is how to enable logs and send it to us:')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Step 1', value: 'Inside RetroArch, go to Settings > Logging and [enable the following settings](https://i.imgur.com/T4YdaBI.png)', inline: false },
		{ name: 'Step 2', value: 'Go back to the Main Menu in RetroArch (Farthest left in XMB) and go into Configuration File, save the current config and quit RetroArch (from inside RetroArch).', inline: false },
		{ name: 'Step 3', value: 'Go back into RetroArch and re-create the steps you took to create the error. Once you have done that, Quit RetroArch again, from inside RetroArch.', inline: false },
		{ name: 'Step 3', value: 'Follow /ftp or the video guide in /videos to get to the RetroArch LocalState folder. From here, go to the Logs folder and send us the log inside.', inline: false },
	)
	.setTimestamp()
	.setFooter('GoldenSky#4649 | 2022', 'https://i.imgur.com/I2LsE5o.png');