const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('retroarch')
        .setDescription('Get help for RetroArch'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('RetroArch help section')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription('Welcome to the RetroArch support section. Click one of the links below to lead you to the correct place. You can also do /videos for a list of trusted video guides.')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Retail & Dev mode', value: '[Click Here](https://discord.com/channels/538519561230745605/970074486269411348/976250849959489588)', inline: true },
	)
	.setTimestamp()
	.setFooter('GoldenSky#4649 | 2022', 'https://i.imgur.com/I2LsE5o.png');

