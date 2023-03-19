const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('logs')
        .setDescription('How to enable logging in RetroArch and send us the log.'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new EmbedBuilder()
	.setColor('#d60024')
	.setTitle('Logs Guide')
	.setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
	.setDescription('Here is how to enable logs and send it to us:')
	.setImage('https://i.imgur.com/T4YdaBI.png')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Step 1)', value: 'Inside RetroArch, go to Settings > Logging and enable the settings shown in the attached picture below.', inline: false },
		{ name: 'Step 2)', value: 'Go back to the Main Menu in RetroArch and go into Configuration File, save the current config and quit RetroArch.', inline: false },
		{ name: 'Step 3)', value: 'Go back into RetroArch and re-create the steps you took to create the error. Once you have done that, Quit RetroArch again, from inside RetroArch.', inline: false },
		{ name: 'Step 4)', value: 'Follow /ftp or the video guide in /videos to get to the logs folder. From there, send us the log inside.', inline: false },
	)
	.setTimestamp()