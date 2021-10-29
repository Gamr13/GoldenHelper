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
	.setDescription('Welcome to the DuckStation support section. Click one of the links below to lead you to the correct place.')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Retail Mode', value: '[Click Here](https://discord.com/channels/538519561230745605/870754617514934273/870760560839495740)', inline: true },
		{ name: 'Dev Mode', value: '[Click Here](https://discord.com/channels/538519561230745605/894189926038528020/894189983957676083)', inline: true },
	)
	.setTimestamp()
	.setFooter('© GoldenSky#6969 | 2021', 'https://i.imgur.com/I2LsE5o.png');

