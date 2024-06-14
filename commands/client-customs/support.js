const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Frequently Asked Questions (FAQ)'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new EmbedBuilder()
	.setColor('#b0ff29')
	.setTitle('Support section')
	.setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
	.setDescription('Welcome to the Support Section. Here are some Frequently Asked Questions:')
	.addFields(
		{ name: '**Will I get banned?**', value: 'No.', inline: false },
		{ name: '**How do I backup my saves and data?**', value: 'Do /backup for more information. We strongly recommend a USB setup though.', inline: false },
		{ name: '**Games crash when loading from USB**', value: 'Ensure you have followed /usbperms, if you feel you have, do /logs and send a log.', inline: false },
	)
	.setTimestamp()
