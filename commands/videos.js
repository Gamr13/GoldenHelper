const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('videos')
        .setDescription('Verified video guides!'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}

const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('Video Guides.')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription('Welcome to the verified video guides section. Here you will find a list of videos that we know work and trust.')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Retail Mode Guide', value: '[Click Here](https://www.youtube.com/watch?v=98wtMcqW6ZA)', inline: true },
		{ name: 'Changing RetroArch themes', value: '[Click Here](https://www.youtube.com/watch?v=sVWrUp5Sq3w)\n[XMB Appearance](https://www.youtube.com/watch?v=NBRuzEF5ci4)\n[OZONE appearance](https://www.youtube.com/watch?v=ZojACyJHldg)', inline: true },
		{ name: 'Enabling Quick Menu', value: '[Click Here](https://www.youtube.com/watch?v=wtX9BRzJVqc)', inline: true },
		{ name: 'Enabling the FPS counter in RetroArch', value: '[Click Here](https://www.youtube.com/watch?v=kys4pEGLnOY)', inline: true },
		{ name: 'How To Use MC Addons Manager', value: '[Click Here](https://www.youtube.com/watch?v=aorbzILtl6w)', inline: true },
		{ name: 'How To Use DurangoFTP (Dev Mode)', value: '[Click Here](https://www.youtube.com/watch?v=uCl9zgqb0Jo&t=7s)', inline: true },
		{ name: 'How To Increase Dev Mode storage', value: '[Click Here](https://youtu.be/J3ztR4hrrOs)', inline: true },
		{ name: 'How To Exit Dev Mode safely', value: '[Click Here](https://www.youtube.com/watch?v=edf8lkgZUYw)', inline: true },
		{ name: 'How To Setup DuckStation (Dev mode)', value: '[Click Here](https://www.youtube.com/watch?v=Wjy2Rl9s9qw)', inline: true },
	)
	.setTimestamp()
	.setFooter('© GoldenSky#6969 | 2021', 'https://i.imgur.com/I2LsE5o.png');
