const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ppsspp')
        .setDescription('Get help for PPSSPP'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('PPSSPP help section')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription('Welcome to the PPSSPP support section. Click one of the links below to lead you to the correct place.')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Retail Mode', value: '[Coming Soon](#)', inline: true },
		{ name: 'Dev Mode', value: '[Click Here](https://discord.com/channels/538519561230745605/894187500938088449/894187762834632744)', inline: true },
	)
	.setTimestamp()
	.setFooter('© GoldenSky#6969 | 2021', 'https://i.imgur.com/I2LsE5o.png');

