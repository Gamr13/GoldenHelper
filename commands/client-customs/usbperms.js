const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('usbperms')
        .setDescription('Set up USB Permissions!'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}

const exampleEmbed = new EmbedBuilder()
	.setColor('#920dff')
	.setTitle('USB Setup Guide!')
	.setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
	.setImage('https://cdn.discordapp.com/attachments/1009637731577626705/1009916490163703838/bNyBfIjRSD.gif')
	.setDescription('Welcome to the USB Setup Guide.')
		.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'NOTE:', value: '**You MUST have access to a Windows PC or virtual machine to perform this setup.**', inline: false },
		{ name: 'Step 1)', value: 'Connect your USB to your PC and format it as NTFS.', inline: false },
		{ name: 'Step 2)', value: 'After formatting, right click your drive, click Properties and the Security tab.', inline: false },
		{ name: 'Step 3)', value: 'Go to Advanced > Add > Select Principal > Advanced > Find Now > ALL APPLICATION PACKAGES > OK > **Tick the Full Control box** > OK > Tick **Replace all child object permission entries** box > OK ', inline: false },
		{ name: 'NOTE:', value: 'You **WILL** get an error about System Volume Information, click continue and ignore it.', inline: false },
	)
	.setTimestamp()