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
		{ name: 'Can I get banned?', value: 'No.', inline: false },
		{ name: 'Remove another device error?', value: '[Click here](https://account.microsoft.com/devices/content) and remove devices from the Microsoft Store', inline: false },
		{ name: 'What do I do when RetroArch is removed from the store?', value: 'Wait for my re-uploaded announcement.', inline: false },
		{ name: 'How do I backup my saves and data?', value: 'Do /backup', inline: false },
		{ name: 'Can I continue to use the currently installed apps without reinstalling after a takedown?', value: 'Yes.', inline: false },
		{ name: 'How do I fix black screen on Mupen64plus?', value: 'Quick Menu > Options > RDP Plugin > Angrylion', inline: false },
		{ name: 'How do I fix no input in Wii games?', value: 'Quick Menu > Controls > Disable the 5th port.', inline: false },
	)
	.setTimestamp()
	.setFooter('© GoldenSky#6969 | 2021', 'https://i.imgur.com/I2LsE5o.png');

