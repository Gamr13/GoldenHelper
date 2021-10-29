const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('mfe')
        .setDescription('My Files Explorer (MFE) instructions'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('MFE Instructions.')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription("Using My Files Explorer is **not** recommended under any circumstances, as it can cause severe issues such as permanent storage loss (Until you factory reset your console) and corruption of files.\nIf you still wish to proceed, follow the instructions below.")
	.addFields(
		{ name: 'Video', value: '[Click Here](https://www.youtube.com/watch?v=4WKdUHhIXps)', inline: true },
	)
	.setTimestamp()
	.setFooter('© GoldenSky#6969 | 2021', 'https://i.imgur.com/I2LsE5o.png');

