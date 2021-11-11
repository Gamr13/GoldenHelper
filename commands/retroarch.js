const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('retroarch')
        .setDescription('Get help for RetroArch'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('RetroArch help section')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription('Welcome to the RetroArch support section. Click one of the links below to lead you to the correct place. You can also do /videos for a list of trusted video guides.')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Retail Mode', value: '[Click Here](https://discord.com/channels/538519561230745605/870681172974387201/894179494074671104)', inline: true },
		{ name: 'Dev Mode', value: '[Click Here](https://discord.com/channels/538519561230745605/870754407602618370/888294728678932480)', inline: true },
	)
	.setTimestamp()
	.setFooter('© GoldenSky#6969 | 2021', 'https://i.imgur.com/I2LsE5o.png');

