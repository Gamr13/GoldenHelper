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
	.setColor('#0040d6')
	.setTitle('FTP Instructions.')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription("Welcome to the FTP guide, here you'll find out how to connect to your Xbox via FTP using DurangoFTP.\n\n**Remember to press Start in DurangoFTP**")
	.addFields(
		{ name: 'Retail & Dev mode', value: '[Windows, macOS and Linux](https://discord.com/channels/1007582798598647889/1009637510781096076/1009905914091950102)' + '\n[Android](https://discord.com/channels/1007582798598647889/1009637510781096076/1009908497955180604)' + '\n[iOS & iPadOS](https://discord.com/channels/1007582798598647889/1009637510781096076/1009909523122757703)', inline: true },
	)
	.setTimestamp()
	.setFooter('GoldenSky#4649 | 2022', 'https://i.imgur.com/I2LsE5o.png');

