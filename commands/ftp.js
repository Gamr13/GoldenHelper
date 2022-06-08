const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ftp')
        .setDescription('FTP instructions'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('FTP Instructions.')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription("Here you'll find information on connecting to your Xbox from retail or dev mode using the DurangoFTP application.")
	.addFields(
		{ name: 'Retail & Dev mode', value: '[Windows & Mac](https://discord.com/channels/538519561230745605/970074445278511214/971114895431045210)' + '\n[Android](https://discord.com/channels/538519561230745605/970074445278511214/971121981506338816)', inline: true },
	)
	.setTimestamp()
	.setFooter('GoldenSky#4649 | 2022', 'https://i.imgur.com/I2LsE5o.png');

