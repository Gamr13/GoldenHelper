const { SlashCommandBuilder } = require('@discordjs/builders');
const {EmbedBuilder} = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('retroarch')
        .setDescription('Get help for RetroArch'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new EmbedBuilder()
	.setColor('#920dff')
	.setTitle('RetroArch help section')
	.setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
	.setDescription('Welcome to the RetroArch Guide.')
		.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Step 1)', value: 'Inside RetroArch, go to Main Menu > Online Updater and update **everything** [NOTE: Cores cannot be updated in Retail Mode.]', inline: false },
		{ name: 'Step 2)', value: 'In Settings > Input > Hotkeys > Menu Toggle Controller Combo set a Quick Menu toggle that suits you.', inline: false },
		{ name: 'Step 3)', value: 'Go to Main Menu > Configuration File > Save Current Configuration', inline: false },
		{ name: 'NOTE:', value: 'For a USB setup, you **MUST** follow /usb for new drives or every time a drive is formatted.', inline: false },
		{ name: 'Step 4)', value: 'Go to Import Content > Manual Scan to add your ROMs to a playlist. \nChoose your content directory where your games are stored \nSelect a System Name \nSelect a core for your games \nType file extensions that apply to your games, e.g: `.iso .chd .gz` \nSelect Start Scan. \nRepeat these steps for each platform you have ROMs for (PS2, GBA, Wii, etc)', inline: false },
	)
	.setTimestamp()
