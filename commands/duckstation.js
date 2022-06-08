const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('duckstation')
        .setDescription('Get help for DuckStation'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('DuckStation help section')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription('Welcome to the DuckStation standalone support section. Click one of the links below to lead you to the correct place:')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Retail Mode', value: '[Click Here](https://discord.com/channels/538519561230745605/970074520415248384/971101054915731536)', inline: true },
		{ name: 'Dev Mode', value: '[Click Here](https://discord.com/channels/538519561230745605/970074520415248384/971101054915731536)', inline: true },
	)
	.setTimestamp()
	.setFooter('GoldenSky#4649 | 2022', 'https://i.imgur.com/I2LsE5o.png');

