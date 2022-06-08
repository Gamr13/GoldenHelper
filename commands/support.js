const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Frequently Asked Questions (FAQ)'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('Support section')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription('Welcome to the Support Section. Here are some Frequently Asked Questions:')
	.addFields(
		{ name: '**Can I get banned?**', value: 'No.', inline: false },
		{ name: '**Remove another device error?**', value: '[Click here](https://account.microsoft.com/devices/content) and remove devices from the Microsoft Store', inline: false },
		{ name: "**What do I do when RetroArch is removed from the store?**', value: 'Simply wait for a re-upload announcement. Updating is optional.", inline: false },
		{ name: '**How do I backup my saves and data?**', value: 'Do /backup for more information.', inline: false },
		{ name: '**Can I continue to use the currently installed apps without reinstalling after a takedown?**', value: 'Yes.', inline: false },
		{ name: '**USB related issues**', value: '[See here](https://discord.com/channels/538519561230745605/894191838343364650/921460136566997052)', inline: false },
		{ name: '**RetroArch Online Updater keeps freezing / crashing**', value: 'Unfortunately there is no fix for this currently. Only seems to affect retail mode for now.', inline: false },
	)
	.setTimestamp()
	.setFooter('GoldenSky#4649 | 2022', 'https://i.imgur.com/I2LsE5o.png');

