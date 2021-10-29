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
		{ name: 'Retail Mode', value: '[Windows](https://discord.com/channels/538519561230745605/870671152295604285/894168355748057128)' + '\n[Mac](https://discord.com/channels/538519561230745605/870675340945678367/894170185118916618)' + '\n[Android](https://discord.com/channels/538519561230745605/870678437612879943/894171921078419488)', inline: true },
		{ name: 'Dev Mode', value: '[Combined](https://discord.com/channels/538519561230745605/870410924723425321/870484212623507497)', inline: true },
	)
	.setTimestamp()
	.setFooter('© GoldenSky#6969 | 2021', 'https://i.imgur.com/I2LsE5o.png');

