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
	.setColor('#b0ff29')
	.setTitle('Support section')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription('Welcome to the Support Section. Here are some Frequently Asked Questions:')
	.addFields(
		{ name: '**Will I get banned?**', value: 'No.', inline: false },
		{ name: '**Remove another device error?**', value: '[Click here](https://account.microsoft.com/devices/content) and remove devices from the Microsoft Store', inline: false },
		{ name: '**What do I do when RetroArch is removed from the store?**', value: 'Simply wait for a re-upload announcement. Updating is optional.', inline: false },
		{ name: '**How do I backup my saves and data?**', value: 'Do /backup for more information. We strongly recommend a USB setup though.', inline: false },
		{ name: '**If all apps are taken down, are the currently installed apps still usable?**', value: 'Yes.', inline: false },
		{ name: '**Games crash when loading from USB**', value: 'Ensure you have followed /usb, if you feel you have, do /logs and send a log.', inline: false },
	)
	.setTimestamp()
	.setFooter('GoldenSky#4649 | 2022', 'https://i.imgur.com/I2LsE5o.png');

