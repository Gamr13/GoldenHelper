const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('donate')
        .setDescription('Get donation links'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#f96854')
	.setTitle('Donation links')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription("We're grateful that you're considering donating to us, here's a list of our donation links:")
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Gamr13 (Retail apps)', value: '[Patreon](https://www.patreon.com/gamr13)' + '\n[PayPal](https://paypal.me/TobyMCS)', inline: true },
		{ name: 'Is It Playable? (Content Creator & Helper)', value: '[Patreon](https://www.patreon.com/IIP_)', inline: true },
	)
	.setTimestamp()
	.setFooter('GoldenSky#4649 | 2022', 'https://i.imgur.com/I2LsE5o.png');

